import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./create-auth.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(): {
        msg: string;
    };
    signin(): {
        msg: string;
    };
    findAll(): Promise<string[]>;
    create(createItemDto: CreateAuthDto): Promise<void>;
}
