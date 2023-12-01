import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import JSONResponse from 'src/utils/jsonresponse';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    @ApiOperation({ description: 'Créé un nouveau produit' })
    async create(@Body() createProductDto: CreateProductDto) {
        try {
            let product = await this.productsService.create(createProductDto);

            return JSONResponse.toJSON('Produit créé avec succès', product);
        } catch (error) {
            throw new HttpException(
                {
                    data: '',
                    message:
                        "Produit non créé. Les données fournies ne sont peut-être pas valides, ou une autre erreur s'est produite",
                },
                HttpStatus.BAD_REQUEST,
                {
                    cause: error,
                },
            );
        }
    }

    @Get()
    @ApiOperation({ description: 'Retourne la liste de tous les produits' })
    findAll() {
        let products = this.productsService.findAll();

        return JSONResponse.toJSON(
            'Liste des produits récupérée avec succès',
            products,
        );
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productsService.findOne(+id);
    }

    @Patch(':uuid')
    @ApiOperation({ description: 'Met à jour un produit depuis son UUID' })
    async updateByUUID(
        @Param('uuid') uuid: string,
        @Body() updateProductDto: UpdateProductDto,
    ) {
        try {
            let product = await this.productsService.updateByUUID(
                uuid,
                updateProductDto,
            );

            return JSONResponse.toJSON(
                "Données du produit mises à jour avec succès",
                product,
            );
        } catch (error) {
            throw new HttpException(
                {
                    data: error,
                    message:
                        "Une erreur est survenue lors de la mise à jour du produit",
                },
                HttpStatus.NOT_FOUND,
            );
        }
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productsService.remove(+id);
    }
}
