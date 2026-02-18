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
      const idx = sections.indexOf(headings[i]);
      const el = document.getElementById(`section-${idx}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings, sections]);

  if (headings.length < 2) return null;

  return (
    <nav className="hidden 2xl:block fixed right-8 top-20 w-52">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: 'var(--color-text-muted)' }}>
        On This Page
      </p>
      <div style={{ borderLeft: '1px solid var(--color-separator)' }}>
        {headings.map((h, i) => {
          const id = `section-${sections.indexOf(h)}`;
          const isActive = activeId === id;
          return (
            <a
              key={i}
              href={`#${id}`}
              className="block pl-3 py-1.5 text-[12px] transition-all leading-[1.5]"
              style={{
                color: isActive ? 'var(--color-bronze)' : 'var(--color-text-muted)',
                borderLeft: isActive ? '2px solid var(--color-bronze)' : '2px solid transparent',
                marginLeft: '-1px',
                fontWeight: isActive ? 600 : 400,
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
