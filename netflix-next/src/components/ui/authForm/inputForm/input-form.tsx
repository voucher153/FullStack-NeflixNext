import { COLORS } from "@/constants/color.constans";
import { Input } from "../../input";
import { InputFormProps } from "./input-format.interface";

export const InputForm = ({name, placeholder, register, type, errors, disabled, defaultValue=''}: InputFormProps) => {
    return (
        <div className="w-full inline-block">
            <Input
                {...register(type)}
                type={type == 'name' ? 'text' : type}
                name={name}
                placeholder={placeholder}
                className={`bg-[${COLORS.input}] placeholder:text-xs placeholder:text-gray-400 w-full inline-block`}
                defaultValue={defaultValue}
            />
            <span>{errors[type]?.message}</span>
        </div>
    );
}