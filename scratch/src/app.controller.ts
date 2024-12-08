import { Controller, Get } from "@nestjs/common";

@Controller('/app') //Below route for getRootRoute: /app/
//getMyName: /app/my-name
export class AppController{

  @Get() //Indicates / root path if not pass any route
  getRootRoute(){
    return "Optimize file staructure";
  }

  @Get('/my-name')
  getMyName(){
     return 'hello my name'; 
  }
}