import CodeBlock from './CodeBlock';
import QuizComponent from './QuizComponent';
import MiniTOC from './MiniTOC';

function renderMarkdown(text) {
  // Bold
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Inline code
  html = html.replace(/`(.*?)`/g, '<code style="background:var(--color-bg-code);padding:2px 6px;border-radius:4px;font-family:var(--font-mono);font-size:0.85em">$1</code>');
  // Line breaks
  html = html.replace(/\n\n/g, '</p><p>');
  html = html.replace(/\n/g, '<br/>');
  return html;
}

function InfoBox({ type, content }) {
  const styles = {
    tip: { border: 'var(--color-success)', bg: 'rgba(16,185,129,0.06)', icon: '💡' },
    warning: { border: 'var(--color-warning)', bg: 'rgba(245,158,11,0.06)', icon: '⚠️' },
    info: { border: 'var(--color-info)', bg: 'rgba(59,130,246,0.06)', icon: 'ℹ️' },
  };
  const s = styles[type] || styles.info;

  return (
    <div className="my-6 px-5 py-4 rounded-xl" style={{ backgroundColor: s.bg, borderLeft: `3px solid ${s.border}` }}>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }} dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />
    </div>
  );
}

export default function LessonContent({ lesson, chapter, onPrev, onNext, onComplete, isCompleted }) {
  if (!lesson) return null;
  const { content } = lesson;

  const sectionIdMap = {};
  let headingIdx = 0;
  content.sections.forEach((s, i) => {
    if (s.type === 'heading') {
      sectionIdMap[i] = `section-${i}`;
    }
  });

  return (
    <div className="relative">
      <MiniTOC sections={content.sections} />

      <div className="max-w-[800px] mx-auto px-6 py-10 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--color-text-muted)' }}>
          <span>{chapter.title}</span>
          <span>›</span>
          <span style={{ color: 'var(--color-text-secondary)' }}>{lesson.title}</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
          {lesson.title}
        </h1>
        <p className="text-base mb-10 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {content.description}
        </p>

        {/* Sections */}
        {content.sections.map((section, i) => {
          const id = sectionIdMap[i];
          switch (section.type) {
            case 'heading': {
              const Tag = section.level === 2 ? 'h2' : 'h3';
              const cls = section.level === 2
                ? 'text-xl font-bold mt-12 mb-4'
                : 'text-lg font-semibold mt-8 mb-3';
              return <Tag key={i} id={id} className={cls} style={{ color: 'var(--color-text-primary)' }}>{section.content}</Tag>;
            }
            case 'text':
              return (
                <div key={i} className="text-[0.95rem] leading-[1.8] mb-4" style={{ color: 'var(--color-text-secondary)' }}
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(section.content) }} />
              );
            case 'list':
              return (
                <ul key={i} className="mb-4 space-y-2 pl-1">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-[0.95rem] leading-[1.8]" style={{ color: 'var(--color-text-secondary)' }}>
                      <span className="shrink-0 mt-1">•</span>
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

        {/* Complete + Nav */}
        <div className="mt-16 pt-8" style={{ borderTop: '1px solid var(--color-border-bronze)' }}>
          {!isCompleted && (
            <button
              onClick={onComplete}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white mb-6 transition-all cursor-pointer"
              style={{ background: 'linear-gradient(135deg, var(--color-bronze), var(--color-bronze-dark))' }}
            >
              ✓ Mark as Complete
            </button>
          )}
          {isCompleted && (
            <div className="text-center py-3 rounded-xl text-sm font-semibold mb-6" style={{ color: 'var(--color-success)', backgroundColor: 'rgba(16,185,129,0.08)', border: '1px solid var(--color-success)' }}>
              ✓ Lesson Completed
            </div>
          )}

          <div className="flex items-center justify-between">
            {onPrev ? (
              <button onClick={onPrev} className="flex items-center gap-2 text-sm transition-colors cursor-pointer" style={{ color: 'var(--color-text-muted)' }}>
                ← Previous
              </button>
            ) : <div />}
            {onNext ? (
              <button onClick={onNext} className="flex items-center gap-2 text-sm font-semibold transition-colors cursor-pointer" style={{ color: 'var(--color-bronze)' }}>
                Next →
              </button>
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  );
}
