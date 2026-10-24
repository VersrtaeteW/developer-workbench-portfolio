'use client';

import React from 'react';
import { 
  GitBranch, 
  Check, 
  Bot, 
  Terminal, 
  Bell, 
  Cpu, 
  Wifi, 
  Code2,
  Columns
} from 'lucide-react';
import { Post } from '@/data/portfolioContent';

interface StatusBarProps {
  activePost: Post | null;
  isAiPanelOpen: boolean;
  onToggleAiPanel: () => void;
  isExplorerOpen: boolean;
  onToggleExplorer: () => void;
  mobileTab?: 'explorer' | 'post' | 'agent';
  onSetMobileTab?: (tab: 'explorer' | 'post' | 'agent') => void;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  activePost,
  isAiPanelOpen,
  onToggleAiPanel,
  isExplorerOpen,
  onToggleExplorer,
  mobileTab,
  onSetMobileTab
}) => {
  return (
    <footer className="h-6 bg-[#161b22] border-t border-[#30363d] flex items-center justify-between px-3 text-[11px] text-[#8b949e] select-none z-30 font-mono">
      {/* Left Status Controls */}
      <div className="flex items-center gap-3">
        {/* Toggle Explorer Icon Button */}
        <button
          onClick={() => {
            if (onSetMobileTab && window.innerWidth < 1024) {
              onSetMobileTab(mobileTab === 'explorer' ? 'post' : 'explorer');
            } else {
              onToggleExplorer();
            }
          }}
          className={`flex items-center gap-1 hover:text-[#e6edf3] transition-colors ${
            (mobileTab ? mobileTab === 'explorer' : isExplorerOpen) ? 'text-[#10b981]' : 'text-[#8b949e]'
          }`}
          title="Toggle Explorer Sidebar"
        >
          <Columns className="w-3 h-3" />
          <span className="hidden sm:inline">Explorer</span>
        </button>

        {/* Git Branch (Clean, fully synced with origin/main) */}
        <div className="flex items-center gap-1 text-[#e6edf3] hover:text-[#58a6ff] cursor-pointer" title="Git branch: main (synced)">
          <GitBranch className="w-3 h-3 text-[#10b981]" />
          <span>main</span>
        </div>

        {/* Sync Status */}
        <div className="flex items-center gap-1 text-[#7ee787]">
          <Check className="w-3 h-3" />
          <span className="hidden sm:inline">0 errors, 0 warnings</span>
        </div>
      </div>

      {/* Middle Status Indicator */}
      <div className="hidden md:flex items-center gap-2 text-[#8b949e]">
        <Wifi className="w-3 h-3 text-[#10b981]" />
        <span>Howest Portfolio v2.0 (Active)</span>
      </div>

      {/* Right Status Controls */}
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline">UTF-8</span>
        <span className="hidden sm:inline">Markdown</span>

        {/* Active Post Line Indicator */}
        {activePost && (
          <span className="text-[#c9d1d9] hidden lg:inline">
            Ln {activePost.content.split('\n').length}, Col 1
          </span>
        )}

        {/* AI Assistant Toggle Button */}
        <button
          onClick={() => {
            if (onSetMobileTab && window.innerWidth < 1024) {
              onSetMobileTab(mobileTab === 'agent' ? 'post' : 'agent');
            } else {
              onToggleAiPanel();
            }
          }}
          className={`flex items-center gap-1.5 px-2 py-0.5 rounded transition-all cursor-pointer ${
            (mobileTab === 'agent' || (isAiPanelOpen && window.innerWidth >= 1024))
              ? 'bg-[#10b981] text-[#0d1117] font-semibold shadow-sm' 
              : 'hover:bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3]'
          }`}
          title="Toggle Gemini AI Portfolio Assistant"
        >
          <Bot className="w-3 h-3" />
          <span>AI Agent</span>
          {(mobileTab === 'agent' || (isAiPanelOpen && window.innerWidth >= 1024)) ? (
            <span className="w-1.5 h-1.5 rounded-full bg-[#0d1117]" />
          ) : (
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
          )}
        </button>

        <Bell className="w-3 h-3 hover:text-[#e6edf3] cursor-pointer" />
      </div>
    </footer>
  );
};
