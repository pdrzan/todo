FROM python:3.13-slim

RUN apt-get -q -y update 
RUN apt-get install -y gcc

ENV USERNAME=server
ENV WORKING_DIR=/home
ENV FLASK_APP=server

WORKDIR ${WORKING_DIR}

COPY . server

RUN groupadd ${USERNAME} && \
    useradd -g ${USERNAME} ${USERNAME}

RUN chown -R ${USERNAME}:${USERNAME} ${WORKING_DIR}
RUN chmod -R u=rwx,g=rwx ${WORKING_DIR}

USER ${USERNAME}
ENV PATH "$PATH:/home/${USERNAME}/.local/bin"

RUN pip install --upgrade pip
RUN pip install -r server/requirements.txt

RUN chmod +x server/service_entrypoint.sh

EXPOSE 5000
EXPOSE 8000

RUN flask db init

ENTRYPOINT [ "./server/service_entrypoint.sh" ]
