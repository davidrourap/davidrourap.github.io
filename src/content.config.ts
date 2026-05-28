import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['science', 'startup', 'personal']),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['research', 'startup']),
    status: z.enum(['active', 'completed', 'paused']),
    link: z.string().optional(),
    year: z.number().optional(),
  }),
});

export const collections = { blog, projects };
