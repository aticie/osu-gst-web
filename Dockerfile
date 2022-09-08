ARG PORT

FROM node as builder

WORKDIR /app/

COPY . /app/

RUN npm ci
RUN npm run build

FROM python:3.10-slim

WORKDIR /app

COPY --from=builder /app/dist /app/dist

CMD ["python3", "-m", "http.server", "-d", "/app/dist", "--port", "${PORT}"]