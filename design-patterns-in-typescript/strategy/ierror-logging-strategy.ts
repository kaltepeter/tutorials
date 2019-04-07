export interface IErrorLoggingStrategy {
    log(err: Error): Promise<any>;
}