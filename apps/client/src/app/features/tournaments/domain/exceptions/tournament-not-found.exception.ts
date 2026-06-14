
export class TournamentNotFoundError extends Error {
    constructor(id: string) {
        super(`No se encontró el torneo con ID ${id}`)
        this.name = 'TournamentNotFoundError'
    }
}
