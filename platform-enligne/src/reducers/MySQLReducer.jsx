import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    track: "SQL Fundamentals",
    version: "1.0",
    language: "en",
    totalLessons: 8,
    estimatedHours: 2.5,
    difficulty: "beginner",
    description: "Query and manage data in relational databases.",
    lessons: [
      {
        id: "sql-001",
        title: "What is SQL?",
        level: "beginner",
        durationMin: 9,
        completed: false,
        objectives: [
          "Understand what SQL is used for",
          "Know what tables, rows, and columns represent",
          "Recognize common SQL operations (read/write/update/delete)"
        ],
        theory: `SQL (Structured Query Language) is the standard language used to interact with relational databases.
A relational database stores data in tables. Each table has rows (records) and columns (fields).

With SQL you can:
- Read data (SELECT)
- Insert data (INSERT)
- Update data (UPDATE)
- Delete data (DELETE)

SQL is declarative: you describe the data you want, and the database engine decides how to retrieve it.`,
        keyTerms: [
          { term: "Database", definition: "A structured collection of data stored and managed by a DBMS." },
          { term: "Table", definition: "A collection of rows and columns (like a spreadsheet) storing related data." },
          { term: "Row (Record)", definition: "One entry in a table (one item/person/order...)." },
          { term: "Column (Field)", definition: "One attribute of the data (name, email, price...)." },
          { term: "DBMS", definition: "Database Management System (e.g., MySQL, PostgreSQL, SQL Server)." }
        ],
        exampleCode: `-- Example table: users(id, name, email)
SELECT id, name, email
FROM users;`,
        quiz: [
          {
            q: "SQL is mainly used for:",
            choices: ["Styling web pages", "Structuring HTML", "Managing and querying data", "Drawing graphics"],
            answerIndex: 2,
            hint: "Think databases and tables."
          },
          {
            q: "A table row represents:",
            choices: ["A database", "A single record", "A column", "A query"],
            answerIndex: 1,
            hint: "One item in the table."
          }
        ]
      },

      {
        id: "sql-002",
        title: "SELECT, WHERE, ORDER BY, LIMIT",
        level: "beginner",
        durationMin: 12,
        completed: false,
        objectives: [
          "Select specific columns with SELECT",
          "Filter results using WHERE",
          "Sort results using ORDER BY",
          "Limit results using LIMIT"
        ],
        theory: `SELECT retrieves data from a table.
WHERE filters rows based on a condition.
ORDER BY sorts the output.
LIMIT restricts the number of returned rows (commonly supported in MySQL/PostgreSQL).`,
        keyTerms: [
          { term: "SELECT", definition: "Reads data from one or more tables." },
          { term: "WHERE", definition: "Filters rows that match a condition." },
          { term: "ORDER BY", definition: "Sorts results by one or more columns." },
          { term: "LIMIT", definition: "Restricts the number of returned rows." }
        ],
        exampleCode: `-- Get the last 5 users created (example column: created_at)
SELECT id, name, email
FROM users
WHERE email LIKE '%@gmail.com'
ORDER BY created_at DESC
LIMIT 5;`,
        tasks: [
          {
            type: "practice",
            instruction: "Write a query that selects name and price from products where price > 100, sorted by price descending, limited to 10 results.",
            points: 10
          }
        ],
        quiz: [
          {
            q: "Which clause filters rows?",
            choices: ["ORDER BY", "WHERE", "LIMIT", "FROM"],
            answerIndex: 1,
            hint: "Filtering uses conditions."
          }
        ]
      },

      {
        id: "sql-003",
        title: "INSERT, UPDATE, DELETE",
        level: "beginner",
        durationMin: 14,
        completed: false,
        objectives: [
          "Insert new rows with INSERT",
          "Update rows safely with UPDATE + WHERE",
          "Delete rows safely with DELETE + WHERE"
        ],
        theory: `INSERT adds new records to a table.
UPDATE modifies existing records.
DELETE removes records.

Important safety rule:
Always use a WHERE clause for UPDATE/DELETE unless you intentionally want to affect all rows.`,
        keyTerms: [
          { term: "INSERT", definition: "Adds new rows to a table." },
          { term: "UPDATE", definition: "Modifies existing rows in a table." },
          { term: "DELETE", definition: "Removes rows from a table." }
        ],
        exampleCode: `-- Insert a new user
INSERT INTO users (name, email)
VALUES ('Sara', 'sara@example.com');

-- Update a user's email (safe because of WHERE)
UPDATE users
SET email = 'sara.new@example.com'
WHERE id = 7;

-- Delete a user (safe because of WHERE)
DELETE FROM users
WHERE id = 7;`,
        tasks: [
          {
            type: "practice",
            instruction: "Write an INSERT into a 'products' table (name, price). Then write an UPDATE to change its price using WHERE.",
            points: 15
          }
        ],
        quiz: [
          {
            q: "What’s the biggest danger with UPDATE/DELETE?",
            choices: ["They are slow", "They need a JOIN", "Forgetting WHERE", "They require GROUP BY"],
            answerIndex: 2,
            hint: "Think accidental changes to all rows."
          }
        ]
      },

      {
        id: "sql-004",
        title: "JOINs and Relationships",
        level: "beginner",
        durationMin: 15,
        completed: false,
        objectives: [
          "Understand primary key and foreign key",
          "Use INNER JOIN to combine related data",
          "Use LEFT JOIN to keep all rows from the left table"
        ],
        theory: `JOIN combines rows from two tables using a related column.

Common relationships:
- users(id) ↔ orders(user_id)

INNER JOIN returns only matching rows.
LEFT JOIN returns all rows from the left table plus matches from the right (NULL if no match).`,
        keyTerms: [
          { term: "Primary Key", definition: "A unique identifier for each row (often id)." },
          { term: "Foreign Key", definition: "A column referencing a primary key in another table (e.g., user_id)." },
          { term: "INNER JOIN", definition: "Returns only rows that match between tables." },
          { term: "LEFT JOIN", definition: "Returns all rows from the left table, plus matches from the right." }
        ],
        exampleCode: `-- users(id, name) and orders(id, user_id, total)
SELECT u.id, u.name, o.id AS order_id, o.total
FROM users u
INNER JOIN orders o ON o.user_id = u.id;

-- Keep all users, even if they have no orders
SELECT u.id, u.name, o.id AS order_id, o.total
FROM users u
LEFT JOIN orders o ON o.user_id = u.id;`
      },

      {
        id: "sql-005",
        title: "Aggregations: COUNT, SUM, AVG + GROUP BY + HAVING",
        level: "beginner",
        durationMin: 16,
        completed: false,
        objectives: [
          "Use aggregate functions (COUNT, SUM, AVG)",
          "Group rows using GROUP BY",
          "Filter groups using HAVING"
        ],
        theory: `Aggregations summarize data:
- COUNT counts rows
- SUM adds values
- AVG calculates averages

GROUP BY groups rows so aggregates are calculated per group.
HAVING filters groups (WHERE filters rows).`,
        keyTerms: [
          { term: "Aggregate Function", definition: "A function that summarizes multiple rows (COUNT, SUM, AVG...)." },
          { term: "GROUP BY", definition: "Groups rows to compute aggregates per group." },
          { term: "HAVING", definition: "Filters groups after aggregation." }
        ],
        exampleCode: `-- Count orders per user
SELECT user_id, COUNT(*) AS orders_count
FROM orders
GROUP BY user_id
HAVING COUNT(*) >= 3;

-- Average order total per user
SELECT user_id, AVG(total) AS avg_total
FROM orders
GROUP BY user_id;`,
        tasks: [
          {
            type: "practice",
            instruction: "Write a query that shows each category_id and total number of products in that category, only keeping categories with 5 or more products.",
            points: 20
          }
        ]
      },

      {
        id: "sql-006",
        title: "Constraints and Schema Basics",
        level: "intermediate",
        durationMin: 14,
        completed: false,
        objectives: [
          "Understand NOT NULL, UNIQUE, PRIMARY KEY",
          "Use FOREIGN KEY relationships",
          "Know why constraints matter for data quality"
        ],
        theory: `Constraints protect data integrity:
- NOT NULL: a column must have a value
- UNIQUE: no duplicate values
- PRIMARY KEY: unique identifier for each row
- FOREIGN KEY: ensures relationships remain valid

Constraints prevent bad data from entering the database.`,
        keyTerms: [
          { term: "NOT NULL", definition: "Prevents missing values in a column." },
          { term: "UNIQUE", definition: "Prevents duplicate values in a column." },
          { term: "PRIMARY KEY", definition: "Unique identifier for rows in a table." },
          { term: "FOREIGN KEY", definition: "Enforces valid references between tables." }
        ],
        exampleCode: `CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  CONSTRAINT fk_orders_user
    FOREIGN KEY (user_id) REFERENCES users(id)
);`
      },

      {
        id: "sql-007",
        title: "Indexes and Performance Basics",
        level: "intermediate",
        durationMin: 14,
        completed: false,
        objectives: [
          "Understand what an index is",
          "Know when indexes help",
          "Use EXPLAIN to inspect a query plan (conceptually)"
        ],
        theory: `Indexes speed up searching and filtering, especially on large tables.
They can dramatically improve SELECT performance but may slow down INSERT/UPDATE/DELETE due to extra maintenance.

A good index strategy depends on your query patterns (WHERE, JOIN, ORDER BY).`,
        keyTerms: [
          { term: "Index", definition: "A data structure that speeds up lookups on a column." },
          { term: "Query Plan", definition: "How the database executes your query." },
          { term: "EXPLAIN", definition: "A command to inspect how a query will be executed." }
        ],
        exampleCode: `-- Add an index on email to speed up lookups
CREATE INDEX idx_users_email ON users(email);

-- Inspect query plan (syntax varies by DB)
EXPLAIN
SELECT id, name
FROM users
WHERE email = 'sara@example.com';`
      },

      {
        id: "sql-008",
        title: "SQL Best Practices and Safety",
        level: "intermediate",
        durationMin: 16,
        completed: false,
        objectives: [
          "Write readable SQL (formatting and naming)",
          "Avoid SELECT * in production queries",
          "Understand parameterized queries to prevent SQL injection",
          "Know when to use transactions"
        ],
        theory: `Best practices help you write safer, maintainable SQL:
- Select only the columns you need
- Use consistent formatting and aliases
- Use parameterized queries in your application code (prevents SQL injection)
- Use transactions for multi-step operations that must succeed together`,
        keyTerms: [
          { term: "SQL Injection", definition: "A security attack where untrusted input changes a query’s meaning." },
          { term: "Parameterized Query", definition: "A query with placeholders bound to values safely." },
          { term: "Transaction", definition: "A group of operations that run as a single unit (COMMIT/ROLLBACK)." }
        ],
        exampleCode: `-- Transaction example (pseudo)
START TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;`
      }
    ]
  }
];

const SQLReducer = createSlice({
  name: "sql",
  initialState,
  reducers: {}
});

export default SQLReducer.reducer;
