'use client'

import { Avatar, AvatarFallback, AvatarImage } from "../../avatar"
import { Button } from "../../button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../dropdown-menu"
import { PAGES } from "@/config/pages-url.config"
import { useState, useEffect } from 'react'
import { useProfile } from "@/hooks/hooks"
import { Loader } from "@/components/utils/loader/loader"
import Link from "next/link"

export const UserNav = () => {
    
    const { data, isLoading } = useProfile()

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (isLoading) return <Loader />

    return (
        <>
            {isClient ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-10 w-10 rounded-full" >
                            <Avatar className="h-10 w-10 rounded-full" >
                                {data?.user.userImage ? (
                                    <AvatarImage src={data?.user.userImage!} />
                                    ) : (
                                    <AvatarFallback className="rounded-full">
                                        {data?.user.name!.charAt(0) || 'A'}
                                    </AvatarFallback>
                                )}
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount >
                        <DropdownMenuLabel>
                            {data?.user.name || 'Anonim'}
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                        <Link href="/user/profile">
                                <DropdownMenuItem>
                                    My Profile
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/settings">
                                <DropdownMenuItem>
                                    Settings
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                ) : null}
        </>
    )
}