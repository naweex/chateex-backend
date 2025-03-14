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
      password : await this.hashPassword(createUserInput.password)
    });
  }

  private async hashPassword(password : string) {
    return bcrypt.hash(password , 10)//10 for salt
  }
  async findAll() {
    return this.userRepository.find({});
  }

  async findOne(_id: string) {//in mongodb _id is string value!!!***
    return this.userRepository.findOne({ _id });
  }

  async update(_id: string, updateUserInput: UpdateUserInput) {
    return this.userRepository.findOneAndUpdate({_id} , {
      $set : {
        ...UpdateUserInput ,
        password : await this.hashPassword(updateUserInput.password) ,
        }
      }
    );
  }

  async remove(_id: string) {
    return await this.userRepository.findOneAndDelete({_id});
  }
}
