import client from '$lib/sanity/sanity.client';

export const getSocial = async () => {    
    // const socialsQuery = '*[_type == "home"][0]{footer, seo}';
    const socialsQuery = '*[_type == "home"][0]{footer, seo{..., "resumeFile": resumeFile.asset->url}}';
    const socials = await client.fetch(socialsQuery);
    return socials;
}

