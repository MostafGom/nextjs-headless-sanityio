import React from 'react';
import { getSanityPostsPaginatedList } from '@/lib/sanityClient';
import PostCard from '@/components/PostCard';
import PaginationButton from '@/components/PaginationButton';
import { Metadata, ResolvingMetadata } from 'next';
import { TypographyH2 } from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

export const revalidate = 60

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
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
                {posts.lenght > 0
                    ? posts.map((post: any) => (
                        <PostCard key={post._id} post={post} />
                    ))
                    : <div className='flex flex-col justify-center items-center w-full'>
                        <TypographyH2 className='mx-auto text-center' content='More articles are on the way in the meantime you can go visit our Home page' />
                        <Link href='/'>
                            <Button className='mt-8'> <ArrowLeftCircleIcon /> Go Back To Home Page</Button>
                        </Link>
                    </div>
                }
            </div> */}

            {posts.length > 0
                ? <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
                    {posts.map((post: any) => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </div>


                : <div className='flex flex-col justify-center items-center w-full'>
                    <TypographyH2 className='mx-auto text-center max-w-3xl' content='More articles are on the way in the meantime you can go visit our Home page' />
                    <Link href='/'>

                        <Button className='mt-8'> <ArrowLeftCircleIcon className='color-white w-8 h-8' /> Go Back To Home Page</Button>
                    </Link>
                    <TypographyH2 className='mx-auto text-center mt-8' content='👇 Or You Can Go To Previous Page From Prev' />
                </div>
            }
            <PaginationButton page={page} cursor={lastId} />
        </div>
    );
}
