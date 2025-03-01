## Setup nestJS project using nest CLI

`sudo npm install -g @nestjs/cli`

## setup nestJS project using CLI

`nest new messages`

If get any errors in above command then run below command to fix.
`npm cache clean --force`
`sudo chown -R 502:20 "/Users/{username}/.npm" `  
#replace your username from {username}

## generate module in nest

nest generate module <moduleName>

## generate controller in nest

nest generate controller messages/messages --flat

- --flat means does not create seperate new folder for controller

* The above command will automatically map the path in module.

## Validationpipe

Pipes build in to nest to make validation suoer easy

Steps to add Validationpipe:

1. Tell nest to use global validation
2. Create a class that describes the different properties that the request body should have. Data transfer object. i.e Dto
3. Add validation rules to the class
4. Apply that class to the request handler

## Validationpipe lifecycle

1. Use class-transformer to turn the body into an instance of the DTO class
2. Use class-validator to validate the instance
3. If there are validation errors, respond immediately, otherwise provide body to request handler

## Services:

1. Its a class
2. Place to put any business logic
3. Uses one or more repositories to find or store Data

## Repositories

1. Its a class
2. Place to put storage-related logic
3. Usually ends up being a TypeORM entity, a Mongoose schema, or similar.

## Inversion of Control principle: And must follow

1. Classes should not create instances of its dependencies on its own.

## Dependecny injection (DI) or Injector

1. It list of classes and their dependencies
2. List of instances that i have created

## DI container flow:

1. At startup, register all classes with the container.
2. Container will figure out what each dependency each class has
3. We then ask the container to create an instance of a class for us.
4. Container creates all required dependencies and gives us the instance.
5. Container will hold onto the created dependency instances and reuse them if needed.

Notes: We always create repos and services class as injectable, not controller
