import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const customTheme = {
  'pre[class*="language-"]': { background: '#0a0a10', margin: 0, padding: '1.25rem', fontSize: '13px', lineHeight: '1.7' },
  'code[class*="language-"]': { background: 'none', fontFamily: 'var(--font-mono)' },
  comment: { color: '#636d83', fontStyle: 'italic' },
  prolog: { color: '#636d83' },
  doctype: { color: '#636d83' },
  cdata: { color: '#636d83' },
  string: { color: '#c3e88d' },
  'attr-value': { color: '#c3e88d' },
  punctuation: { color: '#89ddff' },
  operator: { color: '#89ddff' },
  keyword: { color: '#c792ea' },
  'class-name': { color: '#ffcb6b' },
  function: { color: '#82aaff' },
  builtin: { color: '#ffcb6b' },
  number: { color: '#f78c6c' },
  boolean: { color: '#f78c6c' },
  tag: { color: '#f07178' },
  'attr-name': { color: '#ffcb6b' },
  selector: { color: '#c3e88d' },
  property: { color: '#82aaff' },
  variable: { color: '#f07178' },
  regex: { color: '#c3e88d' },
  important: { color: '#c792ea' },
};

const langIcons = {
  python: '🐍',
  javascript: '📜',
  js: '📜',
  html: '🌐',
  css: '🎨',
  default: '📄',
};

export default function CodeBlock({ code, language = 'python', filename }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const icon = langIcons[language] || langIcons.default;
  const lines = code.split('\n');

  return (
    <div className="animate-fade-in-up" style={{
      margin: '1.5rem 0', borderRadius: 14, overflow: 'hidden',
      background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)',
    }}>
      {/* Filename tab */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 16px', borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-bg-tertiary)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: '13px' }}>{icon}</span>
          <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>
            {filename || language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          style={{
            display: 'flex', alignItems: 'center', gap: 6, padding: '4px 10px',
            borderRadius: 6, border: 'none', cursor: 'pointer', fontSize: '12px',
            fontFamily: 'var(--font-sans)',
            color: copied ? 'var(--color-green)' : 'var(--color-text-muted)',
            background: copied ? 'rgba(16,185,129,0.1)' : 'transparent',
            transition: 'all 0.15s',
          }}
        >
          {copied ? (
            <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Copied</>
          ) : (
            <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</>
          )}
        </button>
      </div>

      {/* Code with line numbers */}
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {/* Line numbers */}
        <div style={{
          padding: '1.25rem 0', minWidth: 44, textAlign: 'right',
          userSelect: 'none', borderRight: '1px solid var(--color-border)',
          background: 'var(--color-bg-secondary)',
        }}>
          {lines.map((_, i) => (
            <div key={i} style={{
              fontSize: '13px', lineHeight: '1.7', paddingRight: 12,
              fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)',
            }}>{i + 1}</div>
          ))}
        </div>
        {/* Code */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <SyntaxHighlighter
            language={language}
            style={customTheme}
            customStyle={{
              margin: 0, padding: '1.25rem', background: 'var(--color-bg-secondary)',
              fontSize: '13px', lineHeight: '1.7', whiteSpace: 'pre', overflowX: 'auto',
            }}
            codeTagProps={{ style: { fontFamily: 'var(--font-mono)' } }}
            wrapLines={false}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
