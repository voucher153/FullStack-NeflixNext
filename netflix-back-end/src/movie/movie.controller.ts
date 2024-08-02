import { Body, Controller, Delete, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { MovieDto } from './dto/movie.dto';

@Controller('user/movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async add(@Body() dto: MovieDto) {
    return this.movieService.add(dto)
  }

}
