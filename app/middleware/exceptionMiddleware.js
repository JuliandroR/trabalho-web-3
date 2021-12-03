import { HttpError } from '../errors'
import { makeResponse } from '../utils'

export function exceptionMiddlewere(err, req, res, next) {
    if (err instanceof HttpError) {
        res.status(err.httpCode).json(makeResponse(err.message, false));
    } else {
        res.status(500).json(makeResponse('Um erro desconhecido ocorreu', false));
        console.error(err.stack);
    }
}
