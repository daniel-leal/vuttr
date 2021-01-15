FROM node:14.5.0
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build


FROM node:14.5.0
WORKDIR /usr/src/app
COPY package*.json ./
COPY .env ./
COPY ormconfig.js ./
RUN npm install --only=production

COPY --from=0 /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/shared/infra/http/server.js"]
