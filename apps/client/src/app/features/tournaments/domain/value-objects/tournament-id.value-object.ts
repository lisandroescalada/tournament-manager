import { ValueObject } from '../../../../shared/domain/value-objects/value-object'

export class TournamentId extends ValueObject<number> {
    static fromNumber(value: number): TournamentId {
        return new this(value)
    }
}

