import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('pages/index.hbs')
  root() {
    return { message: 'hello world!' };
  }

  @Get('index.html')
  @Render('pages/index.hbs')
  index() {
    return { message: 'hello world!' };
  }
}
