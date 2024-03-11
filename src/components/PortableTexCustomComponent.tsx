import Image from 'next/image';

export const myPortableTextComponents = {
    types: {
        image: ({ value }: any) => <Image src={value.imageUrl} width={500} height={500} alt="image" />,
        callToAction: ({ value, isInline }: any) =>
            isInline ? (
                <a href={value.url}>{value.text}</a>
            ) : (
                <div className="callToAction">{value.text}</div>
            ),
    },

    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <a className="text-blue-500 hover:underline font-extrabold" href={value.href} rel={rel}>
                    {children}
                </a>
            )
        },
    },
}