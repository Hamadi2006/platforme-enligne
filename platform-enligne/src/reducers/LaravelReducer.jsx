import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    track: "Laravel Essentials",
    version: "1.0",
    language: "en",
    totalLessons: 8,
    estimatedHours: 2.5,
    difficulty: "beginner",
    description: "Build modern PHP applications with Laravel.",
    lessons: [
      {
        id: "laravel-001",
        title: "What is Laravel?",
        level: "beginner",
        durationMin: 9,
        completed: false,
        objectives: [
          "Understand Laravel framework",
          "Understand MVC architecture",
          "Know Laravel use cases"
        ],
        theory: `Laravel is a PHP framework designed to make web development faster and cleaner.
It follows the MVC (Model-View-Controller) pattern and provides built-in tools for routing, database access, security, and more.`,
        keyTerms: [
          { term: "Framework", definition: "A structured foundation for building applications." },
          { term: "MVC", definition: "Model-View-Controller architectural pattern." },
          { term: "Artisan", definition: "Laravel command-line tool." }
        ],
        exampleCode: `php artisan --version`
      },

      {
        id: "laravel-002",
        title: "Project Structure & Artisan",
        level: "beginner",
        durationMin: 11,
        completed: false,
        objectives: [
          "Understand Laravel folders",
          "Use Artisan commands",
          "Run a Laravel server"
        ],
        theory: `Laravel organizes code into clear folders such as routes, controllers, models, and views.
Artisan helps automate common development tasks.`,
        exampleCode: `php artisan serve`
      },

      {
        id: "laravel-003",
        title: "Routing Basics",
        level: "beginner",
        durationMin: 13,
        completed: false,
        objectives: [
          "Define web routes",
          "Use route parameters",
          "Return responses"
        ],
        theory: `Routes define how your application responds to HTTP requests.
Laravel routes are defined in route files.`,
        exampleCode: `Route::get('/users', function () {
  return 'Users page';
});`
      },

      {
        id: "laravel-004",
        title: "Controllers and Views",
        level: "beginner",
        durationMin: 15,
        completed: false,
        objectives: [
          "Create controllers",
          "Return views",
          "Pass data to views"
        ],
        theory: `Controllers handle request logic.
Views are responsible for rendering content using Blade templates.`,
        exampleCode: `php artisan make:controller UserController`
      },

      {
        id: "laravel-005",
        title: "Eloquent Models",
        level: "beginner",
        durationMin: 18,
        completed: false,
        objectives: [
          "Create models",
          "Run database migrations",
          "Query data with Eloquent"
        ],
        theory: `Eloquent is Laravel's ORM that allows working with databases using PHP classes.`,
        exampleCode: `php artisan make:model Post -m`
      },

      {
        id: "laravel-006",
        title: "Forms and Validation",
        level: "intermediate",
        durationMin: 14,
        completed: false,
        objectives: [
          "Handle form requests",
          "Validate input data",
          "Display validation errors"
        ],
        theory: `Laravel provides built-in validation to protect applications from invalid data.`,
        exampleCode: `$request->validate([
  'email' => 'required|email'
]);`
      },

      {
        id: "laravel-007",
        title: "Authentication Basics",
        level: "intermediate",
        durationMin: 16,
        completed: false,
        objectives: [
          "Understand authentication flow",
          "Protect routes",
          "Manage user sessions"
        ],
        theory: `Laravel includes authentication features to manage users securely.`,
        exampleCode: `php artisan make:auth`
      },

      {
        id: "laravel-008",
        title: "Best Practices & Deployment",
        level: "intermediate",
        durationMin: 19,
        completed: false,
        objectives: [
          "Use environment variables",
          "Optimize performance",
          "Prepare app for production"
        ],
        theory: `Production-ready Laravel apps use caching, environment configs, and optimized assets.`,
        exampleCode: `php artisan config:cache`
      }
    ]
  }
];

const LaravelReducer = createSlice({
  name: "laravel",
  initialState,
  reducers: {}
});

export default LaravelReducer.reducer;
