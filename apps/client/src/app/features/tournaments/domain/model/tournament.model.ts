import { InvalidTournamentError } from "../exceptions/invalid-tournament.exception";
import { OrganizationId } from "../value-objects/organization-id.value-object";
import { TournamentId } from "../value-objects/tournament-id.value-object";

export class Tournament {
    constructor(
        public id: TournamentId,
        public organizationId: OrganizationId,
        public name: string,
        public sport: string,
        public season: string,
        public logo: string,
        public description: string,
        public startDate: Date,
        public endDate: Date,
        public status: boolean
    ) {
        this.validate()
    }

    static create(
        id: TournamentId,
        organizationId: OrganizationId,
        name: string,
        sport: string,
        season: string,
        logo: string,
        description: string,
        startDate: Date,
        endDate: Date,
        status: boolean
    ): Tournament {
        return new this(
            id,
            organizationId,
            name,
            sport,
            season,
            logo,
            description,
            startDate,
            endDate,
            status
        )
    }

    private validate(): void {
        if (!this.name || this.name.trim().length === 0)
            throw new InvalidTournamentError('El nombre del torneo no puede estar vacío')

        if (!this.sport || this.sport.trim().length === 0)
            throw new InvalidTournamentError('El deporte del torneo no puede estar vacío')

        if (this.startDate >= this.endDate)
            throw new InvalidTournamentError('La fecha de inicio debe ser anterior a la fecha de finalización')

        if (this.startDate < new Date())
            throw new InvalidTournamentError('La fecha de inicio no puede ser anterior a la fecha actual')
    }

    isActive(): boolean {
        return this.status && 
            new Date() >= this.startDate &&
            new Date() <= this.endDate
    }

    isFinished(): boolean {
        return new Date() >= this.endDate
    }

    isUpcoming(): boolean {
        return new Date() < this.startDate
    }
}
