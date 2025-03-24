import { CreateUserDtos } from './dtos/create-user.dtos';
import { UpdateUserDtos } from './dtos/update-user.dtos';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
export declare class UsersController {
    private usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    createUser(body: CreateUserDtos): Promise<import("./user.entity").User>;
    userSignin(body: CreateUserDtos): Promise<"Found user" | "not found">;
    findUser(id: string): Promise<import("./user.entity").User>;
    findAllUsers(email: string): Promise<import("./user.entity").User[]>;
    removeUser(id: string): Promise<import("./user.entity").User>;
    updateUser(id: string, body: UpdateUserDtos): Promise<import("./user.entity").User>;
}
