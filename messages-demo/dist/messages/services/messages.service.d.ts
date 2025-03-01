import { MessagesRepository } from "../repositories/messages.repository";
export declare class MessagesService {
    messagesRepo: MessagesRepository;
    constructor(messagesRepo: MessagesRepository);
    findOne(id: string): Promise<any>;
    findAll(): Promise<string>;
    create(content: string): Promise<void>;
}
