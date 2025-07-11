# node image
FROM node:18

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy application code
COPY . .

# expose port
EXPOSE 3000

# start application
CMD ["npm", "start"]