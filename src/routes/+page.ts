import { getPortfolio } from '$lib/services/GetPortfolio';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const portfolio = await getPortfolio();
    return {
        portfolio,
    };
};
