import React from 'react';
import { Clock, BarChart2, Download } from 'lucide-react';
import { TimeFilter } from '../types/dashboard';

interface HeaderRowProps {
  filter: TimeFilter;
  setFilter: (filter: TimeFilter) => void;
  onOpenAnalytics: () => void;
  onExport: () => void;
  liveCount: number;
}

export const HeaderRow: React.FC<HeaderRowProps> = ({
  filter,
  setFilter,
  onOpenAnalytics,
  onExport,
  liveCount,
}) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-2">
      {/* Top Title & Live visitor badge */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl sm:text-[34px] font-bold text-white tracking-tight leading-none">
          Dashboard
        </h1>

        <div className="flex items-center gap-2">
          {/* Live Visitor Pill */}
          <div className="flex items-center gap-2 bg-white text-zinc-950 font-semibold text-xs px-3.5 py-1.5 rounded-full shadow-sm select-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-bold tabular-nums">
              {liveCount.toLocaleString()}
            </span>
            <span className="text-zinc-700 font-medium">live now</span>
          </div>
        </div>
      </div>

      {/* Filter and Action bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        {/* Left Segmented Control: Overview / Online / In store */}
        <div className="flex items-center bg-[#1c1c1c] border border-zinc-800/90 rounded-full p-1 shadow-inner">
          <button
            onClick={() => setFilter('overview')}
            className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-150 cursor-pointer ${
              filter === 'overview'
                ? 'bg-[#2b2b2b] text-white shadow-sm font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setFilter('online')}
            className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-150 cursor-pointer ${
              filter === 'online'
                ? 'bg-[#2b2b2b] text-white shadow-sm font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Online
          </button>
          <button
            onClick={() => setFilter('in-store')}
            className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-150 cursor-pointer ${
              filter === 'in-store'
                ? 'bg-[#2b2b2b] text-white shadow-sm font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            In store
          </button>
        </div>

        {/* Center Date Indicator */}
        <div className="hidden md:flex items-center gap-1.5 text-zinc-400 text-xs font-medium">
          <Clock className="w-3.5 h-3.5 text-zinc-400" />
          <span>November 2026, month to date</span>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenAnalytics}
            className="flex items-center gap-1.5 bg-[#1c1c1c] hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-150 shadow-sm cursor-pointer"
          >
            <BarChart2 className="w-3.5 h-3.5 text-zinc-300" />
            <span>Full analytics</span>
          </button>

          <button
            onClick={onExport}
            className="flex items-center gap-1.5 bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-150 shadow-sm cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-zinc-950" />
            <span>Export</span>
          </button>
        </div>
      </div>
    </div>
  );
};
