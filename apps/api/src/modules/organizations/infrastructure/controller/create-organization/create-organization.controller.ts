import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common'
import type { Response, Request } from 'express'
import { CreateOrganization } from 'src/modules/organizations/application/use-cases/create-organizations.use-case'

@Controller('organization')
export class CreateOrganizationController {
    constructor(private readonly createOrganization: CreateOrganization) {}

    @Post()
    async execute(@Req() request: Request, @Res() response: Response) {
        try {
            await this.createOrganization.execute()
            return response.status(HttpStatus.CREATED).json()
        } catch (error: any) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json()
        }
    }
}
