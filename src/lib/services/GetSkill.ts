import client from '$lib/sanity/sanity.client';

export const getSkills = async () => {
    // const skills = await client.fetch('*[_type == "skill"]{_id,title,name,"iconURL": icon.asset->url }');
    
    const skillsQuery = '*[_type == "profile"][0] {favoriteSkills[] {skill[0]}}';
    const skills = await client.fetch(skillsQuery);
    return skills;
}

