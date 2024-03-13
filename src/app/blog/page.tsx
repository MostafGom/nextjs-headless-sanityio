import React from 'react';
import { getSanityPostsPaginatedList } from '@/lib/sanityClient';
import PostCard from '@/components/PostCard';
import PaginationButton from '@/components/PaginationButton';

export const dynamic = 'force-dynamic'

export default async function Page({ params, searchParams }:
    {
        params: any
        searchParams: any
    }) {
    const page = searchParams['page'] || '1'
    const cursor = searchParams['cursor'] || null
    console.log('page', page);
    console.log('cursor', cursor);

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
