import { Body, Controller, Post, Get, Patch, Delete, Param, Query, NotFoundException, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { CreateUserDtos } from './dtos/create-user.dtos';
import { UpdateUserDtos } from './dtos/update-user.dtos';
import { UsersService } from './users.service'; 
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';
import { PublicUserDtos } from './dtos/public-user.dtos';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService){}
  
  @Post('/signup')
  createUser(@Body() body: CreateUserDtos){
      this.usersService.create(body.email, body.password);
  }

  @UseInterceptors(new SerializeInterceptor(PublicUserDtos))
  @Get('/:id')
  async findUser(@Param('id') id:string){
    console.log("contoller handler is running");
    const user = await this.usersService.findOne(parseInt(id));
    if(!user){
      throw new NotFoundException('User not found')
    }

    return user;
  }

  @Get()
  findAllUsers(@Query('email') email: string){
    return this.usersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string){
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDtos){
    return this.usersService.update(parseInt(id), body);
  }
}
