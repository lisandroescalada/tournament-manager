import { catchError, Observable, throwError } from "rxjs"
import { TournamentRepository } from "../../domain/repository/tournament.repository"
import { Tournament } from "../../domain/model/tournament.model"
import { TournamentRepositoryError } from "../../domain/exceptions/tournament-repository.exception"

export class GetTournamentsQuery {
    constructor(
        private readonly tournamentsRepository: TournamentRepository
    ) {}

    execute(): Observable<Tournament[]> {
        return this.tournamentsRepository.getTournaments().pipe(
            catchError((error) => {
                const repositoryError = new TournamentRepositoryError(
                    'No se pudieron obtener los torneos.',
                    error
                )
                console.error(repositoryError)
                return throwError(() => repositoryError)
            })
        )
    }
}
