import { IAuthForm, TypeUserForm } from "@/types/auth.types"
import { FieldErrors, UseFormRegister } from "react-hook-form"

export interface InputFormProps {
    name: string
    type: 'password' | 'email' | 'name'
    placeholder: string
    register: UseFormRegister<any>
    errors: FieldErrors<IAuthForm>
    defaultValue?: string,
    disabled?: boolean
}