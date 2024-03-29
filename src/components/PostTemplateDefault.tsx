import React from 'react';
import { PortableText } from '@portabletext/react';
import { myPortableTextComponents } from '@/components/PortableTexCustomComponent';
import { getSanityImageUrl } from '@/lib/sanityClient';
import Image from 'next/image';
import { Post } from '@/types';


export default function PostTemplateDefault({ postContent }: any) {

    return (
        <>

            <section className="flex flex-col items-center justify-center w-full bg-cover bg-center dark:bg-gray-900 light:bg-gray-400 dark:text-white text-black px-4 relative p-8">
                <div className='max-w-5xl'>
                    <div className="md:text-center container text-justify">
                        <div className="text-4xl font-bold">{postContent.title}</div>
                    </div>
                    <div className="container">
                        <div className="mt-4 ml-0 md:mx-auto">
                            <Image src={getSanityImageUrl(postContent.mainImage, 500)} alt="hello" width={500} height={500} className='rounded-mycustomrounded ml-0 md:mx-auto ' />
                        </div>
                    </div>
                    <div className="container ml-0 md:mx-auto">
                        <div className="text-xl  text-justify mt-4 leading-8">
                            <PortableText value={postContent.body} components={myPortableTextComponents} />
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
}
