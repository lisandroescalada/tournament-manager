export class TournamentRepositoryError extends Error {
    constructor(message: string, readonly originalError?: Error) {
        super(message)
        this.name = 'TournamentRepositoryError'
    }
}
