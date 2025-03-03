import { Expose } from "class-transformer";
export class PublicUserDtos{
  
  @Expose()
  id: number;

  @Expose()
  email: string;
}