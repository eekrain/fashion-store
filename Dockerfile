# Build stage
FROM oven/bun:1 as builder

WORKDIR /app

# Install Python and build tools
RUN apt-get update &&
    apt-get install -y python3 &&
    apt-get clean &&
    rm -rf /var/lib/apt/lists/*

# Verify Python installation
RUN python3 --version

# Set environment variables
ENV NODE_OPTIONS="--max-old-space-size=4096"
ENV NODE_ENV=production
ENV NITRO_PRESET=node-server

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the application
RUN bun run build

# Production stage
FROM oven/bun:1-slim

WORKDIR /app

# Copy built assets from builder
COPY --from=builder /app/.output /app/.output

EXPOSE 3000

CMD ["bun", "run", ".output/server/index.mjs"]
