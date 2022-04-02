FROM python:3.10-slim as builder

WORKDIR /usr/src/app

RUN pip install poetry

COPY ./article_server/pyproject.toml ./article_server/poetry.lock ./

RUN poetry export -f requirements.txt > requirements.txt

FROM python:3.10-slim

ENV PYTHONUNBUFFERED=1

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000
# CMD [ "uvicorn", "main:app", "--host", "0.0.0.0" ]