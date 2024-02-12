# Node.js 공식 이미지를 기반으로 한 빌드 스테이지 정의
FROM node:lts-alpine as builder

# 작업 디렉토리 설정
WORKDIR /front

# 의존성 파일 복사
COPY package.json package-lock.json /front/

# 프로젝트 의존성 설치
RUN npm install
# React 스크립트 글로벌 설치는 권장되지 않음 (필요한 경우만 설치)
# RUN npm install react-scripts@3.0.1 -g

# 나머지 앱 소스 복사
COPY . /front/

# 빌드 스크립트 실행 (프로덕션 빌드를 위해, 개발 환경에서는 주석 처리)
# RUN npm run build

# 애플리케이션 시작
CMD ["npm", "start"]
