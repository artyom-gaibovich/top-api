import {Controller, Get, Injectable} from '@nestjs/common';
import { AppService } from './app.service';
import {ConfigService} from "@nestjs/config";

@Controller()
export class AppController {
  constructor(
      private readonly configService : ConfigService,
      private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return this.configService.get('TEST')
  }
}
