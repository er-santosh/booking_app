import { UpdateHotelDto } from './dtos/update-hotel.dto';
import { HotelsService } from '../hotels/hotels.service';
import { CreateHotelDto } from './dtos/create-hotel.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ParamsWithMongoId } from 'src/utils/paramsWithMongoId';

@Controller('hotels')
export class HotelsController {
  constructor(private hotelsService: HotelsService) {}
  @Get()
  find() {
    return this.hotelsService.findAll();
  }

  @Get(':id')
  findOne(@Param() { id }: ParamsWithMongoId) {
    return this.hotelsService.findById(id);
  }

  @Post()
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelsService.create(createHotelDto);
  }

  @Put(':id')
  update(
    @Body() updateHotelDto: UpdateHotelDto,
    @Param() { id }: ParamsWithMongoId,
  ) {
    return this.hotelsService.update(id, updateHotelDto);
  }
  @Delete(':id')
  delete(@Param() { id }: ParamsWithMongoId) {
    return this.hotelsService.delete(id);
  }
}
