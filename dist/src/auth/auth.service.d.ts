export declare class AuthService {
    private readonly authors;
    findAll(): string[];
    create(item: any): void;
    author: {
        id: number;
        name: string;
    }[];
    signup(): {
        msg: string;
    };
    signin(): {
        msg: string;
    };
}
