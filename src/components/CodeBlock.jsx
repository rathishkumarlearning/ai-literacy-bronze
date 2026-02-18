import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({ code, language = 'python', filename }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const langLabel = language.charAt(0).toUpperCase() + language.slice(1);

  return (
    <div className="my-7 rounded-xl overflow-hidden animate-fade-in-up" style={{ backgroundColor: '#1C1C1E', border: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-3">
          {filename ? (
            <>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FEBC2E' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#28C840' }} />
              </div>
              <span className="text-[12px] font-mono" style={{ color: 'rgba(255,255,255,0.45)' }}>{filename}</span>
            </>
          ) : (
            <span className="text-[11px] font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {langLabel}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[12px] px-2.5 py-1 rounded-md transition-all cursor-pointer"
          style={{
            color: copied ? '#30D158' : 'rgba(255,255,255,0.4)',
            backgroundColor: copied ? 'rgba(48,209,88,0.1)' : 'transparent',
          }}
        >
          {copied ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              Copied
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              Copy
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1.25rem',
          backgroundColor: '#1C1C1E',
          fontSize: '0.85rem',
          lineHeight: '1.7',
        }}
        codeTagProps={{ style: { fontFamily: 'var(--font-mono)' } }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
