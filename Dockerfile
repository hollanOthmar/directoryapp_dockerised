FROM python:3.7

MAINTAINER hollan

ENV PYTHONUNBUFFERED 1

RUN mkdir /app

WORKDIR /app

COPY ./DirectoryApp /app

RUN pip install -r requirements.txt

EXPOSE 8000