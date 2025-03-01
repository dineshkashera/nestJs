import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import {CreateMessageDtos} from './dtos/create-messages.dtos';
import { MessagesService } from './services/messages.service';
@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService){}

  @Get()
  listMessages(){
    return this.messagesService.findAll();
  }

  @Post()
  //using CreateMessageDtos Validation pipes
  //using @Body() body decorators
  createMessage(@Body() body: CreateMessageDtos){
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string){
    const message = await this.messagesService.findOne(id);
    
    if(!message){
      throw new NotFoundException("Record not found");
    }

    return message;
  }
}
