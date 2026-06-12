import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TournamentsRoutingModule } from './tournaments-routing-module'
import { GetTournamentsUseCase } from '../application/use-cases/get-tournaments.use-case'
import { TournamentApiRepository } from '../infrastructure/repository/tournament-api.repository'

@NgModule({
  imports: [
    CommonModule,
    TournamentsRoutingModule
  ],
  providers: [
    {
      provide: GetTournamentsUseCase,
      useFactory: (repository: TournamentApiRepository) => {
          return new GetTournamentsUseCase(repository)
      },
      deps: [TournamentApiRepository]
    }
  ]
})
export class TournamentsModule { }
