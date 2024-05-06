/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { locate } from '@/sanity/plugins/locate'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schema } from '@/sanity/schema'
import { presentationTool } from 'sanity/presentation'
import home from '@/sanity/schemas/singletons/home'
import settings from '@/sanity/schemas/singletons/settings'
import duration from '@/sanity/schemas/objects/duration'
import page from '@/sanity/schemas/documents/page'
import project from '@/sanity/schemas/documents/project'
import milestone from '@/sanity/schemas/objects/milestone'
import post from '@/sanity/schemaTypes/post'
import author from '@/sanity/schemaTypes/author'
import category from '@/sanity/schemaTypes/category'
import blockContent from '@/sanity/schemaTypes/blockContent'
import { pageStructure } from '@/sanity/plugins/settings'
import daw from '@/sanity/schemas/documents/filters/daw'
import season from '@/sanity/schemas/documents/filters/season'
import contentType from '@/sanity/schemas/documents/filters/contentType'
import subjectType from '@/sanity/schemas/documents/filters/subjectType'
import artist from '@/sanity/schemas/documents/artist'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: [
      // Singletons
      home,
      settings,

      // Documents
      post,
      page,
      artist,

      daw,
      season,
      contentType,
      subjectType,

      duration,
      project,
      author,
      category,
      blockContent,
      // Objects
      milestone
    ]
  },
  plugins: [
    structureTool({
      structure: pageStructure(
        //singletons
        [home, settings],
        //filter groups
        [daw, season, contentType, subjectType]
      )
    }),
    presentationTool({
      locate,
      previewUrl: {
        previewMode: {
          enable: '/api/draft'
        }
      }
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion })
  ]
})