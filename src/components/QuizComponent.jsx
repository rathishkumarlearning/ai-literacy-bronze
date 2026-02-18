import { useState } from 'react';

const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

export default function QuizComponent({ question, options, correct, explanation }) {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (id) => {
    if (showResult) return;
    setSelected(id);
  };

  const handleSubmit = () => {
    if (!selected) return;
    setShowResult(true);
  };

  const isCorrect = selected === correct;

  return (
    <div className="animate-fade-in-up" style={{
      margin: '2rem 0', borderRadius: 16, overflow: 'hidden',
      background: 'var(--color-bg-card)', border: '1px solid var(--color-border)',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '14px 20px', borderBottom: '1px solid var(--color-border)',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CD7F32" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>
        </svg>
        <span style={{ fontSize: '14px', fontWeight: 600, color: '#CD7F32' }}>Knowledge Check</span>
      </div>

      <div style={{ padding: '20px' }}>
        <p style={{ fontSize: '15px', fontWeight: 600, marginBottom: 16, lineHeight: 1.5, color: 'var(--color-text-primary)' }}>
          {question}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {options.map((opt, i) => {
            let borderColor = 'var(--color-border)';
            let bg = 'transparent';
            let letterBg = 'transparent';
            let letterColor = 'var(--color-text-muted)';
            let icon = null;

            if (showResult && opt.id === correct) {
              borderColor = 'var(--color-green)';
              bg = 'rgba(16,185,129,0.08)';
              letterBg = 'var(--color-green)';
              letterColor = '#fff';
              icon = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>;
            } else if (showResult && opt.id === selected && !isCorrect) {
              borderColor = 'var(--color-error)';
              bg = 'rgba(239,68,68,0.08)';
              letterBg = 'var(--color-error)';
              letterColor = '#fff';
              icon = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-error)" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>;
            } else if (selected === opt.id && !showResult) {
              borderColor = '#CD7F32';
              bg = 'rgba(205,127,50,0.1)';
              letterBg = '#CD7F32';
              letterColor = '#fff';
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                style={{
                  width: '100%', textAlign: 'left', padding: '12px 16px',
                  borderRadius: 12, border: `2px solid ${borderColor}`,
                  background: bg, cursor: showResult ? 'default' : 'pointer',
                  display: 'flex', alignItems: 'center', gap: 12,
                  fontFamily: 'var(--font-sans)', transition: 'all 0.15s',
                }}
              >
                {/* Letter marker */}
                <div style={{
                  width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px', fontWeight: 700, transition: 'all 0.15s',
                  background: letterBg, color: letterColor,
                  border: letterBg === 'transparent' ? '2px solid var(--color-border)' : 'none',
                }}>
                  {letters[i]}
                </div>
                <span style={{ fontSize: '14px', lineHeight: 1.5, color: 'var(--color-text-primary)', flex: 1 }}>
                  {opt.text}
                </span>
                {icon && <span style={{ flexShrink: 0 }}>{icon}</span>}
              </button>
            );
          })}
        </div>

        {!showResult && (
          <button
            onClick={handleSubmit}
            disabled={!selected}
            style={{
              marginTop: 16, padding: '10px 24px', borderRadius: 12, border: 'none',
              fontSize: '14px', fontWeight: 600, cursor: selected ? 'pointer' : 'default',
              color: '#fff', fontFamily: 'var(--font-sans)',
              background: selected ? 'linear-gradient(135deg, #CD7F32, #ec4899)' : 'var(--color-text-muted)',
              opacity: selected ? 1 : 0.4,
              transition: 'all 0.15s',
            }}
          >
            Check Answer
          </button>
        )}

        {showResult && (
          <div className="animate-scale-in" style={{
            marginTop: 16, padding: 16, borderRadius: 12,
            background: isCorrect ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)',
            border: `1px solid ${isCorrect ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)'}`,
          }}>
            <p style={{ fontSize: '14px', fontWeight: 600, marginBottom: 4, color: isCorrect ? 'var(--color-green)' : 'var(--color-error)' }}>
              {isCorrect ? '✓ Correct!' : '✗ Not quite'}
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
