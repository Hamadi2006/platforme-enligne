import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    track: "Git Fundamentals",
    version: "1.0",
    language: "en",
    totalLessons: 8,
    estimatedHours: 2.5,
    difficulty: "beginner",
    description: "Track and manage code with Git.",
    lessons: [
      {
        id: "git-001",
        title: "What is Git?",
        level: "beginner",
        durationMin: 9,
        completed: false,
        objectives: [
          "Understand version control",
          "Know why Git is used",
          "Install Git locally"
        ],
        theory: `Git is a distributed version control system that tracks changes in source code.
It allows developers to collaborate, manage history, and safely experiment with new features.`,
        keyTerms: [
          { term: "Repository", definition: "A project tracked by Git." },
          { term: "Commit", definition: "A snapshot of changes." },
          { term: "Version Control", definition: "System that tracks file changes over time." }
        ],
        exampleCode: `git --version`
      },

      {
        id: "git-002",
        title: "Initializing a Repository",
        level: "beginner",
        durationMin: 11,
        completed: false,
        objectives: [
          "Create a Git repository",
          "Check repository status",
          "Understand tracked files"
        ],
        theory: `A Git repository stores the complete history of a project.
You initialize it once inside your project folder.`,
        exampleCode: `git init
git status`
      },

      {
        id: "git-003",
        title: "Staging and Commits",
        level: "beginner",
        durationMin: 13,
        completed: false,
        objectives: [
          "Stage files",
          "Create commits",
          "Write good commit messages"
        ],
        theory: `Git uses a staging area to prepare changes before committing.`,
        exampleCode: `git add .
git commit -m "Initial commit"`
      },

      {
        id: "git-004",
        title: "Branches and Merging",
        level: "beginner",
        durationMin: 15,
        completed: false,
        objectives: [
          "Create branches",
          "Switch branches",
          "Merge changes"
        ],
        theory: `Branches allow parallel development without affecting the main codebase.`,
        exampleCode: `git branch feature
git checkout feature
git merge feature`
      },

      {
        id: "git-005",
        title: "Undoing Changes",
        level: "beginner",
        durationMin: 18,
        completed: false,
        objectives: [
          "View commit history",
          "Undo local changes",
          "Safely revert commits"
        ],
        theory: `Git provides multiple ways to undo changes depending on the situation.`,
        exampleCode: `git log
git checkout -- file.txt
git revert HEAD`
      },

      {
        id: "git-006",
        title: "Remote Repositories",
        level: "intermediate",
        durationMin: 14,
        completed: false,
        objectives: [
          "Connect remote repositories",
          "Push and pull code",
          "Clone projects"
        ],
        theory: `Remote repositories allow collaboration using platforms like GitHub.`,
        exampleCode: `git remote add origin https://github.com/user/repo.git
git push -u origin main`
      },

      {
        id: "git-007",
        title: "Collaboration Workflows",
        level: "intermediate",
        durationMin: 16,
        completed: false,
        objectives: [
          "Use pull requests",
          "Resolve conflicts",
          "Sync with upstream"
        ],
        theory: `Team workflows help manage collaboration efficiently.`,
        exampleCode: `git fetch upstream
git rebase upstream/main`
      },

      {
        id: "git-008",
        title: "Best Practices",
        level: "intermediate",
        durationMin: 19,
        completed: false,
        objectives: [
          "Keep history clean",
          "Use .gitignore",
          "Follow Git conventions"
        ],
        theory: `Following best practices keeps repositories clean and maintainable.`,
        exampleCode: `node_modules/
.env
dist/`
      }
    ]
  }
];

const GitReducer = createSlice({
  name: "git",
  initialState,
  reducers: {}
});

export default GitReducer.reducer;
