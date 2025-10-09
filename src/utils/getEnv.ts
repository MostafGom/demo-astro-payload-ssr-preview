export const getEnv = (ASTRO_ENV: any) => {
  return {
    BACKEND_API_URL:
      ASTRO_ENV?.BACKEND_API_URL || import.meta.env.BACKEND_API_URL,
    PAYLOAD_API_KEY:
      ASTRO_ENV?.PAYLOAD_API_KEY || import.meta.env.PAYLOAD_API_KEY,
  };
};
