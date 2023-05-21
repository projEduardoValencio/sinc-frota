import { Module } from '@nestjs/common'
import { AppController } from './app.controler'
import { GeneralModule } from './general/general.module';

@Module({
  imports: [GeneralModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
