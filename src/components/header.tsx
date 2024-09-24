import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {BiLogoFacebookSquare, BiLogoLinkedinSquare} from "react-icons/bi";
import {FaInstagramSquare} from "react-icons/fa"
import Image from "next/image";
import React from "react";
import Link from "next/link";

const navigation = [
    { name: "Nosotros", href:"otrapag", current: false },
    { name: "Cursos", href: "otrapag", current: false},
    { name: "Tareas",href: "otrapag", current: false}
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {


    return (
        <Disclosure as="nav" className="bg-dojo-400">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Abrir menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>

                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">

                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <a href="/">
                            <div className="flex flex-shrink-0 items-center">
                                {/*FALTA LOGOOOOASBBH*/}
                                <img
                                    src="/logo.svg"
                                    className="h-8 w-auto"
                                />
                            </div>
                            </a>
                        </div>

                        <div className="hidden sm:ml-6 sm:block ">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-dojo-600 text-white' : 'text-white hover:bg-dojo-300 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}

                                <Link
                                    href={"/login"}
                                    className="bg-dojo-900 text-white rounded-md px-3 py-2 text-sm font-medium"

                                >
                                    Login
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    </div>
                </div>
            </div>


            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>

        </Disclosure>
    )
}