
export class InvalidArgumentException extends Error {
    static mustBeDefined(): InvalidArgumentException {
        return new this('El valor debe ser definido')
    }

    static mustBeString(value: string): InvalidArgumentException {
        return new this(`Valor de cadena no válido ${value}`)
    }

    static mustBeBoolean(value: boolean): InvalidArgumentException {
        return new this(`Valor booleano no válido ${value}`)
    }

    static mustBeNumber(value: number): InvalidArgumentException {
        return new this(`Valor numérico no válido ${value}`)
    }
}
