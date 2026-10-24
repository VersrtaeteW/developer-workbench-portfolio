'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Eye, Check, Copy, ExternalLink, X } from 'lucide-react';

/**
 * Obfuscated email generator to prevent web scrapers and spambots
 * from harvesting the raw string from static HTML or raw bundles.
 */
export const getObfuscatedEmail = (): string => {
  const userParts = ['wout', 'verstraete', '0608'];
  const domainParts = ['gmail', 'com'];
  return `${userParts.join('')}@${domainParts.join('.')}`;
};

/**
 * Inline Protected Email component for Markdown documents (e.g. CV / Biografie)
 */
export const ProtectedEmailInline: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleReveal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsRevealed(true);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const email = getObfuscatedEmail();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isRevealed) {
    return (
      <span className="inline-flex items-center gap-1.5 align-middle my-0.5">
        <button
          type="button"
          onClick={handleReveal}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] hover:text-[#f0f6fc] border border-[#30363d] hover:border-[#10b981]/50 text-xs font-medium transition-all group shadow-sm cursor-pointer"
          title="Klik om e-mailadres te tonen"
        >
          <Eye className="w-3.5 h-3.5 text-[#10b981] group-hover:scale-110 transition-transform flex-shrink-0" />
          <span className="font-medium text-[#e6edf3]">Toon e-mailadres</span>
        </button>
      </span>
    );
  }

  const email = getObfuscatedEmail();

  return (
    <span className="inline-flex items-center gap-2 flex-wrap align-middle my-0.5 animate-fadeIn">
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-1.5 font-mono text-xs text-[#58a6ff] hover:text-[#79c0ff] bg-[#161b22] px-2.5 py-1 rounded border border-[#30363d] hover:border-[#58a6ff]/50 transition-colors"
        title="Klik om e-mailprogramma te openen"
      >
        <Mail className="w-3.5 h-3.5 text-[#10b981]" />
        <span>{email}</span>
      </a>

      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#21262d] hover:bg-[#30363d] text-[#8b949e] hover:text-[#e6edf3] text-xs transition-colors border border-[#30363d]"
        title="Kopieer e-mailadres naar klembord"
      >
        {copied ? (
          <>
            <Check className="w-3 h-3 text-[#10b981]" />
            <span className="text-[#10b981] text-[11px] font-medium">Gekopieerd!</span>
          </>
        ) : (
          <>
            <Copy className="w-3 h-3" />
            <span className="text-[11px]">Kopieer</span>
          </>
        )}
      </button>
    </span>
  );
};

/**
 * Header Dropdown / Popover button for WindowHeader
 */
export const ProtectedEmailHeaderButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const email = getObfuscatedEmail();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className={`flex items-center justify-center p-1.5 sm:px-2.5 sm:py-1 rounded text-xs font-medium border transition-colors ${
          isOpen
            ? 'bg-[#30363d] text-white border-[#58a6ff]'
            : 'bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] hover:text-white border-[#30363d]'
        }`}
        title="Contact via e-mail"
      >
        <Mail className="w-3.5 h-3.5 text-[#10b981]" />
        <span className="hidden sm:inline ml-1.5">E-mail</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-[#161b22] border border-[#30363d] rounded-lg shadow-2xl p-3 z-50 text-xs text-[#e6edf3]">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#30363d]">
            <div className="flex items-center gap-1.5 font-semibold text-[#f0f6fc]">
              <Mail className="w-4 h-4 text-[#10b981]" />
              <span>Contact via E-mail</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#8b949e] hover:text-[#e6edf3] p-0.5 rounded hover:bg-[#21262d]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] text-[#8b949e] mb-2.5 leading-relaxed">
            Stuur een direct bericht of kopieer het e-mailadres naar je klembord.
          </p>

          <div className="p-2 bg-[#0d1117] rounded border border-[#30363d] font-mono text-[11px] text-[#58a6ff] mb-2.5 flex items-center justify-between select-all">
            <span className="truncate">{getObfuscatedEmail()}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded bg-[#21262d] hover:bg-[#30363d] text-[#e6edf3] font-medium border border-[#30363d] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10b981]" />
                  <span className="text-[#10b981]">Gekopieerd!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#8b949e]" />
                  <span>Kopieer</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${getObfuscatedEmail()}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded bg-[#10b981] hover:bg-[#059669] text-[#0d1117] font-semibold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Stuur e-mail</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
