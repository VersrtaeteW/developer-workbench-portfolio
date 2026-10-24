'use client';

import React, { useState } from 'react';
import { 
  Folder, 
  FolderOpen, 
  FileText, 
  ChevronRight, 
  ChevronDown, 
  Tag, 
  Calendar, 
  Search,
  Filter,
  Layers,
  Sparkles
} from 'lucide-react';
import { Post, Profile } from '@/data/portfolioContent';

interface ExplorerSidebarProps {
  posts: Post[];
  profile: Profile;
  activePostId: string;
  onSelectPost: (id: string) => void;
}

export const ExplorerSidebar: React.FC<ExplorerSidebarProps> = ({
  posts,
  profile,
  activePostId,
  onSelectPost
}) => {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({
    "Biografie & CV": true,
    "CVO Projecten (1-4)": true,
    "Vrij & Extracurriculair": true,
    "Quick Skills": false
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const toggleFolder = (category: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const categories: Array<Post['category']> = [
    "Biografie & CV",
    "CVO Projecten (1-4)",
    "Vrij & Extracurriculair"
  ];

  // Collect all unique tags
  const allTags = Array.from(new Set(posts.flatMap(p => p.tags)));

  // Filter posts based on search and active tag filter
  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  return (
    <aside className="w-full h-full bg-[#161b22] border-r border-[#30363d] flex flex-col select-none">
      {/* Explorer Top Banner */}
      <div className="h-10 px-3 border-b border-[#30363d] flex items-center justify-between bg-[#161b22] text-xs font-semibold tracking-wider text-[#8b949e] uppercase">
        <span className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-[#10b981]" />
          Explorer / Index
        </span>
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#21262d] text-[#8b949e]">
          {posts.length} files
        </span>
      </div>

      {/* Search & Tag Filter Box */}
      <div className="p-2 border-b border-[#30363d] space-y-2 bg-[#0d1117]/40">
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#8b949e]" />
          <input
            type="text"
            placeholder="Zoek artikels of tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-8 pr-2 py-1.5 bg-[#0d1117] border border-[#30363d] rounded text-xs text-[#e6edf3] placeholder-[#8b949e] focus:outline-none focus:border-[#10b981] transition-colors"
          />
        </div>

        {/* Tag pills slider */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[11px] no-scrollbar">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-2 py-0.5 rounded-full flex-shrink-0 transition-colors ${
              selectedTag === null 
                ? 'bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/40' 
                : 'text-[#8b949e] hover:bg-[#21262d] border border-transparent'
            }`}
          >
            Alle
          </button>
          {allTags.slice(0, 8).map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-2 py-0.5 rounded-full flex-shrink-0 transition-colors flex items-center gap-1 ${
                selectedTag === tag 
                  ? 'bg-[#06b6d4]/20 text-[#06b6d4] border border-[#06b6d4]/40 font-medium' 
                  : 'text-[#8b949e] hover:bg-[#21262d] border border-transparent'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Tree */}
      <div className="flex-1 overflow-y-auto py-2 text-xs">
        {/* Workspace Root Folder Label */}
        <div className="px-3 py-1 flex items-center gap-1.5 text-[#8b949e] font-semibold text-[11px] tracking-wide uppercase">
          <span>WORKBENCH-WORKSPACE</span>
        </div>

        {categories.map((category) => {
          const categoryPosts = filteredPosts.filter((p) => p.category === category);
          const isOpen = openFolders[category] ?? true;

          return (
            <div key={category} className="mb-1">
              <button
                onClick={() => toggleFolder(category)}
                className="w-full px-3 py-1.5 flex items-center gap-1.5 hover:bg-[#21262d] text-[#c9d1d9] transition-colors group text-left"
              >
                {isOpen ? (
                  <ChevronDown className="w-3.5 h-3.5 text-[#8b949e]" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 text-[#8b949e]" />
                )}
                {isOpen ? (
                  <FolderOpen className="w-4 h-4 text-[#58a6ff] group-hover:text-[#79c0ff]" />
                ) : (
                  <Folder className="w-4 h-4 text-[#58a6ff] group-hover:text-[#79c0ff]" />
                )}
                <span className="font-medium truncate flex-1">{category}</span>
                <span className="text-[10px] text-[#8b949e] bg-[#21262d] px-1.5 py-0.2 rounded">
                  {categoryPosts.length}
                </span>
              </button>

              {isOpen && (
                <div className="ml-3 pl-2 border-l border-[#30363d]/60 space-y-0.5 mt-0.5">
                  {categoryPosts.length === 0 ? (
                    <div className="px-3 py-1 text-[11px] text-[#8b949e] italic">
                      Geen documenten gevonden
                    </div>
                  ) : (
                    categoryPosts.map((post) => {
                      const isActive = post.id === activePostId;

                      return (
                        <div
                          key={post.id}
                          onClick={() => onSelectPost(post.id)}
                          className={`group cursor-pointer px-2.5 py-2 rounded-sm transition-all border-l-2 ${
                            isActive
                              ? 'bg-[#21262d] text-[#ffffff] border-[#10b981] shadow-sm'
                              : 'text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#161b22]/80 border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <FileText className={`w-3.5 h-3.5 flex-shrink-0 ${
                              isActive ? 'text-[#10b981]' : 'text-[#8b949e] group-hover:text-[#e6edf3]'
                            }`} />
                            <span className="font-mono text-xs truncate flex-1 font-medium">
                              {post.slug}.md
                            </span>
                          </div>

                          <div className="ml-5.5 mt-1 flex flex-col gap-1">
                            <span className="text-[11px] text-[#c9d1d9] truncate font-normal">
                              {post.title}
                            </span>
                            <div className="flex items-center gap-2 text-[10px] text-[#8b949e]">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-2.5 h-2.5" />
                                {post.date}
                              </span>
                              <div className="flex items-center gap-1 overflow-hidden">
                                {post.tags.slice(0, 2).map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-1 py-0.2 rounded bg-[#0d1117] text-[#7ee787] text-[9px] border border-[#30363d]/40"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Quick Profile Summary Dropdown in Explorer */}
        <div className="mt-4 pt-2 border-t border-[#30363d]/60 px-3">
          <button
            onClick={() => toggleFolder('Quick Skills')}
            className="w-full py-1 flex items-center justify-between text-[#8b949e] hover:text-[#e6edf3] text-[11px] uppercase tracking-wider font-semibold"
          >
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#f0883e]" />
              Core Competenties
            </span>
            {openFolders['Quick Skills'] ? (
              <ChevronDown className="w-3 h-3" />
            ) : (
              <ChevronRight className="w-3 h-3" />
            )}
          </button>

          {openFolders['Quick Skills'] && (
            <div className="mt-2 space-y-1.5 pl-1 pb-3">
              {profile.coreStrengths.map((strength, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#c9d1d9]">
                  <span className="text-[#10b981] font-bold">›</span>
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
