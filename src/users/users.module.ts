import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from './users.service';

@Module({
    controllers: [UsersController],
    providers: [AuthService, PrismaService, UsersService],
    exports: [UsersService],
})
export class UsersModule {}
