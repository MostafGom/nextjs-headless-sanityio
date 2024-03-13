import { getSanityFeaturedPostsList } from '@/lib/sanityClient'
import PostCard from '@/components/PostCard'
import { CarouselItem } from '@/components/ui/carousel'
import CarouselWrapper from '@/components/CarouselWrapper'

export async function FeaturedPostsCarousel() {
    const posts = await getSanityFeaturedPostsList();
    return (
        <div className="grid grid-cols-1 place-items-center">
            <CarouselWrapper>
                {posts.map((post: any) => (
                    <CarouselItem key={post._id} className="basis-full md:basis-1/2 lg:basis-1/3">
                        <PostCard post={post} />
                    </CarouselItem>
                ))}
            </CarouselWrapper>
        </div>
    )
}