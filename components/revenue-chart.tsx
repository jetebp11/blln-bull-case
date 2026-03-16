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
} from "recharts";

const data = [
  { quarter: "Q1'24", prenatal: 29, oncology: 0.3, estimated: false },
  { quarter: "Q2'24", prenatal: 34, oncology: 0.6, estimated: false },
  { quarter: "Q3'24", prenatal: 39, oncology: 1.5, estimated: false },
  { quarter: "Q4'24", prenatal: 43.3, oncology: 1.1, estimated: false },
  { quarter: "Q1'25", prenatal: 50, oncology: 3.2, estimated: false },
  { quarter: "Q2'25", prenatal: 60, oncology: 5.0, estimated: false },
  { quarter: "Q3'25", prenatal: 72, oncology: 6.8, estimated: false },
  { quarter: "Q4'25", prenatal: 86.1, oncology: 9.1, estimated: false },
  { quarter: "Q1'26E", prenatal: 92, oncology: 14, estimated: true },
  { quarter: "Q2'26E", prenatal: 98, oncology: 18, estimated: true },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((s: number, p: any) => s + p.value, 0);
    return (
      <div className="bg-white border border-[#e5d5c3] rounded px-3 py-2 shadow-sm">
        <p className="text-xs font-bold text-[#1a1a1a] mb-1.5">{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} className="text-[11px] text-[#6b7280]">
            {p.name === "prenatal" ? "Prenatal" : "Oncology"}:{" "}
            <span className="text-[#1a1a1a] font-medium">${p.value}M</span>
          </p>
        ))}
        <p className="text-[11px] text-[#6b7280] mt-1 pt-1 border-t border-[#e5d5c3]">
          Total:{" "}
          <span className="text-[#1a1a1a] font-bold">${total.toFixed(1)}M</span>
        </p>
      </div>
    );
  }
  return null;
};

export function RevenueChart() {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <h3 className="text-[11px] uppercase tracking-wide text-[#6b7280] font-medium">
            Quarterly Revenue by Segment
          </h3>
          <p className="text-xs text-[#9ca3af]">$M — lighter bars are estimates</p>
        </div>
        <div className="flex items-center gap-4 text-[10px] text-[#9ca3af]">
          <span>
            <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[#0d3b66] mr-1 align-middle" />
            Prenatal
          </span>
          <span>
            <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[#c0392b] mr-1 align-middle" />
            Oncology
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
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
            dataKey="quarter"
            stroke="#d1c4b0"
            tick={{ fill: "#6b7280", fontSize: 10 }}
            tickLine={false}
            axisLine={{ stroke: "#e5d5c3" }}
          />
          <YAxis
            stroke="#d1c4b0"
            tick={{ fill: "#9ca3af", fontSize: 10 }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `$${v}M`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="prenatal"
            stackId="a"
            fill="#0d3b66"
            radius={[0, 0, 0, 0]}
            maxBarSize={36}
          >
            {data.map((entry, index) => (
              <Cell
                key={`prenatal-${index}`}
                fillOpacity={entry.estimated ? 0.35 : 0.85}
              />
            ))}
          </Bar>
          <Bar
            dataKey="oncology"
            stackId="a"
            fill="#c0392b"
            radius={[2, 2, 0, 0]}
            maxBarSize={36}
          >
            {data.map((entry, index) => (
              <Cell
                key={`oncology-${index}`}
                fillOpacity={entry.estimated ? 0.35 : 0.85}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
