import { IsEmail, IsOptional, IsString, MinLength } from "class-validator"


export class AuthDto {

    @IsString()
    @IsOptional()
    name?: string

    @IsEmail()
    email: string

    @MinLength(6, {
        message: 'minimum lenght is 6'
    })
    @IsString()
    password: string
}