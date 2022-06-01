#Each instruction in this file creates a new layer
#Here we are getting our node as Base image
FROM node:latest
#setting working directory in the container
WORKDIR /app/React
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/React/node_modules/.bin:$PATH
#copying the package.json file(contains dependencies) from project source dir to container dir
COPY package.json ./
COPY package-lock.json ./
# installing the dependencies into the container
RUN npm install
#copying the source code of Application into the container dir
COPY . ./
#command to run within the container
CMD ["npm", "start"]