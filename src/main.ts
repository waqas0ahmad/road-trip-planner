import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.set('views', join(__dirname, '..', 'views'));
  // app.set('view engine', 'ejs');
  // app.engine('html', require('ejs').renderFile);
  app.setViewEngine('html');
  app.set('view engine', 'html');
  app.engine('html', require('ejs').renderFile);

  await app.listen(3000);
}
bootstrap();
