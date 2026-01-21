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
          "Understand what SQL is",
          "Understand relational databases",
          "Identify tables, rows, and columns"
        ],
        theory: `SQL (Structured Query Language) is the standard language used to work with relational databases.

A relational database stores data in tables.
Each table contains rows (records) and columns (fields).

SQL allows you to:
- Read data (SELECT)
- Insert data (INSERT)
- Update data (UPDATE)
- Delete data (DELETE)

SQL is declarative: you describe what data you want, not how to retrieve it.`,
        keyTerms: [
          { term: "Database", definition: "A structured collection of data." },
          { term: "Table", definition: "A collection of rows and columns." },
          { term: "Row", definition: "A single record in a table." },
          { term: "Column", definition: "A field representing one attribute." }
        ],
        exampleCode: `SELECT id, name, email FROM users;`,
        quiz: [
          {
            q: "SQL is mainly used for:",
            choices: ["Styling pages", "Structuring HTML", "Managing data", "Creating layouts"],
            answerIndex: 2,
            hint: "Think databases."
          }
        ]
      },

      {
        id: "sql-002",
        title: "SELECT and WHERE",
        level: "beginner",
        durationMin: 11,
        completed: false,
        objectives: [
          "Select columns from a table",
          "Filter rows using WHERE",
          "Use comparison operators"
        ],
        theory: `SELECT retrieves data from a table.
WHERE filters rows based on conditions.

Common operators:
=, >, <, >=, <=, !=`,
        keyTerms: [
          { term: "SELECT", definition: "Reads data from a table." },
          { term: "WHERE", definition: "Filters rows by condition." }
        ],
        exampleCode: `SELECT name, price
FROM products
WHERE price > 100;`
      },

      {
        id: "sql-003",
        title: "ORDER BY and LIMIT",
        level: "beginner",
        durationMin: 10,
        completed: false,
        objectives: [
          "Sort results using ORDER BY",
          "Limit returned rows"
        ],
        theory: `ORDER BY sorts query results.
LIMIT restricts the number of rows returned.`,
        exampleCode: `SELECT * FROM users
ORDER BY created_at DESC
LIMIT 5;`
      },

      {
        id: "sql-004",
        title: "INSERT, UPDATE, DELETE",
        level: "beginner",
        durationMin: 14,
        completed: false,
        objectives: [
          "Insert new records",
          "Update existing data",
          "Delete records safely"
        ],
        theory: `INSERT adds new rows.
UPDATE modifies existing rows.
DELETE removes rows.

⚠️ Always use WHERE with UPDATE and DELETE.`,
        exampleCode: `INSERT INTO users (name, email)
VALUES ('Sara', 'sara@example.com');

UPDATE users
SET email = 'new@example.com'
WHERE id = 1;

DELETE FROM users
WHERE id = 1;`
      },

      {
        id: "sql-005",
        title: "JOINs and Relationships",
        level: "beginner",
        durationMin: 15,
        completed: false,
        objectives: [
          "Understand table relationships",
          "Use INNER JOIN",
          "Use LEFT JOIN"
        ],
        theory: `JOIN combines rows from multiple tables.

INNER JOIN returns matching rows.
LEFT JOIN returns all rows from the left table.`,
        exampleCode: `SELECT users.name, orders.total
FROM users
INNER JOIN orders ON orders.user_id = users.id;`
      },

      {
        id: "sql-006",
        title: "Aggregations and GROUP BY",
        level: "intermediate",
        durationMin: 16,
        completed: false,
        objectives: [
          "Use COUNT, SUM, AVG",
          "Group results using GROUP BY",
          "Filter groups using HAVING"
        ],
        theory: `Aggregate functions summarize data.
GROUP BY groups rows.
HAVING filters grouped results.`,
        exampleCode: `SELECT user_id, COUNT(*) AS orders_count
FROM orders
GROUP BY user_id
HAVING COUNT(*) >= 3;`
      },

      {
        id: "sql-007",
        title: "Constraints and Schema Design",
        level: "intermediate",
        durationMin: 14,
        completed: false,
        objectives: [
          "Understand primary keys",
          "Use foreign keys",
          "Apply NOT NULL and UNIQUE"
        ],
        theory: `Constraints protect data integrity.

Common constraints:
PRIMARY KEY
FOREIGN KEY
NOT NULL
UNIQUE`,
        exampleCode: `CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL
);`
      },

      {
        id: "sql-008",
        title: "Indexes and Best Practices",
        level: "intermediate",
        durationMin: 15,
        completed: false,
        objectives: [
          "Understand indexes",
          "Optimize queries",
          "Write safe SQL"
        ],
        theory: `Indexes speed up SELECT queries.
Avoid SELECT * in production.
Use parameterized queries to prevent SQL injection.`,
        exampleCode: `CREATE INDEX idx_users_email ON users(email);`
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
