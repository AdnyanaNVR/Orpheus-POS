import { MonthlyRevenue, HeatmapCell, ChannelVisit } from '../types/dashboard';

export const monthlyRevenue2026: MonthlyRevenue[] = [
  { month: 'January', shortMonth: 'Jan', revenue: 18800, orders: 265, growth: '+22.9%' },
  { month: 'February', shortMonth: 'Feb', revenue: 22400, orders: 310, growth: '+15.4%' },
  { month: 'March', shortMonth: 'Mar', revenue: 26100, orders: 352, growth: '+18.2%' },
  { month: 'April', shortMonth: 'Apr', revenue: 28500, orders: 390, growth: '+12.6%' },
  { month: 'May', shortMonth: 'May', revenue: 32200, orders: 425, growth: '+19.8%' },
  { month: 'June', shortMonth: 'Jun', revenue: 41800, orders: 540, growth: '+24.1%' },
  { month: 'July', shortMonth: 'Jul', revenue: 38900, orders: 495, growth: '+16.5%' },
  { month: 'August', shortMonth: 'Aug', revenue: 36700, orders: 470, growth: '+14.2%' },
  { month: 'September', shortMonth: 'Sep', revenue: 35100, orders: 440, growth: '+11.8%' },
  { month: 'October', shortMonth: 'Oct', revenue: 40200, orders: 512, growth: '+20.5%' },
  { month: 'November', shortMonth: 'Nov', revenue: 42300, orders: 535, growth: '+23.0%' },
  { month: 'December', shortMonth: 'Dec', revenue: 48500, orders: 610, growth: '+27.4%' },
];

export const monthlyRevenue2025: MonthlyRevenue[] = [
  { month: 'January', shortMonth: 'Jan', revenue: 15300, orders: 215, growth: '+10.2%' },
  { month: 'February', shortMonth: 'Feb', revenue: 19400, orders: 270, growth: '+12.1%' },
  { month: 'March', shortMonth: 'Mar', revenue: 22100, orders: 300, growth: '+14.5%' },
  { month: 'April', shortMonth: 'Apr', revenue: 25300, orders: 345, growth: '+11.0%' },
  { month: 'May', shortMonth: 'May', revenue: 27000, orders: 360, growth: '+15.3%' },
  { month: 'June', shortMonth: 'Jun', revenue: 33700, orders: 435, growth: '+18.6%' },
  { month: 'July', shortMonth: 'Jul', revenue: 33400, orders: 425, growth: '+13.9%' },
  { month: 'August', shortMonth: 'Aug', revenue: 32100, orders: 410, growth: '+12.5%' },
  { month: 'September', shortMonth: 'Sep', revenue: 31400, orders: 395, growth: '+10.8%' },
  { month: 'October', shortMonth: 'Oct', revenue: 33300, orders: 425, growth: '+14.1%' },
  { month: 'November', shortMonth: 'Nov', revenue: 34400, orders: 435, growth: '+16.2%' },
  { month: 'December', shortMonth: 'Dec', revenue: 38100, orders: 480, growth: '+19.5%' },
];

export const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const timeSlots = [
  '12 AM – 8 AM',
  '8 AM – 12 PM',
  '12 PM – 4 PM',
  '4 PM – 12 AM',
];

// Matrix intensities based exactly on the provided image:
// Row 1 (12 AM – 8 AM): Mon-Sun dark (intensity 0)
// Row 2 (8 AM – 12 PM): Mon (2), Tue (1), Wed (2), Thu (2), Fri (2), Sat (4), Sun (4)
// Row 3 (12 PM – 4 PM): Mon (2), Tue (2), Wed (2), Thu (2), Fri (2), Sat (4), Sun (4)
// Row 4 (4 PM – 12 AM): Mon (4), Tue (4), Wed (4), Thu (4), Fri (4), Sat (2), Sun (4)
export const heatmapData: HeatmapCell[][] = [
  // 12 AM - 8 AM
  [
    { day: 'Mon', timeSlot: '12 AM – 8 AM', intensity: 0, visits: 840 },
    { day: 'Tue', timeSlot: '12 AM – 8 AM', intensity: 0, visits: 910 },
    { day: 'Wed', timeSlot: '12 AM – 8 AM', intensity: 0, visits: 890 },
    { day: 'Thu', timeSlot: '12 AM – 8 AM', intensity: 0, visits: 940 },
    { day: 'Fri', timeSlot: '12 AM – 8 AM', intensity: 0, visits: 1120 },
    { day: 'Sat', timeSlot: '12 AM – 8 AM', intensity: 0, visits: 1350 },
    { day: 'Sun', timeSlot: '12 AM – 8 AM', intensity: 0, visits: 1200 },
  ],
  // 8 AM - 12 PM
  [
    { day: 'Mon', timeSlot: '8 AM – 12 PM', intensity: 2, visits: 6240 },
    { day: 'Tue', timeSlot: '8 AM – 12 PM', intensity: 1, visits: 4890 },
    { day: 'Wed', timeSlot: '8 AM – 12 PM', intensity: 2, visits: 5980 },
    { day: 'Thu', timeSlot: '8 AM – 12 PM', intensity: 2, visits: 5760 },
    { day: 'Fri', timeSlot: '8 AM – 12 PM', intensity: 2, visits: 6420 },
    { day: 'Sat', timeSlot: '8 AM – 12 PM', intensity: 4, visits: 14850 },
    { day: 'Sun', timeSlot: '8 AM – 12 PM', intensity: 4, visits: 13920 },
  ],
  // 12 PM - 4 PM
  [
    { day: 'Mon', timeSlot: '12 PM – 4 PM', intensity: 2, visits: 5930 },
    { day: 'Tue', timeSlot: '12 PM – 4 PM', intensity: 1, visits: 4920 },
    { day: 'Wed', timeSlot: '12 PM – 4 PM', intensity: 2, visits: 5850 },
    { day: 'Thu', timeSlot: '12 PM – 4 PM', intensity: 2, visits: 5690 },
    { day: 'Fri', timeSlot: '12 PM – 4 PM', intensity: 2, visits: 6810 },
    { day: 'Sat', timeSlot: '12 PM – 4 PM', intensity: 4, visits: 16200 },
    { day: 'Sun', timeSlot: '12 PM – 4 PM', intensity: 4, visits: 15400 },
  ],
  // 4 PM - 12 AM
  [
    { day: 'Mon', timeSlot: '4 PM – 12 AM', intensity: 4, visits: 15120 },
    { day: 'Tue', timeSlot: '4 PM – 12 AM', intensity: 4, visits: 14980 },
    { day: 'Wed', timeSlot: '4 PM – 12 AM', intensity: 4, visits: 15300 },
    { day: 'Thu', timeSlot: '4 PM – 12 AM', intensity: 4, visits: 16040 },
    { day: 'Fri', timeSlot: '4 PM – 12 AM', intensity: 4, visits: 17820 },
    { day: 'Sat', timeSlot: '4 PM – 12 AM', intensity: 2, visits: 7210 },
    { day: 'Sun', timeSlot: '4 PM – 12 AM', intensity: 4, visits: 14760 },
  ],
];

export const channelsData: ChannelVisit[] = [
  { name: 'Website', visits: 162400, color: '#ffffff', percentage: 76 },
  { name: 'In store', visits: 41440, color: '#9ca3af', percentage: 19 },
  { name: 'Click & collect', visits: 11020, color: '#4b5563', percentage: 5 },
];

export const recentOrders = [
  { id: 'ORD-7294', customer: 'Sarah Jenkins', items: 'Heavy Canvas Tote x2', total: '$148.00', status: 'Fulfilled', channel: 'Website', date: 'Just now' },
  { id: 'ORD-7293', customer: 'Marcus Aurel', items: 'Waxed Utility Jacket (L)', total: '$380.00', status: 'Processing', channel: 'In store', date: '4m ago' },
  { id: 'ORD-7292', customer: 'Elena Rostova', items: 'Cast Iron Kettle 1.2L', total: '$115.00', status: 'Fulfilled', channel: 'Website', date: '12m ago' },
  { id: 'ORD-7291', customer: 'David Kim', items: 'Merino Knit Beanie', total: '$64.00', status: 'Fulfilled', channel: 'Click & collect', date: '25m ago' },
  { id: 'ORD-7290', customer: 'Chloe Dubois', items: 'Field Leather Boots 42', total: '$290.00', status: 'Shipped', channel: 'Website', date: '1h ago' },
  { id: 'ORD-7289', customer: 'Liam O’Connor', items: 'Cedar Shoe Care Kit', total: '$48.00', status: 'Fulfilled', channel: 'Website', date: '2h ago' },
];

export const productsInventory = [
  { name: 'Heavy Canvas Tote', sku: 'ORP-TOT-01', stock: 142, price: '$74.00', sales30d: 384, status: 'In Stock' },
  { name: 'Waxed Utility Jacket', sku: 'ORP-JKT-09', stock: 28, price: '$380.00', sales30d: 92, status: 'Low Stock' },
  { name: 'Cast Iron Kettle 1.2L', sku: 'ORP-KIT-04', stock: 65, price: '$115.00', sales30d: 140, status: 'In Stock' },
  { name: 'Field Leather Boots', sku: 'ORP-BOT-12', stock: 19, price: '$290.00', sales30d: 78, status: 'Low Stock' },
  { name: 'Merino Knit Beanie', sku: 'ORP-ACC-03', stock: 210, price: '$64.00', sales30d: 512, status: 'In Stock' },
];
