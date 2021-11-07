import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmazonService } from './services/amazon.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, AmazonService],
})
export class AppModule { }
