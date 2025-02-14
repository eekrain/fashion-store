# Build stage
FROM oven/bun:alpine as builder

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

# Copy only package files first (for better caching)
COPY package.json ./
COPY bun.lock ./

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Build the application with increased memory limit
RUN --memory=4g bun run build

# Production stage
FROM oven/bun:alpine

WORKDIR /app

# Copy built assets from builder
COPY --from=builder /app/.output /app/.output

EXPOSE 3000

CMD ["bun", "run", ".output/server/index.mjs"]
