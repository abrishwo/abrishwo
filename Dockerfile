# Use the official Node.js 18 image as the base
FROM node:18-alpine

# Install required packages for production
RUN apk add --no-cache \
    dumb-init \
    curl \
    && rm -rf /var/cache/apk/*

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci && npm cache clean --force

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Remove dev dependencies after build to reduce image size
RUN npm prune --production

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S strapi -u 1001

# Change ownership of the app directory to the strapi user
RUN chown -R strapi:nodejs /app
USER strapi

# Switch to production environment
ENV NODE_ENV=production

# Expose the port the app runs on (Cloud Run uses 8080)
EXPOSE 8080

# Add health check endpoint (use PORT environment variable)
# HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
#     CMD curl -f http://localhost:$PORT/admin || exit 1

# Use dumb-init to handle signals properly and start the application
# CMD ["dumb-init", "--", "npm", "start"]
CMD ["dumb-init", "--", "node", "node_modules/@strapi/strapi/bin/strapi.js", "start"]

