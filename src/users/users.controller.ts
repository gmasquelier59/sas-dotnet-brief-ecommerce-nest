import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import JSONResponse from 'src/utils/jsonresponse';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        try {
            let user = await this.usersService.create(createUserDto);

            return JSONResponse.toJSON('Utilisateur créé avec succès', user);
        } catch (error) {
            throw new HttpException(
                {
                    data: '',
                    message:
                        "Utilisateur non créé. Les données fournies ne sont peut-être pas valides, ou une autre erreur s'est produite",
                },
                HttpStatus.BAD_REQUEST,
                {
                    cause: error,
                },
            );
        }
    }

    @Get()
    async findAll() {
        let users = await this.usersService.findAll();

        return JSONResponse.toJSON(
            'Liste des utilisateurs récupérée avec succès',
            users,
        );
    }

    @Get(':uuid')
    async getByUUID(@Param('uuid') uuid: string) {
        let user = await this.usersService.getByUUID(uuid);

        if (user == null) {
            throw new HttpException(
                {
                    data: '',
                    message: 'Utilisateur non trouvé',
                },
                HttpStatus.NOT_FOUND,
            );
        }

        return JSONResponse.toJSON(
            "Données de l'utilisateur obtenues avec succès",
            user,
        );
    }

    @Patch(':uuid')
    async update(@Param('uuid') uuid: string, @Body() updateUserDto: UpdateUserDto) {
        let user = await this.usersService.updateByUUID(uuid, updateUserDto);

        return JSONResponse.toJSON(
            "Données de l'utilisateur mises à jour avec succès",
            user,
        );
    }

    @Delete(':uuid')
    async deleteByUUID(@Param('uuid') uuid: string) {
        try {
            let user = await this.usersService.deleteByUUID(uuid);

            return JSONResponse.toJSON(
                'Utilisateur supprimé avec succès',
                user,
            );
        } catch (error) {
            throw new HttpException(
                {
                    data: '',
                    message: "L'utilisateur spécifié n'existe pas",
                },
                HttpStatus.NOT_FOUND,
            );
        }
    }
}
