import { CreateMessageDtos } from './dtos/create-messages.dtos';
import { MessagesService } from './services/messages.service';
export declare class MessagesController {
    messagesService: MessagesService;
    constructor(messagesService: MessagesService);
    listMessages(): Promise<string>;
    createMessage(body: CreateMessageDtos): Promise<void>;
    getMessage(id: string): Promise<any>;
}
