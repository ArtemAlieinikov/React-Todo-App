FROM node

WORKDIR /todo

COPY . .

RUN npm install

CMD ["npm", "run", "start"]
