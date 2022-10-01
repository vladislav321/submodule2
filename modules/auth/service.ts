import { User, Token } from './dto/user';

class AuthService
{
    /**
     *
     */
    constructor() {
        
    }

    getUsers(): void{
        
    }

    getUserById(id: string) : User{
        return new User();
    }

    getToken(): Token{
        return new Token();
    }
}