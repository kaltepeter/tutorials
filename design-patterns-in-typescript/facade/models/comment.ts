import { Post } from "./post";

export interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
    postId: number;
    post: Post;
}