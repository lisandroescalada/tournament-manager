import { Observable } from "rxjs"
import { TournamentRepository } from "../../domain/repository/tournament.repository"
import { Tournament } from "../../domain/model/tournament.model"

export class GetTournamentsUseCase {
    constructor(
        private readonly tournamentsRepository: TournamentRepository
    ) {}

    execute(): Observable<Tournament[]> {
        return this.tournamentsRepository.getTournaments()
    }
}
