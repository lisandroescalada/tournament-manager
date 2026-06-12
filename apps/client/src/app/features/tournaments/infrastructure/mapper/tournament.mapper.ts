import { TournamentDTO } from "../dto/tournament.dto"
import { Tournament } from "../../domain/model/tournament.model"

export class TournamentMapper {
    static fromApiToDomain(apiTournament: TournamentDTO): Tournament {
        return {
            id: apiTournament.id,
            organizationId: apiTournament.organizationId,
            name: apiTournament.name,
            sport: apiTournament.sport,
            season: apiTournament.season,
            logo: apiTournament.logo,
            description: apiTournament.description,
            startDate: apiTournament.startDate,
            endDate: apiTournament.endDate,
            status: apiTournament.status
        }
    }
}
