FROM node:24-alpine

ENV USERNAME=client
ENV WORKING_DIR=/usr/src/app

WORKDIR ${WORKING_DIR}

COPY todo .

RUN npm install -g @angular/cli@20
RUN npm install -g http-server
RUN npm install
RUN ng build 

CMD ["http-server", "dist/todo/browser", "-p", "4200"]
