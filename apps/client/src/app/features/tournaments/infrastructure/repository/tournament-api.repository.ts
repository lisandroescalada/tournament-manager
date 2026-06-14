import { map, Observable } from "rxjs"
import { TournamentRepository } from "../../domain/repository/tournament.repository"
import { Injectable } from "@angular/core"
import { Tournament } from "../../domain/model/tournament.model"
import { HttpClient } from "@angular/common/http"
import { TournamentDTO } from "../dto/tournament.dto"
import { TournamentMapper } from "../../application/mapper/tournament.mapper"

@Injectable({
    providedIn: 'root',
})
export class TournamentApiRepository implements TournamentRepository {

    private apiUrl = 'http://localhost:3000/tournaments'

    constructor(private http: HttpClient) {}

    getTournaments(): Observable<Tournament[]> {
        return this.http
            .get<TournamentDTO[]>(this.apiUrl)
            .pipe(map((apiTournament) => apiTournament.map(TournamentMapper.fromApiToDomain)))
    }
}
