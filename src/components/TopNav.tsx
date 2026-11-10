import React from 'react';
import { Bell } from 'lucide-react';

interface TopNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenOrders: () => void;
  onOpenAnalytics: () => void;
  onOpenNotifications: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  activeTab,
  setActiveTab,
  onOpenOrders,
  onOpenAnalytics,
  onOpenNotifications,
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'orders', label: 'Orders', badge: 14, onClick: onOpenOrders },
    { id: 'products', label: 'Products' },
    { id: 'customers', label: 'Customers' },
    { id: 'messages', label: 'Messages', badge: 3 },
    { id: 'analytics', label: 'Analytics', onClick: onOpenAnalytics },
    { id: 'automations', label: 'Automations' },
  ];

  return (
    <header className="w-full flex items-center justify-between py-2.5 px-1 sm:px-2 gap-4">
      {/* Brand Zone */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm select-none">
          {/* Elegant geometric 'O' glyph for Orpheus */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="7.5" stroke="#121212" strokeWidth="3" />
            <circle cx="12" cy="12" r="2.5" fill="#121212" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-[14px] sm:text-[15px] font-bold text-white tracking-tight leading-tight">
            Orpheus
          </span>
          <span className="text-[11px] text-zinc-400 font-normal leading-tight">
            Pro trial, 9 days left
          </span>
        </div>
      </div>

      {/* Center Nav Capsule */}
      <nav className="hidden lg:flex items-center bg-[#1c1c1c] border border-zinc-800/90 rounded-full p-1 shadow-inner">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (item.onClick) item.onClick();
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <span>{item.label}</span>
              {item.badge !== undefined && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                    isActive
                      ? 'bg-zinc-200 text-zinc-900'
                      : 'bg-[#292929] text-zinc-300'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Right User Actions & Avatars */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* Notification Bell */}
        <button
          onClick={onOpenNotifications}
          aria-label="Notifications"
          className="w-8 h-8 rounded-full bg-[#1c1c1c] border border-zinc-800/90 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer relative"
        >
          <Bell className="w-3.5 h-3.5" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-zinc-300 rounded-full"></span>
        </button>

        {/* Team Avatars Group */}
        <div className="hidden sm:flex items-center">
          <div className="flex items-center -space-x-1.5">
            <div className="w-7 h-7 rounded-full bg-[#262626] border border-[#141414] flex items-center justify-center text-[10px] font-semibold text-zinc-300">
              MR
            </div>
            <div className="w-7 h-7 rounded-full bg-[#2a2a2a] border border-[#141414] flex items-center justify-center text-[10px] font-semibold text-zinc-300">
              JO
            </div>
            <div className="w-7 h-7 rounded-full bg-[#303030] border border-[#141414] flex items-center justify-center text-[10px] font-semibold text-zinc-300">
              AP
            </div>
            <div className="w-7 h-7 rounded-full bg-[#383838] border border-[#141414] flex items-center justify-center text-[9px] font-semibold text-zinc-400">
              +2
            </div>
          </div>
        </div>

        {/* Current User Avatar */}
        <button
          className="w-8 h-8 rounded-full bg-[#2e2e2e] border border-zinc-700/80 flex items-center justify-center text-xs font-semibold text-white hover:border-zinc-500 transition-colors cursor-pointer"
          title="Account profile: Marcus Rivera"
        >
          MR
        </button>
      </div>
    </header>
  );
};
