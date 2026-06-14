
export class UuidException extends Error {
    static invalid(): UuidException {
        return new this('UUID no válido')
    }
}
