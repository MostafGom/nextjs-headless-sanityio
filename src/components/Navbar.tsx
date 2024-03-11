'use client'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import ModeToggle from '@/components/ModeToggles'


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({ menuItems, logo }: any) {
    // console.log(menuItems);
    const pathname = usePathname();


    return (
        <Disclosure as="nav" className="bg-black w-full py-3">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href="/">
                                        <Image
                                            className="h-auto w-full rounded-md"
                                            src={logo}
                                            alt="AI Sanity"
                                            width={150}
                                            height={150}
                                            style={{ height: 'auto', width: 'auto' }}
                                            sizes="100vw"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:flex items-center">
                                    <div className="flex  space-x-4">
                                        {menuItems.map((item: any) => (
                                            <Link
                                                key={item._id}
                                                href={item.path}
                                                className={classNames(
                                                    pathname === item.path ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={pathname === item.path ? 'page' : undefined}
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                        <ModeToggle />

                                    </div>

                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {menuItems.map((item: any) => (
                                <Link key={item._id} href={item.path}>
                                    <Disclosure.Button
                                        as="div"
                                        className={classNames(
                                            pathname === item.path ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={pathname === item.path ? 'page' : undefined}
                                    >
                                        {item.title}
                                    </Disclosure.Button>
                                </Link>
                            ))}
                            <div className='px-3 py-2'>
                                <ModeToggle />
                            </div>
                        </div>

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
