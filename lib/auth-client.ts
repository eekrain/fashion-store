import { createAuthClient } from "better-auth/vue"; // make sure to import from better-auth/vue

export const authClient = createAuthClient({
  baseURL: import.meta.env.NUXT_PUBLIC_SITE_URL,
});
