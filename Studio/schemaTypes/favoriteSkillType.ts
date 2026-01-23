import { defineField, defineType } from "sanity";

export const favoriteSkillType = defineType({
    name: 'favoriteSkill',
    title: 'Favorite Skill',
    type: 'object',
    fields: [
        defineField({
            name: 'skill',
            title: 'Skill',
            type: 'reference',
            to: [{type: 'skill'}],
        }),
        defineField({
            name: 'favorite',
            title: 'Favorite',
            type: 'boolean',
        }),
    ],
})