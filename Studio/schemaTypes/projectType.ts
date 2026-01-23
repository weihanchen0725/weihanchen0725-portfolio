import { defineArrayMember, defineField, defineType } from "sanity";
import { skillGroupType } from "./skillGroupType";
import { skillType } from "./skillType";

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().min(1)
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().min(1)
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required().min(1)
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
        }),
        defineField({
            name: 'skillItems',
            title: 'SkillItems',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'skill'}]}],
        }),
        defineField({
            name: 'createdDate',
            title: 'Created Date',
            type: 'date',
        }),
        defineField({
            name: 'updatedDate',
            title: 'Updated Date',
            type: 'date',
        }),
    ]
})