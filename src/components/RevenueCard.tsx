import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { YearFilter } from '../types/dashboard';
import { monthlyRevenue2026, monthlyRevenue2025 } from '../data/mockData';

interface RevenueCardProps {
  onOpenAnalytics: () => void;
}

export const RevenueCard: React.FC<RevenueCardProps> = ({ onOpenAnalytics }) => {
  const [year, setYear] = useState<YearFilter>('2026');
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(0); // 0 = Jan

  const data = year === '2026' ? monthlyRevenue2026 : monthlyRevenue2025;
  const totalYearRevenue = year === '2026' ? '$342,300' : '$296,800';
  const avgRevenueLabel = year === '2026' ? 'avg $31.1k' : 'avg $24.7k';
  const avgValue = year === '2026' ? 31100 : 24700;

  const maxChartValue = 60000;
  const selectedData = data[selectedMonthIndex];

  return (
    <div className="bg-[#181818] border border-zinc-800/80 rounded-[22px] p-6 flex flex-col justify-between shadow-sm min-h-[360px] relative">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-white text-sm font-semibold">
            <span>Revenue</span>
            <Info className="w-3.5 h-3.5 text-zinc-500 hover:text-zinc-300 cursor-help" />
          </div>
          <span className="text-zinc-400 text-xs font-normal">
            {totalYearRevenue} so far this year
          </span>
        </div>

        {/* Year Toggle */}
        <div className="flex items-center bg-[#202020] border border-zinc-800 p-0.5 rounded-full text-xs">
          <button
            onClick={() => setYear('2025')}
            className={`px-2.5 py-0.5 rounded-full transition-colors cursor-pointer ${
              year === '2025'
                ? 'bg-[#2e2e2e] text-white font-medium shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            2025
          </button>
          <button
            onClick={() => setYear('2026')}
            className={`px-2.5 py-0.5 rounded-full transition-colors cursor-pointer ${
              year === '2026'
                ? 'bg-[#2e2e2e] text-white font-medium shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            2026
          </button>
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="mt-6 relative h-[215px] flex flex-col justify-between">
        {/* Y-Axis Grid Lines & Labels */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between z-0">
          {/* 60k line */}
          <div className="w-full flex items-center gap-2">
            <span className="text-[11px] text-zinc-500 w-8 tabular-nums">$60k</span>
            <div className="flex-1 border-t border-dashed border-zinc-800/70" />
          </div>

          {/* Average Line */}
          <div
            className="w-full flex items-center gap-2 absolute"
            style={{
              bottom: `${(avgValue / maxChartValue) * 165 + 24}px`,
              left: 0,
              right: 0,
            }}
          >
            <span className="text-[11px] opacity-0 w-8">$31k</span>
            <div className="flex-1 border-t border-dashed border-zinc-700/80" />
            <div className="bg-[#222222] border border-zinc-700/80 text-zinc-300 text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm">
              {avgRevenueLabel}
            </div>
          </div>

          {/* 15k line */}
          <div
            className="w-full flex items-center gap-2 absolute"
            style={{
              bottom: `${(15000 / maxChartValue) * 165 + 24}px`,
              left: 0,
              right: 0,
            }}
          >
            <span className="text-[11px] text-zinc-500 w-8 tabular-nums">$15k</span>
            <div className="flex-1 border-t border-dashed border-zinc-800/60" />
          </div>

          {/* $0 line */}
          <div className="w-full flex items-center gap-2 pb-6">
            <span className="text-[11px] text-zinc-500 w-8 tabular-nums">$0</span>
            <div className="flex-1 border-t border-zinc-800" />
          </div>
        </div>

        {/* 12 Bars Container */}
        <div className="relative z-10 pl-9 pr-3 h-[180px] flex items-end justify-between gap-1 sm:gap-2">
          {data.map((item, idx) => {
            const isSelected = selectedMonthIndex === idx;
            const barHeightPx = Math.max(
              28,
              Math.round((item.revenue / maxChartValue) * 155)
            );

            return (
              <div
                key={item.shortMonth}
                onClick={() => setSelectedMonthIndex(idx)}
                className="flex-1 flex flex-col items-center justify-end h-full relative cursor-pointer group"
              >
                {/* Interactive Tooltip over Selected Bar */}
                {isSelected && (
                  <div className="absolute -top-16 z-30 left-1/2 -translate-x-1/2 pointer-events-none">
                    <div className="bg-white text-zinc-950 rounded-xl p-2.5 shadow-2xl text-[11px] w-36 border border-zinc-200 animate-in fade-in zoom-in-95 duration-150">
                      <div className="font-bold text-zinc-900 mb-1">
                        {item.shortMonth} {year}
                      </div>
                      <div className="flex items-center justify-between text-zinc-700 font-medium">
                        <span>Revenue</span>
                        <span className="font-bold tabular-nums text-zinc-950">
                          ${item.revenue.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-600 mt-0.5">
                        <span>Orders</span>
                        <span className="font-medium tabular-nums">{item.orders}</span>
                      </div>
                      <div className="flex items-center justify-between text-emerald-700 font-semibold mt-0.5">
                        <span>vs last year</span>
                        <span>{item.growth}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* The Bar Cylinder */}
                <div
                  style={{ height: `${barHeightPx}px` }}
                  className={`w-full max-w-[28px] sm:max-w-[34px] rounded-full transition-all duration-200 relative ${
                    isSelected
                      ? 'bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-600 shadow-lg shadow-white/10 ring-2 ring-white/40'
                      : 'bg-hatched-pattern bg-zinc-900/90 border border-zinc-700/50 group-hover:border-zinc-500'
                  }`}
                >
                  {/* Glowing inner indicator inside active bar */}
                  {isSelected && (
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white/70 shadow-sm" />
                  )}
                </div>

                {/* X-Axis Month Label */}
                <span
                  className={`text-[11px] mt-2 transition-colors tabular-nums select-none ${
                    isSelected
                      ? 'text-white font-bold'
                      : 'text-zinc-400 group-hover:text-zinc-200'
                  }`}
                >
                  {item.shortMonth}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
