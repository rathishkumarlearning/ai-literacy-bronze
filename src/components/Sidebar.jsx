import { useState, useMemo } from 'react';

export default function Sidebar({ courseData, currentLesson, onSelectLesson, completedLessons, isOpen, onClose }) {
  const [expandedChapters, setExpandedChapters] = useState(() => {
    const ch = courseData.chapters.find(c => c.lessons.some(l => l.id === currentLesson));
    return ch ? { [ch.id]: true } : { 1: true };
  });
  const [search, setSearch] = useState('');

  const toggleChapter = (id) => {
    setExpandedChapters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalLessons = courseData.chapters.reduce((a, c) => a + c.lessons.length, 0);
  const completedCount = completedLessons.size;
  const progress = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

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
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-[300px] z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ backgroundColor: 'var(--color-bg-sidebar)', borderRight: '1px solid var(--color-border-bronze)' }}
      >
        {/* Header */}
        <div className="px-5 pt-6 pb-4" style={{ borderBottom: '1px solid var(--color-border-bronze)' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: 'linear-gradient(135deg, var(--color-bronze), var(--color-bronze-dark))' }}>
                🤖
              </div>
              <h1 className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>{courseData.title}</h1>
            </div>
            <button onClick={onClose} className="lg:hidden p-1 cursor-pointer" style={{ color: 'var(--color-text-muted)' }}>
              ✕
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs" style={{ color: 'var(--color-text-muted)' }}>🔍</span>
            <input
              type="text"
              placeholder="Search lessons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg outline-none transition-colors"
              style={{
                backgroundColor: 'var(--color-bg-main)',
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border-bronze)',
              }}
            />
          </div>
        </div>

        {/* Chapters */}
        <div className="flex-1 overflow-y-auto py-3">
          {filteredChapters.map((chapter) => {
            const isExpanded = expandedChapters[chapter.id];
            const chapterCompleted = chapter.lessons.filter(l => completedLessons.has(l.id)).length;

            return (
              <div key={chapter.id}>
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-white/[0.03] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`text-[10px] transition-transform ${isExpanded ? 'rotate-90' : ''}`} style={{ color: 'var(--color-text-muted)' }}>▶</span>
                    <span className="text-xs font-semibold truncate" style={{ color: 'var(--color-text-primary)' }}>
                      {chapter.title}
                    </span>
                  </div>
                  <span className="text-[10px] shrink-0 ml-2 px-1.5 py-0.5 rounded" style={{ color: 'var(--color-text-muted)', backgroundColor: 'var(--color-bg-main)' }}>
                    {chapterCompleted}/{chapter.lessons.length}
                  </span>
                </button>

                {isExpanded && (
                  <div className="pb-2">
                    {chapter.lessons.map((lesson) => {
                      const isActive = currentLesson === lesson.id;
                      const isCompleted = completedLessons.has(lesson.id);

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => { onSelectLesson(lesson.id); onClose(); }}
                          className="w-full flex items-center gap-2.5 pl-10 pr-5 py-2 text-left transition-colors cursor-pointer"
                          style={{
                            backgroundColor: isActive ? 'rgba(205, 127, 50, 0.08)' : 'transparent',
                            borderLeft: isActive ? '2px solid var(--color-bronze)' : '2px solid transparent',
                          }}
                        >
                          <span className="text-xs shrink-0">
                            {isCompleted ? (
                              <span style={{ color: 'var(--color-success)' }}>✓</span>
                            ) : (
                              <span className="inline-block w-3.5 h-3.5 rounded-full" style={{ border: '1.5px solid var(--color-text-muted)' }} />
                            )}
                          </span>
                          <span className="text-xs truncate" style={{
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

        {/* Progress */}
        <div className="px-5 py-4" style={{ borderTop: '1px solid var(--color-border-bronze)' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>Progress</span>
            <span className="text-xs font-semibold" style={{ color: 'var(--color-bronze)' }}>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-bg-main)' }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, background: 'linear-gradient(90deg, var(--color-bronze-dark), var(--color-bronze), var(--color-bronze-hover))' }}
            />
          </div>
          <p className="text-[10px] mt-1.5" style={{ color: 'var(--color-text-muted)' }}>
            {completedCount} of {totalLessons} lessons completed
          </p>
        </div>
      </aside>
    </>
  );
}
