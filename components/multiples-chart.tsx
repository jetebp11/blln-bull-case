"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

const data = [
  { name: "BLLN", ttm: 9.1, fwd: 6.4, growth: 100, profitable: true },
  { name: "NTRA", ttm: 11.0, fwd: 9.5, growth: 42, profitable: false },
  { name: "GH", ttm: 11.9, fwd: 9.3, growth: 31, profitable: false },
  { name: "CAI", ttm: 6.5, fwd: 5.2, growth: 97, profitable: false },
  { name: "GRAL", ttm: 6.0, fwd: 4.9, growth: 17, profitable: false },
  { name: "MYGN", ttm: 0.6, fwd: 0.5, growth: 8, profitable: false },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const item = data.find((d) => d.name === label);
    return (
      <div className="bg-white border border-[#e5d5c3] rounded px-3 py-2 shadow-sm">
        <p className="text-xs font-bold text-[#1a1a1a] mb-1">{label}</p>
        <p className="text-[11px] text-[#6b7280]">
          EV/Rev (TTM):{" "}
          <span className="text-[#1a1a1a] font-medium">
            {item?.ttm}x
          </span>
        </p>
        <p className="text-[11px] text-[#6b7280]">
          EV/Rev (FY26E):{" "}
          <span className="text-[#0d3b66] font-medium">
            {item?.fwd}x
          </span>
        </p>
        <p className="text-[11px] text-[#6b7280]">
          Rev Growth:{" "}
          <span className="text-[#1a7a4c] font-medium">
            +{item?.growth}%
          </span>
        </p>
        <p className="text-[11px] text-[#6b7280]">
          Profitable:{" "}
          <span
            className={
              item?.profitable ? "text-[#1a7a4c]" : "text-[#c0392b]"
            }
          >
            {item?.profitable ? "Yes" : "No"}
          </span>
        </p>
      </div>
    );
  }
  return null;
};

export function MultiplesChart() {
  return (
    <div>
      <div className="flex items-center gap-4 text-[10px] text-[#9ca3af] mb-3">
        <span>
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[#c4b5a3] mr-1 align-middle" />
          TTM
        </span>
        <span>
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[#0d3b66] mr-1 align-middle" />
          FY26E
        </span>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 5, left: -10, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5d5c3"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            stroke="#d1c4b0"
            tick={{ fill: "#6b7280", fontSize: 11, fontWeight: 500 }}
            tickLine={false}
            axisLine={{ stroke: "#e5d5c3" }}
          />
          <YAxis
            stroke="#d1c4b0"
            tick={{ fill: "#9ca3af", fontSize: 10 }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `${v}x`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="ttm" radius={[2, 2, 0, 0]} maxBarSize={28}>
            {data.map((entry) => (
              <Cell
                key={`ttm-${entry.name}`}
                fill={entry.name === "BLLN" ? "#a8c4de" : "#d9cfc2"}
              />
            ))}
          </Bar>
          <Bar dataKey="fwd" radius={[2, 2, 0, 0]} maxBarSize={28}>
            {data.map((entry) => (
              <Cell
                key={`fwd-${entry.name}`}
                fill={entry.name === "BLLN" ? "#0d3b66" : "#8b7e6f"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
