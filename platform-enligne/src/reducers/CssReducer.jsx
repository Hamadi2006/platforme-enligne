import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    track: "CSS Fundamentals",
    version: "1.0",
    language: "en",
    totalLessons: 8,
    estimatedHours: 2.5,
    difficulty: "beginner",
    description: "Learn how to style and layout web pages with CSS.",
    lessons: [
        {
            id: "css-001",
            title: "What is CSS?",
            level: "beginner",
            durationMin: 9,
            completed: false,
            objectives: [
                "Understand what CSS is used for",
                "Know how stylesheets connect to HTML",
                "Recognize basic selector and property syntax"
            ],
            theory: `CSS (Cascading Style Sheets) controls the presentation of web pages.
A rule has a selector and declarations made of property/value pairs.

Common ways to apply CSS:
- External stylesheet linked with a <link> tag
- Internal styles in a <style> block
- Inline styles on a single element (use sparingly)

CSS lets you separate content from design and keep styles consistent.`,
            keyTerms: [
                { term: "Selector", definition: "Pattern that targets elements to style." },
                { term: "Declaration", definition: "A property/value pair inside a rule." },
                { term: "Property", definition: "A style attribute like color or margin." },
                { term: "Stylesheet", definition: "A file containing CSS rules." }
            ],
            exampleCode: `/* styles.css */
body {
  font-family: Arial, sans-serif;
  color: #1f2937;
}

.hero {
  background-color: #f97316;
  padding: 16px;
  color: white;
}`,
            quiz: [
                {
                    q: "CSS is mainly used for:",
                    choices: ['Structuring content', 'Styling and layout', 'Database queries', 'Server routing'],
                    answerIndex: 1,
                    hint: "CSS controls how pages look"
                },
                {
                    q: "In 'h1 { color: red; }', the selector is:",
                    choices: ['h1', 'color', 'red', '{}'],
                    answerIndex: 0,
                    hint: "Selectors target elements"
                },
                {
                    q: "Best way to reuse styles across pages:",
                    choices: ['Inline styles', 'External stylesheet', 'JavaScript', 'Database'],
                    answerIndex: 1,
                    hint: "Use a shared CSS file"
                }
            ]
        },

        {
            id: "css-002",
            title: "Selectors and Specificity",
            level: "beginner",
            durationMin: 11,
            completed: false,
            objectives: [
                "Use element, class, and id selectors",
                "Understand the cascade and specificity",
                "Combine selectors for precise targeting"
            ],
            theory: `Selectors tell the browser which elements a rule applies to.
You can target elements, classes, ids, and combine selectors.

Specificity decides which rule wins when multiple rules match:
- Inline styles
- IDs
- Classes/attributes
- Elements

If specificity is equal, the rule that appears last wins.`,
            keyTerms: [
                { term: "Class Selector", definition: "Targets elements with a class like .card." },
                { term: "ID Selector", definition: "Targets one element with an id like #hero." },
                { term: "Specificity", definition: "Rules that decide which style is applied." }
            ],
            exampleCode: `p { color: #334155; }
.card { border: 1px solid #e2e8f0; }
#hero { background: #0ea5e9; }
.nav a { text-decoration: none; }`,
            tasks: [
                {
                    type: "practice",
                    instruction: "Write rules for an element, a class, and an id, then explain which rule wins for a shared property.",
                    points: 10
                }
            ],
            quiz: [
                {
                    q: "Which selector has higher specificity?",
                    choices: ['.card', '#card', 'div', '*'],
                    answerIndex: 1,
                    hint: "IDs beat classes and elements"
                },
                {
                    q: "If two rules have the same specificity, which applies?",
                    choices: ['The first one', 'The last one', 'Both', 'Neither'],
                    answerIndex: 1,
                    hint: "Later rules override earlier ones"
                }
            ]
        },

        {
            id: "css-003",
            title: "Box Model and Typography",
            level: "beginner",
            durationMin: 13,
            completed: false,
            objectives: [
                "Understand margin, border, padding, and content",
                "Style text with fonts, size, and color",
                "Control spacing with line-height and letter-spacing"
            ],
            theory: `The CSS box model describes how every element is sized:
content -> padding -> border -> margin.

Width and height apply to the content box by default.
Use box-sizing: border-box to include padding and border in the size.

Typography controls readability with font-size, line-height, and spacing.`,
            keyTerms: [
                { term: "Box Model", definition: "The layers of content, padding, border, and margin." },
                { term: "Padding", definition: "Space between content and border." },
                { term: "Margin", definition: "Space outside an element's border." }
            ],
            exampleCode: `.card {
  padding: 16px;
  border: 1px solid #e5e7eb;
  margin: 12px;
  box-sizing: border-box;
}

h1 {
  font-size: 32px;
  line-height: 1.2;
  letter-spacing: 0.5px;
}`,
            tasks: [
                {
                    type: "practice",
                    instruction: "Style a card with padding, border, and margin, then adjust heading typography for readability.",
                    points: 15
                }
            ],
            quiz: [
                {
                    q: "Which property adds space inside an element's border?",
                    choices: ['margin', 'padding', 'outline', 'gap'],
                    answerIndex: 1,
                    hint: "Padding is inside the border"
                },
                {
                    q: "What does box-sizing: border-box do?",
                    choices: ['Adds a border', 'Includes padding and border in width', 'Centers elements', 'Changes font size'],
                    answerIndex: 1,
                    hint: "It changes how width is calculated"
                }
            ]
        },

        {
            id: "css-004",
            title: "Layout with Flexbox and Grid",
            level: "beginner",
            durationMin: 15,
            completed: false,
            objectives: [
                "Create flexible layouts with Flexbox",
                "Build grid layouts with CSS Grid",
                "Align and distribute items"
            ],
            theory: `Flexbox is great for one-dimensional layout (row or column).
Grid handles two-dimensional layout with rows and columns.

Flexbox aligns items with justify-content and align-items.
Grid defines columns and rows with grid-template properties.`,
            keyTerms: [
                { term: "Flex Container", definition: "Parent element with display: flex." },
                { term: "Grid", definition: "Two-dimensional layout system for rows and columns." },
                { term: "Alignment", definition: "Positioning items along axes." }
            ],
            exampleCode: `.row {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}`,
            tasks: [
                {
                    type: "practice",
                    instruction: "Create a navigation bar with Flexbox and a two-column card layout using Grid.",
                    points: 15
                }
            ],
            quiz: [
                {
                    q: "Which property aligns items along the main axis in Flexbox?",
                    choices: ['align-items', 'justify-content', 'place-items', 'flex-wrap'],
                    answerIndex: 1,
                    hint: "Main axis alignment uses justify-content"
                },
                {
                    q: "Which layout system is two-dimensional?",
                    choices: ['Flexbox', 'Grid', 'Float', 'Inline'],
                    answerIndex: 1,
                    hint: "Grid handles rows and columns"
                }
            ]
        },

        {
            id: "css-005",
            title: "Responsive Design Basics",
            level: "beginner",
            durationMin: 18,
            completed: false,
            objectives: [
                "Use media queries for breakpoints",
                "Apply responsive units like rem and vw",
                "Build fluid layouts that adapt"
            ],
            theory: `Responsive design adapts layouts to different screen sizes.
Use media queries to apply rules at specific breakpoints.

Prefer fluid units like %, rem, and vw for scalable layouts.
Start with mobile styles and enhance for larger screens.`,
            keyTerms: [
                { term: "Media Query", definition: "Conditional CSS rules based on screen size." },
                { term: "Breakpoint", definition: "A screen width where layout changes." },
                { term: "Responsive Unit", definition: "Units like rem, %, or vw that scale." },
                { term: "Viewport", definition: "Visible area of the browser window." }
            ],
            exampleCode: `.container {
  width: 100%;
  padding: 16px;
}

@media (min-width: 768px) {
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
}`,
            tasks: [
                {
                    type: "practice",
                    instruction: "Add a breakpoint at 768px that changes a layout from stacked to two columns.",
                    points: 20
                }
            ],
            quiz: [
                {
                    q: "What does @media do?",
                    choices: ['Defines variables', 'Applies rules conditionally', 'Loads images', 'Adds classes'],
                    answerIndex: 1,
                    hint: "It gates rules by conditions"
                },
                {
                    q: "Which unit scales with the root font size?",
                    choices: ['px', 'rem', '%', 'vh'],
                    answerIndex: 1,
                    hint: "It is based on the root element"
                }
            ]
        },

        {
            id: "css-006",
            title: "Positioning and Layering",
            level: "intermediate",
            durationMin: 14,
            completed: false,
            objectives: [
                "Use relative, absolute, and fixed positioning",
                "Control stacking with z-index",
                "Manage overflow and containing blocks"
            ],
            theory: `Positioning controls how elements are placed on the page.
relative keeps the element in flow but allows offsets.
absolute and fixed remove elements from normal flow.

z-index controls stacking order when elements overlap.
Be careful to avoid large z-index values without a plan.`,
            keyTerms: [
                { term: "Position", definition: "Defines how an element is positioned." },
                { term: "Offset", definition: "top/right/bottom/left values for positioning." },
                { term: "z-index", definition: "Controls which element appears on top." },
                { term: "Stacking Context", definition: "A context that groups z-index ordering." }
            ],
            exampleCode: `.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}

.modal {
  position: fixed;
  inset: 0;
  z-index: 50;
}`,
            tasks: [
                {
                    type: "practice",
                    instruction: "Create a card with an absolute badge in the top-right corner.",
                    points: 20
                }
            ],
            quiz: [
                {
                    q: "Which position removes an element from normal flow?",
                    choices: ['static', 'relative', 'absolute', 'sticky'],
                    answerIndex: 2,
                    hint: "Absolute positioning takes it out of flow"
                },
                {
                    q: "What does z-index control?",
                    choices: ['Font size', 'Stacking order', 'Padding', 'Color'],
                    answerIndex: 1,
                    hint: "It decides which element is on top"
                }
            ]
        },

        {
            id: "css-007",
            title: "Transitions and Animations",
            level: "intermediate",
            durationMin: 16,
            completed: false,
            objectives: [
                "Create smooth transitions",
                "Define keyframe animations",
                "Improve motion performance"
            ],
            theory: `Transitions animate a property change between states.
Animations use keyframes for multi-step motion.

Prefer animating transform and opacity for better performance.
Use durations and easing to make motion feel natural.`,
            keyTerms: [
                { term: "Transition", definition: "Smooth change between two states." },
                { term: "Keyframes", definition: "Steps that define an animation sequence." },
                { term: "Easing", definition: "Controls acceleration of motion." },
                { term: "Duration", definition: "How long the animation lasts." }
            ],
            exampleCode: `.button {
  transition: transform 200ms ease, background-color 200ms ease;
}

.button:hover {
  transform: translateY(-2px);
}

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}

.loader {
  animation: pulse 1s infinite;
}`,
            tasks: [
                {
                    type: "practice",
                    instruction: "Add a hover transition to a button and create a keyframe animation for a loader.",
                    points: 15
                }
            ],
            quiz: [
                {
                    q: "Which rule defines animation steps?",
                    choices: ['transition', '@keyframes', '@media', '@supports'],
                    answerIndex: 1,
                    hint: "It defines the animation frames"
                },
                {
                    q: "Which property controls animation length?",
                    choices: ['animation-duration', 'animation-fill-mode', 'animation-direction', 'animation-play-state'],
                    answerIndex: 0,
                    hint: "It sets how long the animation runs"
                }
            ]
        },

        {
            id: "css-008",
            title: "CSS Best Practices",
            level: "intermediate",
            durationMin: 19,
            completed: false,
            objectives: [
                "Organize styles with clear naming",
                "Avoid specificity conflicts",
                "Build reusable utility patterns"
            ],
            theory: `Keep CSS maintainable by using consistent naming and structure.
Limit specificity and avoid deep selectors.

Use custom properties for shared values and themes.
Avoid !important unless there is no other option.`,
            keyTerms: [
                { term: "BEM", definition: "Naming convention for reusable components." },
                { term: "Utility Class", definition: "Small class that applies one style." },
                { term: "Custom Property", definition: "CSS variable defined with --name." }
            ],
            exampleCode: `:root {
  --primary: #0ea5e9;
}

.btn {
  padding: 10px 16px;
  border-radius: 8px;
}

.btn--primary {
  background: var(--primary);
  color: white;
}`,
            tasks: [
                {
                    type: "practice",
                    instruction: "Refactor a small stylesheet to use variables and consistent naming for buttons.",
                    points: 25
                }
            ],
            quiz: [
                {
                    q: "Why avoid using !important?",
                    choices: ['It is invalid CSS', 'It makes overrides harder', 'It breaks layouts', 'It is slow'],
                    answerIndex: 1,
                    hint: "It increases specificity issues"
                },
                {
                    q: "What is a benefit of CSS variables?",
                    choices: ['They remove all CSS', 'They allow reuse of values', 'They add JavaScript', 'They replace HTML'],
                    answerIndex: 1,
                    hint: "They help keep values consistent"
                }
            ]
        },
    ]
}];


const CssReducer = createSlice({
    name : 'css' , 
    initialState , 
    reducers  : {}
})


export default CssReducer.reducer ; 
