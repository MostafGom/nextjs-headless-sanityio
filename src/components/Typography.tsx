import { cn } from "@/lib/utils"
import { DefaultTypographyProps } from "@/types"


export function TypographyH1({ content, className }: DefaultTypographyProps) {
    return (
        <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
            {content}
        </h1>
    )
}

export function TypographyH2({ content, className }: DefaultTypographyProps) {
    return (
        <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
            {content}
        </h2>
    )
}
export function TypographyH3({ content, className }: DefaultTypographyProps) {
    return (
        <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
            {content}
        </h3>
    )
}
export function TypographyH4({ content, className }: DefaultTypographyProps) {
    return (
        <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
            {content}
        </h4>
    )
}

export function TypographyP({ content, className }: DefaultTypographyProps) {
    return (
        <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
            {content}
        </p>
    )
}
export function TypographyBlockquote({ content, className }: DefaultTypographyProps) {
    return (
        <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
            {content}
        </blockquote>
    )
}
export function TypographyList({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
            {children}
        </ul>
    )
}
export function TypographyInlineCode({ content, className }: DefaultTypographyProps) {
    return (
        <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)}>
            {content}
        </code>
    )
}
export function TypographyLead({ content, className }: DefaultTypographyProps) {
    return (
        <p className={cn("text-xl text-muted-foreground", className)}>
            {content}
        </p>
    )
}
export function TypographyLarge({ content, className }: DefaultTypographyProps) {
    return <div className={cn("text-lg font-semibold", className)}>  {content}</div>
}
export function TypographySmall({ content, className }: DefaultTypographyProps) {
    return (
        <small className={cn("text-sm font-medium leading-none", className)}>  {content}</small>
    )
}
