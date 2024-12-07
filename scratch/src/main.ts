import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController{

  @Get()
  getRootRoute(){
    return "Hello world from nestJS";
  }

}

@Module({
  controllers: [AppController]
})

class AppModule {}

async function entryPoint(){
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

entryPoint();
