import { User } from "./user";

export interface Album {
    id: number;
    title: string;
    userId: number;
    user: User;
}