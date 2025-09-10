# Use small node image
FROM node:20-alpine

WORKDIR /app

# Copy package files first to leverage cache
COPY package*.json ./

# Install production deps
RUN npm ci --only=production

# Copy app source
COPY . .

# Expose port
ENV PORT=8080
EXPOSE 8080

# Default command
CMD ["node", "index.js"]
