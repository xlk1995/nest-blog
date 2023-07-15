import { Controller, Get, Inject } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('a')
export class AppController {
  constructor(
    @Inject('AppService')
    private readonly appService: AppService,
    @Inject('appName')
    private readonly appName: string,
  ) {}

  @Get('b')
  getHello(): string {
    return this.appService.findone() + '--' + this.appName
  }
}
