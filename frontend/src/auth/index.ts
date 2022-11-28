export const useParams = (url: string, params: Record<string, string>) => {
  const base = new URL(url);
  const search = new URLSearchParams(params);

  base.search = search.toString();
  return base.toString();
}

// export const toOsuAuth = () => {
//   window.location.href = useParams(
//     "https://osu.ppy.sh/oauth/authorize",
//     {
//       response_type: "code",
//       client_id: import.meta.env.VITE_OSU_CLIENT_ID.toString(),
//       redirect_uri: `${import.meta.env.VITE_BASE_URL}/osu-identify`,
//       scope: "identify"
//     }
//   );
// }

export const toDiscordAuth = () => {
  window.location.href = useParams(
    "https://discord.com/oauth2/authorize",
    {
      response_type: "code",
      client_id: import.meta.env.VITE_DISCORD_CLIENT_ID.toString(),
      redirect_uri: `${import.meta.env.VITE_BASE_URL}/discord-identify`,
      scope: "identify"
    }
  );
}
