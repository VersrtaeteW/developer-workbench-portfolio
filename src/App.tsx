import React, { useState, useEffect } from 'react';
import { portfolioProfile, portfolioPosts, Post } from './data/portfolioContent';
import { WindowHeader } from './components/WindowHeader';
import { ExplorerSidebar } from './components/ExplorerSidebar';
import { PostViewer } from './components/PostViewer';
import { AiChatPanel } from './components/AiChatPanel';
import { StatusBar } from './components/StatusBar';
import { FolderTree, FileText, Bot } from 'lucide-react';

type MobileTab = 'explorer' | 'post' | 'agent';

export default function App() {
  const [activePostId, setActivePostId] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const rawHash = window.location.hash.replace(/^#/, '');
      const match = portfolioPosts.find((p) => p.slug === rawHash || p.id === rawHash);
      if (match) return match.id;
    }
    return portfolioPosts[0]?.id || '';
  });
  const [isAiPanelOpen, setIsAiPanelOpen] = useState<boolean>(true);
  const [isExplorerOpen, setIsExplorerOpen] = useState<boolean>(true);
  const [aiExternalPrompt, setAiExternalPrompt] = useState<string | null>(null);
  
  // Mobile/Tablet tab switch state (only active when viewport is < 1024px)
  const [mobileTab, setMobileTab] = useState<MobileTab>('post');

  const activePost = portfolioPosts.find((p) => p.id === activePostId) || portfolioPosts[0];

  // Sync hash in URL when active post changes
  useEffect(() => {
    if (activePost && typeof window !== 'undefined') {
      if (window.location.hash !== `#${activePost.slug}`) {
        window.history.replaceState(null, '', `#${activePost.slug}`);
      }
    }
  }, [activePost]);

  // Listen to browser forward/back or external hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace(/^#/, '');
      const match = portfolioPosts.find((p) => p.slug === rawHash || p.id === rawHash);
      if (match) {
        setActivePostId(match.id);
        setMobileTab('post');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectPost = (id: string) => {
    setActivePostId(id);
    setMobileTab('post');
  };

  const handleAskAiAboutPost = (post: Post) => {
    setIsAiPanelOpen(true);
    setMobileTab('agent');
    setAiExternalPrompt(`Kun je een korte samenvatting en de belangrijkste leerpunten geven van het artikel "${post.title}"?`);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-[#0d1117] text-[#e6edf3] overflow-hidden select-none font-sans">
      {/* 1. VS Code Window Top Header */}
      <WindowHeader 
        profile={portfolioProfile} 
        activePost={activePost} 
        onSelectPost={handleSelectPost} 
      />

      {/* 2. Mobile / Tablet (<1024px) Tab Selector Bar */}
      <div className="lg:hidden flex items-center bg-[#161b22] border-b border-[#30363d] px-2 py-1.5 gap-1 select-none flex-shrink-0">
        <button
          onClick={() => {
            setIsExplorerOpen(true);
            setMobileTab('explorer');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded text-xs font-medium transition-all ${
            mobileTab === 'explorer'
              ? 'bg-[#21262d] text-[#10b981] border border-[#10b981]/40 shadow-sm'
              : 'text-[#8b949e] hover:text-[#e6edf3]'
          }`}
        >
          <FolderTree className="w-3.5 h-3.5" />
          <span>Explorer</span>
        </button>

        <button
          onClick={() => setMobileTab('post')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded text-xs font-medium transition-all ${
            mobileTab === 'post'
              ? 'bg-[#21262d] text-[#10b981] border border-[#10b981]/40 shadow-sm'
              : 'text-[#8b949e] hover:text-[#e6edf3]'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Post Viewer</span>
        </button>

        <button
          onClick={() => {
            setIsAiPanelOpen(true);
            setMobileTab('agent');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded text-xs font-medium transition-all ${
            mobileTab === 'agent'
              ? 'bg-[#21262d] text-[#10b981] border border-[#10b981]/40 shadow-sm'
              : 'text-[#8b949e] hover:text-[#e6edf3]'
          }`}
        >
          <Bot className="w-3.5 h-3.5" />
          <span>AI Agent</span>
        </button>
      </div>

      {/* 3. Main 3-Panel Split Workspace */}
      <div className="flex flex-1 overflow-hidden relative w-full h-full">
        {/* Left Panel: Explorer / File Tree */}
        {isExplorerOpen && (
          <div
            className={`h-full flex-shrink-0 ${
              mobileTab === 'explorer' ? 'w-full' : 'hidden'
            } lg:block lg:w-80`}
          >
            <ExplorerSidebar
              posts={portfolioPosts}
              profile={portfolioProfile}
              activePostId={activePostId}
              onSelectPost={handleSelectPost}
            />
          </div>
        )}

        {/* Center Panel: Active Post Markdown Viewer */}
        <div
          className={`h-full min-w-0 flex-1 overflow-hidden ${
            mobileTab === 'post' ? 'w-full flex flex-col' : 'hidden'
          } lg:flex lg:flex-col lg:flex-1`}
        >
          <PostViewer
            post={activePost}
            allPosts={portfolioPosts}
            onSelectPost={handleSelectPost}
            onAskAiAboutPost={handleAskAiAboutPost}
          />
        </div>

        {/* Right Panel: Interactive Gemini AI Portfolio Agent */}
        {isAiPanelOpen && (
          <div
            className={`h-full flex-shrink-0 ${
              mobileTab === 'agent' ? 'w-full' : 'hidden'
            } lg:block lg:w-96`}
          >
            <AiChatPanel
              profile={portfolioProfile}
              posts={portfolioPosts}
              activePost={activePost}
              isOpen={isAiPanelOpen}
              onClose={() => setIsAiPanelOpen(false)}
              externalPrompt={aiExternalPrompt}
              onResetExternalPrompt={() => setAiExternalPrompt(null)}
            />
          </div>
        )}
      </div>

      {/* 4. VS Code Bottom Status Bar */}
      <StatusBar
        activePost={activePost}
        isAiPanelOpen={isAiPanelOpen}
        onToggleAiPanel={() => setIsAiPanelOpen((prev) => !prev)}
        isExplorerOpen={isExplorerOpen}
        onToggleExplorer={() => setIsExplorerOpen((prev) => !prev)}
        mobileTab={mobileTab}
        onSetMobileTab={(tab) => {
          setMobileTab(tab);
          if (tab === 'agent') setIsAiPanelOpen(true);
          if (tab === 'explorer') setIsExplorerOpen(true);
        }}
      />
    </div>
  );
}
