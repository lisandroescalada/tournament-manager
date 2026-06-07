// Este modelo define la estructura de datos de un torneo en la aplicación.
export class Tournament {
    constructor(
        public id: number,
        public name: string,
        public sport: string
    ) {}
}
