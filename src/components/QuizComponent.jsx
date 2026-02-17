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
    <div className="my-8 rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border-bronze)' }}>
      <div className="px-6 py-4" style={{ borderBottom: '1px solid var(--color-border-bronze)', background: 'linear-gradient(135deg, rgba(205,127,50,0.08), transparent)' }}>
        <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--color-bronze)' }}>
          <span>🧠</span> Quiz
        </div>
      </div>
      <div className="px-6 py-5">
        <p className="text-base font-medium mb-5" style={{ color: 'var(--color-text-primary)' }}>{question}</p>
        <div className="space-y-3">
          {options.map((opt) => {
            let borderColor = 'var(--color-border-bronze)';
            let bg = 'transparent';
            if (showResult && opt.id === correct) {
              borderColor = 'var(--color-success)';
              bg = 'rgba(16, 185, 129, 0.08)';
            } else if (showResult && opt.id === selected && !isCorrect) {
              borderColor = 'var(--color-error)';
              bg = 'rgba(239, 68, 68, 0.08)';
            } else if (selected === opt.id && !showResult) {
              borderColor = 'var(--color-bronze)';
              bg = 'rgba(205, 127, 50, 0.08)';
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className="w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 cursor-pointer"
                style={{ border: `1px solid ${borderColor}`, backgroundColor: bg }}
              >
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                  style={{
                    border: `2px solid ${selected === opt.id ? 'var(--color-bronze)' : 'var(--color-text-muted)'}`,
                    color: selected === opt.id ? 'var(--color-bronze)' : 'var(--color-text-muted)',
                    backgroundColor: selected === opt.id ? 'rgba(205, 127, 50, 0.1)' : 'transparent',
                  }}>
                  {opt.id.toUpperCase()}
                </span>
                <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>{opt.text}</span>
              </button>
            );
          })}
        </div>

        {!showResult && (
          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="mt-5 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer"
            style={{
              backgroundColor: selected ? 'var(--color-bronze)' : 'var(--color-text-muted)',
              color: '#fff',
              opacity: selected ? 1 : 0.5,
            }}
          >
            Check Answer
          </button>
        )}

        {showResult && (
          <div className="mt-5 p-4 rounded-lg" style={{
            backgroundColor: isCorrect ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
            border: `1px solid ${isCorrect ? 'var(--color-success)' : 'var(--color-error)'}`,
          }}>
            <p className="text-sm font-semibold mb-1" style={{ color: isCorrect ? 'var(--color-success)' : 'var(--color-error)' }}>
              {isCorrect ? '🎉 Correct!' : '❌ Not quite!'}
            </p>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
