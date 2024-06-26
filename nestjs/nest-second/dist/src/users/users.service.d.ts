import { User } from './interface/users.interface';
export declare class UsersService {
    private readonly users;
    create(user: User): void;
    findAll(): User[];
}
