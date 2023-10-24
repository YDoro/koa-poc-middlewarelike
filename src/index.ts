import * as Koa from 'koa';
import * as Router from 'koa-router';
import ErrorParserMiddleware from './middleware/error-parser';
import { CustomContext } from './protocols';
import configureRoutes from './routes';
import bodyParser = require('koa-bodyparser');

const app = new Koa<Koa.DefaultState, CustomContext>();

const router = new Router<Koa.DefaultState, CustomContext>();

app.use(bodyParser());
configureRoutes(router)

app.use(ErrorParserMiddleware);
app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');