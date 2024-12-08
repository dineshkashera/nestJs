## NestJs setup and configuration

# setup new project

- mkdir scratch; cd scratch
- npm init -y
- Install various packages: npm install @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/plateform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2

"dependencies": {
"@nestjs/common": "^7.6.17", // Contains vast majority of functions, classes, etc, that
we need from nestjs
"@nestjs/core": "^7.6.17",
"@nestjs/platform-express": "^7.6.17", // Lets Nest use Express JS for handling HTTP requests
"reflect-metadata": "^0.1.13", //Helps make decorators work.
"typescript": "^4.3.2" // We write nest app with Typescript
}

# we can use Express or Fastify npm package to handle http request and response in nestJs.

#configure tsconfig.json for compilerOptions

# Every server have their own validation related to request and response

Basic is:

1. Validate data conatained in the request
2. Make sure the user is authenticated
3. Route the request to a praticular function
4. Run some business logic
5. Access a database

In nestJs we have a tools to help us write the above steps:
In nestJs:

1. Validate data conatained in the request :: Pipe
2. Make sure the user is authenticated :: Guard
3. Route the request to a praticular function :: Controller
4. Run some business logic :: Service
5. Access a database :: Repository

Different tools in nestJS:

1. Controller :: Handle incoming request
2. Services:: Handle data access and business logic
3. Modules:: Group together code
4. Pipes:: Validate incoming data
5. Filters:: Hanldes errors that occurs during request handling
6. Guards :: Handle authentication
7. Interceptors: Add extra logic to incoming request or outgoing responses.
8. Repository :: Handle data stored in a DB

# src/main.ts is a file which executed first in every nestJs app

# manually run file in nestJs old way:

npx ts-node-dev src/main.ts

## File naming convention

name.type_of_thing.ts
Ex: app.controller.ts for Class AppController{}
