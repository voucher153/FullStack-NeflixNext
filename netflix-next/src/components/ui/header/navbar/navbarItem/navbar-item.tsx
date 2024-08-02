'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavBarItem = ({id, href, name}: {id: number, href: string, name: string}) => {
    
    const pathname = usePathname()

    return (
        <li key={id} className="cursor-pointer">
            <Link
                href={href} 
                className={`font-normal ${pathname === href ? 'underline text-white' : 'text-gray-300'} text-sm `}
            >
                {name}
            </Link>
        </li>
    )
}