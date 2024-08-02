'use client'

import { useMutation } from "@tanstack/react-query"
import { AuthForm } from "../authForm/auth-form"
import { useRouter } from "next/navigation"
import { authService } from "@/services/auth.service"

export default function Home() {

    const {push} = useRouter()

    const {mutate} = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess() {
            push('/login')
        }
    })

    const onSub = async () => {
        mutate()
    }

    return (
        <div className="c-white">
            <span onClick={onSub}>logout</span>
        </div>
    )
}