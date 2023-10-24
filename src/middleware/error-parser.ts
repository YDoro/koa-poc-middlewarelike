import { Next } from "koa";
import { CustomContext } from "../protocols";

const ErrorParserMiddleware = async (ctx: CustomContext, next: Next) => {
    return next().catch(err => {
        const { statusCode, message } = err;

        ctx.type = 'json';
        ctx.status = statusCode || 500;
        ctx.body = {
            status: 'error',
            message
        };

        ctx.app.emit('error', err, ctx);
    });
};
export default ErrorParserMiddleware