export interface IErrorDisplayStrategy {
    display(title: string, body: string): void;
}