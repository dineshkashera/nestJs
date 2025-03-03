# Used car Pricing API

- Users sign up with email/password
- Users get an estimate for how much their car is worth based on the make/model/year/mileage
- Users can reports what they sold their vehicles for
- Admin have to approve reported sales

# Users sign up with email/password

- [POST] /auth/signup
- [POST] /auth/signin

body: {email, password}
Description: Create a new user and signin exiting user

# Users get an estimate for how much their car is worth based on the make/model/year/mileage

- [GET] /reports

Query string: make, model, year, mileage, longitude, latitude
Description: get an estimate for the car value

# Users can reports what they sold their vehicles for

- [POST] /reports

Body: make, model, year, mileage, longitude, latitude, price
Description: report how much a vehicle sold for

# Admin have to approve reported sales

- [PATCH] /reports/:id

body: {approved}
Description: Approved or reject a report submitted by user

Module design:
Always design a table for controllers, services and repositories

In above project requirements the module design will be:

_For user will need:_ Users Controller, Users Service, and Users Repository

_For report will need:_ Reports Controller, Reports Service, and Reports Repository

Then wrap in module as per its nature
will wrap in Users Module and Reports Module

Now come to terminal and run the below commands:

# Users

# create users module

`nest g module users`

# create users controller

`nest g controller users`

# create users service

`nest g service users`

# Reports

# create reports module

`nest g module reports`

# create reports controller

`nest g controller reports`

# create reports service

`nest g service reports`

# [Persitent data with Nest] Repository setup

- Nest works fine with any ORM, but works well out of the box with TypeORM and Mongoose.

# TypeORM

- TypeORM is an Object-Relational Mapper (ORM) for TypeScript and JavaScript (ES6, ES7, ES8). It is designed for working with relational databases like PostgreSQL, MySQL, MariaDB, SQLite, Microsoft SQL Server, and CockroachDB.

* SQLite
* Postgres
* MySQL
* MongoDB

# Mongoose

- MongoDB

## For now in the project will setup TypeORM -> SQLite, and later will switch it to TypeORM -> Postgres

# Install TypeORM and SQLite3

`npm install @nestjs/typeorm typeorm sqlite3`

If above command will give error then try below command:
`npm install @nestjs/typeorm typeorm sqlite3 --legacy-peer-deps`

# setup connection

- go to app.module.ts
- add TypeOrmModule.forRoot configuration in imports
  `@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [],
    synchronize: true
  }), UsersModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})`

`run the npm run start:dev`, and check db.sqlite file created on root, Now db connection setup successfully!

## Creating an Entity and Repository

# Creating an Entity

- Create an entity file, and create a class in it that lists all the properties that your entity will have.
  import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

`src/users/user.entity.ts`
@Entity()
export class User {
@PrimaryGeneratedColumn()
id:number;

@Column()
email: string;

@Column()
password: string
}

- Connect the entity to its parent module. This creates a repository
  ``src/users/users.modules.ts`
  import { Module } from '@nestjs/common';
  import { UsersService } from './users.service';
  import {TypeOrmModule} from '@nestjs/typeorm';
  import { User } from './user.entity';

@Module({
imports:[TypeOrmModule.forFeature([User])],
providers: [UsersService]
})
export class UsersModule {}`

- Connect the entity to the root connection (in app module)
  `@Module({
  imports: [TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [User],
  synchronize: true
  }), UsersModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
  })`

  # To view sqlite data install the sqlite extension.

  You will fine the settings tab in bottom left.
  https://typeorm.io/#/repository-api

  # To validate all http request we can setup validationPipe in main.ts

  `import { ValidationPipe } from '@nestjs/common';
  app.useGlobalPipes(
  new ValidationPipe({
  whitelist: true
  })
  )`

  Then, add dtos folder in users and add file create-user-dtos.ts
  `export class CreateUserDtos{
  email: string
  password: string
}`

Now, install npm package for class-validator and class-transformer
`npm install class-validator class-transformer`

And use class validator and transformer in dtos class file

## Interceptors(or middleware):

- Interceptors (middleware) can mess around with incoming requests and/or outgoing responses

Example:
Class customInterceptors
intercept(context: executionContext, next: CallHandler)

intercept(): intercept method is called automatically.

executionContext: Information on the incoming request.

CallHandler: Kind of a reference to the request handler in our controller.
