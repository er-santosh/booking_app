import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  username: string;

  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop()
  country: string;

  @Prop()
  city: string;

  @Prop()
  phone: string;

  @Prop()
  img: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  isAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
