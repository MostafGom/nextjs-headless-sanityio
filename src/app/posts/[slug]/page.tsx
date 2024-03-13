import { getSanityPost, sanityImageBuilder } from "@/lib/sanityClient"
import PostTemplateDefault from "@/components/PostTemplateDefault";
import { PortableText } from "@portabletext/react";
import { Metadata, ResolvingMetadata } from "next";

export const dynamic = 'force-dynamic'


type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const post = await getSanityPost(params.slug)
    // optionally access and extend (rather than replace) parent metadata
    const Image = sanityImageBuilder.image(post.mainImage).width(500).url()
    return {
        title: post.metaData.metaTitle,
        description: post.metaData.metaDescription,
        keywords: post.metaData.metaKeywords,
        openGraph: {
            images: [Image],
        },
    }
}

export default async function Page({ params, searchParams }: Props) {
    const post = await getSanityPost(params.slug)
    return (
        <>
            <PostTemplateDefault postContent={post} />
        </>
    )
}