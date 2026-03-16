"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const priceData = [
  { date: "Nov 6", price: 72.5 },
  { date: "Nov 8", price: 78.2 },
  { date: "Nov 13", price: 85.4 },
  { date: "Nov 18", price: 92.1 },
  { date: "Nov 22", price: 98.7 },
  { date: "Nov 27", price: 105.3 },
  { date: "Dec 2", price: 112.8 },
  { date: "Dec 5", price: 118.5 },
  { date: "Dec 10", price: 125.2 },
  { date: "Dec 13", price: 131.6 },
  { date: "Dec 17", price: 138.7 },
  { date: "Dec 20", price: 134.2 },
  { date: "Dec 24", price: 128.9 },
  { date: "Dec 30", price: 122.4 },
  { date: "Jan 3", price: 118.1 },
  { date: "Jan 8", price: 112.5 },
  { date: "Jan 13", price: 105.8 },
  { date: "Jan 17", price: 99.3 },
  { date: "Jan 22", price: 94.6 },
  { date: "Jan 27", price: 88.2 },
  { date: "Jan 31", price: 84.7 },
  { date: "Feb 5", price: 80.1 },
  { date: "Feb 10", price: 76.5 },
  { date: "Feb 14", price: 72.3 },
  { date: "Feb 19", price: 68.9 },
  { date: "Feb 24", price: 65.4 },
  { date: "Feb 28", price: 62.8 },
  { date: "Mar 4", price: 66.2 },
  { date: "Mar 7", price: 68.5 },
  { date: "Mar 11", price: 69.1 },
  { date: "Mar 14", price: 69.8 },
  { date: "Mar 16", price: 71.31 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-[#e5d5c3] rounded px-3 py-2 shadow-sm">
        <p className="text-[10px] text-[#6b7280] mb-0.5">{label}</p>
        <p className="text-sm font-bold text-[#1a1a1a]">
          ${payload[0].value.toFixed(2)}
        </p>
      </div>
    );
  }
  return null;
};

export function PriceChart() {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <h3 className="text-[11px] uppercase tracking-wide text-[#6b7280] font-medium">
            BLLN — Price Since IPO
          </h3>
          <p className="text-xs text-[#9ca3af]">
            Nov 6, 2025 — Mar 16, 2026
          </p>
        </div>
        <div className="flex items-center gap-4 text-[10px] text-[#9ca3af]">
          <span>
            <span className="inline-block w-3 h-[2px] bg-[#0d3b66] mr-1 align-middle" />
            Price
          </span>
          <span>
            <span className="inline-block w-3 h-[2px] bg-[#9ca3af] mr-1 align-middle opacity-50" />
            IPO ($60)
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart
          data={priceData}
          margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d3b66" stopOpacity={0.08} />
              <stop offset="100%" stopColor="#0d3b66" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5d5c3"
            vertical={false}
          />
          <XAxis
            dataKey="date"
            stroke="#d1c4b0"
            tick={{ fill: "#9ca3af", fontSize: 10 }}
            tickLine={false}
            axisLine={{ stroke: "#e5d5c3" }}
            interval={4}
          />
          <YAxis
            stroke="#d1c4b0"
            tick={{ fill: "#9ca3af", fontSize: 10 }}
            tickLine={false}
            axisLine={false}
            domain={[55, 145]}
            tickFormatter={(v) => `$${v}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine
            y={60}
            stroke="#9ca3af"
            strokeDasharray="6 3"
            strokeOpacity={0.6}
            label={{
              value: "IPO $60",
              position: "left",
              fill: "#9ca3af",
              fontSize: 10,
            }}
          />
          <ReferenceLine
            y={129.57}
            stroke="#1a7a4c"
            strokeDasharray="6 3"
            strokeOpacity={0.5}
            label={{
              value: "Avg PT $130",
              position: "right",
              fill: "#1a7a4c",
              fontSize: 10,
            }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#0d3b66"
            strokeWidth={2}
            fill="url(#priceGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-between mt-3 text-[10px] text-[#9ca3af] border-t border-[#e5d5c3] pt-2">
        <span>52W Low: $61.96</span>
        <span>Current: $71.31 (+18.9% from IPO)</span>
        <span>52W High: $138.70</span>
      </div>
    </div>
  );
}
