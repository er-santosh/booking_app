import { GetUserDto } from './dto/get-user.dto';
import { UsersService } from './users.service';
import { Controller, Get } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serializer.interceptor';

@Controller('users')
@Serialize(GetUserDto)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
