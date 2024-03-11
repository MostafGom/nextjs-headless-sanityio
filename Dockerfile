FROM node:20.11.1

WORKDIR /home/src/app/nextapp

COPY package*.json ./

USER root


RUN npm config get proxy
RUN npm config rm proxy
RUN npm config rm https-proxy
RUN npm cache clean --force

# install dependencies
RUN npm install

# copy the rest of the files to the working directory
COPY . .

EXPOSE 3000

CMD npm run dev

