import {defineArrayMember, defineField, defineType} from 'sanity'
import {portfolioType} from './portfolioType'  
import {skillGroupType} from './skillGroupType'
import { projectType } from './projectType'
import { experienceType } from './experienceType'
import { favoriteSkillType } from './favoriteSkillType'

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
      name: 'isOpenToWork',
      title: 'Open to Work',
      type: 'boolean',
      fieldset: 'content'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'seo.metaTitle', maxLength: 96},
      fieldset: 'seo',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'content',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      fieldset: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      fieldset: 'content',
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'string',
      fieldset: 'content',
    }),
    // Projects
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [defineArrayMember(projectType)],
      fieldset: 'content'
    }),
    // Skills
    defineField({
      name: 'skillGroups',
      title: 'SkillGroups',
      type: 'array',
      of: [defineArrayMember(skillGroupType)],
      fieldset: 'content',
    }),
    // Experience
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [defineArrayMember(experienceType)],
      fieldset: 'content',
    }),
    // Favorite Skills
    defineField({
      name: 'favoriteSkills',
      title: 'Favorite Skills',
      type: 'array',
      of: [defineArrayMember(favoriteSkillType)],
      fieldset: 'content',
    }),
    // Temp comment: defineField({name: 'featuredProjects', type: 'array', of: [{type: 'reference', to: [{type: 'project'}]}], fieldset: 'content'}) // Create project.ts first
  ],
  preview: {
    select: {title: 'title', media: 'seo.heroImage'}
  }
})
