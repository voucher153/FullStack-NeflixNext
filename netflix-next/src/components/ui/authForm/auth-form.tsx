'use client'

import { Button } from "../button"
import { toast } from 'sonner'
import { SubmitHandler, useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { IAuthForm } from "@/types/auth.types"
import { useMutation } from "@tanstack/react-query"
import { authService } from "@/services/auth.service"
import { PAGES } from "@/config/pages-url.config"
import { InputForm } from "./inputForm/input-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { isAxiosError } from "axios"
import { Redirect } from "./redirect/redirect"

const formSchema = z.object({
        email: z.string().email("Incorrect email"),
        password: z.string().min(6, "Weak passsword"),
        name: z.string().max(12, 'Too long')})

export const AuthForm = ({type}: {type: 'login' | 'register'}) => {

    const {
        register, 
        handleSubmit, 
        formState: {errors},
        reset,
    } = useForm<IAuthForm>({
        mode: 'all',
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ''
        }
    })

    const {push} = useRouter()

    const {mutate} = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data: IAuthForm) => authService.main(type, data),
        onSuccess() {
            toast.success(type === 'login' ? 'Successfully login' : 'Account created')
            reset()
            push(PAGES.HOME)
        },
        onError(error) {
            if (isAxiosError(error)) {
                toast.error(error.response?.data!.message)
            }
        }
    })

    const onSubmit: SubmitHandler<IAuthForm> = async (data) => {
        
        mutate(data)
    }

    return (
        <div className="absolute mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-3xl font-semibold capitalize text-white">
                    {type}
                </h1>
                <div className="space-y-4 mt-5">
                    <InputForm errors={errors} name="email" type="email" placeholder="Email" register={register} />
                    {type === 'register' ? (
                        <InputForm errors={errors} name="name" type="name" placeholder="Name (optional)" register={register} />
                    ) : (
                        null
                    )}
                    <InputForm errors={errors} name="password" type="password" placeholder="Password" register={register} />
                    <Button
                        type="submit"
                        variant="destructive"
                        className="w-full capitalize bg-[#e50914]"
                    >
                        {type}
                    </Button>
                </div>
            </form>
            {type === 'login' ? 
                <Redirect text="New to Netflix?" type="register" /> :
                <Redirect text="Already have account?" type="login" />}
        </div>
    )
}