FROM node as builder

WORKDIR /app

COPY ./frontend /app

RUN npm ci
RUN npm run build

FROM rust:slim

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY ./server/* /app/

CMD ["cargo", "run", "--release"]