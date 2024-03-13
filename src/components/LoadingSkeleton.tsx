import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="container flex flex-col space-y-3">
            {/* display an item two times using array */}
            {[1, 2].map((i) => (
                <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="w-full h-32" />
                    <Skeleton className="w-3/4 h-4" />
                    <Skeleton className="w-1/2 h-4" />
                    <Skeleton className="w-3/4 h-4" />
                </div>
            ))}

        </div>
    )
}