import { IsEmail, IsOptional, IsString, MinLength } from "class-validator"

export class UserDto {
    @IsEmail()
    @IsOptional()
    email?: string

    @IsOptional()
    @IsString()
    name?: string

    @IsString()
    @IsOptional()
    @MinLength(6, {
        message: 'minimum lenght is 6'
    })
    password?: string

    @IsOptional()
    @IsString()
    userImage?: string
}