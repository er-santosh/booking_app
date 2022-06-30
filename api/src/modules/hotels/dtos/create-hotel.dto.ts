import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateHotelDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  distance: string;

  @IsNotEmpty()
  desc: string;

  rating: number;

  @IsNotEmpty()
  cheapestPrice: number;

  @IsBoolean()
  @IsOptional()
  isFeatured: boolean;
}
