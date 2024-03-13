import React from 'react';
import { getSanityImageUrl, getSanityPageContent } from '@/lib/sanityClient';
import PageTemplateDefault from '@/components/PageTemplateDefault';
import { Metadata, ResolvingMetadata } from 'next';


type Props = {
    params: { pageslug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const page = await getSanityPageContent(params.pageslug)
    // optionally access and extend (rather than replace) parent metadata
    const Image = getSanityImageUrl(page.mainImage, 500)
    return {
        title: page.metaData.metaTitle,
        description: page.metaData.metaDescription,
        keywords: page.metaData.metaKeywords,
        openGraph: {
            images: [Image],
        },
    }
}

export default async function Contact({ params, searchParams }: Props) {
    const page = await getSanityPageContent(params.pageslug);

    return (
        <PageTemplateDefault pageContent={page} />
    );
}
