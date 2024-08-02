import { Body, Controller, Delete, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { WatchListService } from './watch-list.service';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { WatchListDto } from './dto/watch-list.dto';

@Controller('user/watch-list')
export class WatchListController {
  constructor(private readonly watchListService: WatchListService) {}

  @Get()
  @Auth()
  async getAll( @CurrentUser('id') userId: string ) {
    return this.watchListService.getAll(userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async add( @Body() dto: WatchListDto, @CurrentUser('id') userId: string ) {
    return this.watchListService.add(dto, userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Delete()
  @Auth()
  async delete( @Body() dto: WatchListDto, @CurrentUser('id') userId: string ) {
    return this.watchListService.delete(dto, userId)
  }
}
