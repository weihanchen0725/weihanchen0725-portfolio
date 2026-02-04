import type { RefBaseType } from "./RefBaseType";

export interface ProjectType{
    title: string;
    name: string;
    description: string;
    url: string;
    skillItems: RefBaseType[];
    createdDate?: string;
    updatedDate?: string;
}