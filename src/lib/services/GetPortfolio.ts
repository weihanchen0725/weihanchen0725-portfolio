import client from '$lib/sanity/sanity.client';

export const getPortfolio = async () => {
    const portfolio = await client.fetch('*[_type == "home"]{isOpenToWork,title,subtitle,description,favoriteSkills}');
    return portfolio;
}