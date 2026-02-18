import { useState, useEffect } from 'react';

export default function MiniTOC({ sections }) {
  const [activeId, setActiveId] = useState('');
  const headings = sections.filter(s => s.type === 'heading' && s.level === 2);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );

    headings.forEach((h) => {
      const idx = sections.indexOf(h);
      const el = document.getElementById(`section-${idx}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings, sections]);

  if (headings.length < 2) return null;

  return (
    <nav style={{
      display: 'none', position: 'fixed', right: 32, top: 80, width: 200,
    }} className="minitoc-nav">
      <style>{`@media (min-width: 1400px) { .minitoc-nav { display: block !important; } }`}</style>
      <p style={{
        fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
        letterSpacing: '0.08em', marginBottom: 12, color: 'var(--color-text-muted)',
      }}>
        On This Page
      </p>
      <div style={{ borderLeft: '1px solid var(--color-border)' }}>
        {headings.map((h, i) => {
          const id = `section-${sections.indexOf(h)}`;
          const isActive = activeId === id;
          return (
            <a
              key={i}
              href={`#${id}`}
              style={{
                display: 'block', paddingLeft: 12, paddingTop: 6, paddingBottom: 6,
                fontSize: '12px', lineHeight: 1.5, textDecoration: 'none',
                color: isActive ? '#CD7F32' : 'var(--color-text-muted)',
                borderLeft: isActive ? '2px solid #CD7F32' : '2px solid transparent',
                marginLeft: -1, fontWeight: isActive ? 600 : 400,
                transition: 'color 0.15s',
              }}
            >
              {h.content.replace(/[^\w\s—-]/g, '').trim()}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
