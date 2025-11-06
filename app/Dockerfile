# Dùng image Node.js nhẹ
FROM node:18-alpine

# Tạo thư mục làm việc bên trong container
WORKDIR /app

# Copy file từ repo gốc
COPY app/package.json .
COPY app/server.js .

# Cài đặt dependencies
RUN npm install

# Mở cổng 8080
EXPOSE 8080

# Lệnh chạy app
CMD ["node", "server.js"]
