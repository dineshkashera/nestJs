import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { randomBytes, scrypt as _scrypt } from "crypto";
import { promisify } from "util";

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService{
  constructor(private userService: UsersService){}

  async singup(email: string, password: string){

    //check email is already exist
    const users = await this.userService.find(email);

    if(users.length){
      throw new BadRequestException('User already exist!');
    }

    //2:hash the user password
      //2.1: Generate a salt using predefined function
      const salt = randomBytes(8).toString('hex');
      //2.2: Hash the password and salt together
      const hash = (await scrypt(password, salt, 32)) as Buffer;
      //2.3: Join the hashed result and salt together
      const hashSaltPassword = salt + '.' + hash.toString('hex');

    //create a new user and save it
    const user = await this.userService.create(email, hashSaltPassword);
    
    //return the user object
    return user;
  }

  async signin(email:string, password: string){
    //Get saltedHash passoword
    const [user] = await this.userService.find(email);
    
    if(!user){
       throw new NotFoundException('User not found');
    }

    //Get salt from hash password
    const [dbSalt, dbhash] = user.password.split(".");

    //hash the password using the salt
    const hash = (await scrypt(password, dbSalt, 32)) as Buffer;

    //compare the current Hashsalted password with db stored hashSalted password
    if(dbhash !== hash.toString('hex')){
      throw new NotFoundException('Invalid details');
    }
    
    //return user 
    return user;
    
  }
}