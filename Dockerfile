FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm run build

EXPOSE 3000

CMD npm run start