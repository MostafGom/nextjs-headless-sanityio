import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'
import { HomePage, NavMenu, Page, Post, PostCard } from '@/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';


// Create a Sanity client using the environment variables
export const sanityClient = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: process.env.SANITY_API_VERSION,
    useCdn: process.env.SANITY_USE_CDN === 'true', // Use CDN in production
});

export const sanityImageBuilder = imageUrlBuilder(sanityClient)
export const getSanityImageUrl = (image: SanityImageSource | undefined, width: number): string => {
    if (image) {
        return sanityImageBuilder.image(image).width(width).url()
    } else {
        return ""
    }
}

export async function getSanityPost(slug: string) {
    const post: Post[] = await sanityClient.fetch(`*[_type == "post" && slug.current == $slug]`, { slug })
    return post[0]
}


export async function getSanityPostsPaginatedList(lastId: string | null, perPage: number = 2) {
    let posts: PostCard[] = []
    if (lastId === null) {
        posts = await sanityClient.fetch(`*[_type == "post"] | order(_id) [0...$perPage]{_id,title,slug,mainImage,'author':author->{_id,name,image}}`, { perPage })
        let cursor = posts[posts.length - 1]._id
        return { posts, lastId: cursor }
    } else {
        posts = await sanityClient.fetch(
            `*[_type == "post" && _id > $lastId] | order(_id) [0...$perPage] {_id,title,slug,mainImage,'author':author->{_id,name,image}}`, { lastId, perPage })

        let cursor = null
        if (posts.length > 0) {
            cursor = posts[posts.length - 1]._id
        } else {
            cursor = null // Reached the end
        }
        return { posts, lastId: cursor }
    }

}

export async function getSanityFeaturedPostsList() {
    const posts: PostCard[] = await sanityClient.fetch(`*[_type == "post" && featured==true]{_id,title,slug,mainImage,'author':author->{_id,name,image}}`)
    return posts
}

export async function getSanityNavigationMenu(menuName: string) {
    const menu: NavMenu[] = await sanityClient.fetch(`*[_type=='menu' &&  title == $menuName] {
        _id,
        title,
        'menuItems': menuItems[]->{ 
          _id,
          title,
          url,
          path
        },
        logo
      }`, { menuName })
    return menu[0]
}

export async function getSanityHomePage(): Promise<HomePage> {
    const homepage: HomePage[] = await sanityClient.fetch(`*[_type == "homepage" && title=="Home"]{...,
      "faqs":faqs->{...,"faqItems":faqItems[]->{...}}
    }`)
    return homepage[0]
}

export async function getSanityPageContent(pageName: string): Promise<Page> {
    const page: Page[] = await sanityClient.fetch(`*[_type == "page" && slug.current == $pageName]`, { pageName })
    return page[0]
}

