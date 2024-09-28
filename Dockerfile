# Use Node.js v18
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install --production  # Use --production to install only dependencies

# Bundle app source
COPY . .

# Build the TypeScript files
RUN npm run build  # Build TypeScript files

# Expose the port
EXPOSE 3000

# Start the app
CMD [ "node", "dist/app.js" ]  # Update to run the built JavaScript file
