import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
    @ApiProperty({
        description: 'Nom du produit',
        required: true,
        maximum: 50,
    })
    @IsNotEmpty()
    @MaxLength(50)
    name: string;

    @ApiProperty({
        description: 'Description du produit',
        required: false,
    })
    description: string;

    @ApiProperty({
        description: 'Prix du produit en euros',
        required: true,
    })
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @ApiProperty({
        description: 'Auteur de la rédaction de la fiche produit',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    authorUUID: string;
}
