import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomConfigService } from './custom-config/custom-config.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CustomConfigService],
})
export class AppModule {}
