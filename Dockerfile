# Build stage
FROM oven/bun:alpine as builder

WORKDIR /app

# Install only Python first
RUN apk add --no-cache python3

# Verify Python installation
RUN python3 --version

# Set environment variables
ENV NODE_ENV=production

# Copy only package files first (for better caching)
COPY package.json ./
COPY bun.lock ./

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Build the application
RUN bun run build

# Production stage
FROM oven/bun:alpine

WORKDIR /app

# Copy built assets from builder
COPY --from=builder /app/.output /app/.output

EXPOSE 3000

CMD ["bun", "run", ".output/server/index.mjs"]
