# Build stage
FROM oven/bun:alpine AS builder

WORKDIR /app

# Install Python and build tools
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    gcc

# Verify Python installation
RUN python3 --version

# Set environment variables
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Copy package files first
COPY package.json bun.lock ./

# deps stage - THIS NEEDS PYTHON TOO
FROM oven/bun:alpine AS deps
WORKDIR /app
# Install Python and build tools in deps stage too
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    gcc
COPY package.json bun.lock ./
RUN bun install

# Back to builder stage
FROM builder AS builder-with-deps
# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application
COPY . .

# Build the application
RUN bun run build

# Production stage
FROM oven/bun:alpine

WORKDIR /app

# Copy built assets from builder
COPY --from=builder-with-deps /app/.output /app/.output

EXPOSE 3000

CMD ["bun", "run", ".output/server/index.mjs"]
