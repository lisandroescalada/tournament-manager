import { Component, OnInit } from '@angular/core'
import { Tournament } from '../../../domain/model/tournament.model'
import { IonicModule } from '@ionic/angular'
import { DatePipe } from '@angular/common'
import { GetTournamentsUseCase } from '../../../application/use-cases/get-tournaments.use-case'

@Component({
  selector: 'app-list-tournaments',
  standalone: true,
  imports: [IonicModule, DatePipe],
  templateUrl: './list-tournaments.component.html',
  styleUrls: ['./list-tournaments.component.scss'],
})
export class ListTournamentsComponent implements OnInit {
  tournaments: Tournament[] = []

  constructor(private getTournamentsUseCase: GetTournamentsUseCase) { }

  ngOnInit() {
    this.loadTournaments()
  }

  loadTournaments() {
    this.getTournamentsUseCase.execute().subscribe({
      next: (tournaments: Tournament[]) => {
        this.tournaments = tournaments
      },
      error: (error: any) => {
        console.error('Error al cargar los torneos:', error)
      }
    })
  }
}
