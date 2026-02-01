import client from '$lib/sanity/sanity.client';

export const getPortfolio = async () => {
    // const portfolio = await client.fetch('*[_type == "home"]{isOpenToWork,title,subtitle,description,favoriteSkills}');
    // const profileQuery = '*[_type == "home"]{isOpenToWork,title,subtitle,description,favoriteSkills}';
    const profileQuery = '*[_type == "home"][0]{title,subtitle,description,isOpenToWork,experience,favoriteSkills[]{favorite,skill->{title,"iconUrl": icon.asset->url}}}';
    const profile = await client.fetch(profileQuery);
    return profile;
}
