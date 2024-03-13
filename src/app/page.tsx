import Image from "next/image";
import Link from "next/link";
import { FeaturedPostsCarousel } from "@/components/FeaturedPostsCarousel";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyH3 } from "@/components/Typography";
import DefaultSectionWrapper from "@/components/PageSectionWrapper";
import { getSanityHomePage, getSanityImageUrl } from "@/lib/sanityClient";
import { Acoordion } from "@/components/FAQ";
import { Sections } from "@/components/Sections";

export default async function Home() {
  const pageContent = await getSanityHomePage();

  return (

    <main className="flex min-h-vhminusnavbar flex-col items-center justify-between ">
      <section className="flex flex-col items-center justify-center h-vhminusnavbar w-full bg-cover bg-center bg-gray-900 px-4 relative">
        <div className="text-center z-10 w-4/5 max-w-4xl">
          <TypographyH1 content={pageContent.heroHeadline || "Full Blog Powered By LLM"} className="mt-10 text-white" />
          <TypographyH3 content={pageContent.heroSubHeadline || "Using SanityIO as headless CMS and NextJS+Shadcn in front End. a blog about tech where all articles are generated using LLM."} className="mt-10 text-white" />
          <Link href="/posts" >
            <Button className="w-9/12 mt-16 px-12 py-8 hover:bg-blue-600 text-2xl font-bold">
              {pageContent.heroCta || "Read Our Blogs"}
            </Button>
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={getSanityImageUrl(pageContent.heroImage, 800)}
            alt="Background Image"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            unoptimized={true}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        </div>
      </section>
      <DefaultSectionWrapper>
        <TypographyH1 content="Our Featured Posts" className="text-center mb-24" />
        <Suspense fallback={<div>Loading...</div>}>
          <FeaturedPostsCarousel />
        </Suspense>
      </DefaultSectionWrapper>

      <DefaultSectionWrapper>
        <TypographyH1 content="FAQS" className="text-center mb-24" />
        <Acoordion faqItems={pageContent.faqs.faqItems} />
      </DefaultSectionWrapper>

      <DefaultSectionWrapper>
        <TypographyH1 content="Discover The Power Of AI" className="text-center mb-24" />
        <Sections sections={pageContent.sections} />
      </DefaultSectionWrapper>

    </main>
  );
}
