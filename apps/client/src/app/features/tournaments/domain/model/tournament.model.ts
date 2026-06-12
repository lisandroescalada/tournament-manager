// Este modelo define la estructura de datos de un torneo en la aplicación.
export class Tournament {
    constructor(
        public id: number,
        public organizationId: number,
        public name: string,
        public sport: string,
        public season: string,
        public logo: string,
        public description: string,
        public startDate: Date,
        public endDate: Date,
        public status: boolean
    ) {}
}
