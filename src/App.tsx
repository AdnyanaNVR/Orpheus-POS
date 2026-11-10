/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopNav } from './components/TopNav';
import { HeaderRow } from './components/HeaderRow';
import { KpiCards } from './components/KpiCards';
import { SalesPerformanceCard } from './components/SalesPerformanceCard';
import { RevenueCard } from './components/RevenueCard';
import { VisitsByTimeCard } from './components/VisitsByTimeCard';
import { TotalVisitsCard } from './components/TotalVisitsCard';
import { FloatingSidebar } from './components/FloatingSidebar';
import { Modals } from './components/Modals';
import { TimeFilter } from './types/dashboard';
import { Check } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [filter, setFilter] = useState<TimeFilter>('overview');
  const [liveCount, setLiveCount] = useState(1396);
  const [modalType, setModalType] = useState<
    | 'orders'
    | 'analytics'
    | 'products'
    | 'funnel'
    | 'score'
    | 'search'
    | 'settings'
    | 'help'
    | 'insights'
    | null
  >(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Subtle realistic live visitor fluctuations around 1,396
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(1385, Math.min(1412, prev + delta));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut ⌘K / Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setModalType((prev) => (prev === 'search' ? null : 'search'));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Export CSV Handler
  const handleExport = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      'Metric,Value,Period\n' +
      'Active Sales,$48320,Nov 2026\n' +
      'Revenue,$42300,Nov 2026\n' +
      'Units Sold,3842,Nov 2026\n' +
      'Conversion Rate,4.8%,Nov 2026\n' +
      'Sales Performance Score,86/100,Nov 2026\n' +
      'Total Visits,214860,Nov 2026\n' +
      'Website Visits,162400,Nov 2026\n' +
      'In Store Visits,41440,Nov 2026\n' +
      'Click & Collect Visits,11020,Nov 2026\n';

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Orpheus_Analytics_Nov_2026.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Toast notification
    setToastMessage('Exported Orpheus_Analytics_Nov_2026.csv');
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-zinc-700 selection:text-white relative font-sans">
      {/* Floating Left Vertical Sidebar */}
      <FloatingSidebar
        onOpenSearch={() => setModalType('search')}
        onOpenTasks={() => setModalType('orders')}
        onOpenSettings={() => setModalType('settings')}
        onOpenHelp={() => setModalType('help')}
        onOpenInsights={() => setModalType('insights')}
        onToggleTheme={() => {
          setToastMessage('Theme locked to exact design dark palette');
          setTimeout(() => setToastMessage(null), 2500);
        }}
      />

      {/* Main Container - max-w and gutter matching the reference layout */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-12 py-4 sm:py-6">
        {/* Top Navigation */}
        <TopNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenOrders={() => setModalType('orders')}
          onOpenAnalytics={() => setModalType('analytics')}
          onOpenNotifications={() => setModalType('insights')}
        />

        {/* Dashboard Title & Action Row */}
        <div className="mt-4 sm:mt-5">
          <HeaderRow
            filter={filter}
            setFilter={setFilter}
            onOpenAnalytics={() => setModalType('analytics')}
            onExport={handleExport}
            liveCount={liveCount}
          />
        </div>

        {/* 4 Light Stone KPI Cards */}
        <div className="mt-5">
          <KpiCards
            filter={filter}
            onOpenOrders={() => setModalType('orders')}
            onOpenAnalytics={() => setModalType('analytics')}
            onOpenProducts={() => setModalType('products')}
            onOpenFunnel={() => setModalType('funnel')}
          />
        </div>

        {/* Middle Row: Sales Performance (Gauge) + Revenue (Chart) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 mt-3.5">
          {/* Sales Performance Card (approx 33% / 4 columns) */}
          <div className="lg:col-span-4">
            <SalesPerformanceCard
              score={86}
              onImproveScore={() => setModalType('score')}
            />
          </div>

          {/* Revenue Chart Card (approx 67% / 8 columns) */}
          <div className="lg:col-span-8">
            <RevenueCard onOpenAnalytics={() => setModalType('analytics')} />
          </div>
        </div>

        {/* Bottom Row: Visits by Time (Heatmap) + Total Visits (Donut) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 mt-3.5 mb-8">
          {/* Visits by Time Heatmap (approx 60% / 7 columns) */}
          <div className="lg:col-span-7">
            <VisitsByTimeCard />
          </div>

          {/* Total Visits Donut & Breakdown (approx 40% / 5 columns) */}
          <div className="lg:col-span-5">
            <TotalVisitsCard />
          </div>
        </div>
      </div>

      {/* Interactive Modals */}
      <Modals
        modalType={modalType}
        onClose={() => setModalType(null)}
        onExport={handleExport}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-white text-zinc-950 text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 border border-zinc-200 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
