FROM node:18-alpine

WORKDIR /app

# Copy từ thư mục app/ (nơi Dockerfile đang nằm)
COPY package.json .
COPY server.js .

RUN npm install

EXPOSE 8080

CMD ["node", "server.js"]
