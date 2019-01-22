#==================== Building Stage ================================================ 

# Create the image based on the official Node 8.9.0 image from Dockerhub
FROM node:8.11.4 as node

# Create a directory where our app will be placed. This might not be necessary
RUN mkdir -p /sadrclient

# Change directory so that our commands run inside this new directory
WORKDIR /sadrclient

# Copy dependency definitions
COPY package.json /sadrclient

# Install dependencies using npm
RUN npm install

# Get all the code needed to run the app
COPY . /sadrclient

# Expose the port the app runs in
EXPOSE 4200

#Build the app
RUN npm run build
