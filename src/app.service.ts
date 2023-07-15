import { Inject, Injectable } from '@nestjs/common'
import { KkService } from './kk.service'

@Injectable()
export class AppService {
  constructor(
    private readonly kk: KkService,
    @Inject('config')
    private readonly config: any,
  ) {}
  getHello(): string {
    return 'Hello World!'
  }
  findone(): string {
    return this.kk.kk() + this.config.age
  }
}
