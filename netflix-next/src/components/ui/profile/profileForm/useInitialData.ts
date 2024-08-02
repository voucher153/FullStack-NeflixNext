import { useProfile } from "@/hooks/hooks"
import { TypeUserForm } from "@/types/auth.types"
import { useEffect } from "react"
import { UseFormReset } from "react-hook-form"

export const useInitialData = (reset: UseFormReset<TypeUserForm>) => {
    const { data, isLoading, isSuccess } = useProfile()

    useEffect(() => {
        if (isSuccess && data) {
            reset({
                email: data.user.email!,
                name: data.user.name,
                userImage: data.user.userImage
            })
        }
    }, [isSuccess])

    return { data, isLoading }
}