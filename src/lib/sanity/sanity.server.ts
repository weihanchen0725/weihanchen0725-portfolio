import { createClient } from '@sanity/client';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
    throw new Error('Missing Sanity environment variables');
}

export const client = createClient({
    projectId,
    dataset,
    token,
    useCdn: false,
});