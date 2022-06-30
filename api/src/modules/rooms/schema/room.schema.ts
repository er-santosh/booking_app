import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Room extends Document {
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
  price: number;

  @Prop({
    required: true,
  })
  maxPeople: number;

  @Prop([{ number: Number, unavailableDates: { type: [Date] } }])
  roomNumbers: object[];
}

export const RoomSchema = SchemaFactory.createForClass(Room);
