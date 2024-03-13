import React from 'react'
import { getSanityImageUrl, getSanityNavigationMenu } from '@/lib/sanityClient'
import Navbar from '@/components/Navbar';
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
    const logo = getSanityImageUrl(nav.logo, 150) || "/logo-demo.png";

    return (
        <>
            <Navbar menuItems={nav.menuItems} logo={logo} />
        </>
    )
}
