FROM node:14.5.0

WORKDIR /usr/src/app

ENV NODE_ENV=development

COPY package.json .

RUN npm install

ADD . /usr/src/app

RUN npm run build

COPY ./dist .

EXPOSE 3333

CMD ["pm2-runtime","server.js"]
