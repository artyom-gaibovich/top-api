import {Body, HttpCode, Module, Post} from '@nestjs/common';
import { AuthController } from './auth.controller';
import {AuthDto} from "./dto/auth.dto";

@Module({
  controllers: [AuthController]
})
export class AuthModule {

}
