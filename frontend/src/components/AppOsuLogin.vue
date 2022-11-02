<script setup lang="ts">
const isLogged = true;

const toOsuAuth = () => {
  const url = new URL("https://osu.ppy.sh/oauth/authorize");
  const params = new URLSearchParams({
    response_type: "code",
    client_id: import.meta.env.VITE_OSU_CLIENT_ID,
    redirect_uri: `${import.meta.env.VITE_REDIRECT_URI}/osu-identify`,
    scope: "identify",
    state: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWRpcmVjdF90byI6Imh0dHBzOi8vb3N1LWdzdC13ZWItc3RhZ2luZy51cC5yYWlsd2F5LmFwcC8ifQ.YRrbbq3eX2-01t1g0fRlmrv3F7YTHJ5jk_SBU2t5LBs"
  });

  url.search = params.toString();
  window.location.href = url.toString();
}
</script>

<template>
  <div class="bg-pink-p text-black font-bold md:text-xl px-14 py-2 h-12 md:h-16 ml-auto">
    <button v-if="!isLogged" @click="toOsuAuth">LOGIN WITH <span class="text-white">OSU</span></button>
    <button v-else class="flex items-center justify-end h-full gap-3">
      <p>WELCOME BACK <span class="text-white">USER</span></p>
      <img 
        src="../assets/artwork.jpg" 
        class="h-full aspect-square object-cover rounded-full shadow shadow-black" 
      />
    </button>
  </div>
</template>
