import React, { Suspense } from 'react';
import { getSanityPostsPaginatedList } from '@/lib/sanityHelpers';
import PageTemplateDefault from '@/components/PageTemplateDefault';
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button';
import PostCard from '@/components/PostCard';
import PaginationButton from '@/app/blog/PaginationButton';

export default async function Page({ searchParams }:
    {
        searchParams:
        { [key: string]: string | undefined }
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


// export default async function Page({ searchParams }:
//     {
//         searchParams:
//         { [key: string]: string | undefined }
//     }) {
//     const page = searchParams['page'] || '1'
//     const cursor = searchParams['cursor'] || null

//     return (

//         <Suspense fallback={<MyLoading />}>
//             <PaginationPosts searchParams={searchParams} />
//         </Suspense>
//     )
// }