use std::io;
use std::net::SocketAddr;

use axum::{http::StatusCode, response::IntoResponse, routing::get_service, Router};
use tower_http::services::{ServeDir, ServeFile};

#[tokio::main]
async fn main() {
    let port: u16 = std::env::var("PORT")
        .expect("Can't find port env variable")
        .parse()
        .expect("Can't parse port to u16");

    let dist_dir = get_service(
        ServeDir::new("../dist").not_found_service(ServeFile::new("../dist/index.html")),
    )
    .handle_error(handle_error);

    let app = Router::new().nest("/", dist_dir);

    let addr = SocketAddr::from(([0, 0, 0, 0], port));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .expect("Server Error!");
}

async fn handle_error(_err: io::Error) -> impl IntoResponse {
    (StatusCode::INTERNAL_SERVER_ERROR, "Something went wrong...")
}
