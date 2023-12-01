import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private readonly prisma: PrismaService) {}
    
    async create(createProductDto: CreateProductDto) {
        const product = await this.prisma.products.create({
            data: {
                Name: createProductDto.name,
                Description: createProductDto.description,
                Price: createProductDto.price,
                authorUUID: createProductDto.authorUUID
            },
        });

        return product;
    }

    findAll() {
        return `This action returns all products`;
    }

    findOne(id: number) {
        return `This action returns a #${id} product`;
    }

    update(id: number, updateProductDto: UpdateProductDto) {
        return `This action updates a #${id} product`;
    }

    remove(id: number) {
        return `This action removes a #${id} product`;
    }
}
