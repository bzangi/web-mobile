import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('calculateIMC/:weight/:height')
  getIMC(@Param('weight') weight, @Param('height') height): number {
    return this.appService.getIMC(weight, height);
  }
}
