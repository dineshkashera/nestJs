import { CreateUserDtos } from './dtos/create-user.dtos';
import { UpdateUserDtos } from './dtos/update-user.dtos';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(body: CreateUserDtos): void;
    findUser(id: string): Promise<import("./user.entity").User>;
    findAllUsers(email: string): Promise<import("./user.entity").User[]>;
    removeUser(id: string): Promise<import("./user.entity").User>;
    updateUser(id: string, body: UpdateUserDtos): Promise<import("./user.entity").User>;
}
