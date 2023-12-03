import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerTheme } from 'swagger-themes';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    const config = new DocumentBuilder()
        .setTitle('API Boutique e-commerce')
        .setDescription(
            "Notre boutique expose une API permettant de manipuler les utilisateurs et les produits. Il s'agit ici de la documentation de cette API.",
        )
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);

    const theme = new SwaggerTheme('v3');
    const options = {
        explorer: true,
        customCss: theme.getBuffer('material'),
    };

    SwaggerModule.setup('api', app, document, options);

    await app.listen(3000);
}
bootstrap();
