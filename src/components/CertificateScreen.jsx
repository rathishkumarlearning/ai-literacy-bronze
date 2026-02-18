import { useState } from 'react';

export default function CertificateScreen({ courseTitle, totalLessons }) {
  const [name, setName] = useState('');
  const [showCert, setShowCert] = useState(false);
  const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24, background: 'var(--color-bg-primary)',
    }}>
      {!showCert ? (
        <div className="animate-fade-in-up" style={{ textAlign: 'center', maxWidth: 380, width: '100%' }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%', margin: '0 auto 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40,
            background: 'rgba(205,127,50,0.1)',
          }}>🎉</div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 12, color: 'var(--color-text-primary)' }}>
            Congratulations!
          </h1>
          <p style={{ fontSize: '15px', lineHeight: 1.6, marginBottom: 32, color: 'var(--color-text-secondary)' }}>
            You've completed all {totalLessons} lessons in<br/>
            <span style={{ color: '#CD7F32', fontWeight: 600 }}>{courseTitle}</span>
          </p>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%', padding: '14px 16px', borderRadius: 12, fontSize: '15px',
              textAlign: 'center', border: '1px solid var(--color-border)',
              background: 'var(--color-bg-card)', color: 'var(--color-text-primary)',
              outline: 'none', fontFamily: 'var(--font-sans)', marginBottom: 12,
            }}
          />
          <button
            onClick={() => name.trim() && setShowCert(true)}
            disabled={!name.trim()}
            style={{
              width: '100%', padding: '14px 0', borderRadius: 12, border: 'none',
              fontSize: '15px', fontWeight: 600, color: '#fff', cursor: name.trim() ? 'pointer' : 'default',
              fontFamily: 'var(--font-sans)',
              background: name.trim() ? 'linear-gradient(135deg, #CD7F32, #ec4899)' : 'var(--color-text-muted)',
              opacity: name.trim() ? 1 : 0.4,
              boxShadow: name.trim() ? '0 2px 16px rgba(205,127,50,0.3)' : 'none',
            }}
          >
            Generate Certificate
          </button>
        </div>
      ) : (
        <div className="animate-scale-in" style={{ width: '100%', maxWidth: 560 }}>
          <div style={{
            padding: 3, borderRadius: 20,
            background: 'linear-gradient(135deg, #CD7F32, #ec4899, #06b6d4, #CD7F32)',
          }}>
            <div style={{
              borderRadius: 17, padding: '48px 32px', textAlign: 'center',
              background: 'var(--color-bg-primary)',
            }}>
              <div style={{
                fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.3em', marginBottom: 32, color: '#CD7F32',
              }}>
                Certificate of Completion
              </div>
              <div style={{ width: 48, height: 1, margin: '0 auto 32px', background: 'var(--color-border)' }} />
              <p style={{ fontSize: '13px', marginBottom: 8, color: 'var(--color-text-muted)' }}>This certifies that</p>
              <h2 style={{
                fontSize: '2rem', fontWeight: 700, marginBottom: 8,
                background: 'linear-gradient(135deg, #CD7F32, #ec4899)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>{name}</h2>
              <p style={{ fontSize: '14px', marginBottom: 32, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                has successfully completed all {totalLessons} lessons of
              </p>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 40, color: 'var(--color-text-primary)' }}>
                {courseTitle}
              </h3>
              <div style={{ width: 48, height: 1, margin: '0 auto 16px', background: 'var(--color-border)' }} />
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{date}</p>
              <div style={{ fontSize: '2rem', marginTop: 20 }}>🏆</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
