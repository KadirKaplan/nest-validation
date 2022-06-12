import { Injectable, Param, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from 'src/interfaces/user/user.interface';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/user/create-user.dto';
import { UpdateUserDto } from 'src/dto/user/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel: Model<IUser>) { }

    //create user
    async createUser(createUserDto: CreateUserDto): Promise<IUser> {
        const newUser = await new this.userModel(createUserDto);
        return newUser.save();
    }

    //get all users
    async findAll(): Promise<IUser[]> {
        const users = await this.userModel.find();
        return users;
    }

    //get one user
    async getOneUser(userId: string): Promise<IUser> {
        const user = await this.userModel.findById(userId);
        return user;
    }

    //update user 
    async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<IUser> {
        const updatedUser = await this.userModel.findByIdAndUpdate(userId, updateUserDto, { new: true })
        return updatedUser;
    }

    //delete user 
    async deleteUser(userId: string) {
        const deletedUser = await this.userModel.findByIdAndDelete(userId);
        return deletedUser;
        
    }

}
