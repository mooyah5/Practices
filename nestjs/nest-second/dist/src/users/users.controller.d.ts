import { UsersService } from './users.service';
import { User } from './interface/users.interface';
import { CreateUsersDto } from './CreateUsersDto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): User[];
    findOne(id: string): string;
    create(createUsersDto: CreateUsersDto): void;
    update(id: string, createUsersDto: CreateUsersDto): string;
    remove(id: string): string;
}
