# Use Node.js v18
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Install both dependencies and devDependencies to access `tsc` for building TypeScript
RUN npm install

# Bundle app source
COPY . .

# Build the TypeScript files
RUN npm run build  # Build TypeScript files

# Expose the port
EXPOSE 3000

# Start the app
CMD [ "node", "dist/app.js" ]  # Update to run the built JavaScript file
