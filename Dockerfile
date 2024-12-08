# Docker 이미지를 선택하는 명령어
FROM node:18-alpine

#Docker 컨테이너 내에서 작업 디렉토리
WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]