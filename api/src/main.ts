import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Controle de Acesso de Prestadores - Quinta dos Ventos')
    .setDescription('Documentação do Controle de Acesso de Prestadores - Quinta dos Ventos')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  var cors = require('cors')
  app.use(cors())

  await app.listen(3000);
}
bootstrap();


