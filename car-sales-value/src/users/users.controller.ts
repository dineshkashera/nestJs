import { Body, Controller, Post, Get, Patch, Delete, Param, Query, NotFoundException, UseInterceptors, ClassSerializerInterceptor, UseGuards} from '@nestjs/common';
import { CreateUserDtos } from './dtos/create-user.dtos';
import { UpdateUserDtos } from './dtos/update-user.dtos';
import { UsersService } from './users.service'; 
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { PublicUserDtos } from './dtos/public-user.dtos';
import { AuthService } from './auth.service';
import {CurrentUser} from './decorators/current-user.decorator';
import { AuthGuard } from 'src/guards/auth.guard';

@Serialize(PublicUserDtos)
@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService, private authService: AuthService){}
  
  @Post('/signup')
  createUser(@Body() body: CreateUserDtos){
      return this.authService.singup(body.email, body.password);
  }

  
  @Get('/whoiam')
  @UseGuards(AuthGuard)
  whoiam(@CurrentUser() user: string){
    return user;
  }

  @Post('/signin')
  userSignin(@Body() body: CreateUserDtos){
    return this.authService.signin(body.email, body.password);
  }

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
