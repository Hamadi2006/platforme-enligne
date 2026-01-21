import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    track: "PHP Fundamentals",
    version: "1.0",
    language: "en",
    totalLessons: 8,
    estimatedHours: 2.5,
    difficulty: "beginner",
    description: "Create dynamic server-side applications with PHP.",
    lessons: [
      {
        id: "php-001",
        title: "What is PHP?",
        level: "beginner",
        durationMin: 9,
        completed: false,
        objectives: [
          "Understand what PHP is",
          "Understand server-side execution",
          "Run a basic PHP script"
        ],
        theory: `PHP (Hypertext Preprocessor) is a server-side scripting language used to build dynamic web applications.

PHP runs on the server, generates HTML, and sends it to the browser.
Unlike JavaScript, PHP code is never visible to the user.`,
        keyTerms: [
          { term: "Server-side", definition: "Code executed on the server before reaching the browser." },
          { term: "PHP Script", definition: "A file containing PHP code executed by the server." },
          { term: "Interpreter", definition: "The engine that executes PHP code." }
        ],
        exampleCode: `<?php
echo "Hello PHP";
?>`
      },

      {
        id: "php-002",
        title: "Variables and Data Types",
        level: "beginner",
        durationMin: 11,
        completed: false,
        objectives: [
          "Declare variables in PHP",
          "Use strings, numbers, and booleans",
          "Concatenate values"
        ],
        theory: `PHP variables start with a $ sign.
PHP is loosely typed, meaning you do not need to declare variable types explicitly.`,
        exampleCode: `<?php
$name = "Sara";
$age = 25;
$isAdmin = false;

echo "Name: " . $name;
?>`
      },

      {
        id: "php-003",
        title: "Control Structures",
        level: "beginner",
        durationMin: 13,
        completed: false,
        objectives: [
          "Use if / else conditions",
          "Use switch statements",
          "Loop with for and while"
        ],
        theory: `Control structures let you control the flow of execution based on conditions.`,
        exampleCode: `<?php
if ($age >= 18) {
  echo "Adult";
} else {
  echo "Minor";
}

for ($i = 1; $i <= 5; $i++) {
  echo $i;
}
?>`
      },

      {
        id: "php-004",
        title: "Functions and Includes",
        level: "beginner",
        durationMin: 15,
        completed: false,
        objectives: [
          "Define and call functions",
          "Reuse code with include and require",
          "Organize PHP files"
        ],
        theory: `Functions help you reuse logic.
include and require allow you to split your application into multiple files.`,
        exampleCode: `<?php
function greet($name) {
  return "Hello " . $name;
}

include "helpers.php";
?>`
      },

      {
        id: "php-005",
        title: "Working with Forms",
        level: "beginner",
        durationMin: 18,
        completed: false,
        objectives: [
          "Read GET and POST data",
          "Validate user input",
          "Sanitize user data"
        ],
        theory: `PHP can receive form data via $_GET and $_POST superglobals.
Always validate and sanitize input to avoid security issues.`,
        exampleCode: `<?php
$name = htmlspecialchars($_POST["name"] ?? "");
echo $name;
?>`
      },

      {
        id: "php-006",
        title: "Arrays and Associative Arrays",
        level: "intermediate",
        durationMin: 14,
        completed: false,
        objectives: [
          "Create indexed arrays",
          "Create associative arrays",
          "Loop through arrays"
        ],
        theory: `Arrays store multiple values in a single variable.
Associative arrays use keys instead of numeric indexes.`,
        exampleCode: `<?php
$user = [
  "name" => "Sara",
  "email" => "sara@example.com"
];

foreach ($user as $key => $value) {
  echo $key . ": " . $value;
}
?>`
      },

      {
        id: "php-007",
        title: "Sessions and Cookies",
        level: "intermediate",
        durationMin: 16,
        completed: false,
        objectives: [
          "Start and manage sessions",
          "Set and read cookies",
          "Secure session data"
        ],
        theory: `Sessions store user data on the server.
Cookies store small pieces of data in the browser.`,
        exampleCode: `<?php
session_start();
$_SESSION["user"] = "Sara";

setcookie("theme", "dark", time() + 3600);
?>`
      },

      {
        id: "php-008",
        title: "Best Practices and Security",
        level: "intermediate",
        durationMin: 19,
        completed: false,
        objectives: [
          "Separate logic and presentation",
          "Handle errors safely",
          "Write secure PHP code"
        ],
        theory: `Best practices improve maintainability and security:
- Never trust user input
- Use prepared statements for databases
- Separate business logic from templates`,
        exampleCode: `<?php
try {
  // risky code
} catch (Exception $e) {
  error_log($e->getMessage());
}
?>`
      }
    ]
  }
];

const PhpReducer = createSlice({
  name: "php",
  initialState,
  reducers: {}
});

export default PhpReducer.reducer;
