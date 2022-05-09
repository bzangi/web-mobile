import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getIMC(weight, height): number {
    return weight / (height * height);
  }
}
