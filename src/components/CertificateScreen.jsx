import { useState } from 'react';

export default function CertificateScreen({ courseTitle, totalLessons }) {
  const [name, setName] = useState('');
  const [showCert, setShowCert] = useState(false);
  const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      {!showCert ? (
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold mb-3" style={{ color: 'var(--color-bronze)' }}>Congratulations!</h1>
          <p className="text-base mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            You've completed all {totalLessons} lessons in {courseTitle}!
          </p>
          <input
            type="text"
            placeholder="Enter your name for the certificate"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm mb-4 outline-none"
            style={{ backgroundColor: 'var(--color-bg-card)', color: 'var(--color-text-primary)', border: '1px solid var(--color-border-bronze)' }}
          />
          <button
            onClick={() => name.trim() && setShowCert(true)}
            disabled={!name.trim()}
            className="px-8 py-3 rounded-lg font-semibold text-sm text-white transition-all cursor-pointer"
            style={{ background: name.trim() ? 'linear-gradient(135deg, var(--color-bronze), var(--color-bronze-dark))' : 'var(--color-text-muted)', opacity: name.trim() ? 1 : 0.5 }}
          >
            Generate Certificate
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl p-1 rounded-2xl" style={{ background: 'linear-gradient(135deg, var(--color-bronze), var(--color-bronze-dark), var(--color-bronze-hover))' }}>
          <div className="rounded-xl p-10 text-center" style={{ backgroundColor: 'var(--color-bg-card)' }}>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--color-bronze)' }}>Certificate of Completion</div>
            <div className="w-16 h-0.5 mx-auto mb-6" style={{ backgroundColor: 'var(--color-bronze)' }} />
            <p className="text-sm mb-2" style={{ color: 'var(--color-text-secondary)' }}>This certifies that</p>
            <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-bronze-hover)' }}>{name}</h2>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              has successfully completed all {totalLessons} lessons of
            </p>
            <h3 className="text-xl font-bold mb-8" style={{ color: 'var(--color-text-primary)' }}>{courseTitle}</h3>
            <div className="w-16 h-0.5 mx-auto mb-4" style={{ backgroundColor: 'var(--color-border-bronze)' }} />
            <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{date}</p>
            <div className="text-4xl mt-6">🏆</div>
          </div>
        </div>
      )}
    </div>
  );
}
