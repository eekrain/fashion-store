# Build stage
FROM oven/bun:1 as builder

WORKDIR /app

# Install Python and build dependencies for libsql
RUN apt-get update && apt-get install -y \
    python3 \
    build-essential &&
    rm -rf /var/lib/apt/lists/*

# Increase Node.js memory limit and set production mode
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

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["bun", "run", ".output/server/index.mjs"]
