import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './modules/api/api.module';
import { MvcModule } from './modules/mvc/mvc.module';

@Module({
  imports: [
    MvcModule,
    ApiModule,
    RouterModule.register([
      {
        path:'',module:MvcModule
      },
      {
        path:'api',module:ApiModule
      }
    ])],
  
  providers: [AppService],
})
export class AppModule { }
