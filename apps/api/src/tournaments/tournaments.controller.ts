import { Controller, Get } from '@nestjs/common';

@Controller('tournaments')
export class TournamentsController {

    @Get('lensur')
    getLensur() {
        return {"name": "Liga Lensur 2026", "sport": "Swimming"}
    }
}
