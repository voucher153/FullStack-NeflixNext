import { IsString } from "class-validator";

export class WatchListDto {

    @IsString()
    movieId: string
}