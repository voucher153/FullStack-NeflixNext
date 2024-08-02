import { userService } from "@/services/user.service"
import { TypeUserForm } from "@/types/auth.types"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { RefObject, useEffect, useRef, useState } from "react"
import { UseFormReset } from "react-hook-form"
import { toast } from "sonner"

export const useOutsideClick = (value: boolean, ref: RefObject<HTMLDivElement>) => {
    const [isActive, setIsActive] = useState(value)

    useEffect(() => {
        const handleClick = (e: any) => {
            console.log(isActive)
            if (ref.current && !ref.current.contains(e.target)) {
                setIsActive(false)
            }
        }

        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [ isActive ])

    return {isActive, setIsActive}
}


export const useProfile = () => {
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['profile'],
        queryFn: () => userService.getProfile()
    })
    return { data, isLoading, isSuccess }
}