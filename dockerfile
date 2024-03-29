# Use an official Node.js runtime as the base image
FROM node:18.17.1-alpine

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the React app in development mode
CMD ["npm", "run", "dev"]
