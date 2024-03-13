import { getSanityImageUrl } from "@/lib/sanityClient";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { TypographyH4 } from "./Typography";
import { myPortableTextComponents } from "./PortableTexCustomComponent";


export function Sections({ sections }: { sections: any }) {
    return (
        <>
            {
                sections.map((section: any) => (
                    <div key={section._key} className="flex flex-col md:flex-row items-stretch justify-center my-16 rounded-mycustomrounded shadow-3xllight dark:shadow-3xldark dark:bg-gray-900 ">
                        <div className="relative w-full h-96 basis-full md:basis-5/12 rounded-mycustomrounded">
                            <Image
                                src={getSanityImageUrl(section.image, 800)}
                                alt={section.headline}
                                className="w-full h-full  object-cover rounded-l-mycustomrounded"
                                width={600}
                                height={800}
                            />
                        </div>
                        <div className="bg-gray-900 p-10 text-white rounded-r-mycustomrounded basis-full md:basis-7/12">
                            <TypographyH4 className="my-8" content={section.headline} />
                            <PortableText value={section.content} components={myPortableTextComponents} />
                        </div>
                    </div>
                ))

            }
        </>
    )
}


