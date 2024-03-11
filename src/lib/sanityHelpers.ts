import { sanityClient } from "@/lib/sanityClient"

export async function getSanityPost(slug: string) {
    const post = await sanityClient.fetch(`*[_type == "post" && slug.current == $slug]`, { slug })
    return post[0]
}

// export async function getSanityPostsList() {
//     const posts = await sanityClient.fetch(`*[_type == "post"]{_id,title,slug,mainImage,'author':author->{_id,name,image}}`)
//     return posts
// }

export async function getSanityPostsPaginatedList(lastId: string | null, perPage: number = 2) {
    let posts = []
    if (lastId === null) {
        posts = await sanityClient.fetch(`*[_type == "post"] | order(_id) [0...$perPage]{_id,title,slug,mainImage,'author':author->{_id,name,image}}`, { perPage })
        let cursor = posts[posts.length - 1]._id
        console.log(cursor);

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
    const posts = await sanityClient.fetch(`*[_type == "post" && featured==true]{_id,title,slug,mainImage,'author':author->{_id,name,image}}`)
    return posts
}

export async function getSanityNavigationMenu(menuName: string) {
    const menu = await sanityClient.fetch(`*[_type=='menu' &&  title == $menuName] {
        _id,
        title,
        'menuItems': menuItems[]->{ // Use '->' to follow references
          _id,
          title,
          url,
          path
          // Add other properties you want to retrieve for each menu item
        },
        logo
      }`, { menuName })
    return menu[0]
}

export async function getSanityHomePage() {
    const homepage = await sanityClient.fetch(`*[_type == "homepage" && title=="Home"]{...,
      "faqs":faqs->{...,"faqItems":faqItems[]->{...}}
    }`)
    return homepage[0]
}

export async function getSanityPageContent(pageName: string) {
    const page = await sanityClient.fetch(`*[_type == "page" && title == $pageName]`, { pageName })
    return page[0]
}

