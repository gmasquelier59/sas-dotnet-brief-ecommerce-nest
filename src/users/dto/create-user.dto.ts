import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        description: "Pseudo de l'utilisateur",
        required: true,
        maximum: 50,
    })
    @IsNotEmpty()
    @MaxLength(50)
    pseudo: string;

    @ApiProperty({
        description: "Adresse email de l'utilisateur",
        required: true,
        maximum: 75,
    })
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(75)
    mail: string;

    @ApiProperty({
        description: "Nom d'utilisateur de l'utilisateur",
        required: true,
        maximum: 20,
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    username: string;

    @ApiProperty({
        description: "Mot de passe de l'utilisateur",
        required: true,
        maximum: 60,
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(60)
    password: string;
}
