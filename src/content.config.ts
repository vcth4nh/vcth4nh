import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const externalLink = z.object({
  label: z.string(),
  url: z.url(),
});

const research = defineCollection({
  loader: glob({ base: "./src/content/research", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    year: z.number(),
    role: z.enum(["independent", "co-research", "team"]),
    roleLabel: z.string(),
    organization: z.string().optional(),
    cves: z.array(z.string()).default([]),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number(),
    links: z.array(externalLink),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    role: z.string(),
    status: z.string(),
    stack: z.array(z.string()),
    href: z.url(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = { research, projects };
