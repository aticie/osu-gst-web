export const toOsuAuth = () => {
  const url = new URL("https://osu.ppy.sh/oauth/authorize");
  const params = new URLSearchParams({
    response_type: "code",
    client_id: import.meta.env.VITE_OSU_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
    scope: "identify",
  });

  url.search = params.toString();
  window.location.href = url.toString();
}
