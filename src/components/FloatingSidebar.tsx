import React from 'react';
import {
  Search,
  FileText,
  Settings,
  HelpCircle,
  Sparkles,
  Sun,
} from 'lucide-react';

interface FloatingSidebarProps {
  onOpenSearch: () => void;
  onOpenTasks: () => void;
  onOpenSettings: () => void;
  onOpenHelp: () => void;
  onOpenInsights: () => void;
  onToggleTheme: () => void;
}

export const FloatingSidebar: React.FC<FloatingSidebarProps> = ({
  onOpenSearch,
  onOpenTasks,
  onOpenSettings,
  onOpenHelp,
  onOpenInsights,
  onToggleTheme,
}) => {
  return (
    <aside
      aria-label="Sidebar Navigation"
      className="fixed left-3.5 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center bg-[#181818]/95 backdrop-blur-md border border-zinc-800/90 rounded-2xl py-3 px-1.5 shadow-2xl gap-5"
    >
      {/* 1. Search */}
      <button
        onClick={onOpenSearch}
        aria-label="Quick search"
        title="Search (⌘K)"
        className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/70 transition-colors cursor-pointer"
      >
        <Search className="w-4 h-4" />
      </button>

      {/* 2. Tasks / Documents with Badge 11 */}
      <button
        onClick={onOpenTasks}
        aria-label="Pending orders & tasks"
        title="11 pending items"
        className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/70 transition-colors cursor-pointer relative"
      >
        <FileText className="w-4 h-4" />
        <span className="absolute -top-1 -right-1 bg-zinc-700 border border-zinc-600 text-zinc-200 text-[9px] font-bold px-1 rounded-full leading-tight">
          11
        </span>
      </button>

      {/* 3. Settings */}
      <button
        onClick={onOpenSettings}
        aria-label="Settings"
        title="Store Settings"
        className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/70 transition-colors cursor-pointer"
      >
        <Settings className="w-4 h-4" />
      </button>

      {/* 4. Help */}
      <button
        onClick={onOpenHelp}
        aria-label="Help & Documentation"
        title="Help & Guides"
        className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/70 transition-colors cursor-pointer"
      >
        <HelpCircle className="w-4 h-4" />
      </button>

      {/* 5. Sparkles / AI Insights */}
      <button
        onClick={onOpenInsights}
        aria-label="Store Insights"
        title="Automated Insights"
        className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/70 transition-colors cursor-pointer"
      >
        <Sparkles className="w-4 h-4" />
      </button>

      {/* 6. Sun / Theme */}
      <button
        onClick={onToggleTheme}
        aria-label="Toggle Brightness"
        title="Theme & Display"
        className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/70 transition-colors cursor-pointer"
      >
        <Sun className="w-4 h-4" />
      </button>
    </aside>
  );
};
