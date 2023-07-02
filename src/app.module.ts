import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { KkService } from './kk.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, KkService],
})
export class AppModule {}
