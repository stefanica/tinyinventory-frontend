# Stage 1: Build the app
FROM node:18 AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app and build it
COPY . .
RUN npm run build

# Stage 2: Serve the built app using nginx
FROM nginx:alpine

# Copy built files from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Replace default nginx config (e.g., for SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]