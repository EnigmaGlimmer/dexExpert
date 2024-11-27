"use client"
import { useState } from "react";
import Link from "next/link";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="px-4 py-8 sticky top-0 drop-shadow-xl z-20 bg-white">
            <div className="flex flex-row justify-between">
                <h1 className="text-xl font-bold mb-2 md:mb-0 md:text-2xl"><Link href="/">JASON JARRELL LLC</Link></h1>
                <div className="relative flex flex-col justify-between items-end">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="flex flex-col p-2 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 text-right">
                            <li>
                                <Link href="/" className="block py-2 px-3 md:p-0" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="block py-2 px-3 md:border-0 md:p-0">
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="block py-2 px-3 md:border-0 md:p-0">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="block py-2 px-3 md:border-0 md:p-0">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
