import { HttpError } from "./index";

export class MethodNotAllowed extends HttpError {
    public name = 'MethodNotAllowedError'
    public status = 405;
    public message = " method not allowed";
}