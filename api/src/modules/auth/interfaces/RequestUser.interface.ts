import { User } from './../../users/schema/user.schema';
import { Request } from 'express';

export interface RequestUser extends Request {
  user: User;
}
