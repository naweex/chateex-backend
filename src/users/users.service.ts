import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository : UserRepository){}
  async create(createUserInput: CreateUserInput) {
    return this.userRepository.create({
      ...createUserInput ,
      password : await bcrypt.hash(createUserInput.password , 10)//10 for salt
    });
  }

  async findAll() {
    return this.userRepository.find({});
  }

  async findOne(_id: string) {//in mongodb _id is string value!!!***
    return this.userRepository.findOne({ _id });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
