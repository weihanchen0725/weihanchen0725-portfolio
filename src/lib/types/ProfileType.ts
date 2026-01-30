export default interface ProfileType {
    title: string;
    subtitle: string;
    description: string;
    isOpenToWork: boolean;
    favoriteSkills: {
        favorite: boolean;
        skill: {
            title: string;
            iconUrl: string;
        };
    }[];
}