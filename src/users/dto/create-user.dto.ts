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
}
