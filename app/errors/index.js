export class HttpError extends Error {
    constructor(httpCode, message) {
        super(message);
        this.httpCode = httpCode;
        this.name = "HttpError";
    }
}
