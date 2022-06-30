import { Expose } from 'class-transformer';

export class GetUserDto {
  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  country: string;

  @Expose()
  city: string;

  @Expose()
  phone: string;

  @Expose()
  img: string;
}
