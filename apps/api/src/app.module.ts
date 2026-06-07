import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentsController } from './modules/tournaments/tournaments.controller';
import { TournamentsService } from './modules/tournaments/tournaments.service';
import { TournamentsModule } from './modules/tournaments/tournaments.module';
import { OrganizationsController } from './modules/organizations/organizations.controller';
import { OrganizationsModule } from './modules/organizations/organizations.module';

@Module({
  imports: [TournamentsModule, OrganizationsModule],
  controllers: [AppController, TournamentsController, OrganizationsController],
  providers: [AppService, TournamentsService],
})
export class AppModule {}
