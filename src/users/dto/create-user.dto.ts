import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(50)
    pseudo: string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(75)
    mail: string;
}
