function CSSSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-8 md:p-12 mb-8 shadow-2xl">
        <div className="relative z-10">
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-4">
            Frontend Development
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
            CSS
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Style and design your websites
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 mb-8 border border-slate-800/50 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
          Overview
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          CSS (Cascading Style Sheets) is used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {['Selectors', 'Flexbox & Grid', 'Animations', 'Responsive Design'].map((topic, index) => (
          <div key={index} className="group bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800/50 hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">{index + 1}</span>
            </div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-2">{topic}</h3>
            <p className="text-slate-400 text-sm">Create beautiful, responsive designs</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CSSSection;