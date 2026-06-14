import { Controller, Get } from '@nestjs/common';

@Controller('tournaments')
export class TournamentsController {

    @Get('')
    getLensur() {
        return [
            {
                id: '550e8400-e29b-41d4-a716-446655440000',
                organizationId: '550e8400-e29b-41d4-a716-446655440000',
                name: "Liga Lensur 2026",
                sport: "Swimming",
                season: "2026",
                logo: "https://example.com/logos/lensur.png",
                description: "Campeonato regional de natación Lensur 2026",
                startDate: new Date(2027, 1, 1),
                endDate: new Date(2027, 12, 31),
                status: true
            }
        ]
    }
}
