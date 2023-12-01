import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto) {
        const user = await this.prisma.users.create({
            data: {
                Pseudo: createUserDto.pseudo,
                Mail: createUserDto.mail,
            },
        });
        
        return user;
    }

    async findAll() {
        const users = await this.prisma.users.findMany();

        return users;
    }

    async getByUUID(uuid: string) {
        const user = this.prisma.users.findUnique({
            where: {
                UUID: uuid,
            },
        });

        return user;
    }

    async updateByUUID(uuid: string, updateUserDto: UpdateUserDto) {
        const user = await this.prisma.users.update({
            data: {
                Pseudo: updateUserDto.pseudo,
                Mail: updateUserDto.mail
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