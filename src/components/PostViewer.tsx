'use client';

import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  Calendar, 
  Clock, 
  Tag, 
  Copy, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Share2, 
  FileCode 
} from 'lucide-react';
import { Post } from '@/data/portfolioContent';

interface PostViewerProps {
  post: Post;
  allPosts: Post[];
  onSelectPost: (id: string) => void;
  onAskAiAboutPost: (post: Post) => void;
}

export const PostViewer: React.FC<PostViewerProps> = ({
  post,
  allPosts,
  onSelectPost,
  onAskAiAboutPost
}) => {
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const [cvPage, setCvPage] = useState<1 | 2>(1);
  const containerRef = useRef<HTMLElement>(null);

  // Reset scroll to top and reset CV page when user switches posts
  useEffect(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    setCvPage(1);
  }, [post.id]);

  // Compute Prev / Next post navigation
  const currentIndex = allPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const handleCopyCode = (codeText: string, blockId: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeId(blockId);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handleShare = () => {
    const url = new URL(window.location.href);
    url.hash = post.slug;
    navigator.clipboard.writeText(url.toString());
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
    <main ref={containerRef} className="flex-1 h-full bg-[#0d1117] overflow-y-auto flex flex-col scroll-smooth">
      {/* Editor Tab Header */}
      <div className="h-9 border-b border-[#30363d] bg-[#161b22] px-2 sm:px-3 flex items-center justify-between flex-shrink-0 gap-2">
        <div className="flex items-center h-full min-w-0">
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3.5 h-full bg-[#0d1117] border-t-2 border-t-[#10b981] border-r border-[#30363d] text-xs font-mono text-[#e6edf3] relative -mb-[1px] min-w-0 truncate">
            <FileCode className="w-3.5 h-3.5 text-[#10b981] flex-shrink-0" />
            <span className="truncate">{post.slug}.md</span>
            <span className="text-[10px] text-[#8b949e] ml-1 flex-shrink-0">●</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <button
            onClick={() => onAskAiAboutPost(post)}
            className="flex items-center gap-1.5 px-2 py-1 sm:px-2.5 rounded bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981]/20 border border-[#10b981]/30 text-xs font-medium transition-all"
            title="Vraag de AI Agent over deze post"
          >
            <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="hidden sm:inline">Vraag AI over dit document</span>
            <span className="sm:hidden">Vraag AI</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1 px-2 py-1 rounded hover:bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3] text-xs transition-colors"
            title="Deel link"
          >
            {linkCopied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#10b981]" />
                <span className="text-[#10b981]">Gekopieerd!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span className="hidden xs:inline sm:inline">Delen</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Article Content Container */}
      <div className="flex-1 p-4 sm:p-6 md:p-10 max-w-4xl mx-auto w-full select-text">
        {/* Document Metadata Header */}
        <header className="pb-5 sm:pb-6 mb-6 sm:mb-8 border-b border-[#30363d] select-text">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-[#1f6feb]/20 text-[#58a6ff] border border-[#1f6feb]/40">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#8b949e]">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-[#8b949e]">•</span>
            <span className="flex items-center gap-1 text-xs text-[#8b949e]">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#f0f6fc] tracking-tight leading-snug mb-3">
            {post.title}
          </h1>

          <p className="text-sm md:text-base text-[#8b949e] leading-relaxed mb-4">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#161b22] text-[#7ee787] text-xs border border-[#30363d] font-mono"
              >
                <Tag className="w-2.5 h-2.5 opacity-70" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Markdown Body with Syntax Highlighting Codeblocks */}
        <article className="prose-workbench select-text">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a({ href, children, ...props }) {
                const isExternal = href?.startsWith('http') || href?.startsWith('//');
                return (
                  <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="text-[#58a6ff] hover:underline"
                    {...props}
                  >
                    {children}
                  </a>
                );
              },
              img({ src, alt, ...props }) {
                const isCv = typeof src === 'string' && src.toLowerCase().includes('cv');
                const activeSrc = isCv
                  ? (cvPage === 1 ? '/images/cv-diploma-preview-p1.png' : '/images/cv-diploma-preview-p2.png')
                  : src;

                return (
                  <figure className="my-6 rounded-lg border border-[#30363d] overflow-hidden bg-[#161b22] shadow-xl">
                    {/* Interactive Tab bar if it's the CV */}
                    {isCv && (
                      <div className="flex items-center justify-between px-3 py-2 bg-[#161b22] border-b border-[#30363d] text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-[#8b949e] font-medium hidden xs:inline">Pagina:</span>
                          <div className="inline-flex rounded-md p-0.5 bg-[#0d1117] border border-[#30363d]">
                            <button
                              type="button"
                              onClick={() => setCvPage(1)}
                              className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                                cvPage === 1
                                  ? 'bg-[#10b981] text-[#0d1117] font-semibold shadow-sm'
                                  : 'text-[#8b949e] hover:text-[#e6edf3]'
                              }`}
                            >
                              Pagina 1
                            </button>
                            <button
                              type="button"
                              onClick={() => setCvPage(2)}
                              className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                                cvPage === 2
                                  ? 'bg-[#10b981] text-[#0d1117] font-semibold shadow-sm'
                                  : 'text-[#8b949e] hover:text-[#e6edf3]'
                              }`}
                            >
                              Pagina 2
                            </button>
                          </div>
                        </div>

                        {/* Arrow navigation shortcut */}
                        <div className="flex items-center gap-1.5 text-[#8b949e]">
                          <button
                            type="button"
                            disabled={cvPage === 1}
                            onClick={() => setCvPage(1)}
                            className="p-1 rounded hover:bg-[#21262d] disabled:opacity-30 disabled:cursor-not-allowed text-[#e6edf3] transition-colors"
                            title="Vorige pagina"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <span className="text-xs font-mono px-1 font-semibold text-[#e6edf3]">
                            {cvPage} / 2
                          </span>
                          <button
                            type="button"
                            disabled={cvPage === 2}
                            onClick={() => setCvPage(2)}
                            className="p-1 rounded hover:bg-[#21262d] disabled:opacity-30 disabled:cursor-not-allowed text-[#e6edf3] transition-colors"
                            title="Volgende pagina"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="bg-[#0d1117] flex items-center justify-center p-1 sm:p-2 min-h-[300px]">
                      <img
                        key={isCv ? `cv-p-${cvPage}` : String(src)}
                        src={activeSrc}
                        alt={isCv ? `Curriculum Vitae Wout Verstraete — Pagina ${cvPage}` : (alt || '')}
                        className="w-full h-auto max-h-[850px] object-contain rounded"
                        loading="lazy"
                        {...props}
                      />
                    </div>
                    {alt && (
                      <figcaption className="px-4 py-2.5 bg-[#161b22] text-xs text-[#8b949e] border-t border-[#30363d] italic flex items-center justify-between flex-wrap gap-2">
                        <span className="flex items-center gap-1.5">
                          <span className="text-[#10b981] font-semibold not-italic">📷</span>
                          <span>
                            {isCv ? `Curriculum Vitae Preview — Pagina ${cvPage} van 2` : alt}
                          </span>
                        </span>
                        {isCv && (
                          <a
                            href="/cv-wout-verstraete.pdf"
                            download="CV-Wout-Verstraete.pdf"
                            className="not-italic inline-flex items-center gap-1 text-[#10b981] hover:text-[#34d399] font-medium transition-colors ml-auto text-xs"
                            title="Download originele CV in PDF formaat"
                          >
                            <span>Download originele PDF (2 pagina's)</span>
                            <span className="font-mono">↓</span>
                          </a>
                        )}
                      </figcaption>
                    )}
                  </figure>
                );
              },
              table({ children, ...props }) {
                return (
                  <div className="prose-table-container">
                    <table {...props}>{children}</table>
                  </div>
                );
              },
              blockquote({ children, ...props }) {
                return (
                  <blockquote 
                    className="my-4 p-3 sm:p-3.5 rounded-lg border border-dashed border-[#10b981]/50 bg-[#161b22] text-xs sm:text-sm text-[#c9d1d9] not-italic shadow-sm border-l-4 border-l-[#10b981]"
                    {...props}
                  >
                    {children}
                  </blockquote>
                );
              },
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                const codeString = String(children).replace(/\n$/, '');
                const isInline = !match && !codeString.includes('\n');

                if (isInline) {
                  return <code {...props}>{children}</code>;
                }

                const lang = match ? match[1] : 'code';
                const blockId = `${post.id}-${lang}-${codeString.length}`;

                return (
                  <div className="my-5 rounded-lg border border-[#30363d] bg-[#161b22] overflow-hidden shadow-lg">
                    <div className="flex items-center justify-between px-3.5 py-1.5 bg-[#0d1117] border-b border-[#30363d] text-xs text-[#8b949e] font-mono">
                      <span className="uppercase tracking-wider text-[#58a6ff] font-semibold text-[11px]">
                        {lang}
                      </span>
                      <button
                        onClick={() => handleCopyCode(codeString, blockId)}
                        className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] transition-colors text-[11px]"
                      >
                        {copiedCodeId === blockId ? (
                          <>
                            <Check className="w-3 h-3 text-[#10b981]" />
                            <span className="text-[#10b981]">Gekopieerd</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Kopieer code</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-3 sm:p-4 text-xs font-mono overflow-x-auto text-[#e6edf3] leading-relaxed">
                      <code>{children}</code>
                    </pre>
                  </div>
                );
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Prev & Next Navigation Footer */}
        <div className="mt-12 pt-6 border-t border-[#30363d] grid grid-cols-1 sm:grid-cols-2 gap-4 pb-12">
          {prevPost ? (
            <button
              onClick={() => onSelectPost(prevPost.id)}
              className="flex flex-col items-start p-4 rounded-lg bg-[#161b22] border border-[#30363d] hover:border-[#10b981] hover:bg-[#21262d] transition-all text-left group"
            >
              <div className="flex items-center gap-1 text-xs text-[#8b949e] group-hover:text-[#10b981] mb-1">
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Vorig Document</span>
              </div>
              <div className="text-sm font-medium text-[#e6edf3] group-hover:text-[#ffffff] line-clamp-1">
                {prevPost.title}
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextPost && (
            <button
              onClick={() => onSelectPost(nextPost.id)}
              className="flex flex-col items-end p-4 rounded-lg bg-[#161b22] border border-[#30363d] hover:border-[#10b981] hover:bg-[#21262d] transition-all text-right group ml-auto w-full"
            >
              <div className="flex items-center gap-1 text-xs text-[#8b949e] group-hover:text-[#10b981] mb-1">
                <span>Volgend Document</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
              <div className="text-sm font-medium text-[#e6edf3] group-hover:text-[#ffffff] line-clamp-1">
                {nextPost.title}
              </div>
            </button>
          )}
        </div>
      </div>
    </main>
  );
};
