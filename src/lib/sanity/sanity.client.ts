import { createClient } from "@sanity/client";

import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';

const client = createClient({
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: PUBLIC_SANITY_DATASET,
    useCdn: true,
    apiVersion: '2026-01-18'
    // token: process.env.SANITY_API_TOKEN,
});

export default client;