# pull the official base image
FROM node:latest
# set working direction
WORKDIR /cicd-demo
# add `/app/node_modules/.bin` to $PATH
ENV PATH=cicd-demo/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
# start app
CMD ["npm", "start"]