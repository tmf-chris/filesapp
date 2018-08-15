FROM quay.io/aptible/nodejs:v8.2.x

ADD package.json /app/
WORKDIR /app

RUN npm install && \
npm install -g karma-cli && \
npm rebuild node-sass

ADD . /app
RUN ./node_modules/webpack/bin/webpack.js --config webpack.config.js

ENV PORT 5001
EXPOSE 5001

CMD [ "npm", "start" ]
