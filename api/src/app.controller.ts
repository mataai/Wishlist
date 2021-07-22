import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AmazonService } from './services/amazon.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly amazonService: AmazonService) { }

  @Get()
  getHello(@Query("id") test: string): any {
    return this.amazonService.getInhomeProductInfo(test);

  }
}
