import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'weihanchen-portfolio',

  projectId: '579uvye7',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  deployment:{
    appId: 'edbjuzqwvsq02m3btufeggyg',
  },

  schema: {
    types: schemaTypes,
  },
})
