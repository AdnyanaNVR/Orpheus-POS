import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { days, timeSlots, heatmapData } from '../data/mockData';

export const VisitsByTimeCard: React.FC = () => {
  const [hoveredCell, setHoveredCell] = useState<{
    day: string;
    timeSlot: string;
    visits: number;
  } | null>(null);

  // Intensity color map matching the screenshot
  const getIntensityClass = (intensity: number) => {
    switch (intensity) {
      case 0:
        return 'bg-[#252525] border border-zinc-800/40 hover:bg-[#2e2e2e]';
      case 1:
        return 'bg-[#404040] hover:bg-[#4a4a4a]';
      case 2:
        return 'bg-[#666666] hover:bg-[#787878]';
      case 3:
        return 'bg-[#a3a3a3] hover:bg-[#b5b5b5]';
      case 4:
        return 'bg-white hover:bg-zinc-100 shadow-sm';
      default:
        return 'bg-[#252525]';
    }
  };

  return (
    <div className="bg-[#181818] border border-zinc-800/80 rounded-[22px] p-6 flex flex-col justify-between shadow-sm min-h-[300px] relative">
      {/* Header & Legend */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-white text-sm font-semibold">
          <span>Visits by time</span>
          <Info className="w-3.5 h-3.5 text-zinc-500 hover:text-zinc-300 cursor-help" />
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span className="text-[11px]">0</span>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-xs bg-[#252525] border border-zinc-700/50"></span>
            <span className="w-2.5 h-2.5 rounded-xs bg-[#4a4a4a]"></span>
            <span className="w-2.5 h-2.5 rounded-xs bg-[#8a8a8a]"></span>
            <span className="w-2.5 h-2.5 rounded-xs bg-white"></span>
          </div>
          <span className="text-[11px]">11k+</span>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="mt-5 w-full overflow-x-auto">
        <div className="min-w-[480px]">
          {/* Days Header */}
          <div className="grid grid-cols-8 gap-2 mb-2 items-center text-center">
            <div className="col-span-1"></div> {/* Empty space for time labels */}
            {days.map((day) => (
              <span
                key={day}
                className="text-[11px] font-medium text-zinc-400 select-none"
              >
                {day}
              </span>
            ))}
          </div>

          {/* Time Slot Rows */}
          <div className="space-y-2.5">
            {timeSlots.map((slot, rowIndex) => (
              <div key={slot} className="grid grid-cols-8 gap-2 items-center">
                {/* Time Label on Left */}
                <span className="text-[10px] sm:text-[11px] text-zinc-400 whitespace-nowrap select-none font-medium">
                  {slot}
                </span>

                {/* 7 Day Cells */}
                {heatmapData[rowIndex].map((cell, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    onMouseEnter={() =>
                      setHoveredCell({
                        day: cell.day,
                        timeSlot: cell.timeSlot,
                        visits: cell.visits,
                      })
                    }
                    onMouseLeave={() => setHoveredCell(null)}
                    className={`h-7 rounded-lg sm:rounded-xl cursor-pointer transition-transform duration-100 hover:scale-[1.04] relative ${getIntensityClass(
                      cell.intensity
                    )}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Hover Indicator when hovering cell */}
      {hoveredCell && (
        <div className="absolute bottom-2 right-6 bg-zinc-900 border border-zinc-700/80 text-white text-[11px] px-3 py-1.5 rounded-lg shadow-xl pointer-events-none z-20 flex items-center gap-2">
          <span className="text-zinc-400">{hoveredCell.day} ({hoveredCell.timeSlot}):</span>
          <span className="font-bold text-white tabular-nums">
            {hoveredCell.visits.toLocaleString()} visits
          </span>
        </div>
      )}
    </div>
  );
};
