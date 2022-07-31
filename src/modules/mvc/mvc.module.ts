import { Module } from '@nestjs/common';
import { DefaultController } from './controllers/default.controller';

@Module({
    imports:[],
    controllers:[DefaultController]
})
export class MvcModule {

}
