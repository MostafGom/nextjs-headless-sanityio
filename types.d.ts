import { SerializedBlock } from "@portabletext/react"
import { SanityAsset, SanityImageObject } from "@sanity/image-url/lib/types/types"

type Author = {
    _id: string
    name: string
    image?: SanityImageObject
}
type Slug = {
    current: string | undefined
}
type MySanityMetaData = {
    metaTitle: string
    metaDescription: string
    metaKeywords: string
    metaImage: SanityImageObject
}

type PostCard = {
    _id: string
    title?: string
    slug?: Slug
    author?: Author
    mainImage?: SanityImageObject
}

type Post = {
    _id: string
    title?: string
    slug?: Slug
    mainImage?: SanityImageObject
    metaData: MySanityMetaData
    body: SerializedBlock[]
}

type DefaultTypographyProps = {
    content: string;
    className?: string;
}