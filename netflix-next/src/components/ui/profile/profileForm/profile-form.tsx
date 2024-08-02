'use client'

import { COLORS } from "@/constants/color.constans"
import { Avatar, AvatarFallback, AvatarImage } from "../../avatar"
import { Input } from "../../input"
import { IProfileFormProps } from "./profile-form.interface"
import { SubmitHandler, useForm } from "react-hook-form"
import { IAuthForm, TypeUserForm } from "@/types/auth.types"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { InputForm } from "../../authForm/inputForm/input-form"
import { useInitialData } from "./useInitialData"
import { useUpdateSettings } from "./useUpdateSettings"
import { Button } from "../../button"
import { Loader } from "@/components/utils/loader/loader"
import { ArrowLeftIcon } from "lucide-react"
import { BackButton } from "../../back-button"
import { UserBlock } from "../../user-block/user-block"

const formSchema = z.object({
    email: z.string().email("Incorrect email"),
    password: z.union([z.string().min(6, "Weak passsword"), z.literal('')]),
    name: z.string().max(12, 'Too long')})

export const ProfileForm = () => {

    const {
        register, 
        handleSubmit, 
        formState: {errors},
        reset,
        resetField
    } = useForm<TypeUserForm>({
        mode: 'onChange',
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: undefined
        }
    })

    const {data, isLoading} = useInitialData(reset)

    const {mutate, isPending} = useUpdateSettings()

    const onSubmit: SubmitHandler<TypeUserForm> = data => {
        const { password, ...rest } = data

        mutate({
            ...rest,
            password: data.password || undefined
        })
        resetField("password")
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="flex gap-x-24 justify-center px-8 lg:px-20% py-5">
            <BackButton />
            <form onSubmit={handleSubmit(onSubmit)} className="bg-zinc-900 border-2 border-gray-700 rounded-sm w-96">
                <div className="flex flex-col gap-y-5 w-96 py-5 px-5">
                    <UserBlock location="settings" data={data!} />
                    <InputForm errors={errors} name="email" placeholder="Email" register={register} type="email" />
                    <InputForm errors={errors} name="name" placeholder="Name" register={register} type="name" />
                    <InputForm errors={errors} name='password' placeholder="Password" register={register} type="password" />
                    <div>
                        <Button 
                            type="submit"
                            disabled={isPending}
                            className="w-full"
                        >
                                Save
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}