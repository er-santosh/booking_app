import { IsAdminGuard } from './../../guards/is-admin.guard';
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
  UseGuards,
} from '@nestjs/common';
import { ValidMongoId } from 'src/utils/ValidMongoId';

@Controller('hotels')
export class HotelsController {
  constructor(private hotelsService: HotelsService) {}
  @Get()
  find() {
    return this.hotelsService.findAll();
  }

  @Get(':id')
  findOne(@Param() { id }: ValidMongoId) {
    return this.hotelsService.findById(id);
  }

  @UseGuards(IsAdminGuard)
  @Post()
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelsService.create(createHotelDto);
  }

  @UseGuards(IsAdminGuard)
  @Put(':id')
  update(
    @Body() updateHotelDto: UpdateHotelDto,
    @Param() { id }: ValidMongoId,
  ) {
    return this.hotelsService.update(id, updateHotelDto);
  }

  @UseGuards(IsAdminGuard)
  @Delete(':id')
  delete(@Param() { id }: ValidMongoId) {
    return this.hotelsService.delete(id);
  }
}
