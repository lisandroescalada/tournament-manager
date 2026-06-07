import { Observable } from "rxjs"
import { Tournament } from "../model/tournament.model"

/**
 * Interfaz que contiene los métodos para interactuar con la fuente de datos de los torneos.
 * Por ejemplo, una API.
 * Así, de esta manera, la capa de dominio puede comunicarse con la fuente de datos sin depender de una implementación específica.
*/
export abstract class TournamentRepository {
    abstract getTournaments(): Observable<Tournament[]>
}
