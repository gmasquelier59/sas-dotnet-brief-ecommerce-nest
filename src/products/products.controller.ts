import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get('products')
    getProducts(): string[] {
        return ['Dish Towel', 'Thyme - Fresh', 'Rum - Cream, Amarula'];
    }
}
