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

  const allLessons = getAllLessons();
  const totalLessons = allLessons.length;
  const currentIndex = allLessons.findIndex(l => l.lesson.id === currentLessonId);
  const current = allLessons[currentIndex];

  const navigateTo = useCallback((id) => {
    setCurrentLessonId(id);
    setShowCertificate(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        onSelectLesson={navigateTo}
        completedLessons={completedLessons}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <div className="lg:pl-[300px]">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex items-center justify-between px-4 lg:px-8 py-3"
          style={{ backgroundColor: 'var(--color-bg-main)', borderBottom: '1px solid var(--color-border-bronze)', backdropFilter: 'blur(12px)' }}>
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg cursor-pointer"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
              {currentIndex + 1} / {totalLessons}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-sm cursor-pointer transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
              title={darkMode ? 'Light mode' : 'Dark mode'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            {completedLessons.size === totalLessons && (
              <button
                onClick={() => setShowCertificate(true)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer"
                style={{ backgroundColor: 'rgba(205,127,50,0.1)', color: 'var(--color-bronze)' }}
              >
                🏆 Certificate
              </button>
            )}
          </div>
        </header>

        {current && (
          <LessonContent
            lesson={current.lesson}
            chapter={current.chapter}
            onPrev={handlePrev}
            onNext={handleNext}
            onComplete={handleComplete}
            isCompleted={completedLessons.has(currentLessonId)}
          />
        )}
      </div>
    </div>
  );
}
