import { ICardComponent } from "./icard-component";

export class Card implements ICardComponent {
    add(component: ICardComponent): void {
        throw new Error("Operation not supported.");
    }    
    remove(component: ICardComponent): void {
        throw new Error("Operation not supported.");
    }
    get(index: number): ICardComponent {
        throw new Error("Operation not supported.");
    }
    display(): string {
        return `${this.name}: ${this.attack} / ${this.defense}`
    }

    constructor(public name: string, public attack: number, public defense: number) {}
}