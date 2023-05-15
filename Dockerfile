FROM node:20-alpine
MAINTAINER Primate <admin@primate.co.uk>

# Install required libraries
RUN mkdir /test

ADD . /test

WORKDIR /test
RUN npm install parcel --global
RUN npm install

