import { Module } from '@nestjs/common'
import { GetOrganizationsController } from '../controller/get-organizations/get-organizations.controller'
import { GetOrganizations } from '../../application/use-cases/get-organizations.use-case'

@Module({
  imports: [],
  controllers: [
    GetOrganizationsController
  ],
  providers: [
    GetOrganizations
  ],
  exports: []
})
export class OrganizationsModule {}
