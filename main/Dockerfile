#STAGE 1
FROM node:latest AS build
WORKDIR main
COPY package.json package-lock.json ./
RUN npm install
COPY main ./
RUN npm run build

#STAGE 2
FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build main/dist/ycloud /usr/share/nginx/html