import { useState } from 'react';

export default function CertificateScreen({ courseTitle, totalLessons }) {
  const [name, setName] = useState('');
  const [showCert, setShowCert] = useState(false);
  const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-8" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      {!showCert ? (
        <div className="text-center max-w-sm w-full animate-fade-in-up">
          <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl" style={{ backgroundColor: 'var(--color-bronze-subtle)' }}>
            🎉
          </div>
          <h1 className="text-[32px] font-bold tracking-tight mb-3" style={{ color: 'var(--color-text-primary)' }}>
            Congratulations!
          </h1>
          <p className="text-[16px] leading-[1.6] mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            You've completed all {totalLessons} lessons in<br/>
            <span style={{ color: 'var(--color-bronze)' }}>{courseTitle}</span>
          </p>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl text-[15px] mb-4 outline-none text-center transition-colors"
            style={{ backgroundColor: 'var(--color-bg-card)', color: 'var(--color-text-primary)', border: '1px solid var(--color-border)' }}
          />
          <button
            onClick={() => name.trim() && setShowCert(true)}
            disabled={!name.trim()}
            className="w-full py-3.5 rounded-xl font-semibold text-[15px] text-white transition-all cursor-pointer active:scale-[0.98]"
            style={{
              background: name.trim() ? 'linear-gradient(135deg, #CD7F32, #B8860B)' : 'var(--color-text-muted)',
              opacity: name.trim() ? 1 : 0.4,
              boxShadow: name.trim() ? '0 2px 12px rgba(205,127,50,0.3)' : 'none',
            }}
          >
            Generate Certificate
          </button>
        </div>
      ) : (
        <div className="w-full max-w-xl animate-scale-in">
          <div className="p-[2px] rounded-2xl" style={{ background: 'linear-gradient(135deg, #CD7F32, #B8860B, #D4A574, #CD7F32)' }}>
            <div className="rounded-[14px] px-8 py-12 sm:px-12 sm:py-16 text-center" style={{ backgroundColor: 'var(--color-bg-card)' }}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.3em] mb-8" style={{ color: 'var(--color-bronze)' }}>
                Certificate of Completion
              </div>
              <div className="w-12 h-[1px] mx-auto mb-8" style={{ backgroundColor: 'var(--color-separator)' }} />
              <p className="text-[13px] mb-2" style={{ color: 'var(--color-text-muted)' }}>This certifies that</p>
              <h2 className="text-[28px] sm:text-[34px] font-bold tracking-tight mb-2" style={{ color: 'var(--color-bronze-hover)' }}>{name}</h2>
              <p className="text-[14px] mb-8 leading-[1.6]" style={{ color: 'var(--color-text-secondary)' }}>
                has successfully completed all {totalLessons} lessons of
              </p>
              <h3 className="text-[20px] font-bold mb-10" style={{ color: 'var(--color-text-primary)' }}>{courseTitle}</h3>
              <div className="w-12 h-[1px] mx-auto mb-4" style={{ backgroundColor: 'var(--color-separator)' }} />
              <p className="text-[12px]" style={{ color: 'var(--color-text-muted)' }}>{date}</p>
              <div className="text-3xl mt-6">🏆</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
