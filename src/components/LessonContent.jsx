import CodeBlock from './CodeBlock';
import QuizComponent from './QuizComponent';
import MiniTOC from './MiniTOC';

function renderMarkdown(text) {
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--color-text-primary);font-weight:600">$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/`(.*?)`/g, '<code style="background:var(--color-bg-tertiary);padding:2px 7px;border-radius:5px;font-family:var(--font-mono);font-size:0.88em;border:1px solid var(--color-border)">$1</code>');
  html = html.replace(/\n\n/g, '</p><p style="margin-top:1em">');
  html = html.replace(/\n/g, '<br/>');
  return html;
}

function InfoBox({ type, content }) {
  const configs = {
    tip: {
      borderColor: '#06b6d4',
      bg: 'rgba(6,182,212,0.06)',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 4 12.7V17H8v-2.3A7 7 0 0 1 12 2z"/>
        </svg>
      ),
      label: 'Tip',
      labelColor: '#06b6d4',
    },
    warning: {
      borderColor: '#f59e0b',
      bg: 'rgba(245,158,11,0.06)',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/>
        </svg>
      ),
      label: 'Warning',
      labelColor: '#f59e0b',
    },
    info: {
      borderColor: '#CD7F32',
      bg: 'rgba(205,127,50,0.06)',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CD7F32" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
        </svg>
      ),
      label: 'Info',
      labelColor: '#CD7F32',
    },
  };
  const c = configs[type] || configs.info;

  return (
    <aside className="animate-fade-in-up" style={{
      margin: '1.5rem 0', borderRadius: 14, overflow: 'hidden',
      background: c.bg, borderLeft: `3px solid ${c.borderColor}`,
      padding: '16px 20px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        {c.icon}
        <span style={{ fontSize: '13px', fontWeight: 600, color: c.labelColor }}>{c.label}</span>
      </div>
      <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}
        dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />
    </aside>
  );
}

export default function LessonContent({ lesson, chapter, onPrev, onNext, onComplete, isCompleted, allLessons, currentIndex }) {
  if (!lesson) return null;
  const { content } = lesson;

  const sectionIdMap = {};
  content.sections.forEach((s, i) => {
    if (s.type === 'heading') sectionIdMap[i] = `section-${i}`;
  });

  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return (
    <div style={{ position: 'relative' }}>
      <MiniTOC sections={content.sections} />

      <div className="animate-fade-in-up">
        {/* Title */}
        <header style={{ marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-bronze)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {chapter.title}
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 600, lineHeight: 1.2, marginBottom: 12, color: 'var(--color-text-primary)' }}>
            {lesson.title}
          </h1>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
            {content.description}
          </p>
          <div style={{ height: 1, background: 'var(--color-border)', marginTop: 24 }} />
        </header>

        {/* Sections */}
        <div className="stagger-children">
          {content.sections.map((section, i) => {
            const id = sectionIdMap[i];
            switch (section.type) {
              case 'heading': {
                const isH2 = section.level === 2;
                return (
                  <div key={i} id={id} className="animate-fade-in-up" style={{
                    fontSize: isH2 ? '1.5rem' : '1.2rem',
                    fontWeight: isH2 ? 600 : 600,
                    marginTop: isH2 ? '2.5rem' : '2rem',
                    marginBottom: '0.75rem',
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.3,
                  }}>
                    {section.content}
                  </div>
                );
              }
              case 'text':
                return (
                  <div key={i} className="animate-fade-in-up" style={{
                    fontSize: '15px', lineHeight: 1.8, marginBottom: '1.25rem',
                    color: 'var(--color-text-secondary)',
                  }} dangerouslySetInnerHTML={{ __html: renderMarkdown(section.content) }} />
                );
              case 'list':
                return (
                  <ul key={i} className="animate-fade-in-up" style={{ marginBottom: '1.25rem', listStyle: 'none', padding: 0 }}>
                    {section.items.map((item, j) => (
                      <li key={j} style={{
                        display: 'flex', gap: 10, fontSize: '15px', lineHeight: 1.8,
                        color: 'var(--color-text-secondary)', marginBottom: 8,
                      }}>
                        <span style={{ color: '#CD7F32', flexShrink: 0, marginTop: 2 }}>•</span>
                        <span dangerouslySetInnerHTML={{ __html: renderMarkdown(item) }} />
                      </li>
                    ))}
                  </ul>
                );
              case 'code':
                return <CodeBlock key={i} code={section.code} language={section.language} filename={section.filename} />;
              case 'tip':
                return <InfoBox key={i} type="tip" content={section.content} />;
              case 'warning':
                return <InfoBox key={i} type="warning" content={section.content} />;
              case 'info':
                return <InfoBox key={i} type="info" content={section.content} />;
              case 'quiz':
                return <QuizComponent key={i} question={section.question} options={section.options} correct={section.correct} explanation={section.explanation} />;
              default:
                return null;
            }
          })}
        </div>

        {/* Navigation Footer */}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          {/* Mark Complete */}
          {!isCompleted ? (
            <button
              onClick={onComplete}
              style={{
                width: '100%', padding: '14px 0', borderRadius: 12, border: 'none',
                fontSize: '15px', fontWeight: 600, color: '#fff', cursor: 'pointer',
                background: 'linear-gradient(135deg, #CD7F32, #ec4899)',
                boxShadow: '0 2px 16px rgba(205,127,50,0.3)',
                marginBottom: 16, fontFamily: 'var(--font-sans)',
              }}
            >
              ✓ Mark as Complete
            </button>
          ) : (
            <div className="animate-scale-in" style={{
              width: '100%', padding: '14px 0', borderRadius: 12, textAlign: 'center',
              fontSize: '15px', fontWeight: 600, color: 'var(--color-green)',
              background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
              marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="animate-checkmark">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              Lesson Complete
            </div>
          )}

          {/* Prev / Next */}
          <div className="nav-footer-buttons" style={{ display: 'flex', gap: 12 }}>
            {prevLesson ? (
              <button
                onClick={onPrev}
                style={{
                  flex: 1, padding: '12px 16px', borderRadius: 12, cursor: 'pointer',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)',
                  textAlign: 'left', fontFamily: 'var(--font-sans)', transition: 'border-color 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-border-hover)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginBottom: 4 }}>← Previous</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>{prevLesson.lesson.title}</div>
              </button>
            ) : <div style={{ flex: 1 }} />}
            {nextLesson ? (
              <button
                onClick={onNext}
                style={{
                  flex: 1, padding: '12px 16px', borderRadius: 12, cursor: 'pointer',
                  background: 'linear-gradient(135deg, #CD7F32, #ec4899)', border: 'none',
                  textAlign: 'right', fontFamily: 'var(--font-sans)',
                }}
              >
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>Next →</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>{nextLesson.lesson.title}</div>
              </button>
            ) : <div style={{ flex: 1 }} />}
          </div>
          <style>{`@media (max-width: 768px) { .nav-footer-buttons { flex-direction: column !important; } }`}</style>
        </div>
      </div>
    </div>
  );
}
