import React from 'react'
import { getSanityNavigationMenu } from '@/lib/sanityHelpers'
import Navbar from '@/components/Navbar';
import { sanityImageBuilder } from '@/lib/sanityClient';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
interface NavbarProps {
    _id: string;
    title: string;
    menuItems: {
        _id: string;
        url: string;
        path: string;

    }[];
    logo?: any;
}

export async function NavbarServer() {
    const nav = await getSanityNavigationMenu('main') as NavbarProps;
    const logo = sanityImageBuilder.image(nav.logo).width(150).url() || "/logo-demo.png";

    return (
        <>
            <Navbar menuItems={nav.menuItems} logo={logo} />
        </>
    )
}
