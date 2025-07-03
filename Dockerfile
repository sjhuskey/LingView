# Use Node 16 base image
FROM node:16

# Set environment variables
ENV SHELL=/bin/sh

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for better cache usage)
COPY package*.json ./

# Install dependencies
RUN npm install

# Install chokidar-cli globally
RUN npm install -g chokidar-cli

# Install http-server globally (if you need to serve static files)
RUN npm install -g http-server

# Copy all remaining files into the container
COPY . .

# Expose port (if your app serves content via dev server or express — adjust if needed)
EXPOSE 3000

# Start both chokidar (watching for changes and triggering rebuild)
# and http-server (serving files)
CMD ["npm", "run", "watch-and-serve"]