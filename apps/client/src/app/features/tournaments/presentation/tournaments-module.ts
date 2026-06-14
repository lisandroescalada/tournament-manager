import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TournamentsRoutingModule } from './tournaments-routing-module'
import { TournamentMockRepository } from '../infrastructure/repository/tournament-mock.repository'
import { GetTournamentsQuery } from '../application/queries/get-tournaments.query'
import { TournamentApiRepository } from '../infrastructure/repository/tournament-api.repository'

@NgModule({
  imports: [
    CommonModule,
    TournamentsRoutingModule
  ],
  providers: [
    {
      provide: GetTournamentsQuery,
      useFactory: (repo: TournamentApiRepository) => {
          return new GetTournamentsQuery(repo)
      },
      deps: [TournamentApiRepository]
    }
  ]
})
export class TournamentsModule { }
