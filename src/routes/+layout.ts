import { getSocial } from '$lib/services/GetSocial';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
    const socials = await getSocial();
    return { socials };
};