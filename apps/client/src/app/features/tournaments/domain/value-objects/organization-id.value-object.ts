import { ValueObject } from '../../../../shared/domain/value-objects/value-object'

export class OrganizationId extends ValueObject<number> {
    static fromNumber(value: number): OrganizationId {
        return new this(value)
    }
}

