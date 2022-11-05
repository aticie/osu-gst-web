FROM node as builder

ARG VITE_DISCORD_CLIENT_ID
ARG VITE_OSU_CLIENT_ID
ARG VITE_BASE_URL
ARG PORT

ENV VITE_DISCORD_CLIENT_ID=${VITE_DISCORD_CLIENT_ID}
ENV VITE_OSU_CLIENT_ID=${VITE_OSU_CLIENT_ID}
ENV VITE_BASE_URL=${VITE_BASE_URL}
ENV PORT=${PORT}

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

CMD ["cargo", "run", "--release"]