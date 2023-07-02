import { Injectable } from '@nestjs/common'

@Injectable()
export class KkService {
  kk(): string {
    return 'kk'
  }
}
