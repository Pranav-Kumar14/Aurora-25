# Use the latest Node.js LTS version
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend code
COPY . .

# Expose the backend port
EXPOSE 8000

# Start the backend server
CMD ["npm", "start"]
