import { Organization } from "../entity/organization.entity"

export interface OrganizationRepository {
    findAll(): Promise<Organization[]>
}
