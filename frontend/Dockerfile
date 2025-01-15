# Stage 1: Build the Vite React App
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy dependencies and install them
COPY package.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the app using Vite
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built app to Nginx's default static directory
COPY --from=build /app/dist /usr/share/nginx/html

# Replace the default Nginx configuration with your custom configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]