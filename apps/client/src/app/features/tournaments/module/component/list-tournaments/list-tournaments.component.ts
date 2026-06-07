import { Component, OnInit } from '@angular/core'
import { Tournament } from '../../../domain/model/tournament.model'
import { TournamentRepository } from '../../../domain/repository/tournament.repository'
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-list-tournaments',
  templateUrl: './list-tournaments.component.html',
  styleUrls: ['./list-tournaments.component.scss'],
  imports: [IonicModule]
})
export class ListTournamentsComponent  implements OnInit {
  tournaments: Tournament[] = []

  constructor(private tournamentRepository: TournamentRepository) { }

  ngOnInit() {
    this.loadTournaments()
  }

  loadTournaments() {
    this.tournamentRepository.getTournaments().subscribe({
      next: (tournaments: Tournament[]) => {
        this.tournaments = tournaments
      },
      error: (error: any) => {
        console.error('Error al cargar los torneos:', error)
      }
    })
  }
}
