FROM node:19-alpine3.15 as build

WORKDIR /auth

COPY .env .env

COPY package*.json ./

RUN npm install

COPY src/ src/

COPY build.mjs build.mjs

RUN npm run build

FROM nginx

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /auth

COPY static/ static/

COPY --from=build /auth/static static/

EXPOSE 80