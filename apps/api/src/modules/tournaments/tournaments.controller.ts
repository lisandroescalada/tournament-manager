import { Controller, Get } from '@nestjs/common';

@Controller('tournaments')
export class TournamentsController {

    @Get('')
    getLensur() {
        return [
            {
                id: 1,
                organizationId: 10,
                name: "Liga Lensur 2026",
                sport: "Swimming",
                season: "2026",
                logo: "https://example.com/logos/lensur.png",
                description: "Campeonato regional de natación Lensur 2026",
                startDate: new Date(2026, 2, 1),
                endDate: new Date(2026, 5, 30),
                status: true
            },
            {
                id: 2,
                organizationId: 11,
                name: "Copa Mediterránea",
                sport: "Swimming",
                season: "2026",
                logo: "https://example.com/logos/mediterranea.png",
                description: "Torneo internacional de natación en el Mediterráneo",
                startDate: new Date(2026, 6, 10),
                endDate: new Date(2026, 6, 20),
                status: true
            },
            {
                id: 3,
                organizationId: 12,
                name: "Open Valencia Masters",
                sport: "Swimming",
                season: "2026",
                logo: "https://example.com/logos/valencia-masters.png",
                description: "Competencia masters en piscina olímpica de Valencia",
                startDate: new Date(2026, 4, 5),
                endDate: new Date(2026, 4, 12),
                status: false
            },
            {
                id: 4,
                organizationId: 10,
                name: "Liga Nacional Juvenil",
                sport: "Swimming",
                season: "2026",
                logo: "https://example.com/logos/juvenil.png",
                description: "Liga nacional categoría juvenil de natación",
                startDate: new Date(2026, 1, 15),
                endDate: new Date(2026, 3, 15),
                status: true
            }
        ]
    }
}
