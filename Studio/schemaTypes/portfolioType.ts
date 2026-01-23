import {defineField, defineType} from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',  // Reference as type: 'portfolio'
  title: 'Portfolio SEO',
  type: 'object',
  fieldsets: [{name: 'meta', title: 'Meta'}, {name: 'social', title: 'Social'}],
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      fieldset: 'meta',
      validation: (rule) => rule.max(60).warning('≤60 chars')
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      fieldset: 'meta',
      rows: 3,
      validation: (rule) => rule.max(155).warning('≤155 chars')
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords (comma-separated)',
      type: 'string',
      fieldset: 'meta'
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero/Social Image (1200x630)',
      type: 'image',
      options: {hotspot: true},
      fieldset: 'meta'
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Photo',
      type: 'image',
      fieldset: 'social'
    }),
    defineField({
      name: 'resumeFile',
      title: 'Resume PDF',
      type: 'file',
      fieldset: 'social',
      validation: (rule) => rule.custom((item: any) => {
        if (!item?.asset?._ref?.includes('application/pdf')) return 'PDF only'
        return true
      })
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn',
      type: 'url',
      fieldset: 'social'
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub',
      type: 'url',
      fieldset: 'social'
    })
  ]
})
