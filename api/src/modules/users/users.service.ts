import { ValidMongoId } from './../../utils/ValidMongoId';
import { User } from './schema/user.schema';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(
    username: string,
    email: string,
    password: string,
  ): Promise<User> {
    const user = new this.userModel({
      username: username.toLowerCase(),
      email,
      password,
    });
    return await user.save();
  }

  async checkIfUserExist(username: string, email: string): Promise<void> {
    const user = await this.userModel.findOne().or([{ username }, { email }]);
    if (user) {
      throw new BadRequestException('Username/Email already exist.');
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findById(id: ValidMongoId['id']): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findByUsername(username: string) {
    const user = await this.userModel.findOne({ username });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
