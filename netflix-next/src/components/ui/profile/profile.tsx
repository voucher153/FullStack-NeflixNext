'use client'

import { Loader } from "@/components/utils/loader/loader"
import { useProfile } from "@/hooks/hooks"
import Image from "next/image"
import { Input } from "../input"
import { COLORS } from "@/constants/color.constans"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import { UserBlock } from "../user-block/user-block"

export const Profile = () => {
    
    const { data, isLoading } = useProfile()

    if (isLoading) (<Loader />)

    return (
        <div>
            <div className="mx-0 my-auto px-8 lg:px-20% py-5">
                <UserBlock location="profile" data={data!} />
                <div className={`w-full h-1 rounded-sm mt-12 bg-[#b0b0b0]`}></div>
            </div>
        </div>
    );
}