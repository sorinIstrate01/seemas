
REGION := $(AWS_REGION)
ifeq ($(REGION),)
REGION := $(shell aws configure get region)
endif

IMAGE_NAME := $(shell basename $(shell pwd))
ACCOUNT_ID := $(shell aws sts get-caller-identity |  python3 -c "import sys, json; print(json.load(sys.stdin)[\"Account\"])")

REPO_URL := $(ACCOUNT_ID).dkr.ecr.$(REGION).amazonaws.com/$(IMAGE_NAME)
TAG := $(shell git log --pretty=format:%h -n 1)


.PHONY: all
all: dev


.PHONY: build

build:
	@echo "***Build images***"
	docker build \
		--build-arg NEXT_PUBLIC_ENV=$(NODE_ENV) \
		--build-arg NEXT_PUBLIC_ENV=$(NEXT_PUBLIC_ENV) \
		--build-arg NEXT_PUBLIC_SANITY_PROJECT_ID=$(NEXT_PUBLIC_SANITY_PROJECT_ID) \
		--platform linux/amd64 -t $(IMAGE_NAME) -f Dockerfile  .
	docker image prune --force  
	@echo "***Build images completed***"

.PHONY: repo
repo:
	@echo "***Login to ecr***"
	@-aws --region $(REGION) ecr get-login-password | docker login --password-stdin --username AWS $(ACCOUNT_ID).dkr.ecr.$(REGION).amazonaws.com || :
	@echo "***Create prod repo***"
	-aws ecr create-repository --repository-name  $(IMAGE_NAME) || :


.PHONY: prod
prod: build push-prod

.PHONY: dev
dev: build push-dev
#dev: build

.PHONY: local
local: build

.PHONY: push-prod
push-prod: repo
	@echo "***Tag prod images***"
	docker tag  $(IMAGE_NAME):latest $(REPO_URL):prod-$(TAG)
	docker tag  $(IMAGE_NAME):latest $(REPO_URL):prod-latest
	@echo "***Push prod image***"
	docker push $(REPO_URL):prod-$(TAG)
	docker push $(REPO_URL):prod-latest
	@echo "***Push prod image completed***"

.PHONY: push-dev
push-dev: repo
	@echo "***Tag dev images***"
	docker tag  $(IMAGE_NAME):latest $(REPO_URL):dev-$(TAG)
	docker tag  $(IMAGE_NAME):latest $(REPO_URL):dev-latest
	@echo "***Push dev image***"
	docker push $(REPO_URL):dev-$(TAG)
	docker push $(REPO_URL):dev-latest
	@echo "***Push dev image completed***"

#This only for local test run.
.PHONY: run
run:
	docker run --platform linux/amd64 --env-file .env ${IMAGE_NAME}

.PHONY: rollout
rollout:
	kubectl rollout restart deployment $(IMAGE_NAME) -n dev

.PHONY: submodules
submodules:
	git submodule update --init

.PHONY: clean
clean:
	docker system prune -f -a
