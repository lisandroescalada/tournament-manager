import { Observable } from "rxjs"
import { Tournament } from "../model/tournament.model"

export abstract class TournamentRepository {
    abstract getTournaments(): Observable<Tournament[]>
    // abstract getTournamentById(id: TournamentId): Observable<Tournament>
    // abstract createTournament(tournament: Tournament): Observable<Tournament>
    // abstract updateTournament(id: TournamentId, tournament: Partial<Tournament>): Observable<Tournament>
    // abstract deleteTournaments(id: TournamentId): Observable<void>
}
