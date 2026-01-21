import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    track: "JavaScript Fundamentals",
    version: "1.0",
    language: "en",
    totalLessons: 8,
    estimatedHours: 2.5,
    difficulty: "beginner",
    description: "Learn the core language for web interactivity.",
    lessons: [
      {
        id: "js-001",
        title: "What is JavaScript?",
        level: "beginner",
        durationMin: 9,
        completed: false,
        objectives: [
          "Understand JavaScript purpose",
          "Know where JavaScript runs",
          "Write your first script"
        ],
        theory: `JavaScript is a programming language used to make web pages interactive.
It runs in the browser and allows you to respond to user actions, update content dynamically, and communicate with servers.`,
        keyTerms: [
          { term: "Script", definition: "A set of instructions written in JavaScript." },
          { term: "Browser", definition: "Environment where JavaScript runs on the web." },
          { term: "Console", definition: "Tool for debugging JavaScript code." }
        ],
        exampleCode: `console.log("Hello, JavaScript!");`
      },

      {
        id: "js-002",
        title: "Variables and Data Types",
        level: "beginner",
        durationMin: 11,
        completed: false,
        objectives: [
          "Declare variables",
          "Understand primitive types",
          "Use let and const correctly"
        ],
        theory: `Variables store data in JavaScript.
Common data types include strings, numbers, booleans, null, and undefined.`,
        exampleCode: `let name = "Alice";
const age = 25;
let isStudent = true;`
      },

      {
        id: "js-003",
        title: "Functions and Scope",
        level: "beginner",
        durationMin: 13,
        completed: false,
        objectives: [
          "Create functions",
          "Pass parameters",
          "Understand scope"
        ],
        theory: `Functions allow you to reuse code.
Scope defines where variables can be accessed.`,
        exampleCode: `function greet(name) {
  return "Hello " + name;
}`
      },

      {
        id: "js-004",
        title: "Control Flow",
        level: "beginner",
        durationMin: 15,
        completed: false,
        objectives: [
          "Use if and else",
          "Write loops",
          "Control program logic"
        ],
        theory: `Control flow allows programs to make decisions and repeat actions.`,
        exampleCode: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`
      },

      {
        id: "js-005",
        title: "DOM Manipulation",
        level: "beginner",
        durationMin: 18,
        completed: false,
        objectives: [
          "Select DOM elements",
          "Update content dynamically",
          "Handle user events"
        ],
        theory: `The DOM represents the structure of a web page.
JavaScript can read and update the DOM in real time.`,
        exampleCode: `document.querySelector("button")
  .addEventListener("click", () => {
    alert("Button clicked");
  });`
      },

      {
        id: "js-006",
        title: "Arrays and Objects",
        level: "intermediate",
        durationMin: 14,
        completed: false,
        objectives: [
          "Work with arrays",
          "Use array methods",
          "Access object properties"
        ],
        theory: `Arrays store ordered data, while objects store structured key-value data.`,
        exampleCode: `const user = {
  name: "John",
  age: 30
};

const numbers = [1, 2, 3];`
      },

      {
        id: "js-007",
        title: "Asynchronous JavaScript",
        level: "intermediate",
        durationMin: 16,
        completed: false,
        objectives: [
          "Understand async code",
          "Use promises",
          "Handle async/await"
        ],
        theory: `Asynchronous JavaScript allows tasks to run without blocking the main thread.`,
        exampleCode: `async function loadData() {
  const res = await fetch("/api/data");
  const data = await res.json();
  console.log(data);
}`
      },

      {
        id: "js-008",
        title: "ES6+ and Best Practices",
        level: "intermediate",
        durationMin: 19,
        completed: false,
        objectives: [
          "Use modern syntax",
          "Write clean code",
          "Organize JavaScript projects"
        ],
        theory: `Modern JavaScript introduces features that improve readability and maintainability.`,
        exampleCode: `const add = (a, b) => a + b;

const { name, age } = user;`
      }
    ]
  }
];

const JavaScriptReducer = createSlice({
  name: "javascript",
  initialState,
  reducers: {}
});

export default JavaScriptReducer.reducer;
