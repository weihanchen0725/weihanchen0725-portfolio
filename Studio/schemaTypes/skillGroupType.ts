import {defineArrayMember, defineField, defineType} from 'sanity'
import { skillType } from './skillType';

export const skillGroupType = defineType({
    name: 'skillGroup',
    title: 'Skill Group',
    type: 'object',
    fields: [
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            validation: Rule => Rule.required().min(1)
        }),
        defineField({
            name: 'skillItems',
            title: 'SkillItems',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'skill'}]}],
        }),
    ],
    preview: {
        select: {
            title: 'category',
            subtitle: 'skillItems.join(", ")'
        }   
    }
});