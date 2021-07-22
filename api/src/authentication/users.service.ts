import { Injectable } from '@nestjs/common';

type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'pass',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'pass',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
