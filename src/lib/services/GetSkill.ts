import client from '$lib/sanity/sanity.client';

export const getSkills = async () => {
    const skills = await client.fetch('*[_type == "skill"]');
    return skills;
}

