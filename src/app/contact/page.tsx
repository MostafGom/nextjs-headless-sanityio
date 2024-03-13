import React from 'react';
import { getSanityPageContent } from '@/lib/sanityClient';
import PageTemplateDefault from '@/components/PageTemplateDefault';


export default async function Contact() {
    const pageContent = await getSanityPageContent('Contact');

    return (
        <PageTemplateDefault pageContent={pageContent} />
    );
}
