import { defineCollection, z } from 'astro:content';

const landingPage = defineCollection({
    type: 'data',
    schema: z.object({
        hero_title: z.string(),
        hero_subtitle: z.string(),
        hero_text: z.string(),
        price: z.string(),
        dp: z.string(),
        departure_date: z.string(),
        duration: z.string(),
        whatsapp: z.string(),
        include: z.array(z.string()),
        exclude: z.array(z.string()),
        itinerary: z.array(z.object({
            day: z.string(),
            title: z.string(),
            desc: z.string(),
            accent: z.string().optional(),
        })),
    }),
});

const programs = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        hero_title: z.string(),
        hero_subtitle: z.string(),
        hero_text: z.string(),
        price: z.string(),
        dp: z.string(),
        departure_date: z.string(),
        duration: z.string(),
        whatsapp: z.string(),
        include: z.array(z.string()),
        exclude: z.array(z.string()),
        itinerary: z.array(z.object({
            day: z.string(),
            title: z.string(),
            desc: z.string(),
            accent: z.string().optional(),
        })),
    }),
});

export const collections = {
    'landing-page': landingPage,
    'programs': programs,
};
