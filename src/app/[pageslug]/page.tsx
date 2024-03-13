import React from 'react';
import { getSanityPageContent, sanityImageBuilder } from '@/lib/sanityClient';
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
    const Image = sanityImageBuilder.image(page.mainImage).width(500).url()
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
