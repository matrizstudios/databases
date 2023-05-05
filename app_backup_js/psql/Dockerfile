FROM node:16.20.0

WORKDIR /src

RUN mkdir tmp

RUN apt-get update && \
    apt-get install -y \
        python \
        python-pip \
        python-setuptools \
        groff \
        less \
        nano \
        postgresql-client \
    && pip --no-cache-dir install --upgrade awscli \
    && apt-get clean

COPY package.json .

RUN yarn

COPY . .

RUN ls -A

RUN cat server.js

RUN cd ./__init__ && cat dump_Database_psql.js

CMD [ "yarn", "start" ]