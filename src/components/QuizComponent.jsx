import { useState } from 'react';

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
    <div className="my-8 rounded-xl overflow-hidden animate-fade-in-up" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
      {/* Header */}
      <div className="flex items-center gap-2 px-5 sm:px-6 py-4" style={{ borderBottom: '1px solid var(--color-separator)' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-bronze)' }}>
          <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>
        </svg>
        <span className="text-[14px] font-semibold" style={{ color: 'var(--color-bronze)' }}>Knowledge Check</span>
      </div>

      <div className="px-5 sm:px-6 py-5">
        <p className="text-[16px] font-medium mb-5 leading-[1.5]" style={{ color: 'var(--color-text-primary)' }}>{question}</p>

        <div className="space-y-2.5">
          {options.map((opt) => {
            let borderColor = 'var(--color-border)';
            let bg = 'transparent';
            let ringColor = 'var(--color-text-muted)';

            if (showResult && opt.id === correct) {
              borderColor = 'var(--color-success)';
              bg = 'rgba(48, 209, 88, 0.06)';
              ringColor = 'var(--color-success)';
            } else if (showResult && opt.id === selected && !isCorrect) {
              borderColor = 'var(--color-error)';
              bg = 'rgba(255, 69, 58, 0.06)';
              ringColor = 'var(--color-error)';
            } else if (selected === opt.id && !showResult) {
              borderColor = 'var(--color-bronze)';
              bg = 'var(--color-bronze-subtle)';
              ringColor = 'var(--color-bronze)';
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className="w-full text-left px-4 py-3.5 rounded-xl transition-all flex items-center gap-3.5 cursor-pointer active:scale-[0.99]"
                style={{ border: `1.5px solid ${borderColor}`, backgroundColor: bg }}
              >
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-semibold shrink-0 transition-all"
                  style={{
                    border: `2px solid ${ringColor}`,
                    color: ringColor,
                    backgroundColor: selected === opt.id ? `${ringColor}15` : 'transparent',
                  }}>
                  {opt.id.toUpperCase()}
                </span>
                <span className="text-[15px] leading-[1.5]" style={{ color: 'var(--color-text-primary)' }}>{opt.text}</span>
              </button>
            );
          })}
        </div>

        {!showResult && (
          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="mt-5 px-6 py-2.5 rounded-xl text-[14px] font-semibold transition-all cursor-pointer active:scale-[0.97]"
            style={{
              backgroundColor: selected ? 'var(--color-bronze)' : 'var(--color-text-muted)',
              color: '#fff',
              opacity: selected ? 1 : 0.4,
            }}
          >
            Check Answer
          </button>
        )}

        {showResult && (
          <div className="mt-5 p-4 rounded-xl animate-scale-in" style={{
            backgroundColor: isCorrect ? 'rgba(48, 209, 88, 0.06)' : 'rgba(255, 69, 58, 0.06)',
            border: `1px solid ${isCorrect ? 'rgba(48,209,88,0.2)' : 'rgba(255,69,58,0.2)'}`,
          }}>
            <p className="text-[14px] font-semibold mb-1" style={{ color: isCorrect ? 'var(--color-success)' : 'var(--color-error)' }}>
              {isCorrect ? '✓ Correct!' : '✗ Not quite'}
            </p>
            <p className="text-[14px] leading-[1.6]" style={{ color: 'var(--color-text-secondary)' }}>{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
