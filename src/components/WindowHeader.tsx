'use client';

import React from 'react';
import { 
  Download, 
  ChevronRight,
  Code
} from 'lucide-react';
import { Profile, Post } from '@/data/portfolioContent';

interface WindowHeaderProps {
  profile: Profile;
  activePost: Post | null;
}

export const WindowHeader: React.FC<WindowHeaderProps> = ({
  profile,
  activePost
}) => {
  return (
    <header className="h-10 bg-[#161b22] border-b border-[#30363d] flex items-center justify-between px-2 sm:px-3.5 select-none z-30 flex-shrink-0 gap-2">
      {/* Left: Window Control Dots & Brand */}
      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50 cursor-pointer hover:opacity-80 transition-opacity" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50 cursor-pointer hover:opacity-80 transition-opacity" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50 cursor-pointer hover:opacity-80 transition-opacity" />
        </div>

        {/* Developer Badge */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#8b949e]">
          <Code className="w-3.5 h-3.5 text-[#10b981]" />
          <span className="font-semibold text-[#e6edf3]">{profile.name}</span>
          <span className="text-[#8b949e] hidden md:inline">• Workbench</span>
        </div>
      </div>

      {/* Center: Dynamic VS Code Breadcrumb (Hidden on very small screens to avoid overflow) */}
      <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#8b949e] font-mono min-w-0 truncate">
        <span className="hover:text-[#e6edf3] cursor-pointer">portfolio</span>
        <ChevronRight className="w-3 h-3 text-[#30363d]" />
        <span className="hover:text-[#e6edf3] cursor-pointer hidden md:inline">posts</span>
        {activePost && (
          <>
            <ChevronRight className="w-3 h-3 text-[#30363d] hidden md:inline" />
            <span className="text-[#10b981] font-medium truncate">
              {activePost.slug}.md
            </span>
          </>
        )}
      </div>

      {/* Right: Direct Social & CV Links */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 ml-auto sm:ml-0">
        {/* GitHub SVG */}
        <a
          href={profile.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-1.5 sm:px-2.5 sm:py-1 rounded bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] hover:text-white transition-colors text-xs font-medium border border-[#30363d]"
          title="Bekijk GitHub Profiel"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span className="hidden sm:inline ml-1.5">GitHub</span>
        </a>

        {/* LinkedIn SVG */}
        <a
          href={profile.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-1.5 sm:px-2.5 sm:py-1 rounded bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] hover:text-white transition-colors text-xs font-medium border border-[#30363d]"
          title="Bekijk LinkedIn Profiel"
        >
          <svg className="w-3.5 h-3.5 fill-[#0a66c2]" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
          <span className="hidden sm:inline ml-1.5">LinkedIn</span>
        </a>

        {/* CV Download button */}
        <a
          href={profile.contact.cvFile}
          download="CV-Wout-Verstraete.pdf"
          className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1 rounded bg-[#10b981] hover:bg-[#059669] text-[#0d1117] transition-all text-xs font-semibold shadow-sm"
          title="Download Curriculum Vitae (PDF)"
        >
          <Download className="w-3.5 h-3.5" />
          <span><span className="hidden sm:inline">Download </span>CV</span>
        </a>
      </div>
    </header>
  );
};
