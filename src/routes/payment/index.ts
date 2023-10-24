import { Next } from "koa";
import { MethodNotAllowed } from '../../errors/http-errors/method-not-allowed';
import { CustomContext } from "../../protocols";
import handlePaymentPost from './post';


async function PaymentRoutes(ctx: CustomContext, next: Next) {
    switch (ctx.req.method) {
        case "POST":
            await handlePaymentPost(ctx, next);
            break;
        default: {
            const err = new MethodNotAllowed
            ctx.throw(err.status, { message: err.message });
        }

    }

}
export default PaymentRoutes