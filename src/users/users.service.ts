import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.usersModel.create(createUserDto);
  }

  async findAll() {
    return await this.usersModel.find();
  }

  async findOne(id: string) {
    return await this.usersModel.findOne({ _id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.usersModel.updateOne({ _id: id }, updateUserDto);
  }

  async remove(id: string) {
    return await this.usersModel.deleteOne({ _id: id });
  }
}
