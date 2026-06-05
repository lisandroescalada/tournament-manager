import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentsController } from './tournaments/tournaments.controller';
import { TournamentsService } from './tournaments/tournaments.service';
import { TournamentsModule } from './tournaments/tournaments.module';

@Module({
  imports: [TournamentsModule],
  controllers: [AppController, TournamentsController],
  providers: [AppService, TournamentsService],
})
export class AppModule {}
