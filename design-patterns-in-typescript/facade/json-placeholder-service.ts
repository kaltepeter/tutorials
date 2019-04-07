import { IJsonPlaceholderService } from "./ijson-placeholder-service";
import { Album } from './models/album';
import { Comment } from './models/comment';
import { Photo } from './models/photo';
import { Post } from './models/post';
import { Todo } from './models/todo';
import { User } from './models/user';
import axios from "axios";

export class JsonPlaceholderService implements IJsonPlaceholderService {
    private _baseUrl: string = "https://jsonplaceholder.typicode.com";

    private _endpoints = {
        posts: `${this._baseUrl}/posts`,
        comments: `${this._baseUrl}/comments`,
        albums: `${this._baseUrl}/albums`,
        photos: `${this._baseUrl}/photos`,
        todos: `${this._baseUrl}/todos`,
        users: `${this._baseUrl}/users`
    };

    private _getEntity<T>(url: string): Promise<T[]> {
        return axios.get(url)
            .then(response => response.data as T[]);
    }

    async getAlbums(): Promise<Album[]> {
        return this._getEntity<Album>(this._endpoints.albums);
    }    
    async getComments(): Promise<Comment[]> {
        return this._getEntity<Comment>(this._endpoints.comments);        
    }
    async getPhotos(): Promise<Photo[]> {
        return this._getEntity<Photo>(this._endpoints.photos);
    }
    async getPosts(): Promise<Post[]> {
        return this._getEntity<Post>(this._endpoints.posts);        
    }
    async getTodos(): Promise<Todo[]> {
        return this._getEntity<Todo>(this._endpoints.todos);        
    }
    async getUsers(): Promise<User[]> {
        return this._getEntity<User>(this._endpoints.users);        
    }
}