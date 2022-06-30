import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(16)
  username: string;

  @IsEmail()
  email: string;

  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password should have atleast 1 uppercase, 1 lowercase, 1 number or special character',
  })
  @MinLength(8)
  @MaxLength(12)
  password: string;
}
