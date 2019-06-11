FROM python:3.7

MAINTAINER hollan

ENV PYTHONUNBUFFERED 1

RUN mkdir /app

WORKDIR /app

COPY ./DirectoryApp /app

RUN pip install -r requirements.txt

RUN mkdir -p /app/directoryapp/media/images

RUN chown hollan /app/directoryapp/media/images

EXPOSE 8000