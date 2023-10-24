import Router = require("koa-router")
import { DefaultState } from "koa"
import { CustomContext } from "../protocols"
import PaymentRoutes from './payment'
const configureRoutes = (router: Router<DefaultState, CustomContext>) => {
    router.all('payment', '/payment/', PaymentRoutes)
}
export default configureRoutes