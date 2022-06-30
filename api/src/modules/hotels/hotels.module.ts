import { Hotel, HotelSchema } from './schema/hotel.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }]),
  ],
  providers: [HotelsService],
  controllers: [HotelsController],
})
export class HotelsModule {}
