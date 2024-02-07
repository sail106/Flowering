# Node 이미지를 기반으로 함
FROM node:20.10

# 작업 디렉토리 생성
WORKDIR /usr/src/app

# 의존성 복사
COPY package*.json ./

# 패키지 설치.
RUN npm install

# 앱 소스 복사
COPY . .

# 빌드 명령 실행
RUN npm run build

# Nginx를 기반으로 함
FROM nginx:1.24.0-alpine

# 빌드 결과를 Nginx가 서빙할 수 있도록 복사
COPY --from=0 /usr/src/app/dist /usr/share/nginx/html

# 80 포트 오픈
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
