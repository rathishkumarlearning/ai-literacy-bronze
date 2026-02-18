import { useState, useEffect, useCallback } from 'react';
import { courseData } from './data/courseData';
import Sidebar from './components/Sidebar';
import LessonContent from './components/LessonContent';
import CertificateScreen from './components/CertificateScreen';

function getAllLessons() {
  const lessons = [];
  courseData.chapters.forEach(ch => {
    ch.lessons.forEach(l => lessons.push({ lesson: l, chapter: ch }));
  });
  return lessons;
}

export default function App() {
  const [currentLessonId, setCurrentLessonId] = useState(() => {
    return localStorage.getItem('bronze-current') || '1-1';
  });
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('bronze-completed') || '[]');
      return new Set(saved);
    } catch { return new Set(); }
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('bronze-theme') !== 'light';
  });
  const [showCertificate, setShowCertificate] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    localStorage.setItem('bronze-current', currentLessonId);
  }, [currentLessonId]);

  useEffect(() => {
    localStorage.setItem('bronze-completed', JSON.stringify([...completedLessons]));
  }, [completedLessons]);

  useEffect(() => {
    document.body.className = darkMode ? '' : 'light';
    localStorage.setItem('bronze-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Lock body scroll when sidebar open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  const allLessons = getAllLessons();
  const totalLessons = allLessons.length;
  const currentIndex = allLessons.findIndex(l => l.lesson.id === currentLessonId);
  const current = allLessons[currentIndex];

  const navigateTo = useCallback((id) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentLessonId(id);
      setShowCertificate(false);
      window.scrollTo({ top: 0 });
      setTimeout(() => setTransitioning(false), 50);
    }, 150);
  }, []);

  const handleComplete = () => {
    const next = new Set(completedLessons);
    next.add(currentLessonId);
    setCompletedLessons(next);
    if (next.size === totalLessons) {
      setShowCertificate(true);
    }
  };

  const handlePrev = currentIndex > 0 ? () => navigateTo(allLessons[currentIndex - 1].lesson.id) : null;
  const handleNext = currentIndex < allLessons.length - 1 ? () => navigateTo(allLessons[currentIndex + 1].lesson.id) : null;

  if (showCertificate) {
    return <CertificateScreen courseTitle={courseData.title} totalLessons={totalLessons} />;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      <Sidebar
        courseData={courseData}
        currentLesson={currentLessonId}
        onSelectLesson={(id) => { navigateTo(id); setSidebarOpen(false); }}
        completedLessons={completedLessons}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
        progress={totalLessons > 0 ? (completedLessons.size / totalLessons) * 100 : 0}
      />

      {/* Main content area */}
      <div className="lg:pl-[280px] min-h-screen flex flex-col">
        {/* Top bar - Apple style minimal */}
        <header
          className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 lg:px-8 h-12"
          style={{
            backgroundColor: darkMode ? 'rgba(0,0,0,0.72)' : 'rgba(255,255,255,0.72)',
            backdropFilter: 'saturate(180%) blur(20px)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)',
            borderBottom: '1px solid var(--color-separator)',
          }}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors cursor-pointer"
              style={{ color: 'var(--color-text-secondary)' }}
              aria-label="Open menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            </button>
            {/* Breadcrumb */}
            <nav className="hidden sm:flex items-center gap-1.5 text-[13px]">
              <span style={{ color: 'var(--color-text-muted)' }}>{current?.chapter.title}</span>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" style={{ color: 'var(--color-text-muted)', opacity: 0.5 }}>
                <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ color: 'var(--color-text-secondary)' }}>{current?.lesson.title}</span>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[12px] tabular-nums px-2 py-0.5 rounded-full" style={{ color: 'var(--color-text-muted)', backgroundColor: 'var(--color-bg-card)' }}>
              {currentIndex + 1}/{totalLessons}
            </span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center justify-center w-8 h-8 rounded-full transition-all cursor-pointer"
              style={{ color: 'var(--color-text-muted)' }}
              title={darkMode ? 'Light mode' : 'Dark mode'}
              aria-label="Toggle theme"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {darkMode ? (
                  <><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></>
                ) : (
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/>
                )}
              </svg>
            </button>
            {completedLessons.size === totalLessons && (
              <button
                onClick={() => setShowCertificate(true)}
                className="flex items-center gap-1.5 px-3 h-8 rounded-full text-[12px] font-medium cursor-pointer transition-all"
                style={{ backgroundColor: 'var(--color-bronze-subtle)', color: 'var(--color-bronze)' }}
              >
                <span>🏆</span> Certificate
              </button>
            )}
          </div>
        </header>

        {/* Content with transition */}
        <main className="flex-1" style={{ opacity: transitioning ? 0 : 1, transition: 'opacity 0.15s ease' }}>
          {current && (
            <LessonContent
              lesson={current.lesson}
              chapter={current.chapter}
              onPrev={handlePrev}
              onNext={handleNext}
              onComplete={handleComplete}
              isCompleted={completedLessons.has(currentLessonId)}
              allLessons={allLessons}
              currentIndex={currentIndex}
            />
          )}
        </main>

        {/* Mobile bottom navigation */}
        <div
          className="lg:hidden sticky bottom-0 z-30 flex items-center justify-between px-4 py-2 safe-area-bottom"
          style={{
            backgroundColor: darkMode ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.85)',
            backdropFilter: 'saturate(180%) blur(20px)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)',
            borderTop: '1px solid var(--color-separator)',
            paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))',
          }}
        >
          <button
            onClick={handlePrev}
            disabled={!handlePrev}
            className="flex items-center gap-1.5 px-4 h-11 rounded-xl text-[14px] font-medium cursor-pointer transition-all"
            style={{
              color: handlePrev ? 'var(--color-bronze)' : 'var(--color-text-muted)',
              opacity: handlePrev ? 1 : 0.3,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
            Prev
          </button>
          
          <button
            onClick={handleNext}
            disabled={!handleNext}
            className="flex items-center gap-1.5 px-4 h-11 rounded-xl text-[14px] font-medium cursor-pointer transition-all"
            style={{
              color: handleNext ? 'var(--color-bronze)' : 'var(--color-text-muted)',
              opacity: handleNext ? 1 : 0.3,
            }}
          >
            Next
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
