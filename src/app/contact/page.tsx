import React from 'react';
import { getSanityPageContent } from '@/lib/sanityHelpers';
import PageTemplateDefault from '@/components/PageTemplateDefault';


export default async function Contact() {
    const pageContent = await getSanityPageContent('Contact');

    return (
        <PageTemplateDefault pageContent={pageContent} />
    );
}
