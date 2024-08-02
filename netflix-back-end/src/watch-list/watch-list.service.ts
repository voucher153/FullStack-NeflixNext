import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { WatchListDto } from './dto/watch-list.dto';

@Injectable()
export class WatchListService {
    constructor(private prisma: PrismaService) {}

    async getAll(userId: string) {
        return this.prisma.watchList.findMany({
            where: {
                userId
            }
        })
    }

    async add(dto: WatchListDto, userId: string) {
        return this.prisma.watchList.create({
            data: {
                userId,
                movie: {
                    connect: {
                        id: dto.movieId
                    }
                }
            }
        })
    }

    async delete(dto: WatchListDto, userId: string) {
        return this.prisma.watchList.deleteMany({
            where: {
                userId: userId,
                movieId: dto.movieId
            }
        })
    }
}
