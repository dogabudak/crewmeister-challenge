FROM node:14.18.2-alpine
ENV ENV_NAME dev

WORKDIR /usr/src/app
COPY package.json .
RUN yarn
ADD . /usr/src/app
CMD [ "npm", "start" ]
EXPOSE 7001