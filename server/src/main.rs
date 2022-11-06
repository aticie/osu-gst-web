use std::net::SocketAddr;

use axum::Router;
use axum_extra::routing::SpaRouter;

#[tokio::main]
async fn main() {
    let port: u16 = std::env::var("PORT")
        .expect("Can't find port env variable")
        .parse()
        .expect("Can't parse port to u16");

    let spa = SpaRouter::new("/", "../dist");

    let app = Router::new()
        .merge(spa);

    let addr = SocketAddr::from(([0, 0, 0, 0], port));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .expect("Server Error!");
}
