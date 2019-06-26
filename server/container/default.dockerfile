## ARGS ##
ARG app_env=development
ARG app_port=8085
ARG app_debug_port=9229

## BUILD ##
FROM node:10-alpine AS build
## ENV ##
ENV NODE_ENV $app_env
ENV PORT $app_port

## COPY ##
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ../../ /usr/src/app

## INSTALL DEPENDENCIES TO BUILD##
# RUN npm cache clear --force
RUN npm install

## BUILD APP ##
RUN npm run build

## DROP Modules
RUN npm run clear:modules

## INSTALL Modules For Production
RUN npm install --production

## APPLICATION ##
FROM node:10-alpine as app

## ENV ##
ENV NODE_ENV $app_env
ENV PORT $app_port

## KEEP APP ##
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist /usr/src/app
COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules

## RUN APP
EXPOSE $app_port
CMD node index.js

