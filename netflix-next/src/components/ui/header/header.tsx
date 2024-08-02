import Link from "next/link"
import { NavBar } from "./navbar/navbar"
import { PAGES } from "@/config/pages-url.config"
import Image from "next/image"
import Logo from "../../../../public/netflix_logo.svg"
import { Bell, Search } from "lucide-react"
import { UserNav } from "./userNav/user-nav"

export const Header = () => {
    return (
        <header className="w-full max-w-full mx-auto items-center justify-between px-2 sm:px-6 py-5 lg:px-8 flex">
            <div className="w-full flex">
                <Link href={PAGES.HOME} className="w-32">
                    <Image src={Logo} alt="Netiflix Logo" priority />
                </Link>
                <NavBar />
            </div>
            <div className="flex items-center gap-x-8">
                <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
                <UserNav />
            </div>
        </header>
    )
}