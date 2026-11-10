export type TimeFilter = 'overview' | 'online' | 'in-store';
export type YearFilter = '2025' | '2026';

export interface MonthlyRevenue {
  month: string;
  shortMonth: string;
  revenue: number;
  orders: number;
  growth: string;
  isAvg?: boolean;
}

export interface HeatmapCell {
  day: string;
  timeSlot: string;
  intensity: 0 | 1 | 2 | 3 | 4; // 0=dark, 4=white
  visits: number;
}

export interface ChannelVisit {
  name: string;
  visits: number;
  color: string;
  percentage: number;
}

export interface KpiMetric {
  title: string;
  value: string;
  trend: string;
  trendType: 'up' | 'down';
  trendLabel: string;
  linkText: string;
}
