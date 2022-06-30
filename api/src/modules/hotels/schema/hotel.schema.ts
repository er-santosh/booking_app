import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Hotel extends Document {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    required: true,
  })
  desc: string;

  @Prop({
    required: true,
  })
  type: string;

  @Prop({
    required: true,
  })
  city: string;

  @Prop({
    required: true,
  })
  address: string;

  @Prop({
    required: true,
  })
  distance: string;

  @Prop([String])
  photos: string[];

  @Prop({
    default: 0,
    min: 0,
    max: 5,
  })
  rating: number;

  @Prop([String])
  rooms: string[];

  @Prop({
    required: true,
  })
  cheapestPrice: number;

  @Prop({
    default: false,
  })
  isFeatured: boolean;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
