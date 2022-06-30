import { Schema as MongooseSchema } from 'mongoose';
import { IsMongoId } from 'class-validator';

export class ParamsWithMongoId {
  @IsMongoId()
  id: MongooseSchema.Types.ObjectId;
}
