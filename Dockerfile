FROM node:12

WORKDIR /usr/scr/app

COPY package*.json ./

RUN npm install
RUN npm install express

COPY . .

EXPOSE 3000

CMD ["npm", "start"]