import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Activa las validaciones globales
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina campos basura que manden en el JSON y no estén en el DTO
      forbidNonWhitelisted: true, // Lanza un error si mandan campos no permitidos
      transform: true, // Transforma los datos a los tipos correctos (ej. string a number)
    })
  );

  // Habilita CORS para que tu frontend en React pueda consumirlo
  app.enableCors();

  // Cambia la última línea:
  await app.listen(process.env.PORT || 3000);
}
bootstrap();