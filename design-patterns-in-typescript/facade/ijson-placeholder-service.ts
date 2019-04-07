import { Album } from "./models/album";
import { Comment } from "./models/comment";
import { Photo } from "./models/photo";
import { Post } from "./models/post";
import { Todo } from "./models/todo";
import { User } from "./models/user";

export interface IJsonPlaceholderService {
    getAlbums(): Promise<Album[]>;
    getComments(): Promise<Comment[]>;
    getPhotos(): Promise<Photo[]>;
    getPosts(): Promise<Post[]>;
    getTodos(): Promise<Todo[]>;
    getUsers(): Promise<User[]>;
}