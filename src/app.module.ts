import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { KkService } from './kk.service'
const config = {
  provide: 'config',
  useValue: {
    name: 'kk',
    age: 28,
  },
}
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    { provide: 'AppService', useClass: AppService },
    {
      provide: KkService,
      useClass: KkService,
    },
    {
      provide: 'appName',
      useValue: 'kk',
    },
    config,
  ],
})
export class AppModule {}
