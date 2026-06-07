import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TournamentsRoutingModule } from './tournaments-routing-module'
import { TournamentRepository } from '../domain/repository/tournament.repository'
import { TournamentRepositoryImpl } from '../infrastructure/repository/tournament.repository.impl'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TournamentsRoutingModule
  ],
  providers: [
    {
      provide: TournamentRepository,
      useClass: TournamentRepositoryImpl
    }
  ]
})
export class TournamentsModule { }
