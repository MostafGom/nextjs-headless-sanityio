import React from 'react'
import { getSanityNavigationMenu } from '@/lib/sanityHelpers'
import Navbar from '@/components/Navbar';
import { urlForSanityImage } from '@/lib/sanityClient';
interface NavbarProps {
    _id: string;
    title: string;
    menuItems: {
        _id: string;
        url: string;
        path: string;

    }[];
    logo?: string;
}

export async function NavbarServer() {
    const nav = await getSanityNavigationMenu('main') as NavbarProps;
    const logo = urlForSanityImage(nav.logo).width(150).url() || "/logo-demo.png";

    return (
        <>
            <Navbar menuItems={nav.menuItems} logo={logo} />
        </>
    )
}
