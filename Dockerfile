# Install dependencies and build the app
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app


ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

#NEXT_PUBLIC_xxx should be passed from ENV
ARG NEXT_PUBLIC_ENV
ENV NEXT_PUBLIC_ENV=$NEXT_PUBLIC_ENV
ARG NEXT_PUBLIC_SANITY_PROJECT_ID
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID



# Install dependencies (using package-lock.json or yarn.lock for caching)
COPY package.json package-lock.json* yarn.lock* ./

RUN npm install --legacy-peer-deps

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

# Production image
FROM node:20-alpine AS runner

WORKDIR /app

# Remove global cross-spawn (and npm if desired) from the runtime image
RUN rm -rf /usr/local/lib/node_modules/npm/node_modules/cross-spawn || true
RUN rm -rf /usr/lib/node_modules_20/npm/node_modules/cross-spawn || true
RUN rm -rf /usr/local/n/versions/node/18.20.5/lib/node_modules/npm/node_modules/cross-spawn || true
# Remove npm entirely as it is not needed at runtime
RUN rm -rf /usr/local/lib/node_modules/npm || true

# Copy standalone server and static assets only (no dev deps, no full node_modules)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
# Keep content if runtime needs to read it; safe for MDX that may be imported
COPY --from=builder /app/src/content ./src/content

# Expose the Next.js default port
EXPOSE 3000

# Run standalone server directly with node (no npm in runtime)
CMD ["node", "server.js"]
