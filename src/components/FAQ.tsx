import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { PortableText } from "@portabletext/react"
import { myPortableTextComponents } from "./PortableTexCustomComponent"

export function Acoordion({ faqItems }: { faqItems: any }) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq: any) => (
                <AccordionItem value={faq._id} key={faq._id}>
                    <AccordionTrigger>{faq.title}</AccordionTrigger>
                    <AccordionContent>
                        <PortableText value={faq.answer} components={myPortableTextComponents} />
                    </AccordionContent>
                </AccordionItem>
            ))
            }
        </Accordion>
    )
}
