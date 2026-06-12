// Facilitan el intercambio de datos entre las capas de infraestructura y dominio, simplificando el manejo de datos en la aplicación.
export interface TournamentDTO {
    id: number
    organizationId: number
    name: string
    sport: string
    season: string,
    logo: string,
    description: string,
    startDate: Date,
    endDate: Date,
    status: boolean
}
