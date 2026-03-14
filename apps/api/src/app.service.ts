import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string; version: string } {
    return { message: 'Hello from Test Studio API', version: '0.1.0' };
  }
}
