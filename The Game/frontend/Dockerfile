# Use the official Node.js 14 image from Docker Hub
FROM node:20

# Set the working directory
WORKDIR /app

ADD . /app/

RUN npm install -g pnpm vite

# Add the `node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install vite globally
RUN pnpm install
# Build the project
# RUN pnpm build

# Expose port 5173 for the server
EXPOSE 5173

# Run the server
CMD ["pnpm", "dev-serve"]
