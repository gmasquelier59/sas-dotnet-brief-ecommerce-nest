import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    pseudo: string;
    @ApiProperty()
    mail: string;
}
