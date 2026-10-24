'use client';

import React, { useState } from 'react';
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
  FileCode,
  CheckCircle2
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
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
    <main className="flex-1 h-full bg-[#0d1117] overflow-y-auto flex flex-col">
      {/* Editor Tab Header */}
      <div className="h-10 border-b border-[#30363d] bg-[#161b22] px-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#0d1117] border-t-2 border-t-[#10b981] border-x border-[#30363d] text-xs font-mono text-[#e6edf3] rounded-t-sm">
            <FileCode className="w-3.5 h-3.5 text-[#10b981]" />
            <span>{post.slug}.md</span>
            <span className="text-[10px] text-[#8b949e] ml-1">●</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onAskAiAboutPost(post)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981]/20 border border-[#10b981]/30 text-xs font-medium transition-all"
            title="Vraag de AI Agent over deze post"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Vraag AI over dit document</span>
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
                <span>Delen</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Article Content Container */}
      <div className="flex-1 p-6 md:p-10 max-w-4xl mx-auto w-full">
        {/* Document Metadata Header */}
        <header className="pb-6 mb-8 border-b border-[#30363d]">
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

          <h1 className="text-2xl md:text-3xl font-extrabold text-[#f0f6fc] tracking-tight leading-snug mb-3">
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
        <article className="prose-workbench">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                const codeString = String(children).replace(/\n$/, '');
                const isInline = !match && !codeString.includes('\n');

                if (isInline) {
                  return <code {...props}>{children}</code>;
                }

                const lang = match ? match[1] : 'code';
                const blockId = `${post.id}-${Math.random().toString(36).substring(2, 7)}`;

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
                    <pre className="p-4 text-xs font-mono overflow-x-auto text-[#e6edf3] leading-relaxed">
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
