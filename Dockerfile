FROM node as builder

WORKDIR /app

COPY ./frontend /app/frontend

WORKDIR /app/frontend

RUN npm ci
RUN npm run build

FROM rust:slim

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY ./server /app/server

WORKDIR /app/server

RUN cargo build --release

CMD ["./target/release/server"]