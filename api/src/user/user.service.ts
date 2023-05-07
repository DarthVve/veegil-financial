import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { User } from './user.entity';
import { CreateUserInput } from './user.input';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>,) { }

    async createUser(createUserInput: CreateUserInput): Promise<User> {
        const { fullname, email, phone, password } = createUserInput;

        const user = this.userRepository.create({
            id: uuidv4(),
            fullname,
            email,
            phone,
            password
        });

        return this.userRepository.save(user);
    }

    async getUser(id: string): Promise<User> {
        return this.userRepository.findOne({ where: { id } });
    }

    async getUsers(): Promise<User[]> {
        return this.userRepository.find();
    }
};
