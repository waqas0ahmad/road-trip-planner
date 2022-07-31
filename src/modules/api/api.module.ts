import { Module } from '@nestjs/common';
import { ApiController } from './controllers/api/api.controller';

@Module({
    controllers:[ApiController]
})
export class ApiModule {}
