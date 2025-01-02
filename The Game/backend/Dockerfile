FROM python:3.14.0a2-alpine3.20

RUN apk update && apk upgrade
RUN apk update && apk add postgresql-dev build-base python3-dev musl-dev linux-headers
RUN apk add --no-cache python3 py3-pip

WORKDIR /app

ADD requirements.txt /app/

RUN pip3 install --no-cache-dir -r requirements.txt

ADD . /app/
EXPOSE 8000

RUN python3 manage.py migrate

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
