import { getSanityPost } from "@/lib/sanityClient"
import PostTemplateDefault from "@/components/PostTemplateDefault";
import { PortableText } from "@portabletext/react";

export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: { slug: string } }) {
    const post = await getSanityPost(params.slug)
    // console.log(post);
    return (
        <PostTemplateDefault postContent={post} />
    )
}