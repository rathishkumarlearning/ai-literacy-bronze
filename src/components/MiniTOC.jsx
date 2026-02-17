import { useState, useEffect } from 'react';

export default function MiniTOC({ sections }) {
  const [activeId, setActiveId] = useState('');
  const headings = sections.filter(s => s.type === 'heading' && s.level === 2);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );

    headings.forEach((_, i) => {
      const el = document.getElementById(`section-${i}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav className="hidden 2xl:block fixed right-8 top-24 w-56">
      <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-text-muted)' }}>
        On this page
      </p>
      <div className="space-y-1" style={{ borderLeft: '2px solid var(--color-border-bronze)' }}>
        {headings.map((h, i) => {
          const id = `section-${sections.indexOf(h)}`;
          const isActive = activeId === id;
          return (
            <a
              key={i}
              href={`#${id}`}
              className="block pl-3 py-1 text-xs transition-all leading-relaxed"
              style={{
                color: isActive ? 'var(--color-bronze)' : 'var(--color-text-muted)',
                borderLeft: isActive ? '2px solid var(--color-bronze)' : '2px solid transparent',
                marginLeft: '-2px',
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {h.content.replace(/[^\w\s—]/g, '').trim()}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
