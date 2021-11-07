import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { UsersService } from './users.service';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService, UsersService]
})
export class AuthenticationModule { }
