import { GetUserDto } from './dto/get-user.dto';
import { UsersService } from './users.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serializer.interceptor';
import { IsAdminGuard } from 'src/guards/is-admin.guard';

@Controller('users')
@Serialize(GetUserDto)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(IsAdminGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
