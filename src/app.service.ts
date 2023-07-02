import { Injectable } from '@nestjs/common'
import { KkService } from './kk.service'

@Injectable()
export class AppService {
  constructor(private readonly kk: KkService) {}
  getHello(): string {
    return 'Hello World!'
  }
  findone(): string {
    return this.kk.kk()
  }
}
