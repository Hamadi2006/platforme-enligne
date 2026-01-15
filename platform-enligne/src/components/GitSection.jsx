function GitSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 p-8 md:p-12 lg:p-16 mb-10 shadow-2xl">
        <div className="relative z-10">
          <div className="inline-block px-5 py-2 bg-white/15 backdrop-blur-md rounded-full text-white text-sm font-semibold tracking-wide mb-6">
            Version Control Mastery
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Git
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light">
            The most powerful and widely used distributed version control system in the world
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-red-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Overview Card */}
      <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 mb-12 border border-slate-700/50 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-4">
          <span className="w-2 h-10 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></span>
          What is Git?
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
          Git is a free and open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
        </p>
        <p className="text-slate-400 text-base leading-relaxed">
          Created by Linus Torvalds in 2005 for Linux kernel development, Git has become the industry standard for version control.
        </p>
      </div>

      {/* Topic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
        {[
          {
            title: "Basic Commands",
            description: "init, add, commit, status, log, diff",
            icon: "⟲"
          },
          {
            title: "Branching & Merging",
            description: "branch, checkout, merge, rebase, cherry-pick",
            icon: "⎇"
          },
          {
            title: "GitHub / GitLab",
            description: "remote, push, pull, pull request, fork, clone",
            icon: "⇅"
          },
          {
            title: "Best Practices",
            description: "commit messages, .gitignore, branching strategy, rebasing workflow",
            icon: "✓"
          }
        ].map((topic, index) => (
          <div
            key={topic.title}
            className="group relative bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 
                     hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10
                     cursor-pointer overflow-hidden"
          >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-red-600/0 group-hover:from-orange-600/5 group-hover:to-red-600/5 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-5 text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                {topic.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                {topic.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {topic.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Tips Banner */}
      <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 text-center">
        <p className="text-slate-300 text-lg">
          Pro tip: Use <span className="font-mono text-orange-400 bg-slate-800 px-2 py-1 rounded">git commit -m "meaningful message"</span> and write clear, conventional commit messages!
        </p>
      </div>
    </div>
  );
}

export default GitSection;