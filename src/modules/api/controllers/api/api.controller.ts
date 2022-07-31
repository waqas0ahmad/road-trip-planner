import { Controller, Get } from '@nestjs/common';

@Controller('default')
export class ApiController {
    @Get("index")
    index(){
        return {message:"Default api controller"};
    }
}
