import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class DefaultController {
  constructor() {}

  @Get()
  @Render('index')  
  root() {
    return { message: 'Hello world!' };
  }

  @Get("add-destinations")
  @Render("add-destination")
  addDestinations(){
    return {Ok:"dsalfkjaklsd"}
  }
}
