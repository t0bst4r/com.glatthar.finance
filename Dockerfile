FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html
COPY dist/finance /usr/share/nginx/html
