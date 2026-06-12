import { OrganizationId } from "../value-object/organization-id.value-object"

export class Organization {
    private constructor(
        public id: OrganizationId,
        public name: string,
        public logo: string,
        public subdomain: string,
        public createdAt: Date,
        public updatedAt: Date
    ) {}

    static create({ name, logo, subdomain }: { name: string; logo: string; subdomain: string }): Organization {
        const currentDate = new Date()

        const organization = new this(
            OrganizationId.create(),
            name,
            logo,
            subdomain,
            currentDate,
            currentDate
        )

        return organization
    }
}
