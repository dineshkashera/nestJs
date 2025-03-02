# TypeORM Guide

## Introduction

TypeORM is an **Object-Relational Mapper (ORM)** for **TypeScript** and **JavaScript** (ES6+). It supports multiple relational databases like **PostgreSQL, MySQL, MariaDB, SQLite, Microsoft SQL Server, and CockroachDB**.

## Key Features

- **Supports Active Record & Data Mapper Patterns** – Choose your preferred model structure.
- **Supports Both SQL & NoSQL Databases** – Works with MongoDB (limited support).
- **Decorators & TypeScript Support** – Uses decorators (`@Entity()`, `@Column()`, `@PrimaryGeneratedColumn()`).
- **Built-in Query Builder** – Flexible queries without writing raw SQL.
- **Lazy & Eager Relations** – Supports `OneToOne`, `OneToMany`, `ManyToOne`, `ManyToMany` relationships.
- **Migration Support** – Helps version database schema.

## Installation

```bash
npm install typeorm reflect-metadata
```

## Entity Definition

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
```

## Connecting to the Database

```typescript
import { DataSource } from 'typeorm';
import { User } from './User';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test_db',
  entities: [User],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Error connecting to database', err));
```

## Inserting Data

```typescript
const userRepo = AppDataSource.getRepository(User);

const newUser = userRepo.create({
  name: 'John Doe',
  email: 'john@example.com',
});
await userRepo.save(newUser);
```

## Querying Data

```typescript
const users = await userRepo.find();
console.log(users);
```

## Why Use TypeORM?

- **Works well with TypeScript**
- **Reduces SQL Boilerplate**
- **Improves Code Maintainability**
- **Supports Migrations & Transactions**
