function resolveSiteUrl(): string {
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionHost) {
    return `https://${productionHost}`;
  }
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();
