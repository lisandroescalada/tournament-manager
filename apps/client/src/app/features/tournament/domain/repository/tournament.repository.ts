import { Observable } from "rxjs";
import { Tournament } from "../models/tournament.model";

export abstract class TournamentRepository {
    abstract getTournaments(): Observable<Tournament[]>
    abstract getTournamentById(id: number): Observable<Tournament>
}
