import { IDepB } from "./idepb";
import { injectable } from "Inversify";

@injectable()
export class ConcreteB implements IDepB {
    doB(): void {
        console.log('doing B');
    }
}