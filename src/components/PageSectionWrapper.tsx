import { cn } from "@/lib/utils"

interface DefaultSectionWrapperProps {
    children: React.ReactNode;
    className?: string;
}

function DefaultSectionWrapper({ children, className }: DefaultSectionWrapperProps) {
    return (
        <section className={cn("container py-10 my-16", className)}>
            {children}
        </section>
    );
}

export default DefaultSectionWrapper;
