/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OSU_CLIENT_ID: number
  readonly VITE_DISCORD_CLIENT_ID: number
  readonly VITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
