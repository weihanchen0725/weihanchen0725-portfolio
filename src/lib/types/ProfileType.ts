import type { ExperienceType } from "./ExperienceType";

export interface ProfileType {
    title: string;
    subtitle: string;
    description: string;
    isOpenToWork: boolean;
    experience: ExperienceType[];
    favoriteSkills: {
        favorite: boolean;
        skill: {
            title: string;
            iconUrl: string;
        };
    }[];
}