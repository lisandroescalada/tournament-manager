
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
