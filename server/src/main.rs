use std::net::SocketAddr;

use tower::make::Shared;
use tower_http::services::ServeDir;

#[tokio::main]
async fn main() {
    let port: u16 = std::env::var("PORT")
        .expect("Can't find port env variable")
        .parse()
        .expect("Can't parse port to u16");

    let service = ServeDir::new("../dist");
    let addr = SocketAddr::from(([0, 0, 0, 0], port));

    axum::Server::bind(&addr)
        .serve(Shared::new(service))
        .await
        .expect("Server Error!");
}
