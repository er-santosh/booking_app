import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

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

  @IsOptional()
  @IsNumber()
  rating: number;

  @IsNotEmpty()
  @IsNumber()
  cheapestPrice: number;

  @IsBoolean()
  @IsOptional()
  isFeatured: boolean;
}
