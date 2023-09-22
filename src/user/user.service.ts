import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto);
    const temp = await createUser.save();
    return temp;
  }

  async findAll(): Promise<User[]> {
    const temp = await this.userModel.find().exec();
    return temp;
  }

  async findOne(id: string) {
    const temp = await this.userModel.find({ _id: id });
    return temp;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const temp = await this.userModel.findOneAndUpdate(
      { _id: id },
      updateUserDto,
      { new: true },
    );
    return temp;
  }

  async remove(id: string) {
    const temp = await this.userModel.findByIdAndRemove({ _id: id });
    return temp;
  }
}
