FROM python:3.10-slim-buster

COPY requirements.txt /

RUN pip install -r requirements.txt

COPY one_project /one_project

WORKDIR one_project

ENTRYPOINT ["gunicorn", "--config", \
    "gunicorn.py", \
    "one_project.wsgi" \
]
