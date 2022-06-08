import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class UserService {

    getOneUser(id: string) {
        return id
    }

    getUser() {
        return "merhaba"
    }
}
