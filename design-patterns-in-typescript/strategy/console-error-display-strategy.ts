import { IErrorDisplayStrategy } from "./ierror-display-strategy";
import chalk from 'chalk';

export class ConsoleErrorDisplayStrategy implements IErrorDisplayStrategy {
    display(title: string, body: string): void {
        console.log(`${chalk.red(title)}: ${chalk.blue(body)}`);
    }
}