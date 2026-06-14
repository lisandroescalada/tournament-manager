import { Component, DestroyRef, inject, OnInit } from '@angular/core'
import { Tournament } from '../../../domain/model/tournament.model'
import { IonicModule } from '@ionic/angular'
import { DatePipe } from '@angular/common'
import { TournamentRepositoryError } from '../../../domain/exceptions/tournament-repository.exception'
import { GetTournamentsQuery } from '../../../application/queries/get-tournaments.query'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { TournamentsStatusPipe } from '../../pipes/tournaments-status-pipe'

@Component({
  selector: 'app-list-tournaments',
  standalone: true,
  imports: [IonicModule, DatePipe, TournamentsStatusPipe],
  templateUrl: './list-tournaments.component.html',
  styleUrls: ['./list-tournaments.component.scss'],
})
export class ListTournamentsComponent implements OnInit {
  tournaments: Tournament[] = []
    isLoading = false
    error: TournamentRepositoryError | null = null

  private destroyRef = inject(DestroyRef);
  
  constructor(private getTournamentsQuery: GetTournamentsQuery) { }

  ngOnInit() {
    this.loadTournaments()
  }

  loadTournaments() {
    this.isLoading = true
    this.error = null

    this.getTournamentsQuery.execute()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (tournaments: Tournament[]) => {
          this.tournaments = tournaments
          this.isLoading = false
        },
        error: (error: TournamentRepositoryError | Error) => {
          this.error = error instanceof TournamentRepositoryError
            ? error
            : new TournamentRepositoryError('Error desconocido')
          this.isLoading = false
          this.logError()
        }
      })
  }

  private logError() {
      if (this.error) {
        console.error('Error al cargar el torneo:', this.error.message, this.error.originalError)
      }
  }
}
