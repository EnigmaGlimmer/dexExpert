import Link from "next/link";

export default function Header() {
    return (
        <nav className="px-4 py-8 sticky top-0 drop-shadow-xl z-20 bg-white">
            <div className="flex flex-col justify-between sm:flex-row">
                <h1 className="text-2xl font-bold mb-2 md:mb-0">JASON JARRELL LLC</h1>
                <div className="flex flex-row justfiy-center sm:justify-evenly align-middle gap-6">
                    <div><Link href="/">Home</Link></div>
                    <div><Link href="/services">Service</Link></div>
                    <div><Link href="/portfolio">Portfolio</Link></div>
                    <div><Link href="contact">Contract</Link></div>
                </div>
            </div>
        </nav>
    )
}