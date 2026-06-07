import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { TournamentDTO } from '../dto/tournament.dto'
import { map, Observable } from 'rxjs'
import { Tournament } from '../../domain/model/tournament.model'
import { TournamentMapper } from '../../domain/mapper/tournament.mapper'

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  private apiUrl = 'http://localhost:3000/tournaments/lensur'

  constructor(private http: HttpClient) {}

  getTournaments(): Observable<Tournament[]> {
    return this.http
      .get<TournamentDTO[]>(this.apiUrl)
      .pipe(map((apiTournament) => apiTournament.map(TournamentMapper.fromApiToDomain)));
  }
}
