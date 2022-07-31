import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  // app.set('view options', { layout: 'layout' });
  app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.setBaseViewsDir(join(__dirname, '..', 'views'));  
  // app.setViewEngine('hbs');

  app.set('views', join(__dirname, '..', 'views'));
  app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());

  await app.listen(3000);
}
bootstrap();
