# Use official Node.js 20 image
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock first (for dependency caching)
COPY package*.json ./
# If you're using yarn, copy yarn.lock
# COPY yarn.lock ./

WORKDIR /app

# Install dependencies
RUN npm install
# If you're using yarn
# RUN yarn install

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN npm run build

COPY .next ./.next

# Start the Next.js application
CMD ["npm", "run", "dev"]