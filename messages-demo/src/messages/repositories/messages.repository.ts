import { readFile, writeFile } from "fs/promises";
import { Injectable } from "@nestjs/common";
@Injectable()
export class MessagesRepository{
  async findOne(id: string){
    const contents = await readFile('data/messages.json', 'utf8');
    const message = JSON.parse(contents);

    return message[id];
  }

  async findAll(){
    const contents = await readFile('data/messages.json', 'utf8');
    const message = JSON.parse(contents);

    return JSON.stringify(message);
  }

  async create(content: string){
    const contents = await readFile('data/messages.json', 'utf8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);
    messages[id] = {id, content}

    await writeFile('data/messages.json', JSON.stringify(messages, null, 2));
  }
}