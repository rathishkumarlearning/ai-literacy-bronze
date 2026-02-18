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
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
    return () => { document.body.classList.remove('sidebar-open'); };
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
    <div className="app-layout">
      {/* Mobile overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

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
      <div className="main-content">
        {/* Mobile top bar */}
        <div className="flex items-center justify-between mb-6" style={{ position: 'relative', zIndex: 30 }}>
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center justify-center w-10 h-10 rounded-xl cursor-pointer transition-colors"
            style={{
              background: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-secondary)',
              display: 'none',
            }}
            id="hamburger-btn"
            aria-label="Open menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </button>
          <style>{`@media (max-width: 1024px) { #hamburger-btn { display: flex !important; } }`}</style>

          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1 rounded-full" style={{ color: 'var(--color-text-muted)', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
              {currentIndex + 1} / {totalLessons}
            </span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center justify-center w-9 h-9 rounded-xl cursor-pointer transition-colors"
              style={{ color: 'var(--color-text-muted)', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}
              title={darkMode ? 'Light mode' : 'Dark mode'}
            >
              {darkMode ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/></svg>
              )}
            </button>
            {completedLessons.size === totalLessons && (
              <button
                onClick={() => setShowCertificate(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #CD7F32, #ec4899)', color: '#fff' }}
              >
                🏆 Certificate
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="content-inner" style={{ opacity: transitioning ? 0 : 1, transition: 'opacity 0.15s ease' }}>
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
        </div>
      </div>
    </div>
  );
}
