import React from 'react';
import { getSanityPostsPaginatedList } from '@/lib/sanityClient';
import PostCard from '@/components/PostCard';
import PaginationButton from '@/components/PaginationButton';
import { Metadata, ResolvingMetadata } from 'next';

export const dynamic = 'force-dynamic'


type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // optionally access and extend (rather than replace) parent metadata
    return {
        title: "AI Next Sanity Posts",
        description: "Collection of AI generated content",
        keywords: "Nextjs, Sanityio, ChatGPT, Google Gemini",
        openGraph: {
            images: ['/bg_hero1img.jpeg'],
        },
    }
}


export default async function Page({ params, searchParams }:
    {
        params: any
        searchParams: any
    }) {
    const page = searchParams['page'] || '1'
    const cursor = searchParams['cursor'] || null

    const { posts, lastId } = await getSanityPostsPaginatedList(cursor);

    return (
        <div className='container'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
                {posts.map((post: any) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
            <PaginationButton page={page} cursor={lastId} />
        </div>
    );
}
