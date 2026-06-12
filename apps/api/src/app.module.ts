import { Module } from '@nestjs/common'
import { TournamentsModule } from './modules/tournaments/tournaments.module'
import { OrganizationsModule } from './modules/organizations/infrastructure/module/organizations.module'

@Module({
  imports: [
    TournamentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
