import React from 'react';
import { getSanityPageContent } from '@/lib/sanityClient';
import PageTemplateDefault from '@/components/PageTemplateDefault';


export default async function About() {
    const pageContent = await getSanityPageContent('About');
    // console.log(pageContent);

    return (
        <PageTemplateDefault pageContent={pageContent} />
    );
}
