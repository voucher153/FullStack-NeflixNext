import Image from "next/image";
import React from "react";
import BgImage from "../../../public/login_background.jpg"
import Logo from "../../../public/netflix_logo.svg"
import { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/constants/seo.constans";

export const metadata: Metadata = {
    title: 'Auth',
    ...NO_INDEX_PAGE
}

export default function AuthLayout({children}: {children: React.ReactNode}) {

    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
            <Image 
                src={BgImage} 
                alt="bg-img"
                className="hidden sm:flex sm:object-cover -z=10" 
                priority
                fill
            />
            <Image 
                src={Logo}
                alt="netflix-logo"
                width={120}
                height={120}
                className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
                priority
            />
            {children}
        </div>
    )
}