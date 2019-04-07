import { IErrorLoggingStrategy } from "./ierror-logging-strategy";
import { IErrorDisplayStrategy } from "./ierror-display-strategy";

export class ErrorHandler {
    constructor(private _displayStrategy: IErrorDisplayStrategy, private _loggingStrategy: IErrorLoggingStrategy) {}

    handle(err: Error, title: string, body: string): Promise<any> {
        this._displayStrategy.display(title, body);
        return this._loggingStrategy.log(err);
    }
}