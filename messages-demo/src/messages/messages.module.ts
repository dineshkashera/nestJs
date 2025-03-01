import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './repositories/messages.repository';
import { MessagesService } from './services/messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesRepository, MessagesService] //things that can be use as dependencies for other classes, nestJs will create instance for class automatically
})
export class MessagesModule {}
