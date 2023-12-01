import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { genSaltSync, hashSync } from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto) {
        const password = createUserDto.password;

        const salt = genSaltSync(10);
        const hash = hashSync(password, salt);

        const user = await this.prisma.users.create({
            data: {
                Pseudo: createUserDto.pseudo,
                Mail: createUserDto.mail,
                Username: createUserDto.username,
                Password: hash,
            },
        });

        return user;
    }

    async findAll() {
        const users = await this.prisma.users.findMany();

        return users;
    }

    async getByUUID(uuid: string) {
        const user = await this.prisma.users.findUnique({
            where: {
                UUID: uuid,
            },
        });

        return user;
    }

    async getByUsername(username: string) {
        const user = await this.prisma.users.findUnique({
            where: {
                Username: username,
            },
        });

        return user;
    }

    async updateByUUID(uuid: string, updateUserDto: UpdateUserDto) {
        let hash = undefined;
        if (!!updateUserDto.password) {
            const salt = genSaltSync(10);
            hash = hashSync(updateUserDto.password, salt);
        }

        const user = await this.prisma.users.update({
            data: {
                Pseudo: updateUserDto.pseudo,
                Mail: updateUserDto.mail,
                Password: hash
            },
            where: {
                UUID: uuid,
            },
        });

        return user;
    }

    async deleteByUUID(uuid: string) {
        const user = this.prisma.users.delete({
            where: {
                UUID: uuid,
            },
        });

        return user;
    }
}
