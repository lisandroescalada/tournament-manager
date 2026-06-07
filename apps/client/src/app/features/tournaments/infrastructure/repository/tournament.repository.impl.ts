import { Observable } from "rxjs"
import { TournamentRepository } from "../../domain/repository/tournament.repository"
import { TournamentService } from "../service/tournament"
import { Injectable } from "@angular/core"
import { Tournament } from "../../domain/model/tournament.model"

@Injectable({
    providedIn: 'root',
})
export class TournamentRepositoryImpl implements TournamentRepository {
    constructor(private tournamentService: TournamentService) {}

    getTournaments(): Observable<Tournament[]> {
        return this.tournamentService.getTournaments()
    }
}
