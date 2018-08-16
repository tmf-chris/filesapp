FROM quay.io/aptible/php:7.2

WORKDIR /app

RUN apt-get update && apt-get -y install rsyslog php7.0-cli php7.0-mysql php7.0-curl

ADD composer.json /app/
ADD composer.lock /app/
ADD . /app

RUN composer install --prefer-source --no-ansi --no-interaction
RUN chown -R www-data:www-data /app/storage /app/bootstrap/cache
RUN rm -rf /var/www/html && ln -s /app/public /var/www/html
