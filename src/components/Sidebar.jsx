import { useState, useMemo, useEffect } from 'react';

export default function Sidebar({ courseData, currentLesson, onSelectLesson, completedLessons, isOpen, onClose, darkMode, onToggleTheme, progress }) {
  const [expandedChapters, setExpandedChapters] = useState(() => {
    const ch = courseData.chapters.find(c => c.lessons.some(l => l.id === currentLesson));
    return ch ? { [ch.id]: true } : { 1: true };
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    const ch = courseData.chapters.find(c => c.lessons.some(l => l.id === currentLesson));
    if (ch) setExpandedChapters(prev => ({ ...prev, [ch.id]: true }));
  }, [currentLesson, courseData.chapters]);

  const toggleChapter = (id) => {
    setExpandedChapters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalLessons = courseData.chapters.reduce((a, c) => a + c.lessons.length, 0);
  const completedCount = completedLessons.size;
  const progressPct = Math.round(progress);

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
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Course logo + title */}
        <div style={{ padding: '1.25rem 1.25rem 0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'linear-gradient(135deg, #CD7F32, #ec4899)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem',
              }}>🤖</div>
              <div>
                <h1 style={{
                  fontSize: '15px', fontWeight: 700, lineHeight: 1.3,
                  background: 'linear-gradient(135deg, #CD7F32, #ec4899)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>{courseData.title}</h1>
                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: 2 }}>
                  {courseData.description}
                </p>
              </div>
            </div>
            <button onClick={onClose} className="sidebar-close-btn" style={{
              display: 'none', alignItems: 'center', justifyContent: 'center',
              width: 32, height: 32, borderRadius: 8, border: 'none', background: 'var(--color-bg-card)',
              color: 'var(--color-text-muted)', cursor: 'pointer',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <style>{`@media (max-width: 1024px) { .sidebar-close-btn { display: flex !important; } }`}</style>
          </div>

          {/* Progress bar */}
          <div style={{ marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 500 }}>Progress</span>
              <span style={{ fontSize: '12px', color: 'var(--color-bronze)', fontWeight: 600 }}>{progressPct}%</span>
            </div>
            <div style={{ height: 6, borderRadius: 3, background: 'var(--color-border)', overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 3,
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #CD7F32, #ec4899)',
                transition: 'width 0.7s ease-out',
              }} />
            </div>
          </div>

          {/* Search */}
          <div style={{ position: 'relative' }}>
            <svg style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search lessons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%', paddingLeft: 34, paddingRight: 12, paddingTop: 8, paddingBottom: 8,
                fontSize: '13px', borderRadius: 10, border: '1px solid var(--color-border)',
                background: 'var(--color-bg-card)', color: 'var(--color-text-primary)', outline: 'none',
                fontFamily: 'var(--font-sans)',
              }}
            />
          </div>
        </div>

        {/* Chapters */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0.5rem 0.75rem 1rem' }}>
          {filteredChapters.map((chapter, chIdx) => {
            const isExpanded = expandedChapters[chapter.id];
            const chapterCompleted = chapter.lessons.filter(l => completedLessons.has(l.id)).length;

            return (
              <div key={chapter.id} style={{ marginBottom: 4 }}>
                {/* Chapter header */}
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '10px 12px', borderRadius: 10, border: 'none', background: 'transparent',
                    cursor: 'pointer', color: 'var(--color-text-primary)', fontFamily: 'var(--font-sans)',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--color-bg-card)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                    {/* Number badge */}
                    <div style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: 'var(--color-bg-card)', border: '1px solid var(--color-border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '12px', fontWeight: 700, color: 'var(--color-bronze)', flexShrink: 0,
                    }}>{chIdx + 1}</div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {chapter.title}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: 1 }}>
                        {chapterCompleted}/{chapter.lessons.length} lessons
                      </div>
                    </div>
                  </div>
                  {/* Chevron */}
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    style={{
                      color: 'var(--color-text-muted)', flexShrink: 0,
                      transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>

                {/* Lessons */}
                {isExpanded && (
                  <div style={{ marginTop: 2, marginLeft: 4 }}>
                    {chapter.lessons.map((lesson) => {
                      const isActive = currentLesson === lesson.id;
                      const isCompleted = completedLessons.has(lesson.id);

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => onSelectLesson(lesson.id)}
                          style={{
                            width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                            padding: '9px 12px 9px 16px', borderRadius: 8, border: 'none',
                            background: isActive ? 'rgba(205,127,50,0.15)' : 'transparent',
                            cursor: 'pointer', fontFamily: 'var(--font-sans)',
                            transition: 'background 0.15s', textAlign: 'left',
                          }}
                          onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'var(--color-bg-card)'; }}
                          onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = isActive ? 'rgba(205,127,50,0.15)' : 'transparent'; }}
                        >
                          {/* Bronze dot for active, check for completed, empty circle otherwise */}
                          {isActive ? (
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#CD7F32', flexShrink: 0 }} />
                          ) : isCompleted ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--color-green)', flexShrink: 0 }}>
                              <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15"/>
                              <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : (
                            <div style={{ width: 8, height: 8, borderRadius: '50%', border: '1.5px solid var(--color-text-muted)', flexShrink: 0 }} />
                          )}
                          <span style={{
                            fontSize: '13px', lineHeight: 1.4,
                            color: isActive ? '#CD7F32' : 'var(--color-text-secondary)',
                            fontWeight: isActive ? 600 : 400,
                            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
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
