import React from 'react';
import { Info, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { TimeFilter } from '../types/dashboard';

interface KpiCardsProps {
  filter: TimeFilter;
  onOpenOrders: () => void;
  onOpenAnalytics: () => void;
  onOpenProducts: () => void;
  onOpenFunnel: () => void;
}

export const KpiCards: React.FC<KpiCardsProps> = ({
  filter,
  onOpenOrders,
  onOpenAnalytics,
  onOpenProducts,
  onOpenFunnel,
}) => {
  // Dynamic metrics adjustment based on filter
  const getMetrics = () => {
    if (filter === 'online') {
      return {
        activeSales: '$36,720',
        activeSalesTrend: '↑ 16.8%',
        revenue: '$32,150',
        revenueTrend: '↑ 8.4%',
        unitsSold: '2,920',
        unitsTrend: '↑ 7.2%',
        conversion: '5.2%',
        conversionTrend: '↑ +0.3 pt',
        conversionIsUp: true,
      };
    }
    if (filter === 'in-store') {
      return {
        activeSales: '$11,600',
        activeSalesTrend: '↑ 6.9%',
        revenue: '$10,150',
        revenueTrend: '↑ 4.2%',
        unitsSold: '922',
        unitsTrend: '↑ 3.8%',
        conversion: '3.6%',
        conversionTrend: '↓ -0.5 pt',
        conversionIsUp: false,
      };
    }
    // Default Overview matching screenshot
    return {
      activeSales: '$48,320',
      activeSalesTrend: '↑ 14.2%',
      revenue: '$42,300',
      revenueTrend: '↑ 7.1%',
      unitsSold: '3,842',
      unitsTrend: '↑ 6.4%',
      conversion: '4.8%',
      conversionTrend: '↓ -0.2 pt',
      conversionIsUp: false,
    };
  };

  const m = getMetrics();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-2">
      {/* CARD 1: Active sales (Pure White) */}
      <div className="bg-white rounded-[22px] p-5 flex flex-col justify-between shadow-md hover:shadow-lg transition-all duration-200 border border-black/5 min-h-[175px]">
        <div>
          <div className="flex items-center gap-1.5 text-zinc-600 text-xs font-medium">
            <span>Active sales</span>
            <Info className="w-3.5 h-3.5 text-zinc-400 hover:text-zinc-600 cursor-help" />
          </div>

          <div className="flex items-end justify-between mt-2.5">
            <div>
              <div className="text-[28px] font-bold tracking-tight text-zinc-950 tabular-nums">
                {m.activeSales}
              </div>
              <div className="flex items-center gap-1 text-[11px] text-zinc-600 font-medium mt-1">
                <span className="text-emerald-700 font-semibold flex items-center">
                  {m.activeSalesTrend}
                </span>
                <span className="text-zinc-500">vs last month</span>
              </div>
            </div>

            {/* 3 Rounded Bars Graphic */}
            <div className="flex items-end gap-1.5 pb-1">
              <div className="w-2.5 h-7 rounded-full bg-zinc-300"></div>
              <div className="w-2.5 h-10 rounded-full bg-zinc-500"></div>
              <div className="w-2.5 h-10 rounded-full bg-zinc-900"></div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-2 border-t border-zinc-200/50">
          <button
            onClick={onOpenOrders}
            className="text-xs font-medium text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
          >
            See orders
          </button>
        </div>
      </div>

      {/* CARD 2: Revenue (Soft Pale Stone) */}
      <div className="bg-[#EAECE8] rounded-[22px] p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 border border-black/5 min-h-[175px]">
        <div>
          <div className="flex items-center gap-1.5 text-zinc-700 text-xs font-medium">
            <span>Revenue</span>
            <Info className="w-3.5 h-3.5 text-zinc-500 hover:text-zinc-700 cursor-help" />
          </div>

          <div className="flex items-end justify-between mt-2.5">
            <div>
              <div className="text-[28px] font-bold tracking-tight text-zinc-950 tabular-nums">
                {m.revenue}
              </div>
              <div className="flex items-center gap-1 text-[11px] text-zinc-600 font-medium mt-1">
                <span className="text-emerald-700 font-semibold flex items-center">
                  {m.revenueTrend}
                </span>
                <span className="text-zinc-500">vs last month</span>
              </div>
            </div>

            {/* Sparkline Graphic */}
            <div className="pb-1">
              <svg width="68" height="34" viewBox="0 0 68 34" fill="none">
                <defs>
                  <linearGradient id="revenueGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#18181b" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#18181b" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M2 24C14 26 22 18 36 21C46 23 54 12 63 9"
                  stroke="#18181b"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="63" cy="9" r="3" fill="#18181b" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-2 border-t border-zinc-300/40">
          <button
            onClick={onOpenAnalytics}
            className="text-xs font-medium text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
          >
            See analytics
          </button>
        </div>
      </div>

      {/* CARD 3: Units sold (Pale Stone Beige) */}
      <div className="bg-[#DFE0DC] rounded-[22px] p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 border border-black/5 min-h-[175px]">
        <div>
          <div className="flex items-center gap-1.5 text-zinc-700 text-xs font-medium">
            <span>Units sold</span>
            <Info className="w-3.5 h-3.5 text-zinc-500 hover:text-zinc-700 cursor-help" />
          </div>

          <div className="flex items-end justify-between mt-2.5">
            <div>
              <div className="text-[28px] font-bold tracking-tight text-zinc-950 tabular-nums">
                {m.unitsSold}
              </div>
              <div className="flex items-center gap-1 text-[11px] text-zinc-600 font-medium mt-1">
                <span className="text-emerald-700 font-semibold flex items-center">
                  {m.unitsTrend}
                </span>
                <span className="text-zinc-500">vs last month</span>
              </div>
            </div>

            {/* Donut Progress Ring (77%) */}
            <div className="relative flex items-center justify-center pb-1">
              <svg width="42" height="42" viewBox="0 0 42 42" className="-rotate-90">
                <circle
                  cx="21"
                  cy="21"
                  r="16"
                  stroke="rgba(0,0,0,0.12)"
                  strokeWidth="3.5"
                  fill="none"
                />
                <circle
                  cx="21"
                  cy="21"
                  r="16"
                  stroke="#18181b"
                  strokeWidth="3.5"
                  fill="none"
                  strokeDasharray="100.5"
                  strokeDashoffset={100.5 * (1 - 0.77)}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute text-[10px] font-bold text-zinc-900 tabular-nums">
                77%
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-2 border-t border-zinc-400/30">
          <button
            onClick={onOpenProducts}
            className="text-xs font-medium text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
          >
            See products
          </button>
        </div>
      </div>

      {/* CARD 4: Conversion rate (Pale Muted Stone) */}
      <div className="bg-[#D5D6D1] rounded-[22px] p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 border border-black/5 min-h-[175px]">
        <div>
          <div className="flex items-center gap-1.5 text-zinc-700 text-xs font-medium">
            <span>Conversion rate</span>
            <Info className="w-3.5 h-3.5 text-zinc-500 hover:text-zinc-700 cursor-help" />
          </div>

          <div className="flex items-end justify-between mt-2.5">
            <div>
              <div className="text-[28px] font-bold tracking-tight text-zinc-950 tabular-nums">
                {m.conversion}
              </div>
              <div className="flex items-center gap-1 text-[11px] font-medium mt-1">
                <span
                  className={`font-semibold flex items-center ${
                    m.conversionIsUp ? 'text-emerald-700' : 'text-rose-700'
                  }`}
                >
                  {m.conversionTrend}
                </span>
                <span className="text-zinc-500">vs last month</span>
              </div>
            </div>

            {/* Mini Multi-Bar Chart Graphic */}
            <div className="flex items-end gap-[3px] pb-1 h-9">
              {[12, 16, 20, 18, 22, 26, 24, 28, 32].map((height, idx) => (
                <div
                  key={idx}
                  style={{ height: `${height}px` }}
                  className="w-[2.5px] rounded-full bg-zinc-800"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 pt-2 border-t border-zinc-400/35">
          <button
            onClick={onOpenFunnel}
            className="text-xs font-medium text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
          >
            See funnel
          </button>
        </div>
      </div>
    </div>
  );
};
