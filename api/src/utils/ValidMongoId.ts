import { Schema as MongooseSchema } from 'mongoose';
import { IsMongoId } from 'class-validator';

export class ValidMongoId {
  @IsMongoId()
  id: MongooseSchema.Types.ObjectId;
}
