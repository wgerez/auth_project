import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configSwagger = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Auth API documentation')
    .setDescription('Api Restful for Auth')
    .setVersion('1.0')
    .addTag('items')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('documentation', app, document);

  const config = app.get(ConfigService);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}`);
    Logger.log(`Running in ${config.get('enviroment')} mode`);
  });
}
bootstrap();
