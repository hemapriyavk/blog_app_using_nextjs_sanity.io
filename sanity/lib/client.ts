import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || "fypfbsym";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || "production";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: true,
});
