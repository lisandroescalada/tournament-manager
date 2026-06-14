import { Observable, of } from "rxjs"
import { Tournament } from "../../domain/model/tournament.model"
import { TournamentRepository } from "../../domain/repository/tournament.repository"
import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root',
})
export class TournamentMockRepository implements TournamentRepository {

    private tournaments: Tournament[] = []

    getTournaments(): Observable<Tournament[]> {
        return of(this.tournaments)
    }
}
