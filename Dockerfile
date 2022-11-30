FROM node:14-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm ci --only=production

COPY . .

CMD ["node", "src/index.js"]
