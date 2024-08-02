import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma.service';
import { WatchListService } from 'src/watch-list/watch-list.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, WatchListService],
  exports: [UserService]
})
export class UserModule {}
