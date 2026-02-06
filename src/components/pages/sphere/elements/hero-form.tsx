"use client";
import InputWrapper from "@/components/custom-ui/input-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { handleReactQueryResponse } from "@/utils/react-query";
import { useCallback } from "react";

const HeroForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: null,
    },
  });
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return handleReactQueryResponse(response);
    },
    onSuccess: () => {
      reset();
    },
  });
  const onSubmit = useCallback(
    (data: any) => {
      if (!isValid) return;
      mutation.mutate(data);
    },
    [mutation, isValid]
  );
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-6 md:gap-8"
    >
      <InputWrapper
        labelProps={{
          children: "Get latest financial reads",
          className: "text-body-m text-zinc-900",
        }}
        className="w-full gap-2"
      >
        <div className="w-full flex flex-col gap-1">
          <div className="w-full relative">
            <Input
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="What’s your email?"
              className=""
              aria-invalid={!!errors.email}
            />
            <Button
              type="submit"
              size={"M"}
              disabled={mutation.isPending}
              className="absolute right-1 top-1/2 -translate-y-1/2"
            >
              {mutation.isPending ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>

          {mutation.data?.message ? (
            <p className="text-caption-s text-green-600">
              {mutation.data.message}
            </p>
          ) : (
            <p className="text-caption-s text-zinc-500">Unsubscribe anytime.</p>
          )}
        </div>
      </InputWrapper>
    </form>
  );
};
export default HeroForm;
