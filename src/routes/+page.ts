import { getPortfolio } from '$lib/services/GetPortfolio';
import { getSkills } from '$lib/services/GetSkill';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const portfolio = await getPortfolio();
    const skills = await getSkills();
    return {
        portfolio,
        skills
    };
};
