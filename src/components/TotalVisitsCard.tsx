import React from 'react';
import { Info } from 'lucide-react';
import { channelsData } from '../data/mockData';

export const TotalVisitsCard: React.FC = () => {
  // SVG donut geometry
  const radius = 52;
  const strokeWidth = 15;
  const circumference = 2 * Math.PI * radius;

  // Percentages: Website: 76%, In store: 19%, Click & collect: 5%
  const p1 = 0.76;
  const p2 = 0.19;
  const p3 = 0.05;

  const offset1 = 0;
  const offset2 = -(p1 * circumference);
  const offset3 = -((p1 + p2) * circumference);

  return (
    <div className="bg-[#181818] border border-zinc-800/80 rounded-[22px] p-6 flex flex-col justify-between shadow-sm min-h-[300px]">
      {/* Header */}
      <div>
        <div className="flex items-center gap-1.5 text-white text-sm font-semibold">
          <span>Total visits</span>
          <Info className="w-3.5 h-3.5 text-zinc-500 hover:text-zinc-300 cursor-help" />
        </div>

        {/* Big Metric & Trend */}
        <div className="mt-3">
          <div className="text-3xl sm:text-[32px] font-bold text-white tracking-tight tabular-nums">
            214,860
          </div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium mt-1">
            <span>vs last month</span>
            <span className="bg-[#102a1e] text-[#4ade80] border border-[#166534] text-[11px] font-bold px-1.5 py-0.2 rounded-full flex items-center gap-0.5">
              ↑ 8.5%
            </span>
          </div>
        </div>
      </div>

      {/* Split Section: Channels Breakdown & Donut */}
      <div className="flex items-center justify-between gap-4 mt-6">
        {/* Left Channels List */}
        <div className="space-y-3.5 flex-1">
          {channelsData.map((channel) => (
            <div
              key={channel.name}
              className="flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2.5">
                <span
                  style={{ backgroundColor: channel.color }}
                  className="w-2.5 h-2.5 rounded-xs shrink-0"
                />
                <span className="text-zinc-300 font-medium">{channel.name}</span>
              </div>
              <span className="text-white font-semibold tabular-nums ml-4">
                {channel.visits.toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        {/* Right Donut Chart */}
        <div className="relative flex items-center justify-center shrink-0 w-[140px] h-[140px]">
          <svg
            width="140"
            height="140"
            viewBox="0 0 140 140"
            className="-rotate-90 select-none"
          >
            {/* Background ring */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="#262626"
              strokeWidth={strokeWidth}
              fill="none"
            />

            {/* Segment 3: Click & collect (5%) */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="#404040"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={`${p3 * circumference} ${circumference}`}
              strokeDashoffset={offset3}
            />

            {/* Segment 2: In store (19%) */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="#71717a"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={`${p2 * circumference} ${circumference}`}
              strokeDashoffset={offset2}
            />

            {/* Segment 1: Website (76%) */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="#ffffff"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={`${p1 * circumference} ${circumference}`}
              strokeDashoffset={offset1}
              strokeLinecap="round"
            />
          </svg>

          {/* Center Text inside Donut */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
            <span className="text-xl font-extrabold text-white leading-tight tabular-nums">
              76%
            </span>
            <span className="text-[10px] text-zinc-400 font-medium leading-tight">
              Website
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
