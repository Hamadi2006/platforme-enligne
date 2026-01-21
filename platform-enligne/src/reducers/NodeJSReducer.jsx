import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    track: "Node.js Fundamentals",
    version: "1.0",
    language: "en",
    totalLessons: 8,
    estimatedHours: 2.5,
    difficulty: "beginner",
    description: "Run JavaScript on the server with Node.js.",
    lessons: [
        {
            id: "html-001",
            title: "What is Node.js?",
            level: "beginner",
            durationMin: 9,
            completed: false,
            objectives: [
                "Understand the Node.js runtime",
                "Run a basic Node script",
                "Install packages with npm"
            ],
            theory: `HTML (HyperText Markup Language) is the standard language used to structure web pages.
It describes content using elements (tags) like <h1>, <p>, <a>, <img>.
HTML is not a programming language; it's a markup language.

Every webpage you see on the internet is built with HTML. It's the skeleton that gives structure to content, telling browsers how to display text, images, links, and other elements.`,
            keyTerms: [
                { term: "Element", definition: "A piece of HTML like <p>Hello</p> (opening tag + content + closing tag)." },
                { term: "Tag", definition: "The markup notation like <p> or </p> that defines an element." },
                { term: "Attribute", definition: "Extra info inside a tag like href, src, alt." },
                { term: "Document", definition: "A complete HTML file." }
            ],
            exampleCode: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello HTML</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`,
            quiz: [
                {
                    q: "HTML is mainly used for:",
                    choices: ["Styling pages", "Structuring content", "Running server code", "Database queries"],
                    answerIndex: 1,
                    hint: "Think about what HTML does to the content on a webpage"
                },
                {
                    q: "Which is an HTML element?",
                    choices: ["{color: red}", "<p>Text</p>", "console.log()", "SELECT * FROM users"],
                    answerIndex: 1,
                    hint: "HTML elements use angle brackets"
                },
                {
                    q: "Is HTML a programming language?",
                    choices: ["Yes", "No"],
                    answerIndex: 1,
                    hint: "HTML is a markup language, not a programming language"
                }
            ]
        },

        {
            id: "html-002",
            title: "Modules and NPM",
            level: "beginner",
            durationMin: 11,
            completed: false,
            objectives: [
                "Import and export modules",
                "Manage dependencies with npm",
                "Use package.json scripts"
            ],
            theory: `A basic HTML page has:
- <!doctype html> tells the browser to use HTML5.
- <html> is the root element that wraps all content.
- <head> contains metadata (title, charset, SEO information).
- <body> contains visible content that users see.

The head section is invisible to users but crucial for browsers and search engines. The body section contains everything users interact with.`,
            keyTerms: [
                { term: "Doctype", definition: "Declares the HTML version to the browser." },
                { term: "Metadata", definition: "Information about the document (not visible on page)." },
                { term: "Charset", definition: "Character encoding (usually UTF-8 for international support)." }
            ],
            exampleCode: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Learning HTML structure" />
    <meta name="keywords" content="HTML, web development, tutorial" />
    <title>Document Structure</title>
  </head>
  <body>
    <h1>Main heading</h1>
    <p>Visible content goes here.</p>
  </body>
</html>`,
            tasks: [
                {
                    type: "practice",
                    instruction: "Create a page with a title 'About Me' and a paragraph introducing yourself.",
                    points: 10
                }
            ],
            quiz: [
                {
                    q: "Where does visible content go?",
                    choices: ["<head>", "<meta>", "<body>", "<title>"],
                    answerIndex: 2,
                    hint: "Users see content in the body section"
                },
                {
                    q: "What does the <!doctype html> declaration do?",
                    choices: ["Styles the page", "Tells browser to use HTML5", "Creates a link", "Adds a title"],
                    answerIndex: 1,
                    hint: "It's about browser compatibility"
                }
            ]
        },

        {
            id: "html-003",
            title: "Asynchronous Basics",
            level: "beginner",
            durationMin: 13,
            completed: false,
            objectives: [
                "Use callbacks and promises",
                "Handle async/await",
                "Avoid blocking code"
            ],
            theory: `Use headings to structure your content:
- <h1> is the main title (usually one per page)
- <h2>, <h3> ... are sub-sections (create a hierarchy)

Lists organize information:
- <ul> for bullet lists (unordered)
- <ol> for numbered lists (ordered)
- <li> for list items

Proper heading hierarchy improves accessibility and SEO!`,
            keyTerms: [
                { term: "Heading Hierarchy", definition: "Structured order of headings (h1 > h2 > h3, etc.)." },
                { term: "Unordered List", definition: "Bulleted list using <ul>." },
                { term: "Ordered List", definition: "Numbered list using <ol>." }
            ],
            exampleCode: `<h1>My Blog</h1>
<h2>Latest Posts</h2>
<p>Welcome to my blog about web development.</p>

<h3>Topics I Cover:</h3>
<ul>
  <li>HTML Basics</li>
  <li>CSS Styling</li>
  <li>JavaScript Fundamentals</li>
</ul>

<h3>Getting Started Guide:</h3>
<ol>
  <li>Install VS Code</li>
  <li>Create index.html</li>
  <li>Write your first HTML</li>
  <li>Open in browser</li>
</ol>`,
            tasks: [
                {
                    type: "practice",
                    instruction: "Create a page about your hobbies with proper heading hierarchy and at least one list.",
                    points: 15
                }
            ],
            quiz: [
                {
                    q: "Which tag makes a bullet list?",
                    choices: ["<ol>", "<ul>", "<li>", "<p>"],
                    answerIndex: 1,
                    hint: "Think 'unordered' for bullets"
                },
                {
                    q: "How many <h1> tags should you typically use per page?",
                    choices: ["As many as you want", "One", "At least three", "None"],
                    answerIndex: 1,
                    hint: "One main title per page is best practice"
                }
            ]
        },

        {
            id: "html-004",
            title: "Building an HTTP Server",
            level: "beginner",
            durationMin: 15,
            completed: false,
            objectives: [
                "Create an HTTP server",
                "Handle requests and responses",
                "Implement basic routing"
            ],
            theory: `Links connect the web together:
- <a href="url">text</a> creates clickable links
- href attribute specifies the destination
- target="_blank" opens in new tab (add rel="noopener" for security)

Images enhance content:
- <img src="path" alt="description"> (self-closing tag)
- src specifies image location
- alt text is crucial for accessibility and SEO
- Always include alt text to describe images for screen readers`,
            keyTerms: [
                { term: "Hyperlink", definition: "A clickable link to another page or resource." },
                { term: "Alt Text", definition: "Alternative text describing an image (for accessibility)." },
                { term: "Absolute URL", definition: "Full web address (https://example.com)." },
                { term: "Relative URL", definition: "Path relative to current page (./image.jpg)." }
            ],
            exampleCode: `<!-- Internal link -->
<a href="#section2">Jump to Section 2</a>

<!-- External link -->
<a href="https://example.com" target="_blank" rel="noopener">
  Visit Example
</a>

<!-- Image with good alt text -->
<img 
  src="cat.jpg" 
  alt="A gray tabby cat sitting on a red chair by the window" 
  width="300" 
  height="200"
/>

<!-- Link with image inside -->
<a href="gallery.html">
  <img src="thumbnail.jpg" alt="Photo gallery thumbnail" />
</a>`,
            tasks: [
                {
                    type: "practice",
                    instruction: "Create a page with links to your favorite websites and add at least one image with descriptive alt text.",
                    points: 15
                }
            ],
            quiz: [
                {
                    q: "Which attribute is required for a link destination?",
                    choices: ["src", "href", "alt", "rel"],
                    answerIndex: 1,
                    hint: "Think 'hypertext reference'"
                },
                {
                    q: "Why is alt text important?",
                    choices: ["Makes images load faster", "Helps with accessibility", "Changes image size", "Adds a border"],
                    answerIndex: 1,
                    hint: "Think about users who can't see images"
                },
                {
                    q: "Does the <img> tag have a closing tag?",
                    choices: ["Yes", "No"],
                    answerIndex: 1,
                    hint: "It's a self-closing tag"
                }
            ]
        },

        {
            id: "html-005",
            title: "Express Basics",
            level: "beginner",
            durationMin: 18,
            completed: false,
            objectives: [
                "Set up Express",
                "Use middleware and routes",
                "Send JSON responses"
            ],
            theory: `Forms collect user input and send it to a server:
- action: where the data is sent (URL endpoint)
- method: GET (visible in URL) or POST (hidden, for sensitive data)

Form elements:
- <input> for text, email, password, checkboxes, radio buttons
- <label> connects text to inputs (click label = focus input)
- <button> or <input type="submit"> to submit the form
- Use id and for attributes to link labels with inputs

Always connect labels to inputs with for="id" for better accessibility!`,
            keyTerms: [
                { term: "Form Action", definition: "The URL where form data is sent." },
                { term: "Form Method", definition: "GET or POST - how data is transmitted." },
                { term: "Input Types", definition: "text, email, password, checkbox, radio, etc." },
                { term: "Label", definition: "Text description connected to an input." }
            ],
            exampleCode: `<form action="/signup" method="post">
  <div>
    <label for="name">Full Name</label>
    <input 
      id="name" 
      name="name" 
      type="text" 
      placeholder="John Doe"
      required 
    />
  </div>

  <div>
    <label for="email">Email Address</label>
    <input 
      id="email" 
      name="email" 
      type="email" 
      placeholder="john@example.com"
      required 
    />
  </div>

  <div>
    <label for="password">Password</label>
    <input 
      id="password" 
      name="password" 
      type="password" 
      minlength="8"
      required 
    />
  </div>

  <div>
    <input type="checkbox" id="terms" name="terms" required />
    <label for="terms">I agree to terms and conditions</label>
  </div>

  <button type="submit">Create Account</button>
</form>`,
            tasks: [
                {
                    type: "practice",
                    instruction: "Build a contact form with name, email, message fields, and a submit button.",
                    points: 20
                }
            ],
            quiz: [
                {
                    q: "Which method is commonly used to send sensitive data (like passwords)?",
                    choices: ["GET", "POST", "PUT", "DELETE"],
                    answerIndex: 1,
                    hint: "This method doesn't show data in the URL"
                },
                {
                    q: "What attribute connects a label to its input?",
                    choices: ["id and for", "name and value", "type and method", "src and href"],
                    answerIndex: 0,
                    hint: "The label's 'for' matches the input's 'id'"
                }
            ]
        },

        {
            id: "html-006",
            title: "Working with Files",
            level: "intermediate",
            durationMin: 14,
            completed: false,
            objectives: [
                "Read and write files with fs",
                "Use streams for large files",
                "Handle errors in I/O"
            ],
            theory: `Semantic HTML uses tags that describe their meaning, not just appearance.

Key semantic elements:
- <header> - Top section (logo, navigation)
- <nav> - Navigation links
- <main> - Main content (one per page)
- <section> - Thematic grouping of content
- <article> - Self-contained content (blog post, news article)
- <aside> - Side content (sidebar, related info)
- <footer> - Bottom section (copyright, links)

Benefits:
✓ Better accessibility (screen readers understand structure)
✓ Better SEO (search engines understand content)
✓ Easier maintenance (clearer code structure)`,
            keyTerms: [
                { term: "Semantic", definition: "HTML tags that describe their meaning/purpose." },
                { term: "Header", definition: "Introductory content or navigation." },
                { term: "Main", definition: "Primary content of the document." },
                { term: "Footer", definition: "Footer content (copyright, links, etc.)." }
            ],
            exampleCode: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>My Portfolio</title>
</head>
<body>
  <header>
    <h1>Jane Developer</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>I'm a web developer passionate about creating accessible websites.</p>
    </section>

    <section id="projects">
      <h2>My Projects</h2>
      <article>
        <h3>E-commerce Site</h3>
        <p>Built with React and Node.js</p>
      </article>
      <article>
        <h3>Weather App</h3>
        <p>Uses API integration</p>
      </article>
    </section>
  </main>

  <footer>
    <p>© 2026 Jane Developer</p>
  </footer>
</body>
</html>`,
            tasks: [
                {
                    type: "practice",
                    instruction: "Convert a basic page to use semantic HTML elements instead of generic divs.",
                    points: 20
                }
            ],
            quiz: [
                {
                    q: "Which tag is best for the main content of a page?",
                    choices: ["<div>", "<main>", "<span>", "<section>"],
                    answerIndex: 1,
                    hint: "Use the tag that describes 'main' content"
                },
                {
                    q: "What's a benefit of semantic HTML?",
                    choices: ["Faster loading", "Better accessibility", "More colors", "Smaller file size"],
                    answerIndex: 1,
                    hint: "Think about screen readers and SEO"
                }
            ]
        },

        {
            id: "html-007",
            title: "Database Integration",
            level: "intermediate",
            durationMin: 16,
            completed: false,
            objectives: [
                "Connect to a database",
                "Run CRUD operations",
                "Use environment variables"
            ],
            theory: `Tables display data in rows and columns:
- <table> wraps the entire table
- <tr> creates a table row
- <th> creates a header cell (bold by default)
- <td> creates a data cell
- <caption> adds a title to the table

For accessibility:
- Use <th> with scope="col" or scope="row"
- Add <caption> to describe the table
- Keep tables simple and avoid using them for layout`,
            keyTerms: [
                { term: "Table Row", definition: "Horizontal line of cells (<tr>)." },
                { term: "Table Header", definition: "Header cell (<th>) for column/row labels." },
                { term: "Table Data", definition: "Regular data cell (<td>)." },
                { term: "Caption", definition: "Table title visible above the table." }
            ],
            exampleCode: `<table>
  <caption>Student Grades - Fall 2025</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Subject</th>
      <th scope="col">Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>Math</td>
      <td>A</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>Science</td>
      <td>B+</td>
    </tr>
    <tr>
      <td>Charlie</td>
      <td>History</td>
      <td>A-</td>
    </tr>
  </tbody>
</table>`,
            tasks: [
                {
                    type: "practice",
                    instruction: "Create a table showing a weekly schedule with days and activities.",
                    points: 15
                }
            ],
            quiz: [
                {
                    q: "Which tag creates a table header cell?",
                    choices: ["<td>", "<th>", "<tr>", "<thead>"],
                    answerIndex: 1,
                    hint: "Think 'table header'"
                },
                {
                    q: "Should you use tables for page layout?",
                    choices: ["Yes, always", "No, use CSS/semantic HTML", "Only on mobile", "Only for navigation"],
                    answerIndex: 1,
                    hint: "Tables are for data, not layout"
                }
            ]
        },

        {
            id: "html-008",
            title: "Node.js Best Practices",
            level: "intermediate",
            durationMin: 19,
            completed: false,
            objectives: [
                "Structure a Node project",
                "Handle errors and logging",
                "Improve performance"
            ],
            theory: `HTML5 introduced powerful features:

Input types:
- type="email", "tel", "url", "number", "date", "color"
- Mobile keyboards adapt to input type!

Media elements:
- <video> and <audio> with controls
- Multiple source formats for compatibility

Best practices:
✓ Always close tags properly
✓ Use lowercase for tags and attributes
✓ Include alt text on images
✓ Use semantic HTML
✓ Validate your HTML
✓ Keep code clean and indented
✓ Comment complex sections`,
            keyTerms: [
                { term: "HTML5", definition: "Latest version of HTML with modern features." },
                { term: "Input Types", definition: "Specialized input fields (email, date, etc.)." },
                { term: "Validation", definition: "Checking HTML for errors and standards compliance." }
            ],
            exampleCode: `<!-- Modern input types -->
<form>
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday" />

  <label for="quantity">Quantity:</label>
  <input type="number" id="quantity" min="1" max="10" />

  <label for="website">Website:</label>
  <input type="url" id="website" placeholder="https://example.com" />

  <label for="phone">Phone:</label>
  <input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
</form>

<!-- Video element -->
<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  Your browser doesn't support video.
</video>

<!-- Audio element -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  Your browser doesn't support audio.
</audio>`,
            tasks: [
                {
                    type: "practice",
                    instruction: "Build a complete registration form using HTML5 input types with proper validation.",
                    points: 25
                }
            ],
            quiz: [
                {
                    q: "What does type='email' do?",
                    choices: ["Sends emails", "Validates email format", "Opens email client", "None"],
                    answerIndex: 1,
                    hint: "It helps validate the input format"
                },
                {
                    q: "Which is a best practice?",
                    choices: ["Skip alt text", "Use uppercase tags", "Always close tags", "Avoid comments"],
                    answerIndex: 2,
                    hint: "Proper tag closure is essential"
                }
            ]
        }
    ]
}];



const NodeJSReducer = createSlice({
    name : 'nodejs' , 
    initialState , 
    reducers  : {}
})


export default NodeJSReducer.reducer ; 
