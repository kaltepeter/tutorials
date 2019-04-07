import { IErrorLoggingStrategy } from "./ierror-logging-strategy";
import fs from 'fs';

export class FileErrorLoggingStrategy implements IErrorLoggingStrategy {
    log(err: Error): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.appendFile('logs/error.log', `${err}\n`, "utf8", (error) => {
                if (error) {
                    console.error('Error logging failed.');
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

}