/// <reference types="astro/client" />

declare namespace App {
  interface Locals extends Runtime {
    runtime: {
      env: {
        PAYLOAD_API_KEY: string;
        PAYLOAD_PUBLIC_SITE_URL: string;
      };
    };
  }
}
