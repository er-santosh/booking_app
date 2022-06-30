import { ParamsWithMongoId } from 'src/utils/paramsWithMongoId';
import { UpdateHotelDto } from './dtos/update-hotel.dto';
import { CreateHotelDto } from './dtos/create-hotel.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel } from './schema/hotel.schema';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name) private readonly hotelModel: Model<Hotel>,
  ) {}

  async findAll(): Promise<Hotel[]> {
    return await this.hotelModel.find();
  }

  async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    const hotel = new this.hotelModel(createHotelDto);
    return await hotel.save();
  }

  async update(
    id: ParamsWithMongoId['id'],
    updateHotelDto: UpdateHotelDto,
  ): Promise<Hotel> {
    const updatedHotel = await this.hotelModel.findByIdAndUpdate(
      id,
      updateHotelDto,
      { new: true },
    );
    if (!updatedHotel) {
      throw new NotFoundException('Hotel Not Found');
    }
    return updatedHotel;
  }

  async delete(id: ParamsWithMongoId['id']) {
    const deletedHotel = await this.hotelModel.findByIdAndRemove(id);
    if (!deletedHotel) {
      throw new NotFoundException('Hotel Not Found');
    }
    return deletedHotel;
  }

  async findById(id: ParamsWithMongoId['id']) {
    const hotel = await this.hotelModel.findById(id);
    if (!hotel) {
      throw new NotFoundException('Hotel Not Found');
    }
    return hotel;
  }
}
