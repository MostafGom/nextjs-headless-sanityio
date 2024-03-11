export type PostType = {
    _id: string
    title?: string
    slug?: {
        current: string | undefined
    }
    author?: {
        _id: string
        name: string
        image: {
            asset: {
                url: string
            }
        }
    }
    mainImage?: {
        asset: {
            url: string
        }
    }
}

export type PageContentType = {
    _id: string
    title: string
    content: string
    slug: {
        current: string
    }
    mainImage: {
        asset: {
            url: string
        }
    }
}



export interface DefaultTypographyProps {
    content: string;
    className?: string;
}