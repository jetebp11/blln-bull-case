"use client";

const competitors = [
  {
    ticker: "BLLN",
    name: "BillionToOne",
    marketCap: "$3.3B",
    revenue: "$305M",
    rev26e: "$437M",
    revenueGrowth: "100%",
    evRev: "9.1x",
    evRev26e: "6.4x",
    grossMargin: "71%",
    profitable: true,
    highlight: true,
    focus: "Prenatal + Oncology",
  },
  {
    ticker: "NTRA",
    name: "Natera",
    marketCap: "$27.5B",
    revenue: "$2.31B",
    rev26e: "$2.66B",
    revenueGrowth: "42%",
    evRev: "11.0x",
    evRev26e: "9.5x",
    grossMargin: "62%",
    profitable: false,
    highlight: false,
    focus: "Prenatal + Oncology + Organ",
  },
  {
    ticker: "GH",
    name: "Guardant Health",
    marketCap: "$11.5B",
    revenue: "$982M",
    rev26e: "$1.27B",
    revenueGrowth: "31%",
    evRev: "11.9x",
    evRev26e: "9.3x",
    grossMargin: "64%",
    profitable: false,
    highlight: false,
    focus: "Oncology Liquid Biopsy",
  },
  {
    ticker: "CAI",
    name: "Caris Life Sciences",
    marketCap: "$5.3B",
    revenue: "$812M",
    rev26e: "$1.01B",
    revenueGrowth: "97%",
    evRev: "6.5x",
    evRev26e: "5.2x",
    grossMargin: "66%",
    profitable: false,
    highlight: false,
    focus: "Genomic Profiling (Oncology)",
  },
  {
    ticker: "GRAL",
    name: "GRAIL",
    marketCap: "$1.7B",
    revenue: "$147M",
    rev26e: "~$180M",
    revenueGrowth: "17%",
    evRev: "6.0x",
    evRev26e: "~4.9x",
    grossMargin: "—",
    profitable: false,
    highlight: false,
    focus: "Multi-Cancer Early Detection",
  },
];

export function CompetitorTable() {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3 pb-2 border-b border-[#e5d5c3]">
        <h3 className="text-[11px] uppercase tracking-wide text-[#6b7280] font-medium">
          Diagnostic Peers — Valuation & Growth
        </h3>
        <span className="text-[10px] text-[#9ca3af]">As of Mar 2026</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-[#333333]">
              {[
                { h: "Company", align: "text-left" },
                { h: "Mkt Cap", align: "text-right" },
                { h: "Rev (TTM)", align: "text-right" },
                { h: "Growth", align: "text-right" },
                { h: "EV/Rev", align: "text-right" },
                { h: "FY26E Rev", align: "text-right" },
                { h: "Fwd EV/Rev", align: "text-right" },
                { h: "Gross Mgn", align: "text-right" },
                { h: "Profitable", align: "text-right" },
              ].map(({ h, align }) => (
                <th
                  key={h}
                  className={`py-2 px-1.5 text-[10px] uppercase tracking-wider text-[#6b7280] font-medium whitespace-nowrap ${align}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {competitors.map((c) => (
              <tr
                key={c.ticker}
                className={`border-b border-[#f0e6d8] last:border-0 ${
                  c.highlight ? "bg-[#fff1e5]" : ""
                }`}
              >
                <td className="py-2.5 px-1.5">
                  <span
                    className={`font-mono text-xs font-semibold ${
                      c.highlight ? "text-[#0d3b66]" : "text-[#1a1a1a]"
                    }`}
                  >
                    {c.ticker}
                  </span>
                  <span className="text-[#9ca3af] text-xs ml-1.5 hidden lg:inline">
                    {c.name}
                  </span>
                </td>
                <td className="text-right py-2.5 px-1.5 text-[#1a1a1a]">
                  {c.marketCap}
                </td>
                <td className="text-right py-2.5 px-1.5 text-[#1a1a1a]">
                  {c.revenue}
                </td>
                <td className="text-right py-2.5 px-1.5">
                  <span
                    className={`font-medium ${
                      parseInt(c.revenueGrowth) >= 40
                        ? "text-[#1a7a4c]"
                        : "text-[#1a1a1a]"
                    }`}
                  >
                    +{c.revenueGrowth}
                  </span>
                </td>
                <td className="text-right py-2.5 px-1.5">
                  <span
                    className={`font-semibold ${
                      c.highlight ? "text-[#0d3b66]" : "text-[#1a1a1a]"
                    }`}
                  >
                    {c.evRev}
                  </span>
                </td>
                <td className="text-right py-2.5 px-1.5 text-[#6b7280]">
                  {c.rev26e}
                </td>
                <td className="text-right py-2.5 px-1.5">
                  <span
                    className={`font-semibold ${
                      c.highlight ? "text-[#0d3b66]" : "text-[#1a1a1a]"
                    }`}
                  >
                    {c.evRev26e}
                  </span>
                </td>
                <td className="text-right py-2.5 px-1.5 text-[#1a1a1a]">
                  {c.grossMargin}
                </td>
                <td className="text-right py-2.5 px-1.5">
                  <span
                    className={`text-xs font-medium ${
                      c.profitable ? "text-[#1a7a4c]" : "text-[#c0392b]"
                    }`}
                  >
                    {c.profitable ? "Yes" : "No"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-[#6b7280] mt-4 pt-3 border-t border-[#e5d5c3] leading-relaxed">
        On a forward EV/Revenue basis (FY26E), BLLN trades at{" "}
        <strong className="text-[#0d3b66]">6.4x</strong> — a significant
        discount to Natera (9.5x) and Guardant (9.3x) despite faster growth
        and being the{" "}
        <strong className="text-[#1a7a4c]">only profitable pure-play</strong>{" "}
        in the peer group. Caris (5.2x) trades cheaper on a forward basis but
        its growth is decelerating from 97% to ~24%.
      </p>
    </div>
  );
}
