import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'


// Create a Sanity client using the environment variables
export const sanityClient = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: process.env.SANITY_API_VERSION,
    useCdn: process.env.SANITY_USE_CDN === 'true', // Use CDN in production
});


export const sanityImageBuilder = imageUrlBuilder(sanityClient)
export function urlForSanityImage(source: any) {
    return sanityImageBuilder.image(source)
};