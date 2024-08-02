import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { hash } from 'argon2';
import { UserDto } from './dto/user.dto';
import { WatchListService } from 'src/watch-list/watch-list.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private watchList: WatchListService
  ) {}
  
  getById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id
      }
    })
  }

  getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email
      }
    })
  }

  async create(dto: AuthDto) {
    const user = {
      email: dto.email,
      password: await hash(dto.password),
      name: dto.name || '',
      userImage: ''
    }

    return this.prisma.user.create({
      data: user,
    })
  }

  async update(id: string, dto: UserDto) {
    let data = dto
    
    if (data.password) {
      data = { ...dto, password: await hash(data.password) }
    }

    return this.prisma.user.update({
      where: {
        id
      },
      data,
      select: {
        email: true
      }
    })
  }

  async getProfile(id: string) {
    const profile = await this.getById(id)
    
    const watchList = await this.watchList.getAll(id)

    const { password, ...rest } = profile

    return {
      user: rest,
      watchList
    }
  }
}
