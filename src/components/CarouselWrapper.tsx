import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselWrapper({ children }: { children?: React.ReactNode }) {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="md:w-11/12 w-4/5"
        >
            <CarouselContent>
                {children}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
