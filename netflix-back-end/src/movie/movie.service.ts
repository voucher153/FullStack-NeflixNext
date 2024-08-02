import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MovieDto } from './dto/movie.dto';

@Injectable()
export class MovieService {
    constructor(private prisma: PrismaService) {}

    async add(dto: MovieDto) {
        return this.prisma.movie.create({
            data: {
                id: '12',
                imageString: 'img',
                age: 12,
                duration: 1.2,
                title: 'title',
                overview: 'overview',
                release: 1,
                videoSource: 'video',
                youtubeString: 'you',
                category: 'cat'
            }
        })
    }
}
