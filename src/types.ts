import { SerializedBlock } from "@portabletext/react"
import { SanityAsset, SanityImageSource } from "@sanity/image-url/lib/types/types"

export type Author = {
    _id: string
    name: string
    image?: SanityImageSource
}
export type Slug = {
    current: string | undefined
}

export type MySanityMetaData = {
    metaTitle: string
    metaDescription: string
    metaKeywords: string
    metaImage: SanityImageSource
}

export type PostCard = {
    _id: string
    title?: string
    slug?: Slug
    author?: Author
    mainImage?: SanityImageSource
}

export type Post = {
    _id: string
    title?: string
    slug?: Slug
    mainImage?: SanityImageSource
    metaData: MySanityMetaData
    body: SerializedBlock[]
}

export type HomePage = {
    _id: string
    heroHeadline: string
    heroSubHeadline: string
    heroCta: string
    title?: string
    slug?: Slug
    mainImage?: SanityImageSource
    heroImage?: SanityImageSource
    metaData: MySanityMetaData
    body: SerializedBlock[]
    faqs: Faq
    sections: any[]
}
export type FaqItem = {
    _id: string
    question: string
    answer: string
}
export type Faq = {
    _id: string
    title: string
    faqItems: FaqItem[]
}

export type Page = {
    _id: string
    title?: string
    slug?: Slug
    mainImage?: SanityImageSource
    metaData: MySanityMetaData
    body: SerializedBlock[]
}

export type NavMenu = {
    _id: string
    title: string
    menuItems: MenuItem[]
    logo: SanityImageSource
}
export type MenuItem = {
    _id: string
    title: string
    url: string
    path: string

}
export type DefaultTypographyProps = {
    content: string;
    className?: string;
}