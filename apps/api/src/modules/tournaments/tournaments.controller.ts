import { Controller, Get } from '@nestjs/common';

@Controller('tournaments')
export class TournamentsController {

    @Get('lensur')
    getLensur() {
        return [{"id": 1,"name": "Liga Lensur 2026", "sport": "Swimming"}]
    }
}
