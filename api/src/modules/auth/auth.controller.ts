import { IsAuthenticatedGuard } from 'src/guards/is-authenticated.guard';
import { GetUserDto } from './../users/dto/get-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { RequestUser } from './interfaces/RequestUser.interface';
import { Serialize } from 'src/interceptors/serializer.interceptor';
import { UsersService } from '../users/users.service';
import { Response } from 'express';
import { CurrentUser } from 'src/decorators/current-user.decorator';

@Controller('auth')
@Serialize(GetUserDto)
export class AuthController {
  constructor(
    private authService: AuthService,
    @Inject(UsersService) private readonly usersService: UsersService,
  ) {}

  @Post('signup')
  signup(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.signup(registerUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async logIn(@Req() request: RequestUser) {
    const { user } = request;
    const accessTokenCookie = this.authService.getCookieWithJwtToken(
      user._id,
      user.isAdmin,
    );

    request.res.setHeader('Set-Cookie', accessTokenCookie);
    return user;
  }

  @UseGuards(IsAuthenticatedGuard)
  @Get('profile')
  async getProfile(@CurrentUser() user: RequestUser) {
    return user;
  }

  @UseGuards(IsAuthenticatedGuard)
  @Post('signout')
  @HttpCode(HttpStatus.OK)
  async logOut(@Req() request: RequestUser, @Res() response: Response) {
    request.res?.setHeader(
      'Set-Cookie',
      this.authService.getCookiesForLogOut(),
    );
    return response.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'User logged out successfully',
    });
  }
}
