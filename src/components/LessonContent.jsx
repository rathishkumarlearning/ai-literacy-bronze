import CodeBlock from './CodeBlock';
import QuizComponent from './QuizComponent';
import MiniTOC from './MiniTOC';

function renderMarkdown(text) {
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--color-text-primary);font-weight:600">$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/`(.*?)`/g, '<code style="background:var(--color-bg-card);padding:2px 7px;border-radius:5px;font-family:var(--font-mono);font-size:0.88em;border:1px solid var(--color-border)">$1</code>');
  html = html.replace(/\n\n/g, '</p><p style="margin-top:1em">');
  html = html.replace(/\n/g, '<br/>');
  return html;
}

function InfoBox({ type, content }) {
  const configs = {
    tip: {
      bg: 'rgba(48, 209, 88, 0.06)',
      border: 'var(--color-success)',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-success)' }}>
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 4 12.7V17H8v-2.3A7 7 0 0 1 12 2z"/>
        </svg>
      ),
      label: 'Tip',
      labelColor: 'var(--color-success)',
    },
    warning: {
      bg: 'rgba(255, 214, 10, 0.06)',
      border: 'var(--color-warning)',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-warning)' }}>
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/>
        </svg>
      ),
      label: 'Warning',
      labelColor: 'var(--color-warning)',
    },
    info: {
      bg: 'rgba(100, 210, 255, 0.06)',
      border: 'var(--color-info)',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-info)' }}>
          <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
        </svg>
      ),
      label: 'Note',
      labelColor: 'var(--color-info)',
    },
  };
  const c = configs[type] || configs.info;

  return (
    <aside className="my-8 rounded-xl overflow-hidden animate-fade-in-up" style={{ backgroundColor: c.bg, border: `1px solid ${c.border}20` }}>
      <div className="flex items-center gap-2 px-5 pt-4 pb-1">
        {c.icon}
        <span className="text-[13px] font-semibold" style={{ color: c.labelColor }}>{c.label}</span>
      </div>
      <div className="px-5 pb-4 pt-1">
        <p className="text-[15px] leading-[1.7]" style={{ color: 'var(--color-text-secondary)' }} dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />
      </div>
    </aside>
  );
}

export default function LessonContent({ lesson, chapter, onPrev, onNext, onComplete, isCompleted, allLessons, currentIndex }) {
  if (!lesson) return null;
  const { content } = lesson;

  const sectionIdMap = {};
  content.sections.forEach((s, i) => {
    if (s.type === 'heading') {
      sectionIdMap[i] = `section-${i}`;
    }
  });

  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return (
    <div className="relative">
      <MiniTOC sections={content.sections} />

      <div className="max-w-[720px] mx-auto px-5 sm:px-8 pt-8 pb-32 lg:pb-16 animate-fade-in-up">
        {/* Mobile breadcrumb */}
        <nav className="sm:hidden flex items-center gap-1.5 text-[12px] mb-4" style={{ color: 'var(--color-text-muted)' }}>
          <span>{chapter.title}</span>
          <svg width="6" height="8" viewBox="0 0 7 10" fill="none" style={{ opacity: 0.5 }}>
            <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ color: 'var(--color-text-secondary)' }}>{lesson.title}</span>
        </nav>

        {/* Title area */}
        <header className="mb-10">
          <h1 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight leading-[1.1] mb-4" style={{ color: 'var(--color-text-primary)' }}>
            {lesson.title}
          </h1>
          <p className="text-[16px] sm:text-[17px] leading-[1.7]" style={{ color: 'var(--color-text-secondary)' }}>
            {content.description}
          </p>
          <div className="mt-6 h-[1px]" style={{ backgroundColor: 'var(--color-separator)' }} />
        </header>

        {/* Sections */}
        <div className="stagger-children">
          {content.sections.map((section, i) => {
            const id = sectionIdMap[i];
            switch (section.type) {
              case 'heading': {
                const Tag = section.level === 2 ? 'h2' : 'h3';
                const cls = section.level === 2
                  ? 'text-[22px] sm:text-[26px] font-bold tracking-tight mt-14 mb-4 animate-fade-in-up'
                  : 'text-[18px] sm:text-[20px] font-semibold mt-10 mb-3 animate-fade-in-up';
                return <Tag key={i} id={id} className={cls} style={{ color: 'var(--color-text-primary)', lineHeight: 1.2 }}>{section.content}</Tag>;
              }
              case 'text':
                return (
                  <div key={i} className="text-[15px] sm:text-[16px] leading-[1.8] mb-5 animate-fade-in-up" style={{ color: 'var(--color-text-secondary)' }}
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(section.content) }} />
                );
              case 'list':
                return (
                  <ul key={i} className="mb-6 space-y-2.5 animate-fade-in-up">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-[15px] sm:text-[16px] leading-[1.8]" style={{ color: 'var(--color-text-secondary)' }}>
                        <span className="shrink-0 mt-[2px]" style={{ color: 'var(--color-bronze)' }}>•</span>
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

        {/* Completion */}
        <div className="mt-16">
          {!isCompleted ? (
            <button
              onClick={onComplete}
              className="w-full py-3.5 rounded-xl text-[15px] font-semibold text-white transition-all cursor-pointer active:scale-[0.98]"
              style={{ background: 'linear-gradient(135deg, #CD7F32, #B8860B)', boxShadow: '0 2px 12px rgba(205,127,50,0.3)' }}
            >
              Mark as Complete
            </button>
          ) : (
            <div className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-[15px] font-semibold animate-scale-in"
              style={{ color: 'var(--color-success)', backgroundColor: 'rgba(48,209,88,0.08)', border: '1px solid rgba(48,209,88,0.2)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="animate-checkmark">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              Lesson Complete
            </div>
          )}
        </div>

        {/* Navigation cards - Apple style */}
        <div className="hidden lg:grid grid-cols-2 gap-4 mt-8">
          {prevLesson ? (
            <button
              onClick={onPrev}
              className="text-left p-5 rounded-xl transition-all cursor-pointer group"
              style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-border-hover)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
            >
              <span className="text-[12px] font-medium" style={{ color: 'var(--color-text-muted)' }}>Previous</span>
              <div className="flex items-center gap-1.5 mt-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-bronze)' }}>
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
                <span className="text-[14px] font-semibold" style={{ color: 'var(--color-bronze)' }}>{prevLesson.lesson.title}</span>
              </div>
            </button>
          ) : <div />}
          {nextLesson ? (
            <button
              onClick={onNext}
              className="text-right p-5 rounded-xl transition-all cursor-pointer group"
              style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-border-hover)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
            >
              <span className="text-[12px] font-medium" style={{ color: 'var(--color-text-muted)' }}>Next</span>
              <div className="flex items-center justify-end gap-1.5 mt-1">
                <span className="text-[14px] font-semibold" style={{ color: 'var(--color-bronze)' }}>{nextLesson.lesson.title}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-bronze)' }}>
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            </button>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
