FROM node:18

# create app directory
RUN mkdir -p /app

# app directory
WORKDIR /app

# install app dependencies
COPY package*.json ./

# install dependencies
RUN yarn install

# bundle app source
COPY . .

# expose port in docker
EXPOSE 8080

# run app
CMD ["node", "index.js"]