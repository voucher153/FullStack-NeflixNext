import { IsString } from "class-validator";

export class MovieDto {

    @IsString()
    id: string
}