import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res, UsePipes } from '@nestjs/common';
import { Request, Response } from 'express';
import { UpdateBookDto } from 'src/dto/book/update-book.dto';
import { CreateUserDto } from 'src/dto/user/create-user.dto';
import { UserSchema } from 'src/dto/user/user.dto';
import { UserService } from 'src/services/user/user.service';
import { UserValidationPipe } from 'src/validation/book/validation.pipe';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    //create user
    @Post()
    @UsePipes(new UserValidationPipe(UserSchema))
    async createUser(@Res() res: Response, @Req() req: Request, @Body() createUserDto: CreateUserDto) {
        try {
           
            const newUser = await this.userService.createUser(createUserDto);
            return res.status(HttpStatus.CREATED).send('USER CREATION SUCCESSFULLY !');
        } catch (error) {
            return res.status(error.status).json(error.res);
        }
    }

    //get all users
    @Get()
    async findAll(@Res() res: Response) {
        try {
            const users = await this.userService.findAll();
            return res.status(HttpStatus.OK).json({
                message: 'All users  found successfully', users
            });
        } catch (error) {
            return res.status(error.status).json(error.res);
        }
    }

    @Get(':id')
    async getOneUser(@Param('id') userId: string, @Res() res: Response) {
        try {
            const user = await this.userService.getOneUser(userId);
            return res.status(HttpStatus.OK).json({
                message: 'find user successfully', user
            });
        } catch (error) {
            return res.status(error.status).json(error.res);
        }
    }

    // update user
    @Put(':id')
    async updateUser(@Param('id') userId: string, @Body() updateBookDto: UpdateBookDto, @Res() res: Response) {
        try {
            const updatedUser = await this.userService.updateUser(userId, updateBookDto);
            return res.status(HttpStatus.OK).json({
                message: 'user update successfully', updatedUser
            });
        } catch (error) {
            return res.status(error.status).json(error.res);
        }
    }

    //delete user
    @Delete(':id')
    async deleteUser(@Param('id') userId: string, @Res() res: Response) {
        try {
            const deletedUser = await this.userService.deleteUser(userId);
            return res.status(HttpStatus.OK).json({
                message: 'user delete successfully', deletedUser
            });
        } catch (error) {
            return res.status(error.status).json(error.res);
        }

    }



}
