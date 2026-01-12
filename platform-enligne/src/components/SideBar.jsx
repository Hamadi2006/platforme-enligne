import { useState } from 'react';
import MainContent from './MainContent';
import {useSelector,useDispatch} from "react-redux" ; 
import { setActiveItem } from '../reducers/MainReducer';





// Content data for each topic
const contentData = {
  html: {
    title: 'HTML',
    description: 'Learn the structure of web pages',
    content: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page semantically and originally included cues for the appearance of the document.',
    topics: ['Elements & Tags', 'Semantic HTML', 'Forms', 'Accessibility']
  },
  css: {
    title: 'CSS',
    description: 'Style and design your websites',
    content: 'CSS (Cascading Style Sheets) is used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.',
    topics: ['Selectors', 'Flexbox & Grid', 'Animations', 'Responsive Design']
  },
  javascript: {
    title: 'JavaScript',
    description: 'Add interactivity to your web pages',
    content: 'JavaScript is a programming language that allows you to implement complex features on web pages. Every time a web page does more than just sit there and display static information, JavaScript is probably involved.',
    topics: ['Variables & Data Types', 'Functions', 'DOM Manipulation', 'ES6+ Features']
  },
  react: {
    title: 'React',
    description: 'Build modern user interfaces',
    content: 'React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components". React is maintained by Meta and a community of developers.',
    topics: ['Components', 'Hooks', 'State Management', 'React Router']
  },
  php: {
    title: 'PHP',
    description: 'Server-side scripting language',
    content: 'PHP is a popular general-purpose scripting language especially suited to web development. It can be embedded into HTML and is used to create dynamic web pages and applications.',
    topics: ['Syntax Basics', 'Forms & Validation', 'MySQL Integration', 'Sessions & Cookies']
  },
  laravel: {
    title: 'Laravel',
    description: 'Modern PHP framework',
    content: 'Laravel is a web application framework with expressive, elegant syntax. It provides tools for routing, authentication, sessions, caching, and more, making PHP development a pleasure.',
    topics: ['MVC Architecture', 'Eloquent ORM', 'Blade Templates', 'API Development']
  },
  nodejs: {
    title: 'Node.js',
    description: 'JavaScript runtime for backend',
    content: 'Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It allows developers to use JavaScript for server-side scripting.',
    topics: ['NPM & Modules', 'Express.js', 'Async Programming', 'REST APIs']
  },
  sql: {
    title: 'SQL',
    description: 'Database query language',
    content: 'SQL (Structured Query Language) is a standardized programming language used for managing relational databases and performing various operations on the data in them.',
    topics: ['SELECT Queries', 'JOIN Operations', 'Data Manipulation', 'Database Design']
  },
  mysql: {
    title: 'MySQL',
    description: 'Popular database system',
    content: 'MySQL is an open-source relational database management system. It is widely used in web applications and is a central component of the LAMP stack (Linux, Apache, MySQL, PHP/Python/Perl).',
    topics: ['Installation & Setup', 'Table Creation', 'Indexing', 'Optimization']
  },
  git: {
    title: 'Git',
    description: 'Version control system',
    content: 'Git is a distributed version control system for tracking changes in source code during software development. It is designed for coordinating work among programmers and tracking changes in any set of files.',
    topics: ['Basic Commands', 'Branching & Merging', 'GitHub/GitLab', 'Best Practices']
  },
  docker: {
    title: 'Docker',
    description: 'Containerization platform',
    content: 'Docker is a platform that enables developers to package applications into containers—standardized executable components combining application source code with the operating system libraries and dependencies required to run that code.',
    topics: ['Containers vs VMs', 'Dockerfile', 'Docker Compose', 'Container Orchestration']
  }
};

export default function WebStackAcademy() {
  const [isOpen, setIsOpen] = useState(true);

  const navSections = [
    {
      title: 'Frontend',
      items: [
        { id: 'html', label: 'HTML', icon: 'devicon-html5-plain' },
        { id: 'css', label: 'CSS', icon: 'devicon-css3-plain' },
        { id: 'javascript', label: 'JavaScript', icon: 'devicon-javascript-plain' },
        { id: 'react', label: 'React', icon: 'devicon-react-original' },
      ],
    },
    {
      title: 'Backend',
      items: [
        { id: 'php', label: 'PHP', icon: 'devicon-php-plain' },
        { id: 'laravel', label: 'Laravel', icon: 'devicon-laravel-plain' },
        { id: 'nodejs', label: 'Node.js', icon: 'devicon-nodejs-plain' },
      ],
    },
    {
      title: 'Database',
      items: [
        { id: 'sql', label: 'SQL', icon: 'devicon-mysql-plain' },
        { id: 'mysql', label: 'MySQL', icon: 'devicon-mysql-plain' },
      ],
    },
    {
      title: 'Tools',
      items: [
        { id: 'git', label: 'Git', icon: 'devicon-git-plain' },
        { id: 'docker', label: 'Docker', icon: 'devicon-docker-plain' },
      ],
    },
  ];

  const handleNavClick = (itemId) => {
    setActiveItem(itemId);
    // Close sidebar on mobile after selection
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const currentContent = useSelector((state)=>state.ActiveItem.activeItem) ; 
  const dispatch = useDispatch() ; 
  console.log(currentContent ) 




  return (
    <div className="min-h-screen bg-slate-950">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 bg-slate-900 text-slate-100 p-2 rounded-lg hover:bg-slate-800 transition-colors"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col transition-all duration-300 ease-in-out z-40 shadow-2xl ${
          isOpen ? 'w-72' : 'w-20'
        }`}
      >
        {/* Header */}
        <div className="px-6 py-8 border-b border-slate-800/50">
          <div className="flex items-center justify-between">
            <div className={`transition-all duration-300 ${!isOpen && 'lg:opacity-0 lg:hidden'}`}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold tracking-tight text-white">CourSoumir</h1>
                  <p className="text-xs text-slate-500">Academy</p>
                </div>
              </div>
            </div>
            <div className={`hidden lg:flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer ${!isOpen ? '' : 'opacity-0 hidden'}`}>
              <span className="text-blue-400 font-bold text-lg">W</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-7 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-transparent hover:[&::-webkit-scrollbar-thumb]:bg-slate-600">
          {navSections.map((section) => (
            <div key={section.title}>
              <p className={`mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500 transition-all duration-300 ${!isOpen && 'lg:opacity-0 lg:w-0'}`}>
                {section.title}
              </p>
              <ul className="space-y-1.5">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => dispatch(setActiveItem(item.id))}
                      className={`w-full flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 group relative ${
                        currentContent === item.id
                          ? 'bg-slate-800/80 text-white border-l-4 border-blue-500 shadow-lg'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                      }`}
                    >
                      <div className={`flex-shrink-0 flex items-center justify-center w-5 h-5 transition-all duration-200 ${currentContent === item.id ? 'text-blue-400' : 'group-hover:text-slate-300'}`}>
                        <i className={`${item.icon} text-xl`} />
                      </div>
                      <span
                        className={`text-sm font-medium transition-all duration-300 ${
                          !isOpen && 'lg:opacity-0 lg:w-0 lg:overflow-hidden'
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-4 pb-4">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        </div>
        <div className={`px-4 py-4 text-center text-xs text-slate-600 transition-all duration-300 ${
          !isOpen && 'lg:opacity-0 lg:hidden'
        }`}>
          <p>© 2025</p>
          <p className="font-semibold text-slate-400">CourSoumir</p>
        </div>
      </aside>


      
   

    </div>
  );
}