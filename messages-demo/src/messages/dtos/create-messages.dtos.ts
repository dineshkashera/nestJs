import { IsString } from "class-validator"
export class CreateMessageDtos{
  @IsString() //Decorators
  content:string
}