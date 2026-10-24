'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  X, 
  RefreshCw, 
  ShieldCheck, 
  User, 
  Mail, 
  Layers, 
  Cpu
} from 'lucide-react';
import { Post, Profile } from '@/data/portfolioContent';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface AiChatPanelProps {
  profile: Profile;
  posts: Post[];
  activePost: Post | null;
  isOpen: boolean;
  onClose: () => void;
  externalPrompt?: string | null;
  onResetExternalPrompt?: () => void;
}

export const AiChatPanel: React.FC<AiChatPanelProps> = ({
  profile,
  posts,
  activePost,
  isOpen,
  onClose,
  externalPrompt,
  onResetExternalPrompt
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Hallo! Ik ben de **AI Portfolio Agent** van ${profile.name}. Stel mij gerust vragen over zijn Howest-opleiding, CVO-projecten (1-4), curriculum vitae of specifieke blogartikelen!`,
      timestamp: 'Zojuist'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Handle external prompts when user clicks "Ask AI about this document"
  useEffect(() => {
    if (externalPrompt) {
      sendMessage(externalPrompt);
      if (onResetExternalPrompt) onResetExternalPrompt();
    }
  }, [externalPrompt]);

  const sendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputMessage('');
    setIsLoading(true);

    try {
      // Build history payload for Gemini
      const historyPayload = messages.slice(-6).map((m) => ({
        role: m.role,
        parts: m.content
      }));

      // Send to Combell / Apache PHP endpoint
      let assistantReply = '';
      try {
        const res = await fetch('/api/chat.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: text.trim(),
            history: historyPayload,
            activePostId: activePost?.id
          })
        });

        if (res.ok) {
          const data = await res.json();
          assistantReply = data.reply || (data.error ? `Foutmelding: ${data.error}` : '');
        }
      } catch (networkErr) {
        // Fallback for local Vite dev server without active PHP runtime
        console.warn('Backend /api/chat.php unreachable or in local dev mode:', networkErr);
      }

      // If backend returned nothing or network failed, use graceful deterministic response
      if (!assistantReply) {
        assistantReply = 'API-sleutel niet geconfigureerd of quotum bereikt. Bekijk de artikelen in het middenpaneel.';
      }

      const assistantMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: assistantReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-err-${Date.now()}`,
          role: 'assistant',
          content: 'API-sleutel niet geconfigureerd of quotum bereikt. Bekijk de artikelen in het middenpaneel.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: `Chat gereset. Waarover kan ik je informatie geven over ${profile.name}?`,
        timestamp: 'Zojuist'
      }
    ]);
  };

  // Dynamic label & question for current active post's stack
  const activePostTitle = activePost?.title || 'dit project';
  const dynamicStackPrompt = activePost 
    ? `Welke stack, technologieën en tools werden gebruikt in "${activePost.title}"?`
    : `Welke stack werd gebruikt in dit project?`;

  const preMadeActions = [
    {
      label: '✦ Samenvatting profiel',
      prompt: `Geef een beknopte samenvatting van het profiel, competenties en ambities van ${profile.name}.`,
      icon: Sparkles
    },
    {
      label: `✦ Welke stack werd gebruikt in ${activePost ? `"${activePost.slug}"` : 'dit project'}?`,
      prompt: dynamicStackPrompt,
      icon: Cpu
    },
    {
      label: '✦ Contactgegevens',
      prompt: `Wat zijn de officiële contactgegevens, e-mail en links van ${profile.name}?`,
      icon: Mail
    }
  ];

  if (!isOpen) return null;

  return (
    <aside className="w-full h-full bg-[#161b22] border-l border-[#30363d] flex flex-col z-20 shadow-2xl">
      {/* AI Panel Header */}
      <div className="h-10 px-3.5 border-b border-[#30363d] flex items-center justify-between bg-[#161b22] text-xs font-semibold text-[#e6edf3]">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Bot className="w-4 h-4 text-[#10b981]" />
            <span className="w-2 h-2 rounded-full bg-[#10b981] absolute -top-0.5 -right-0.5 animate-pulse" />
          </div>
          <span>Gemini Portfolio Agent</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30">
            Flash 1.5
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={resetChat}
            title="Chatgeschiedenis wissen"
            className="p-1 rounded hover:bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3] transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            title="Sluit AI paneel"
            className="p-1 rounded hover:bg-[#21262d] text-[#8b949e] hover:text-[#e6edf3] transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Guardrail Context Tag */}
      <div className="px-3 py-1.5 bg-[#0d1117] border-b border-[#30363d] flex items-center justify-between text-[11px] text-[#8b949e]">
        <span className="flex items-center gap-1 text-[#10b981]">
          <ShieldCheck className="w-3 h-3" />
          Strikte Portfolio Guardrails
        </span>
        {activePost && (
          <span className="truncate max-w-[140px] text-[10px] text-[#58a6ff]">
            Context: {activePost.slug}
          </span>
        )}
      </div>

      {/* Chat Messages Stream / Log */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 text-xs">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.role === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1 text-[10px] text-[#8b949e]">
              {msg.role === 'user' ? (
                <>
                  <span>Jij</span>
                  <User className="w-3 h-3 text-[#58a6ff]" />
                </>
              ) : (
                <>
                  <Bot className="w-3 h-3 text-[#10b981]" />
                  <span>Portfolio AI</span>
                </>
              )}
              <span>• {msg.timestamp}</span>
            </div>

            <div
              className={`p-3 rounded-lg leading-relaxed max-w-[92%] whitespace-pre-wrap transition-all shadow-sm ${
                msg.role === 'user'
                  ? 'bg-[#1f6feb] text-white rounded-br-none'
                  : 'bg-[#21262d] text-[#e6edf3] border border-[#30363d] rounded-bl-none'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-[#21262d] border border-[#30363d] text-[#8b949e] w-fit">
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#10b981]" />
            <span className="text-xs">Gemini Flash analyseert context...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Pre-made Quick Action Buttons */}
      <div className="p-2 border-t border-[#30363d] bg-[#0d1117]/80 space-y-1.5">
        <div className="text-[10px] text-[#8b949e] font-semibold uppercase tracking-wider flex items-center justify-between px-0.5">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#10b981]" />
            Snelle Acties
          </span>
          <span className="text-[9px] text-[#58a6ff]">1-klik prompts</span>
        </div>

        <div className="flex flex-col gap-1">
          {preMadeActions.map((action, idx) => (
            <button
              key={idx}
              onClick={() => sendMessage(action.prompt)}
              disabled={isLoading}
              className="text-left text-[11px] text-[#c9d1d9] hover:text-[#10b981] bg-[#161b22] hover:bg-[#21262d] px-2.5 py-1.5 rounded-md transition-all border border-[#30363d]/80 hover:border-[#10b981]/50 flex items-center justify-between group disabled:opacity-50"
            >
              <span className="truncate pr-1 group-hover:translate-x-0.5 transition-transform">
                {action.label}
              </span>
              <span className="text-[10px] text-[#8b949e] group-hover:text-[#10b981] font-mono">
                ↵
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Input Message Area */}
      <div className="p-2.5 border-t border-[#30363d] bg-[#161b22]">
        <div className="relative flex items-center">
          <textarea
            rows={2}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Stel een vraag over projecten, CV of blog..."
            className="w-full bg-[#0d1117] border border-[#30363d] rounded-md p-2 pr-9 text-xs text-[#e6edf3] placeholder-[#8b949e] focus:outline-none focus:border-[#10b981] resize-none transition-colors"
          />
          <button
            onClick={() => sendMessage()}
            disabled={!inputMessage.trim() || isLoading}
            className="absolute right-2 p-1.5 rounded-md bg-[#10b981] text-[#0d1117] hover:bg-[#10b981]/90 disabled:opacity-40 disabled:hover:bg-[#10b981] transition-all font-semibold"
            title="Verstuur"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="mt-1 flex items-center justify-between text-[10px] text-[#8b949e]">
          <span>Druk op Enter om te verzenden</span>
          <span>Shift + Enter voor nieuwe regel</span>
        </div>
      </div>
    </aside>
  );
};
