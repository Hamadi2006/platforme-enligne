import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setActiveItem } from '../reducers/MainReducer';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const dispatch = useDispatch();
  const currentContent = useSelector((state) => state.ActiveItem.activeItem);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      // Auto-open on desktop, auto-close on mobile
      if (!mobile) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    dispatch(setActiveItem(itemId));
    // Close sidebar on mobile after selection
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      
      {/* Toggle Button - Always visible */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 bg-slate-900 text-slate-100 p-3 rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl"
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        <svg
          className="w-5 h-5 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/60 z-30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col transition-all duration-300 ease-in-out z-40 shadow-2xl
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isOpen ? 'w-72' : 'lg:w-20 w-72'}
        `}
      >
        {/* Header */}
        <div className="px-6 py-8 border-b border-slate-800/50">
          <div className="flex items-center justify-between">
            {/* Full Logo - shown when sidebar is open */}
            <div className={`transition-all duration-300 ${!isOpen && 'lg:opacity-0 lg:hidden'}`}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold tracking-tight text-white">CourSoumir</h1>
                  <p className="text-xs text-slate-500">Academy</p>
                </div>
              </div>
            </div>
            
            {/* Compact Logo - shown when sidebar is collapsed on desktop */}
            <div className={`hidden lg:flex items-center justify-center w-full transition-all duration-300 ${isOpen ? 'opacity-0 hidden' : 'opacity-100'}`}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-7 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-700/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-600">
          {navSections.map((section) => (
            <div key={section.title}>
              {/* Section Title */}
              <p className={`mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500 transition-all duration-300 ${!isOpen && 'lg:text-center lg:opacity-0 lg:h-0 lg:mb-0'}`}>
                {section.title}
              </p>
              
              {/* Section Items */}
              <ul className="space-y-1.5">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 group relative
                        ${currentContent === item.id
                          ? 'bg-slate-800/80 text-white shadow-lg'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                        }
                        ${!isOpen && 'lg:justify-center lg:px-2'}
                      `}
                      title={!isOpen ? item.label : ''}
                    >
                      {/* Active indicator */}
                      {currentContent === item.id && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r" />
                      )}
                      
                      {/* Icon */}
                      <div className={`flex-shrink-0 flex items-center justify-center w-5 h-5 transition-all duration-200 ${currentContent === item.id ? 'text-blue-400' : 'group-hover:text-slate-300'}`}>
                        <i className={`${item.icon} text-xl`} />
                      </div>
                      
                      {/* Label */}
                      <span className={`text-sm font-medium transition-all duration-300 whitespace-nowrap ${!isOpen && 'lg:opacity-0 lg:w-0 lg:overflow-hidden'}`}>
                        {item.label}
                      </span>

                      {/* Tooltip for collapsed state on desktop */}
                      {!isOpen && (
                        <div className="hidden lg:block absolute left-full ml-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50 shadow-xl">
                          {item.label}
                        </div>
                      )}
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
        <div className={`px-4 py-4 text-center text-xs text-slate-600 transition-all duration-300 ${!isOpen && 'lg:opacity-0 lg:hidden'}`}>
          <p>© 2025</p>
          <p className="font-semibold text-slate-400">CourSoumir</p>
        </div>
      </aside>
    </>
  );
}