FROM node:20-alpine
WORKDIR /app
COPY . .
ENV MYSQL_HOST=mysql
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=bapun123
RUN npm install
EXPOSE 3000
CMD ["node","/app/src/index.js"]
