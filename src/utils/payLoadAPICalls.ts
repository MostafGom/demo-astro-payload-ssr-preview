import { getEnv } from "./getEnv";

export async function fetchDoc(
  slug: string,
  lang: string,
  collection: string,
  ASTRO_ENV: any
) {
  const env = getEnv(ASTRO_ENV);
  const urlFetch = `${env.BACKEND_API_URL}/api/${collection}?where[slug][equals]=${slug}&depth=5&draft=false&locale=${lang}`;
  const doc = await fetch(urlFetch, {
    headers: {
      Authorization: `users API-Key ${env.PAYLOAD_API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  const docData = await doc.json();
  return docData;
}
