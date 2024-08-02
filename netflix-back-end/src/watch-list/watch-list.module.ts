import { Module } from '@nestjs/common';
import { WatchListService } from './watch-list.service';
import { WatchListController } from './watch-list.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [WatchListController],
  providers: [WatchListService, PrismaService],
})
export class WatchListModule {}
