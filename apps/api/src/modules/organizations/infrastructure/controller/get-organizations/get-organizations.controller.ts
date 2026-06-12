import { Controller, Get, HttpStatus, Response } from '@nestjs/common'
import { GetOrganizations } from 'src/modules/organizations/application/use-cases/get-organizations.use-case'

@Controller('organizations')
export class GetOrganizationsController {
    constructor(private readonly getOrganizations: GetOrganizations) {}

    @Get()
    async execute(@Response() response): Promise<Response> {
        try {
            const organizations = await this.getOrganizations.execute()
            return response.status(HttpStatus.OK).json(organizations)
        } catch (error: any) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json()
        }
    }
}
