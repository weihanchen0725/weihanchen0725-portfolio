import type { ExperienceType } from "./ExperienceType";
import type { FavoriteSkillType } from "./FavoriteSkillType";
import type { ProjectType } from "./ProjectType";

export interface ProfileType {
    title: string;
    subtitle: string;
    description: string;
    projects: ProjectType[];
    isOpenToWork: boolean;
    experience: ExperienceType[];
    favoriteSkills: FavoriteSkillType[];
}