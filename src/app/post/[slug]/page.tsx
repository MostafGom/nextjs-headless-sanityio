import { getSanityPost } from "@/lib/sanityHelpers"
import PostTemplateDefault from "@/components/PostTemplateDefault";
import { PortableText } from "@portabletext/react";

export default async function Page({ params }: { params: { slug: string } }) {
    const post = await getSanityPost(params.slug)
    // console.log(post);
    return (
        <PostTemplateDefault postContent={post} />
    )
}