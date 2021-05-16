import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
import { User } from './models/user';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserInput } from './dto/input/update-user.input';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { DeleteUserInput } from './dto/input/delete-user.input';

@Injectable()
export class UsersService {
  private users: User[] = [];

  createUser(createUserData: CreateUserInput): User {
    const user: User = {
      userId: uuidv4(),
      ...createUserData,
    };
    this.users = [...this.users, user];
    return user;
  }

  updateUser(updateUserData: UpdateUserInput): User {
    const user = this.users.find((u) => u.userId === updateUserData.userId);
    Object.assign(user, updateUserData);
    return user;
  }

  getUser(getUserArgs: GetUserArgs): User {
    return this.users.find((u) => u.userId === getUserArgs.userId);
  }

  getUsers(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs.userIds.map((userId) => this.getUser({ userId }));
  }

  deleteUser(deleteUserData: DeleteUserInput): User {
    const userIndex = this.users.findIndex(
      (u) => u.userId === deleteUserData.userId,
    );
    const user = this.users[userIndex];
    this.users.splice(userIndex);
    return user;
  }
}
