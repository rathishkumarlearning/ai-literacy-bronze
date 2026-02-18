import { useState, useMemo, useEffect } from 'react';

export default function Sidebar({ courseData, currentLesson, onSelectLesson, completedLessons, isOpen, onClose, darkMode, onToggleTheme, progress }) {
  const [expandedChapters, setExpandedChapters] = useState(() => {
    const ch = courseData.chapters.find(c => c.lessons.some(l => l.id === currentLesson));
    return ch ? { [ch.id]: true } : { 1: true };
  });
  const [search, setSearch] = useState('');

  // Auto-expand chapter when lesson changes
  useEffect(() => {
    const ch = courseData.chapters.find(c => c.lessons.some(l => l.id === currentLesson));
    if (ch) setExpandedChapters(prev => ({ ...prev, [ch.id]: true }));
  }, [currentLesson, courseData.chapters]);

  const toggleChapter = (id) => {
    setExpandedChapters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalLessons = courseData.chapters.reduce((a, c) => a + c.lessons.length, 0);
  const completedCount = completedLessons.size;

  const filteredChapters = useMemo(() => {
    if (!search.trim()) return courseData.chapters;
    const q = search.toLowerCase();
    return courseData.chapters.map(ch => ({
      ...ch,
      lessons: ch.lessons.filter(l => l.title.toLowerCase().includes(q) || ch.title.toLowerCase().includes(q)),
    })).filter(ch => ch.lessons.length > 0);
  }, [search, courseData.chapters]);

  return (
    <>
      {/* Mobile overlay with fade */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-[280px] z-50 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{
          backgroundColor: 'var(--color-bg-sidebar)',
          borderRight: '1px solid var(--color-separator)',
        }}
      >
        {/* Header */}
        <div className="px-4 pt-5 pb-3">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md flex items-center justify-center text-[13px]" style={{ background: 'linear-gradient(135deg, #CD7F32, #B8860B)' }}>
                🤖
              </div>
              <div>
                <h1 className="text-[13px] font-semibold leading-tight" style={{ color: 'var(--color-text-primary)' }}>
                  {courseData.title}
                </h1>
                <p className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>
                  {completedCount} of {totalLessons} complete
                </p>
              </div>
            </div>
            <button onClick={onClose} className="lg:hidden flex items-center justify-center w-7 h-7 rounded-md cursor-pointer transition-colors" style={{ color: 'var(--color-text-muted)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Progress bar - thin Apple style */}
          <div className="h-[3px] rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-border)' }}>
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #CD7F32, #D4A574)',
              }}
            />
          </div>

          {/* Search */}
          <div className="relative mt-3">
            <svg className="absolute left-2.5 top-1/2 -translate-y-1/2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-muted)' }}>
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-[7px] text-[13px] rounded-lg outline-none transition-colors"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border)',
              }}
            />
          </div>
        </div>

        {/* Chapters list */}
        <div className="flex-1 overflow-y-auto px-2 py-1">
          {filteredChapters.map((chapter) => {
            const isExpanded = expandedChapters[chapter.id];
            const chapterCompleted = chapter.lessons.filter(l => completedLessons.has(l.id)).length;
            const allDone = chapterCompleted === chapter.lessons.length;

            return (
              <div key={chapter.id} className="mb-1">
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer group"
                  style={{ color: 'var(--color-text-primary)' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-border)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <svg
                      width="10" height="10" viewBox="0 0 10 10" fill="none"
                      className={`shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      <path d="M3 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[13px] font-semibold truncate">
                      {chapter.title}
                    </span>
                  </div>
                  {allDone ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0" style={{ color: 'var(--color-success)' }}>
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <span className="text-[11px] shrink-0 tabular-nums" style={{ color: 'var(--color-text-muted)' }}>
                      {chapterCompleted}/{chapter.lessons.length}
                    </span>
                  )}
                </button>

                {isExpanded && (
                  <div className="ml-2 stagger-children">
                    {chapter.lessons.map((lesson) => {
                      const isActive = currentLesson === lesson.id;
                      const isCompleted = completedLessons.has(lesson.id);

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => onSelectLesson(lesson.id)}
                          className="w-full flex items-center gap-2.5 pl-5 pr-3 py-2 rounded-lg text-left transition-all cursor-pointer animate-fade-in"
                          style={{
                            backgroundColor: isActive ? 'var(--color-bronze-subtle)' : 'transparent',
                          }}
                          onMouseEnter={e => { if (!isActive) e.currentTarget.style.backgroundColor = 'var(--color-border)'; }}
                          onMouseLeave={e => { if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'; }}
                        >
                          {/* Active indicator line */}
                          <div
                            className="w-[2px] h-4 rounded-full shrink-0 transition-all duration-200"
                            style={{
                              backgroundColor: isActive ? 'var(--color-bronze)' : 'transparent',
                            }}
                          />
                          {isCompleted ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0" style={{ color: 'var(--color-success)' }}>
                              <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15"/>
                              <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : (
                            <div className="w-[14px] h-[14px] rounded-full shrink-0" style={{ border: '1.5px solid var(--color-text-muted)' }} />
                          )}
                          <span className="text-[13px] truncate" style={{
                            color: isActive ? 'var(--color-bronze)' : 'var(--color-text-secondary)',
                            fontWeight: isActive ? 600 : 400,
                          }}>
                            {lesson.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}
