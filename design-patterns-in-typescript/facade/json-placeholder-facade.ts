import { IJsonPlaceholderService } from "./ijson-placeholder-service";
import { User } from "./models/user";

export class JsonPlaceholderFacade {
    constructor(private _service: IJsonPlaceholderService) {}

    async getUser(userId: number): Promise<User | null> {
        let allUsers = await this._service.getUsers();
        const currentUser = allUsers.find(user => user.id == userId);
        let allPosts = await this._service.getPosts();
        let allTodos = await this._service.getTodos();
        if(currentUser) {
            currentUser.posts = allPosts.filter(post => post.userId == userId);
            currentUser.todos = allTodos.filter(todo => todo.userId == userId);
            return currentUser;
        } else {
            return null;
        }
    }
}