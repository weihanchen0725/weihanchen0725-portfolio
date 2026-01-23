import {defineField, defineType} from 'sanity'
import {portfolioType} from './portfolioType'  // Remove unused Rule

export const homeType = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fieldsets: [
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO', options: {collapsible: true}}
  ],
  fields: [
    // Fixed reference
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'portfolio',  // Matches portfolioType.name
      fieldset: 'seo'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'seo.metaTitle', maxLength: 96},
      fieldset: 'seo',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Hero Title',
      type: 'string',
      fieldset: 'content',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
      fieldset: 'content'
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt', validation: (rule) => rule.required()}],
      fieldset: 'content'
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'array',
      of: [{type: 'block'}],
      fieldset: 'content'
    }),
    // Portfolio-focused
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
      fieldset: 'content',
      validation: (rule) => rule.max(12)
    }),
    // Temp comment: defineField({name: 'featuredProjects', type: 'array', of: [{type: 'reference', to: [{type: 'project'}]}], fieldset: 'content'}) // Create project.ts first
  ],
  preview: {
    select: {title: 'title', media: 'seo.heroImage'}
  }
})
