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

  return (
    <div className="my-6 rounded-xl overflow-hidden" style={{ border: '1px solid var(--color-border-bronze)' }}>
      {filename && (
        <div className="flex items-center justify-between px-4 py-2.5" style={{ backgroundColor: 'var(--color-bg-sidebar)', borderBottom: '1px solid var(--color-border-bronze)' }}>
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <span className="text-xs font-mono ml-2" style={{ color: 'var(--color-text-muted)' }}>{filename}</span>
          </div>
          <button
            onClick={handleCopy}
            className="text-xs px-3 py-1 rounded-md transition-all cursor-pointer"
            style={{
              color: copied ? 'var(--color-success)' : 'var(--color-text-muted)',
              backgroundColor: copied ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
            }}
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1.25rem',
          backgroundColor: 'var(--color-bg-code)',
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
