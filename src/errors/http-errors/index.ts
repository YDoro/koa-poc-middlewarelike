
export abstract class HttpError extends Error {
    protected status: Number;
    toKoaThrow() {
        return [
            this.status,
            this.name,
            {
                message: this.message
            }
        ]
    }
}