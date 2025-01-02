FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN npm i -g nodemon
RUN npm install pg --save
RUN pnpm install

ADD . /usr/src/app

EXPOSE 8000

CMD ["pnpm", "run", "dev"]
