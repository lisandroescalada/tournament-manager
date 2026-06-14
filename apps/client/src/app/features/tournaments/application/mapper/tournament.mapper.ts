import { Tournament } from "../../domain/model/tournament.model"
import { OrganizationId } from "../../domain/value-objects/organization-id.value-object"
import { TournamentId } from "../../domain/value-objects/tournament-id.value-object"
import { TournamentDTO } from "../../infrastructure/dto/tournament.dto"

export class TournamentMapper {
    static fromApiToDomain(apiTournament: TournamentDTO): Tournament {
        return Tournament.create(
            TournamentId.fromNumber(apiTournament.id),
            OrganizationId.fromNumber(apiTournament.organizationId),
            apiTournament.name,
            apiTournament.sport,
            apiTournament.season,
            apiTournament.logo,
            apiTournament.description,
            new Date(apiTournament.startDate),
            new Date(apiTournament.endDate),
            apiTournament.status
        )
    }

    static fromDomainToApi(tournament: Tournament): TournamentDTO {
        return {
            id: tournament.id.value,
            organizationId: tournament.organizationId.value,
            name: tournament.name,
            sport: tournament.sport,
            season: tournament.season,
            logo: tournament.logo,
            description: tournament.description,
            startDate: tournament.startDate,
            endDate: tournament.endDate,
            status: tournament.status
        }
    }
}
