import { defineArrayMember, defineField, defineType } from "sanity";

export const experienceType = defineType({
    name: 'experience',
    title: 'Experience',
    type: 'object',
    fields: [
        defineField({
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
            validation: Rule => Rule.required().min(1)
        }),
        defineField({
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            validation: Rule => Rule.required().min(1)
        }),
        defineField({
            name: 'companyLocation',
            title: 'Company Location',
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
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'date',
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
        }),
    ],
    preview: {
        select: {
            title: 'jobTitle',
            subtitle: 'companyName',
        }
    }
})