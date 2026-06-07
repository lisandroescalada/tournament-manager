import { TournamentDTO } from "../../infrastructure/dto/tournament.dto"
import { Tournament } from "../model/tournament.model"

export class TournamentMapper {
    static fromApiToDomain(apiTournament: TournamentDTO): Tournament {
        return {
            id: apiTournament.id,
            name: apiTournament.name,
            sport: apiTournament.sport
        }
    }
}
