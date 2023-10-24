import * as Koa from 'koa';

export interface CustomReq extends Koa.Request {
    body: any
}

export interface CustomContext extends Koa.ExtendableContext {
    request: CustomReq
}