import { Next } from "koa";
import { CustomContext } from "../../protocols";

const HandlePostPayment = async (ctx: CustomContext, next: Next) => {
    ctx.status = 200;
    ctx.body = ctx.request.body;
    //TODO - start some logic here, like controller and services
}
export default HandlePostPayment