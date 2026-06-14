export class InvalidTournamentError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'InvalidTournamentError'
    }
}
