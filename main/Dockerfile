FROM node:latest as build
WORKDIR main
COPY . .
RUN npm install
RUN npm run build
FROM nginx:latest
COPY --from=build main/dist/ycloud /usr/share/nginx/html
EXPOSE 80