import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, MoonIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "@remix-run/react";

const navigation = [
    { name: 'Solutions', href: '#', current: false },
    { name: 'Portfolio', href: '#', current: false },
    { name: 'About', href: '#', current: false },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    return (
        <Disclosure as="nav" className="dark:bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:bg-gray-300 text-gray-700 hover:text-black">
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
                                    <svg className="w-16" viewBox="0 0 795.02 342.67">
                                        <path className="dark:fill-[#6f67fa]" fill="#1a183b"
                                            d="m0,0h100.57l36.21,191.84L189.78,0h100.21l53.13,191.58L379.36,0h100.05l-75.54,342.67h-103.84l-60.1-215.75-59.87,215.75h-103.84L0,0Z" />
                                        <path className="dark:fill-[#524cba]" fill="#36327a"
                                            d="m489.06.97h95.13l-19.21,88.47h-95.13L489.06.97Zm-25.67,119.33h95.13l-48.49,221.29h-95.13l48.49-221.29Z" />
                                        <path className="dark:fill-[#36327a]" fill="#524cba" d="m595.38,0h95.37l-74.35,341.59h-95.37L595.38,0Z" />
                                        <path className="dark:fill-[#1a183b]" fill="#6f67fa" d="m699.65,0h95.37l-74.35,341.59h-95.37L699.65,0Z" />
                                    </svg>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'text-black bg-gray-300 dark:bg-gray-900 dark:text-white' : 'text-gray-700 hover:text-black hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="p-3 relative rounded-full text-gray-700 hover:text-black hover:bg-gray-300 dark:bg-gray-800 p-1 dark:text-gray-400 dark:text-transparent dark:hover:bg-gray-700"
                                    onClick={() => {
                                        const root = document.getElementsByTagName('html')[0];
                                        root.className = root.className == 'dark' ? '' : 'dark';
                                    }}
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Dark Mode</span>
                                    <MoonIcon className="h-6 w-6 dark:fill-white" aria-hidden="true" />
                                </button>
                                <Link className="hidden sm:block mx-3 px-5 py-2 rounded-full font-bold text-white bg-[#6f67fa] hover:bg-[#524cba]" to="#">Get Started</Link>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'text-black bg-gray-300 dark:bg-gray-900 dark:text-white' : 'text-gray-700 hover:text-black hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
