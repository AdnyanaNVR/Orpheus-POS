import React, { useState } from 'react';
import { X, Search, CheckCircle, ArrowRight, TrendingUp, Package, ExternalLink, ShieldCheck, Download } from 'lucide-react';
import { recentOrders, productsInventory } from '../data/mockData';

interface ModalsProps {
  modalType: 'orders' | 'analytics' | 'products' | 'funnel' | 'score' | 'search' | 'settings' | 'help' | 'insights' | null;
  onClose: () => void;
  onExport: () => void;
}

export const Modals: React.FC<ModalsProps> = ({ modalType, onClose, onExport }) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!modalType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl bg-[#181818] border border-zinc-800 rounded-2xl p-6 shadow-2xl text-white max-h-[85vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-zinc-800 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. ORDERS MODAL */}
        {modalType === 'orders' && (
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div>
                <h3 className="text-xl font-bold text-white">Active Orders</h3>
                <p className="text-xs text-zinc-400 mt-0.5">14 active orders pending fulfillment across channels</p>
              </div>
              <button
                onClick={onExport}
                className="flex items-center gap-1.5 bg-white text-zinc-950 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-zinc-200 transition-colors mr-8 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>

            <div className="mt-4 divide-y divide-zinc-800/80">
              {recentOrders.map((ord) => (
                <div key={ord.id} className="py-3 flex items-center justify-between gap-4 text-xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{ord.id}</span>
                      <span className="text-zinc-400">·</span>
                      <span className="text-zinc-300">{ord.customer}</span>
                      <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full font-medium">
                        {ord.channel}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-[11px] mt-0.5">{ord.items}</p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-bold text-white tabular-nums block">{ord.total}</span>
                    <span className="text-[10px] text-emerald-400">{ord.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. ANALYTICS MODAL */}
        {modalType === 'analytics' && (
          <div>
            <h3 className="text-xl font-bold text-white">Detailed Revenue & Channel Analytics</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Performance breakdown for November 2026</p>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="bg-[#202020] border border-zinc-800 p-4 rounded-xl">
                <span className="text-xs text-zinc-400">Gross Margin</span>
                <div className="text-2xl font-bold text-white mt-1">68.4%</div>
                <span className="text-[11px] text-emerald-400 font-medium">↑ +3.2% vs target</span>
              </div>
              <div className="bg-[#202020] border border-zinc-800 p-4 rounded-xl">
                <span className="text-xs text-zinc-400">Average Order Value</span>
                <div className="text-2xl font-bold text-white mt-1">$159.20</div>
                <span className="text-[11px] text-emerald-400 font-medium">↑ +$12.40 vs October</span>
              </div>
              <div className="bg-[#202020] border border-zinc-800 p-4 rounded-xl">
                <span className="text-xs text-zinc-400">Customer Acquisition Cost</span>
                <div className="text-2xl font-bold text-white mt-1">$24.80</div>
                <span className="text-[11px] text-emerald-400 font-medium">↓ -$3.10 vs budget</span>
              </div>
              <div className="bg-[#202020] border border-zinc-800 p-4 rounded-xl">
                <span className="text-xs text-zinc-400">Return Rate</span>
                <div className="text-2xl font-bold text-white mt-1">1.9%</div>
                <span className="text-[11px] text-emerald-400 font-medium">Nominal healthy</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="bg-white text-zinc-950 font-semibold text-xs px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                Close Report
              </button>
            </div>
          </div>
        )}

        {/* 3. PRODUCTS MODAL */}
        {modalType === 'products' && (
          <div>
            <h3 className="text-xl font-bold text-white">Top Inventory & Units Sold</h3>
            <p className="text-xs text-zinc-400 mt-0.5">3,842 units moved across online and in-store stock</p>

            <div className="mt-5 divide-y divide-zinc-800">
              {productsInventory.map((item) => (
                <div key={item.sku} className="py-3 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white block">{item.name}</span>
                    <span className="text-zinc-500 text-[11px]">SKU: {item.sku} · {item.stock} in stock</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-white tabular-nums block">{item.price}</span>
                    <span className="text-zinc-400 text-[11px]">{item.sales30d} sold this month</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. FUNNEL MODAL */}
        {modalType === 'funnel' && (
          <div>
            <h3 className="text-xl font-bold text-white">Conversion Funnel Breakdown</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Overall conversion rate: 4.8% (↓ -0.2 pt)</p>

            <div className="mt-6 space-y-4 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-zinc-300">1. Product Detail Page Views</span>
                  <span className="font-semibold text-white">214,860 (100%)</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-white rounded-full w-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-zinc-300">2. Added to Cart</span>
                  <span className="font-semibold text-white">34,370 (16.0%)</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-zinc-300 rounded-full w-[16%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-zinc-300">3. Reached Checkout</span>
                  <span className="font-semibold text-white">14,180 (6.6%)</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-zinc-400 rounded-full w-[6.6%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-zinc-300">4. Completed Orders</span>
                  <span className="font-semibold text-white">10,313 (4.8%)</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full w-[4.8%]" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. SCORE IMPROVEMENT MODAL */}
        {modalType === 'score' && (
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold text-white">86</span>
              <span className="text-xs text-zinc-400">/ 100 points</span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1">Recommendations to Reach 90+</h3>
            <p className="text-xs text-zinc-400 mt-1">
              Your store is ahead of plan! Implement these targeted adjustments to unlock higher conversion:
            </p>

            <div className="mt-5 space-y-3 text-xs">
              <div className="bg-[#202020] border border-zinc-800 p-3.5 rounded-xl flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Reduce Cart Drop-off on Mobile</h4>
                  <p className="text-zinc-400 text-[11px] mt-0.5">
                    Enable Apple Pay 1-click checkout for mobile web visitors to capture an estimated +$4,200/mo.
                  </p>
                </div>
              </div>

              <div className="bg-[#202020] border border-zinc-800 p-3.5 rounded-xl flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Rebalance In-Store Inventory</h4>
                  <p className="text-zinc-400 text-[11px] mt-0.5">
                    Restock 40 Waxed Utility Jackets to the flagship location before peak Saturday 8 AM – 12 PM foot traffic.
                  </p>
                </div>
              </div>

              <div className="bg-[#202020] border border-zinc-800 p-3.5 rounded-xl flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Automate Abandoned Browse Email</h4>
                  <p className="text-zinc-400 text-[11px] mt-0.5">
                    Trigger gentle reminder 2 hours after high-intent collection page view.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6. SEARCH PALETTE */}
        {modalType === 'search' && (
          <div>
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
              <Search className="w-5 h-5 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search orders, customers, products, reports..."
                autoFocus
                className="w-full bg-transparent text-white text-sm focus:outline-hidden placeholder:text-zinc-500"
              />
            </div>

            <div className="mt-4 text-xs text-zinc-400">
              <span className="font-medium text-zinc-500 text-[11px] uppercase tracking-wider block mb-2">
                Quick Actions
              </span>
              <div className="space-y-1">
                <button
                  onClick={() => alert('Opening Orders...')}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-zinc-800 text-zinc-200 text-left transition-colors cursor-pointer"
                >
                  <span>View All 14 Pending Orders</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                </button>
                <button
                  onClick={onExport}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-zinc-800 text-zinc-200 text-left transition-colors cursor-pointer"
                >
                  <span>Export Financial Report (.CSV)</span>
                  <Download className="w-3.5 h-3.5 text-zinc-500" />
                </button>
                <button
                  onClick={() => alert('Opening Store Inventory...')}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-zinc-800 text-zinc-200 text-left transition-colors cursor-pointer"
                >
                  <span>Check Waxed Utility Jacket Stock</span>
                  <Package className="w-3.5 h-3.5 text-zinc-500" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 7. SETTINGS MODAL */}
        {modalType === 'settings' && (
          <div>
            <h3 className="text-xl font-bold text-white">Store Settings</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Orpheus · Pro Plan</p>

            <div className="mt-5 space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 bg-[#202020] rounded-xl border border-zinc-800">
                <div>
                  <span className="font-medium text-white block">Currency & Localization</span>
                  <span className="text-zinc-400 text-[11px]">USD ($) · UTC-8 Pacific Time</span>
                </div>
                <span className="text-zinc-400 text-xs font-semibold">Configured</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#202020] rounded-xl border border-zinc-800">
                <div>
                  <span className="font-medium text-white block">Real-time Telemetry Feed</span>
                  <span className="text-zinc-400 text-[11px]">Live visitor polling active (1,396 active)</span>
                </div>
                <span className="text-emerald-400 font-semibold text-xs">Online</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#202020] rounded-xl border border-zinc-800">
                <div>
                  <span className="font-medium text-white block">Plan Billing</span>
                  <span className="text-zinc-400 text-[11px]">Pro trial, 9 days remaining</span>
                </div>
                <button className="bg-white text-zinc-950 font-semibold px-3 py-1 rounded-full text-xs hover:bg-zinc-200 cursor-pointer">
                  Upgrade
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 8. HELP MODAL */}
        {modalType === 'help' && (
          <div>
            <h3 className="text-xl font-bold text-white">Help & Documentation</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Orpheus Analytics Guide</p>
            <div className="mt-4 space-y-2 text-xs text-zinc-300 leading-relaxed">
              <p>• <strong>Sales Performance Score</strong> is calculated based on monthly revenue attainment, order velocity, and checkout completion ratios.</p>
              <p>• <strong>Visits by Time Heatmap</strong> aggregates hourly online traffic with retail point-of-sale foot traffic sensors.</p>
              <p>• <strong>Live Visitor Counter</strong> streams active browsing sessions in 15-second heartbeats.</p>
            </div>
          </div>
        )}

        {/* 9. INSIGHTS MODAL */}
        {modalType === 'insights' && (
          <div>
            <h3 className="text-xl font-bold text-white">Automated Store Insights</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Machine intelligence summary for November 2026</p>
            <div className="mt-4 space-y-3 text-xs">
              <div className="p-3 bg-[#202020] rounded-xl border border-zinc-800">
                <span className="text-emerald-400 font-bold block mb-1">Peak Shopping Window Identified</span>
                <p className="text-zinc-300">
                  Saturday 8 AM - 4 PM consistently sees 14,000+ to 16,000+ visits with highest conversion rate. Recommending targeted Saturday promotions.
                </p>
              </div>
              <div className="p-3 bg-[#202020] rounded-xl border border-zinc-800">
                <span className="text-white font-bold block mb-1">Website Dominance</span>
                <p className="text-zinc-300">
                  Website accounts for 76% of all footfall (162,400 visits). Online checkout volume is outpacing in-store by 3.9x.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
