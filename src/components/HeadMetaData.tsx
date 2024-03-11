import Head from 'next/head';

export default function HeadMetaData({ title = "AI Blog", description = "Blog where all content generated using AI", keywords = "Nextjs, Sanityio, ChatGPT, Google Gemini", ogTitle = "AI Blog", ogDescription = "Blog where all content generated using AI", ogImage = "/bg_hero1img.jpeg", ogUrl = "/bg_hero1img.jpeg", twitterCard = "AI Blog", children }: { title?: string, description?: string, keywords?: string, ogTitle?: string, ogDescription?: string, ogImage?: string, ogUrl?: string, twitterCard?: string, children: React.ReactNode }) {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta property="og:title" content={ogTitle} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:url" content={ogUrl} />
                <meta name="twitter:card" content={twitterCard} />
                {/* Add any other metadata you want */}
            </Head>
        </>
    );
}