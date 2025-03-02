# SQLite Database

SQLite is a lightweight, serverless, self-contained SQL database engine. It is widely used for local storage in applications, embedded systems, and small-scale projects because it requires minimal setup and has zero configuration.

## Key Features:

- **Serverless**: No need for a separate database server.
- **Single File Storage**: Entire database is stored in a single `.sqlite` or `.db` file.
- **Lightweight**: Small footprint, making it ideal for embedded systems and mobile apps.
- **ACID Compliance**: Supports transactions, ensuring data integrity.
- **Cross-Platform**: Works on Windows, macOS, Linux, and mobile devices.

## Basic Commands:

### 1. Create a Database

```sh
sqlite3 mydatabase.db
```

````

This opens an SQLite prompt to interact with the database.

### 2. Create a Table

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);
```

### 3. Insert Data

```sql
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
```

### 4. Query Data

```sql
SELECT * FROM users;
```

### 5. Update Data

```sql
UPDATE users SET name = 'Jane Doe' WHERE id = 1;
```

### 6. Delete Data

```sql
DELETE FROM users WHERE id = 1;
```

### 7. Close SQLite

Type `.exit` or `CTRL + D` to exit.

Would you like help with integrating SQLite into a project?

```

Let me know if you need any modifications!
```
````
