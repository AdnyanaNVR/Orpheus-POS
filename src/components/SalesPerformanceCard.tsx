import React from 'react';
import { Info } from 'lucide-react';

interface SalesPerformanceCardProps {
  score?: number;
  onImproveScore: () => void;
}

export const SalesPerformanceCard: React.FC<SalesPerformanceCardProps> = ({
  score = 86,
  onImproveScore,
}) => {
  // Arc calculation for semi-circle gauge (180 degrees to 0 degrees)
  const radius = 80;
  const cx = 130;
  const cy = 115;
  const strokeWidth = 14;

  // Percentage of arc filled
  const percentage = score / 100;
  // Angle starts at 180 (left) and goes clockwise to 0 (right), span is 180 deg
  const startAngle = Math.PI;
  const endAngle = 0;
  const currentAngle = startAngle - percentage * Math.PI;

  // Knob coordinates
  const knobX = cx + (radius) * Math.cos(currentAngle);
  const knobY = cy - (radius) * Math.sin(currentAngle);

  // Generate tick marks around the outer perimeter (radius + 18)
  const ticks = [];
  const numTicks = 37;
  for (let i = 0; i < numTicks; i++) {
    const tickAngle = Math.PI - (i / (numTicks - 1)) * Math.PI;
    const rInner = radius + 15;
    const rOuter = radius + 22;
    const x1 = cx + rInner * Math.cos(tickAngle);
    const y1 = cy - rInner * Math.sin(tickAngle);
    const x2 = cx + rOuter * Math.cos(tickAngle);
    const y2 = cy - rOuter * Math.sin(tickAngle);
    const isLit = (i / (numTicks - 1)) <= percentage;
    ticks.push({ x1, y1, x2, y2, isLit });
  }

  // SVG arc path
  const bgPath = `M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`;

  // Arc stroke dash calculations
  const arcLength = Math.PI * radius; // half circle circumference
  const filledLength = arcLength * percentage;

  return (
    <div className="bg-[#181818] border border-zinc-800/80 rounded-[22px] p-6 flex flex-col justify-between shadow-sm min-h-[360px]">
      <div>
        {/* Header */}
        <div className="flex items-center gap-1.5 text-zinc-300 text-sm font-medium">
          <span>Sales performance</span>
          <Info className="w-3.5 h-3.5 text-zinc-500 hover:text-zinc-300 cursor-help" />
        </div>

        {/* Gauge Arc Speedometer */}
        <div className="relative flex flex-col items-center justify-center mt-3 select-none">
          <svg width="260" height="150" viewBox="0 0 260 150" className="overflow-visible">
            <defs>
              <linearGradient id="gaugeGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#888888" />
                <stop offset="70%" stopColor="#e5e5e5" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>

            {/* Radiating Outer Ticks */}
            {ticks.map((t, idx) => (
              <line
                key={idx}
                x1={t.x1}
                y1={t.y1}
                x2={t.x2}
                y2={t.y2}
                stroke={t.isLit ? '#a1a1aa' : '#3f3f46'}
                strokeWidth={idx % 4 === 0 ? '1.8' : '1.2'}
                strokeLinecap="round"
                opacity={t.isLit ? '0.9' : '0.4'}
              />
            ))}

            {/* Background Arc Track */}
            <path
              d={bgPath}
              fill="none"
              stroke="#27272a"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />

            {/* Active Filled Arc Track */}
            <path
              d={bgPath}
              fill="none"
              stroke="url(#gaugeGradient)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={`${filledLength} ${arcLength}`}
            />

            {/* Indicator Knob Ring */}
            <circle
              cx={knobX}
              cy={knobY}
              r="7"
              fill="#181818"
              stroke="#ffffff"
              strokeWidth="3.5"
              className="drop-shadow-md"
            />
          </svg>

          {/* Central Score Display */}
          <div className="absolute top-[82px] flex flex-col items-center">
            <div className="flex items-center gap-1.5">
              <span className="text-4xl font-extrabold text-white tracking-tight tabular-nums">
                {score}
              </span>
              <span className="bg-[#102a1e] text-[#4ade80] border border-[#166534] text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                ↑ +3
              </span>
            </div>
            <span className="text-zinc-400 text-xs font-normal mt-0.5">
              of 100 points
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Insights */}
      <div className="mt-4 pt-2">
        <h4 className="text-white font-semibold text-sm leading-snug">
          Ahead of plan
        </h4>
        <p className="text-zinc-400 text-xs leading-relaxed mt-0.5">
          Both channels beat last month. Online did most of the lifting.
        </p>
        <button
          onClick={onImproveScore}
          className="text-white text-xs font-medium underline underline-offset-4 mt-3 hover:text-zinc-200 transition-colors inline-block cursor-pointer"
        >
          Improve your score
        </button>
      </div>
    </div>
  );
};
