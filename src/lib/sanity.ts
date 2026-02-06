import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable. Please add it to your .env.local file."
  );
}

export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "v2026-01-21",
  token: process.env.SANITY_API_TOKEN,
});
