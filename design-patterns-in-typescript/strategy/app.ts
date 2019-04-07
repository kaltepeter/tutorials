import { ConsoleErrorDisplayStrategy } from "./console-error-display-strategy";
import { ErrorHandler } from "./error-handler";
import { FileErrorLoggingStrategy } from "./file-error-logging-strategy";

let errorHandler = new ErrorHandler(new ConsoleErrorDisplayStrategy(), new FileErrorLoggingStrategy());

try {
    let b: any = 2;
    b();
} catch(err) {
    errorHandler.handle(err, "Something went wrong", "Please try again later.");
}