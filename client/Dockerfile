FROM node:24-alpine

ENV USERNAME=client
ENV WORKING_DIR=/usr/src/app

WORKDIR ${WORKING_DIR}

RUN groupadd ${USERNAME} && \
    useradd -g ${USERNAME} ${USERNAME}

RUN chown -R ${USERNAME}:${USERNAME} ${WORKING_DIR}
RUN chmod -R u=rwx,g=rwx ${WORKING_DIR}

USER ${USERNAME}
ENV PATH "$PATH:/home/${USERNAME}/.local/bin"

COPY . .

RUN npm install -g @angular/cli@20
RUN npm install -g http-server
RUN npm install
RUN ng build 

CMD ["http-server", "-p", "8080"]
