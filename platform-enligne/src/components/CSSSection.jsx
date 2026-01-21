import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle, 
  Code2, 
  BookOpen, 
  Target,
  Sparkles
} from 'lucide-react';

export default function CSSSection() {
  const CssLessons = useSelector((state) => state.CssState);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const trackData = CssLessons && CssLessons[0];
  const lessons = trackData?.lessons || [];

  const completedLessons = lessons.filter(l => l.completed).length;
  const progressPercent = lessons.length > 0 ? (completedLessons / lessons.length) * 100 : 0;

  // Lesson detail view
  if (selectedLesson) {
    const lesson = lessons.find(l => l.id === selectedLesson);
    if (!lesson) return null;

    const currentIndex = lessons.findIndex(l => l.id === selectedLesson);
    const nextLesson = lessons[currentIndex + 1];
    const prevLesson = lessons[currentIndex - 1];

    return (
      <div className="min-h-screen bg-slate-950 lg:pl-20">
        <div className="max-w-[1000px] mx-auto px-6 py-8">
          
          {/* Back Navigation */}
          <button
            onClick={() => setSelectedLesson(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-orange-400 mb-8 transition-colors"
          >
            <ChevronLeft size={20} />
            <span className="text-sm font-medium">Back to course</span>
          </button>

          {/* Lesson Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                Lesson {currentIndex + 1} of {lessons.length}
              </span>
              <span className="text-slate-700">·</span>
              <span className="text-xs text-slate-500">{lesson.durationMin} min</span>
            </div>
            <h1 className="text-3xl font-bold text-white leading-tight mb-4">
              {lesson.title}
            </h1>
            <div className="flex items-center gap-2">
              <span className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-lg ${
                lesson.level === 'beginner' ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' :
                lesson.level === 'intermediate' ? 'bg-amber-500/15 text-amber-400 border border-amber-500/20' :
                'bg-rose-500/15 text-rose-400 border border-rose-500/20'
              }`}>
                {lesson.level}
              </span>
              {lesson.completed && (
                <span className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <CheckCircle size={14} />
                  <span className="text-xs font-medium">Completed</span>
                </span>
              )}
            </div>
          </header>

          {/* Learning Objectives */}
          <section className="mb-10 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/10 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Target size={18} className="text-blue-400" />
              </div>
              <h2 className="text-lg font-semibold text-white">Learning Objectives</h2>
            </div>
            <ul className="space-y-3">
              {lesson.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-400 text-xs">✓</span>
                  </span>
                  <span className="leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Theory Content */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <BookOpen size={18} className="text-orange-400" />
              </div>
              <h2 className="text-lg font-semibold text-white">Theory</h2>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <div className="text-slate-300 leading-relaxed text-[15px] whitespace-pre-line">
                {lesson.theory}
              </div>
            </div>
          </section>

          {/* Key Terms */}
          {lesson.keyTerms && lesson.keyTerms.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                  <Sparkles size={18} className="text-yellow-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Key Terms</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {lesson.keyTerms.map((term, idx) => (
                  <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-yellow-500/20 transition-colors">
                    <dt className="text-yellow-400 font-semibold mb-2 text-sm">{term.term}</dt>
                    <dd className="text-slate-400 text-sm leading-relaxed">{term.definition}</dd>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Code Example */}
          {lesson.exampleCode && (
            <section className="mb-10">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Code2 size={18} className="text-green-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Code Example</h2>
              </div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-900/80 rounded-xl border border-slate-800 overflow-hidden">
                <div className="bg-slate-800/50 px-5 py-3 border-b border-slate-700/50 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">CSS</span>
                  <button className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                    Copy
                  </button>
                </div>
                <pre className="p-5 overflow-x-auto">
                  <code className="text-[13px] text-slate-300 font-mono leading-relaxed block">
                    {lesson.exampleCode}
                  </code>
                </pre>
              </div>
            </section>
          )}

          {/* Practice Tasks */}
          {lesson.tasks && lesson.tasks.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Target size={18} className="text-purple-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Practice Challenge</h2>
              </div>
              {lesson.tasks.map((task, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-xl p-6">
                  {task.points && (
                    <div className="inline-flex items-center gap-1.5 bg-purple-500/10 text-purple-400 text-xs font-semibold px-3 py-1.5 rounded-lg mb-4">
                      <Sparkles size={12} />
                      <span>+{task.points} points</span>
                    </div>
                  )}
                  <p className="text-slate-300 leading-relaxed">{task.instruction}</p>
                </div>
              ))}
            </section>
          )}

          {/* Navigation */}
          <nav className="flex items-center justify-between pt-8 border-t border-slate-800">
            <div>
              {prevLesson && (
                <button
                  onClick={() => setSelectedLesson(prevLesson.id)}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                >
                  <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                  <span className="text-sm font-medium">Previous</span>
                </button>
              )}
            </div>
            <div>
              {nextLesson && (
                <button
                  onClick={() => setSelectedLesson(nextLesson.id)}
                  className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-lg transition-all font-medium text-sm shadow-lg shadow-orange-500/20"
                >
                  <span>Next Lesson</span>
                  <ChevronRight size={18} />
                </button>
              )}
            </div>
          </nav>
        </div>
      </div>
    );
  }

  // Main lessons list view
  return (
    <div className="min-h-screen bg-slate-950 lg:pl-20">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        
        {/* Course Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1.5 rounded-lg mb-4 border border-orange-500/20">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Frontend Development
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">
            {trackData?.track || 'CSS Fundamentals'}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            {trackData?.description || 'Learn how to style and layout web pages with CSS.'}
          </p>
        </header>


  


        {/* Lessons List */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
            <span>Course Content</span>
            <span className="text-sm text-slate-500 font-normal">({lessons.length} lessons)</span>
          </h2>
          <div className="space-y-3">
            {lessons.map((lesson, index) => (
              <button
                key={lesson.id}
                onClick={() => setSelectedLesson(lesson.id)}
                className="group w-full bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 hover:border-orange-500/30 rounded-xl p-5 transition-all text-left"
              >
                <div className="flex items-center gap-4">
                  
                  {/* Lesson Number / Status */}
                  <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                    lesson.completed
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                      : 'bg-slate-800 text-slate-400 group-hover:bg-orange-500/10 group-hover:text-orange-400 group-hover:border group-hover:border-orange-500/20'
                  }`}>
                    {lesson.completed ? <CheckCircle size={22} /> : index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold mb-1.5 group-hover:text-orange-400 transition-colors">
                      {lesson.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs">
                      <span className={`font-medium px-2 py-0.5 rounded ${
                        lesson.level === 'beginner' ? 'bg-emerald-500/10 text-emerald-400' :
                        lesson.level === 'intermediate' ? 'bg-amber-500/10 text-amber-400' :
                        'bg-rose-500/10 text-rose-400'
                      }`}>
                        {lesson.level}
                      </span>
                      <span className="text-slate-500">{lesson.durationMin} min</span>
                      <span className="text-slate-700">·</span>
                      <span className="text-slate-500">{lesson.objectives.length} objectives</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ChevronRight size={20} className="text-slate-600 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}