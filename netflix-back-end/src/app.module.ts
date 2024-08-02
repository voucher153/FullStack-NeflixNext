import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { WatchListModule } from './watch-list/watch-list.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, WatchListModule, MovieModule]
})
export class AppModule {}
