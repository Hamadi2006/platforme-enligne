import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    track: "React Fundamentals",
    version: "1.0",
    language: "en",
    totalLessons: 8,
    estimatedHours: 2.5,
    difficulty: "beginner",
    description: "Build component-based interfaces with React.",
    lessons: [
      {
        id: "react-001",
        title: "What is React?",
        level: "beginner",
        durationMin: 9,
        completed: false,
        objectives: [
          "Understand what React is",
          "Understand component-based architecture",
          "Know when React is used"
        ],
        theory: `React is a JavaScript library for building user interfaces.

Instead of manipulating the DOM manually, React lets you build reusable components.
Each component describes how the UI should look based on state and props.

React uses a virtual DOM to efficiently update the UI when data changes.`,
        keyTerms: [
          { term: "Component", definition: "A reusable piece of UI." },
          { term: "Virtual DOM", definition: "A lightweight copy of the real DOM used for efficient updates." },
          { term: "JSX", definition: "A syntax that lets you write HTML-like code in JavaScript." }
        ],
        exampleCode: `function App() {
  return <h1>Hello React</h1>;
}

export default App;`
      },

      {
        id: "react-002",
        title: "JSX and Rendering",
        level: "beginner",
        durationMin: 11,
        completed: false,
        objectives: [
          "Understand JSX syntax",
          "Embed expressions in JSX",
          "Render components"
        ],
        theory: `JSX allows you to write UI code using a syntax similar to HTML.
Under the hood, JSX is converted into JavaScript function calls.

JSX expressions are written inside curly braces {}.`,
        exampleCode: `const name = "Sara";

function App() {
  return <h2>Hello {name}</h2>;
}`
      },

      {
        id: "react-003",
        title: "Components and Props",
        level: "beginner",
        durationMin: 13,
        completed: false,
        objectives: [
          "Create reusable components",
          "Pass data using props",
          "Read props inside components"
        ],
        theory: `Props allow components to receive data from their parent.
They are read-only and help make components reusable.`,
        exampleCode: `function Welcome({ name }) {
  return <h3>Hello {name}</h3>;
}

<Welcome name="Sara" />`
      },

      {
        id: "react-004",
        title: "State and useState",
        level: "beginner",
        durationMin: 15,
        completed: false,
        objectives: [
          "Understand component state",
          "Use the useState hook",
          "Trigger re-renders"
        ],
        theory: `State represents data that changes over time.
The useState hook lets functional components store and update state.`,
        exampleCode: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`
      },

      {
        id: "react-005",
        title: "Handling Events",
        level: "beginner",
        durationMin: 14,
        completed: false,
        objectives: [
          "Handle user events",
          "Use event handlers",
          "Update state from events"
        ],
        theory: `React handles events using camelCase syntax.
Event handlers receive a synthetic event object.`,
        exampleCode: `function Button() {
  function handleClick() {
    alert("Clicked!");
  }

  return <button onClick={handleClick}>Click me</button>;
}`
      },

      {
        id: "react-006",
        title: "Lists and Conditional Rendering",
        level: "beginner",
        durationMin: 16,
        completed: false,
        objectives: [
          "Render lists using map",
          "Use keys correctly",
          "Conditionally render UI"
        ],
        theory: `Lists are rendered using JavaScript map().
Each list item must have a unique key.
Conditional rendering lets you show UI based on conditions.`,
        exampleCode: `const items = ["A", "B", "C"];

<ul>
  {items.map(item => (
    <li key={item}>{item}</li>
  ))}
</ul>`
      },

      {
        id: "react-007",
        title: "useEffect and Side Effects",
        level: "intermediate",
        durationMin: 15,
        completed: false,
        objectives: [
          "Understand side effects",
          "Use useEffect hook",
          "Control dependencies"
        ],
        theory: `useEffect lets you run side effects in components.
Common use cases include data fetching and subscriptions.`,
        exampleCode: `import { useEffect } from "react";

useEffect(() => {
  console.log("Component mounted");
}, []);`
      },

      {
        id: "react-008",
        title: "Best Practices and Performance",
        level: "intermediate",
        durationMin: 19,
        completed: false,
        objectives: [
          "Organize components",
          "Avoid unnecessary re-renders",
          "Apply common React best practices"
        ],
        theory: `Best practices improve maintainability and performance:
- Keep components small
- Lift state only when necessary
- Use keys correctly
- Avoid inline heavy logic in JSX`,
        exampleCode: `export default React.memo(function Item({ value }) {
  return <div>{value}</div>;
});`
      }
    ]
  }
];

const ReactReducer = createSlice({
  name: "react",
  initialState,
  reducers: {}
});

export default ReactReducer.reducer;
