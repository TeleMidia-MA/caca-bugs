# This file is a template, and might need editing before it works on your project.
FROM php:8-apache

TEMPLATE_PHP_INI=production

# Customize any core extensions here
#RUN apt-get update && apt-get install -y \
#        libfreetype6-dev \
#        libjpeg62-turbo-dev \
#        libmcrypt-dev \
#        libpng12-dev \
#    && docker-php-ext-install -j$(nproc) iconv mcrypt \
#    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
#    && docker-php-ext-install -j$(nproc) gd
RUN a2enmod rewrite \
    && docker-php-ext-install mysqli \
    && mkdir /var/www/html/cacabugs

COPY src/ /var/www/html/cacabugs

EXPOSE 80
