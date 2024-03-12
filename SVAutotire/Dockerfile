FROM node:lts-alpine
# ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm i vue-sweetalert2
RUN npm install --silent && mv node_modules ../
COPY . .
# EXPOSE 
RUN chown -R node /usr/src/app
USER node
CMD ["npm","run", "dev"]