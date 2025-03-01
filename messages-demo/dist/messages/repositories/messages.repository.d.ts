export declare class MessagesRepository {
    findOne(id: string): Promise<any>;
    findAll(): Promise<string>;
    create(content: string): Promise<void>;
}
