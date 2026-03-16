"use client";

import {
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { PriceChart } from "@/components/price-chart";
import { CompetitorTable } from "@/components/competitor-table";
import { MultiplesChart } from "@/components/multiples-chart";
import { RevenueChart } from "@/components/revenue-chart";

/* ─── Primitives ─── */

function SectionHead({ title, id }: { title: string; id: string }) {
  return (
    <div id={id} className="pt-14 mb-5">
      <div className="border-t-[3px] border-rule pt-3">
        <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-foreground leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  sub,
  highlight,
}: {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}) {
  return (
    <div className={`py-3 ${highlight ? "" : ""}`}>
      <div className="text-[11px] uppercase tracking-wide text-muted font-medium mb-0.5">
        {label}
      </div>
      <div
        className={`text-xl font-bold ${highlight ? "text-navy" : "text-foreground"}`}
      >
        {value}
      </div>
      {sub && <div className="text-xs text-muted mt-0.5">{sub}</div>}
    </div>
  );
}

function DataRow({
  label,
  value,
  note,
  bold,
}: {
  label: string;
  value: string;
  note?: string;
  bold?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline justify-between py-1.5 border-b border-border-light last:border-0 text-sm ${
        bold ? "font-semibold" : ""
      }`}
    >
      <span className="text-muted">{label}</span>
      <span className="text-right">
        <span className="text-foreground">{value}</span>
        {note && (
          <span className="text-muted-light text-xs ml-1.5">{note}</span>
        )}
      </span>
    </div>
  );
}

function InsiderRow({
  name,
  title,
  shares,
  value,
  date,
}: {
  name: string;
  title: string;
  shares: string;
  value: string;
  date: string;
}) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-border-light last:border-0">
      <div>
        <div className="text-sm font-medium text-foreground">{name}</div>
        <div className="text-xs text-muted">{title}</div>
      </div>
      <div className="text-right">
        <div className="text-sm font-medium text-green">{shares} shares</div>
        <div className="text-xs text-muted">
          {value} &middot; {date}
        </div>
      </div>
    </div>
  );
}

function NewsItem({
  title,
  source,
  date,
  url,
  tag,
}: {
  title: string;
  source: string;
  date: string;
  url: string;
  tag: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block py-3 border-b border-border-light last:border-0 group"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-block text-[10px] uppercase tracking-wider font-semibold text-navy mb-1">
            {tag}
          </span>
          <h4 className="text-sm font-medium text-foreground group-hover:text-navy transition-colors leading-snug">
            {title}
          </h4>
          <div className="text-xs text-muted mt-1">
            {source} &middot; {date}
          </div>
        </div>
        <ExternalLink className="w-3.5 h-3.5 text-muted-light group-hover:text-navy shrink-0 mt-0.5" />
      </div>
    </a>
  );
}

/* ─── Main ─── */

export default function BullCasePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="jpm-header">
        <div className="max-w-[1100px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-white/60 text-xs font-medium tracking-widest uppercase">
              Equity Research
            </span>
            <span className="text-white/30">|</span>
            <span className="text-white text-xs font-medium">
              Healthcare &middot; Molecular Diagnostics
            </span>
          </div>
          <span className="text-white/60 text-xs">March 16, 2026</span>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-paper border-b border-border">
        <div className="max-w-[1100px] mx-auto px-6 h-11 flex items-center gap-6 overflow-x-auto text-xs font-medium text-muted">
          <a href="#thesis" className="hover:text-navy transition-colors whitespace-nowrap">
            Thesis
          </a>
          <a href="#overview" className="hover:text-navy transition-colors whitespace-nowrap">
            Overview
          </a>
          <a href="#products" className="hover:text-navy transition-colors whitespace-nowrap">
            Products
          </a>
          <a href="#technology" className="hover:text-navy transition-colors whitespace-nowrap">
            Technology
          </a>
          <a href="#competitors" className="hover:text-navy transition-colors whitespace-nowrap">
            Competitors
          </a>
          <a href="#chart" className="hover:text-navy transition-colors whitespace-nowrap">
            Price
          </a>
          <a href="#insiders" className="hover:text-navy transition-colors whitespace-nowrap">
            Insiders
          </a>
          <a href="#multiples" className="hover:text-navy transition-colors whitespace-nowrap">
            Valuation
          </a>
          <a href="#news" className="hover:text-navy transition-colors whitespace-nowrap">
            News
          </a>
        </div>
      </nav>

      <main className="max-w-[1100px] mx-auto px-6 pb-20">
        {/* ─── Hero ─── */}
        <section className="pt-10 pb-8 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-mono text-sm font-semibold text-navy tracking-wide">
                  BLLN
                </span>
                <span className="text-xs text-muted">
                  NASDAQ &middot; IPO Nov 6, 2025 @ $60
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-3">
                BillionToOne
              </h1>
              <p className="text-base text-muted max-w-lg leading-relaxed">
                Next-generation molecular diagnostics. Proprietary Quantitative
                Counting Technology disrupting prenatal screening and expanding
                into oncology liquid biopsy.
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-4xl font-serif font-bold text-foreground">
                $71.31
              </div>
              <div className="flex items-center justify-end gap-1 text-green text-sm font-medium mt-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
                +$2.20 (+3.18%)
              </div>
              <div className="text-xs text-muted mt-1">
                52W: $61.96 — $138.70
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 mt-8 border-t border-border pt-4">
            <Metric label="Market Cap" value="$3.28B" sub="EV: $2.79B" />
            <Metric
              label="FY25 Revenue"
              value="$305M"
              sub="+100% YoY"
              highlight
            />
            <Metric
              label="FY26E Guidance"
              value="$430–445M"
              sub="+41–46% YoY"
            />
            <Metric label="Gross Margin" value="71%" sub="Q4'25, +14pp YoY" />
            <Metric
              label="Analyst Target"
              value="$130"
              sub="+82% upside (7 analysts)"
              highlight
            />
          </div>
        </section>

        {/* ─── Investment Thesis ─── */}
        <SectionHead title="Investment Thesis" id="thesis" />
        <div className="bg-paper border border-border rounded p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
            {[
              {
                head: "Superior Technology (QCT)",
                body: "Molecular counting at single-molecule precision — 1,000x improvement over traditional NIPT. No paternal sample needed. Single maternal blood draw.",
              },
              {
                head: "Explosive Revenue Growth",
                body: "Revenue doubled in FY25 to $305M. Guiding $430–445M in FY26 (+41–46%). Gross margins expanded to 71%. Already GAAP profitable.",
              },
              {
                head: "Oncology Optionality",
                body: "Northstar oncology revenue grew 8x YoY to $9.1M in Q4. Pan-cancer MRD test targeting 2026 launch — management calls it a $30B TAM.",
              },
              {
                head: "Valuation Discount to Profitable Peers",
                body: "Forward EV/Rev of 6.4x vs Natera (9.5x) and Guardant (9.3x). Only profitable pure-play in the peer group. Accumulated deficit just 10% of competitors.",
              },
              {
                head: "Fortress Balance Sheet",
                body: "$496M cash vs $109M debt. FCF positive at $15.7M. No dilution risk. Well-funded through sustained profitability.",
              },
              {
                head: "100% Insider Buying, Zero Sales",
                body: "11 insider trades since IPO — all purchases, totalling ~$2.9M. Board members buying on the open market at current prices.",
              },
            ].map((p, i) => (
              <div key={i} className="flex gap-3">
                <span className="font-serif text-lg font-bold text-navy mt-0.5 shrink-0 w-5 text-right">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-0.5">
                    {p.head}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Company Overview ─── */}
        <SectionHead title="Company Overview" id="overview" />
        <div className="grid md:grid-cols-[1fr_280px] gap-8 mb-6">
          <div className="text-[15px] text-muted leading-[1.7] space-y-4">
            <p>
              BillionToOne is a precision diagnostics company founded in 2016 by{" "}
              <strong className="text-foreground">Oguzhan Atay, PhD</strong> and{" "}
              <strong className="text-foreground">Aditya Rajagopal</strong>,
              both Stanford PhD students. Backed by Y Combinator (S17), the
              company developed{" "}
              <strong className="text-foreground">
                Quantitative Counting Templates (QCT)
              </strong>{" "}
              — a proprietary single-molecule NGS platform that uses synthetic
              DNA reference standards to count cfDNA molecules with single
              base-pair precision, achieving a 1,000-fold improvement over
              traditional NIPT methods.
            </p>
            <p>
              Unlike traditional approaches that rely on sequencing depth (which
              cannot overcome amplification noise), QCT adds reference
              calibrators <em>before</em> amplification — enabling absolute
              quantification of target molecules. Higher accuracy at lower
              sequencing cost, with no paternal sample needed.
            </p>
            <p>
              The company went public on November 6, 2025, raising ~$314M in an
              upsized IPO at $60/share (opened at ~$100.56). BillionToOne
              delivered 170,000 tests in Q4 2025 alone at an average selling
              price of $561. The company name refers to their ability to detect
              one molecule among a billion.
            </p>
          </div>
          <div className="bg-paper border border-border rounded p-5">
            <div className="text-[11px] uppercase tracking-wide text-muted font-medium mb-3 pb-2 border-b border-border">
              Key Facts
            </div>
            <div className="space-y-2">
              {[
                ["Founded", "2016 (Stanford / YC S17)"],
                ["HQ", "Menlo Park, CA"],
                ["Employees", "~620"],
                ["IPO", "Nov 6, 2025 @ $60"],
                ["CEO", "Oguzhan Atay, PhD"],
                ["Exchange", "NASDAQ"],
                ["Prenatal Share", "~15% U.S. NIPT"],
                ["Voting Control", "64.4% (founders, Class B)"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm">
                  <span className="text-muted">{k}</span>
                  <span className="text-foreground font-medium text-right">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Products ─── */}
        <SectionHead title="Products & Pipeline" id="products" />
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* UNITY */}
          <div className="bg-paper border border-border rounded p-5">
            <div className="flex items-baseline gap-2 mb-1">
              <h3 className="font-serif text-lg font-bold text-foreground">
                UNITY Complete
              </h3>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-navy">
                Prenatal
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-3">
              Comprehensive prenatal screen — aneuploidy, microdeletions, 14
              single-gene disorders (CF, SCD, SMA), and fetal antigen typing.
              All from a single maternal blood draw, as early as 9 weeks
              gestation. Results in 5–10 days.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {[
                "Aneuploidy",
                "Microdeletions",
                "Single-Gene",
                "Fetal Rh",
                "SCD",
                "CF",
                "SMA",
              ].map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-1.5 py-0.5 border border-border rounded text-muted font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="border-t border-border pt-3 space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Q4 2025 Revenue</span>
                <span className="font-semibold">$86.1M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">YoY Growth</span>
                <span className="font-semibold text-green">+99%</span>
              </div>
            </div>
          </div>

          {/* Northstar */}
          <div className="bg-paper border border-border rounded p-5">
            <div className="flex items-baseline gap-2 mb-1">
              <h3 className="font-serif text-lg font-bold text-foreground">
                Northstar Platform
              </h3>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-accent">
                Oncology
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-3">
              Expanding liquid biopsy suite:{" "}
              <strong className="text-foreground">Select</strong> (therapy
              selection),{" "}
              <strong className="text-foreground">Response</strong> (treatment
              monitoring),{" "}
              <strong className="text-foreground">PGx</strong> (pharmacogenomics,
              Feb &apos;26),{" "}
              <strong className="text-foreground">Select CH</strong> (clonal
              hematopoiesis, Feb &apos;26). Pan-cancer MRD test targeting end of
              2026 — management calls it a $30B opportunity.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {["Liquid Biopsy", "MRD", "PGx", "Pan-Cancer", "CH Detection"].map(
                (t) => (
                  <span
                    key={t}
                    className="text-[10px] px-1.5 py-0.5 border border-border rounded text-muted font-medium"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
            <div className="border-t border-border pt-3 space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Q4 2025 Revenue</span>
                <span className="font-semibold">$9.1M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">YoY Growth</span>
                <span className="font-semibold text-green">+727%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-paper border border-border rounded p-5 mb-6">
          <div className="text-[11px] uppercase tracking-wide text-muted font-medium mb-4">
            Milestones
          </div>
          <div className="relative">
            <div className="absolute left-[3px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-3">
              {[
                { y: "2016", t: "Founded at Stanford; Y Combinator S17", done: true },
                { y: "2020", t: "UNITY prenatal test launched; rapid OB/GYN adoption", done: true },
                { y: "2022", t: "Single-gene & fetal antigen expansion (SCD, CF, Rh)", done: true },
                { y: "2024", t: "Northstar oncology launched; selected for LC-SCRUM-TRY (Japan)", done: true },
                { y: "Nov '25", t: "IPO on NASDAQ — raised $314M at $60/share", done: true },
                { y: "Feb '26", t: "Northstar PGx + Select CH add-ons launched", done: true },
                { y: "2026E", t: "Pan-cancer MRD test launch; $430–445M revenue; GAAP profitable full year", done: false },
              ].map((m, i) => (
                <div key={i} className="flex gap-3 items-start pl-0">
                  <div
                    className={`w-[7px] h-[7px] rounded-full mt-[7px] shrink-0 z-10 ${
                      m.done ? "bg-navy" : "bg-border ring-2 ring-border"
                    }`}
                  />
                  <div>
                    <span className="font-mono text-xs text-navy font-medium">
                      {m.y}
                    </span>
                    <span className="text-sm text-muted ml-2">{m.t}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Revenue Chart ─── */}
        <SectionHead title="Revenue Trajectory" id="revenue" />
        <div className="bg-paper border border-border rounded p-5 mb-6">
          <RevenueChart />
        </div>

        {/* ─── Technology ─── */}
        <SectionHead title="Technology Edge" id="technology" />
        <div className="bg-paper border border-border rounded p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-muted font-medium mb-3">
                Traditional cfDNA (Competitors)
              </h3>
              <div className="space-y-2.5">
                {[
                  "Relies on sequencing depth and statistical inference",
                  "Higher cost per test — cannot overcome amplification noise",
                  "Some tests require paternal sample for accuracy",
                  "Limited by fetal fraction — unreliable in early pregnancy or high BMI",
                  "Single-gene screening requires separate test and sample",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <span className="text-red mt-0.5 shrink-0 text-xs">
                      &#x2715;
                    </span>
                    <span className="text-muted leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-navy font-medium mb-3">
                QCT — BillionToOne
              </h3>
              <div className="space-y-2.5">
                {[
                  "Molecular counting at single-molecule precision (1,000x improvement)",
                  "Lower cost — calibrators added before amplification",
                  "No paternal sample needed — 99.4% negative predictive value",
                  ">98% sensitivity, >99% specificity; 100% CF detection",
                  "Unified platform: aneuploidy + single-gene + fetal antigen, one draw",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-green mt-[3px] shrink-0" />
                    <span className="text-foreground leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-border">
            <p className="text-sm text-muted leading-relaxed italic">
              QCT adds synthetic reference molecules before amplification and
              sequencing — counting individual target molecules rather than
              relying on relative coverage depth. This is analogous to counting
              grains of sand individually vs. weighing them: counting gives
              exact numbers, weighing gives estimates with error bars.
            </p>
          </div>
        </div>

        {/* ─── Competitor Table ─── */}
        <SectionHead title="Peer Comparison" id="competitors" />
        <div className="bg-paper border border-border rounded p-5 mb-6">
          <CompetitorTable />
        </div>

        {/* ─── Price Chart ─── */}
        <SectionHead title="Price History" id="chart" />
        <div className="bg-paper border border-border rounded p-5 mb-6">
          <PriceChart />
        </div>

        {/* ─── Insider Activity ─── */}
        <SectionHead title="Insider Activity" id="insiders" />
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-green-bg border border-green/20 rounded p-4">
            <div className="text-[11px] uppercase tracking-wide text-muted font-medium mb-0.5">
              Insider Trades (6mo)
            </div>
            <div className="text-2xl font-serif font-bold text-green">11</div>
            <div className="text-xs text-green">All purchases</div>
          </div>
          <div className="bg-paper border border-border rounded p-4">
            <div className="text-[11px] uppercase tracking-wide text-muted font-medium mb-0.5">
              Insider Sells
            </div>
            <div className="text-2xl font-serif font-bold text-foreground">
              0
            </div>
            <div className="text-xs text-muted">Zero sales since IPO</div>
          </div>
          <div className="bg-paper border border-border rounded p-4">
            <div className="text-[11px] uppercase tracking-wide text-muted font-medium mb-0.5">
              Total Insider Buys
            </div>
            <div className="text-2xl font-serif font-bold text-foreground">
              ~$2.9M
            </div>
            <div className="text-xs text-muted">Open market purchases</div>
          </div>
        </div>
        <div className="bg-paper border border-border rounded p-5 mb-6">
          <div className="text-[11px] uppercase tracking-wide text-muted font-medium mb-3 pb-2 border-b border-border">
            Form 4 Filings
          </div>
          <InsiderRow
            name="Thomas S. Bremner"
            title="Board Director"
            shares="41,666"
            value="$2.50M"
            date="Nov 7, 2025 (6 tranches at $60)"
          />
          <InsiderRow
            name="Nancy Joann Johnson"
            title="Board Director"
            shares="6,900"
            value="$414K"
            date="Dec 2025 – Jan 2026"
          />
          <InsiderRow
            name="Other Insiders"
            title="Various Officers"
            shares="~2,500"
            value="~$150K"
            date="Various"
          />
          <div className="mt-4 pt-3 border-t border-border grid md:grid-cols-2 gap-4">
            <p className="text-xs text-muted leading-relaxed">
              100% of insider transactions since IPO have been purchases.
              Bremner bought $2.5M at the $60 IPO price — now +19% in the money.
              Co-founders retain Class B stock with ~64.4% voting control.
            </p>
            <div className="text-xs text-muted bg-salmon rounded p-3">
              <strong className="text-foreground">Lock-up expiry:</strong> May
              5, 2026 (180 days post-IPO). Insider ownership: 11.13%.
              Institutional: 19.31% (still building post-IPO).
            </div>
          </div>
        </div>

        {/* ─── Valuation ─── */}
        <SectionHead title="Valuation & Multiples" id="multiples" />
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-paper border border-border rounded p-5">
            <div className="text-[11px] uppercase tracking-wide text-muted font-medium mb-3 pb-2 border-b border-border">
              Financial Summary
            </div>
            <div className="space-y-0.5">
              <DataRow label="Enterprise Value" value="$2.79B" />
              <DataRow
                label="EV / Revenue (TTM)"
                value="9.1x"
                note="vs 11x NTRA, 12x GH"
              />
              <DataRow
                label="EV / Rev (FY26E)"
                value="6.4x"
                note="vs 9.5x NTRA, 9.3x GH"
              />
              <DataRow
                label="Forward P/S"
                value="7.65x"
                note="on $437M midpoint"
              />
              <DataRow
                label="P/E (TTM)"
                value="508.9x"
                note="just turned profitable"
              />
              <DataRow
                label="Forward P/E"
                value="150.8x"
                note="earnings ramping"
              />
              <DataRow label="Gross Margin" value="71%" note="Q4'25, +14pp" />
              <DataRow
                label="Operating Margin"
                value="5.3%"
                note="first year profitable"
              />
              <DataRow label="Free Cash Flow" value="$15.7M" note="FY25" />
              <DataRow
                label="Accumulated Deficit"
                value="$275M"
                note="10% of peers"
              />
            </div>
          </div>
          <div className="bg-paper border border-border rounded p-5">
            <div className="text-[11px] uppercase tracking-wide text-muted font-medium mb-3 pb-2 border-b border-border">
              EV / Revenue — Peer Comparison
            </div>
            <MultiplesChart />
          </div>
        </div>

        {/* Implied valuations */}
        <div className="bg-paper border border-navy/20 rounded p-5 mb-6">
          <div className="text-[11px] uppercase tracking-wide text-navy font-medium mb-4">
            Implied Share Price at Various Multiples (FY26E Revenue: $437M)
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { m: "9x", p: "$71", n: "Current" },
              { m: "10x", p: "$84", n: "+18%" },
              { m: "11x", p: "$105", n: "+47% (NTRA)" },
              { m: "12x", p: "$114", n: "+60% (GH)" },
              { m: "15x", p: "$143", n: "+101%" },
            ].map(({ m, p, n }) => (
              <div key={m} className="text-center py-3 border border-border rounded">
                <div className="text-xs text-muted mb-0.5">{m} EV/Rev</div>
                <div className="text-xl font-serif font-bold text-foreground">
                  {p}
                </div>
                <div className="text-[10px] text-navy font-medium">{n}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Balance Sheet */}
        <div className="bg-paper border border-border rounded p-5 mb-6">
          <div className="text-[11px] uppercase tracking-wide text-muted font-medium mb-3 pb-2 border-b border-border">
            Balance Sheet — December 31, 2025
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { l: "Cash", v: "$496M", c: "text-green" },
              { l: "Total Debt", v: "$109M", c: "" },
              { l: "Net Cash", v: "$387M", c: "text-green" },
              { l: "Equity", v: "$480M", c: "" },
              { l: "Accum. Deficit", v: "−$275M", c: "text-red" },
            ].map(({ l, v, c }) => (
              <div key={l}>
                <div className="text-[11px] uppercase tracking-wide text-muted font-medium mb-0.5">
                  {l}
                </div>
                <div className={`text-xl font-serif font-bold ${c || "text-foreground"}`}>
                  {v}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-4 pt-3 border-t border-border leading-relaxed">
            BillionToOne achieved GAAP profitability with only{" "}
            <strong className="text-foreground">
              10% of the accumulated deficit
            </strong>{" "}
            of public competitors — a signal of exceptional capital efficiency.
            Net cash of $387M (~$8.42/share) with FCF positive and positive
            operating income expected for full year 2026.
          </p>
        </div>

        {/* ─── Analyst Coverage ─── */}
        <SectionHead title="Analyst Coverage" id="analysts" />
        <div className="bg-paper border border-border rounded p-5 mb-6">
          <div className="grid md:grid-cols-3 gap-4 mb-5 pb-4 border-b border-border">
            <div>
              <div className="text-[11px] uppercase tracking-wide text-muted font-medium mb-0.5">
                Consensus
              </div>
              <div className="text-xl font-serif font-bold text-green">Buy</div>
              <div className="text-xs text-muted">7 analysts</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wide text-muted font-medium mb-0.5">
                Avg. Price Target
              </div>
              <div className="text-xl font-serif font-bold text-foreground">
                $129.57
              </div>
              <div className="text-xs text-green">+81.7% upside</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wide text-muted font-medium mb-0.5">
                Target Range
              </div>
              <div className="text-xl font-serif font-bold text-foreground">
                $90 — $150
              </div>
            </div>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-1.5 text-[10px] uppercase tracking-wider text-muted font-medium">
                  Firm
                </th>
                <th className="text-left py-1.5 text-[10px] uppercase tracking-wider text-muted font-medium">
                  Analyst
                </th>
                <th className="text-center py-1.5 text-[10px] uppercase tracking-wider text-muted font-medium">
                  Rating
                </th>
                <th className="text-right py-1.5 text-[10px] uppercase tracking-wider text-muted font-medium">
                  Target
                </th>
                <th className="text-right py-1.5 text-[10px] uppercase tracking-wider text-muted font-medium">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["JP Morgan", "Casey Woodring", "Buy", "$145", "Dec 10, 2025"],
                ["BTIG", "Mark Massaro", "Strong Buy", "$140", "Mar 5, 2026"],
                [
                  "Guggenheim",
                  "Subbu Nambi",
                  "Strong Buy",
                  "$120",
                  "Mar 5, 2026",
                ],
                [
                  "William Blair",
                  "Andrew Brackmann",
                  "Buy",
                  "—",
                  "Mar 2026",
                ],
                [
                  "Wells Fargo",
                  "Brandon Couillard",
                  "Hold",
                  "$90",
                  "Mar 5, 2026",
                ],
              ].map(([firm, analyst, rating, target, date]) => (
                <tr
                  key={firm}
                  className="border-b border-border-light last:border-0"
                >
                  <td className="py-2 font-medium text-foreground">{firm}</td>
                  <td className="py-2 text-muted">{analyst}</td>
                  <td className="py-2 text-center">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded ${
                        rating === "Buy" || rating === "Strong Buy"
                          ? "bg-green-bg text-green"
                          : "bg-salmon text-muted"
                      }`}
                    >
                      {rating}
                    </span>
                  </td>
                  <td className="py-2 text-right font-semibold">{target}</td>
                  <td className="py-2 text-right text-muted text-xs">
                    {date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ─── News ─── */}
        <SectionHead title="Recent News" id="news" />
        <div className="grid md:grid-cols-2 gap-x-8 mb-6">
          <div className="bg-paper border border-border rounded p-5">
            <NewsItem
              title="BillionToOne Reports Q4 and Full Year 2025 Results — Revenue Up 100%, Raises 2026 Guidance"
              source="GlobeNewsWire"
              date="Mar 4, 2026"
              url="https://investors.billiontoone.com/news-releases/news-release-details/billiontoone-reports-fourth-quarter-and-full-year-2025-results"
              tag="Earnings"
            />
            <NewsItem
              title="BillionToOne Swings to Profit in Q4; Lifts FY26 Guidance to $430–445M"
              source="Nasdaq"
              date="Mar 5, 2026"
              url="https://www.nasdaq.com/articles/billiontoone-swings-profit-q4-lifts-fy26-guidance"
              tag="Earnings"
            />
            <NewsItem
              title="BTIG Maintains Buy, Lowers PT to $140 Post-Earnings"
              source="Meyka"
              date="Mar 5, 2026"
              url="https://meyka.com/blog/btig-maintains-buy-on-billiontoone-inc-blln-march-2026-0603/"
              tag="Analyst"
            />
            <NewsItem
              title="Wells Fargo Adjusts Price Target to $90, Maintains Equal-Weight"
              source="GuruFocus"
              date="Mar 5, 2026"
              url="https://www.gurufocus.com/news/8682103/wells-fargo-adjusts-billiontoone-blln-price-target-amidst-ongoing-market-dynamics-blln-stock-news"
              tag="Analyst"
            />
          </div>
          <div className="bg-paper border border-border rounded p-5">
            <NewsItem
              title="Reaffirmed Growth Targets Support Reiterated Buy Rating"
              source="TipRanks"
              date="Feb 2026"
              url="https://www.tipranks.com/news/ratings/billiontoone-reaffirmed-growth-targets-and-upside-to-2026-support-reiterated-buy-rating-ratings"
              tag="Analyst"
            />
            <NewsItem
              title="BillionToOne Shares Surge Following $273M IPO"
              source="GenomeWeb"
              date="Nov 2025"
              url="https://www.genomeweb.com/cancer/billiontoone-shares-surge-following-firms-273m-ipo"
              tag="IPO"
            />
            <NewsItem
              title="Reaffirms 2025 Guidance, Projects 40–45% Revenue Growth in 2026"
              source="Investing.com"
              date="Dec 2025"
              url="https://www.investing.com/news/company-news/billiontoone-reaffirms-2025-guidance-projects-4045-revenue-growth-in-2026-93CH-4441955"
              tag="Guidance"
            />
            <NewsItem
              title="What Makes BillionToOne an Attractive Bet?"
              source="Insider Monkey"
              date="Feb 2026"
              url="https://www.insidermonkey.com/blog/what-makes-billiontoone-blln-an-attractive-bet-1710224/"
              tag="Analysis"
            />
          </div>
        </div>

        {/* ─── Publications ─── */}
        <SectionHead title="Publications & Validation" id="publications" />
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            {
              title:
                "Quantitative Counting Technology for accurate trisomy detection across all fetal fractions",
              journal: "Nature Medicine",
              year: "2022",
              finding:
                ">99.9% sensitivity and >99.9% specificity for T21 detection with QCT",
            },
            {
              title:
                "Cell-free DNA analysis with molecular counting for single-gene disorder screening",
              journal: "Am. J. Human Genetics",
              year: "2023",
              finding:
                "First validation of cfDNA-based single-gene disorder screening without paternal sample",
            },
            {
              title:
                "Clinical validation of UNITY prenatal test across diverse populations",
              journal: "Prenatal Diagnosis",
              year: "2023",
              finding:
                "Consistent high accuracy across BMI ranges and fetal fractions",
            },
            {
              title:
                "Northstar Select demonstrates superior sensitivity in prospective head-to-head validation",
              journal: "Clinical Validation",
              year: "2025",
              finding:
                "51% more actionable SNVs/indels, 109% more CNVs, 45% fewer null reports vs comparators",
            },
          ].map((pub, i) => (
            <div key={i} className="bg-paper border border-border rounded p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-semibold text-navy uppercase tracking-wider">
                  {pub.journal}
                </span>
                <span className="text-[10px] text-muted">{pub.year}</span>
              </div>
              <h4 className="text-sm font-medium text-foreground mb-2 leading-snug font-serif">
                {pub.title}
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                <strong className="text-green">Finding:</strong> {pub.finding}
              </p>
            </div>
          ))}
        </div>

        {/* ─── Catalysts ─── */}
        <SectionHead title="Upcoming Catalysts" id="catalysts" />
        <div className="bg-paper border border-border rounded p-5 mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-1.5 text-[10px] uppercase tracking-wider text-muted font-medium w-24">
                  Timing
                </th>
                <th className="text-left py-1.5 text-[10px] uppercase tracking-wider text-muted font-medium">
                  Catalyst
                </th>
                <th className="text-center py-1.5 text-[10px] uppercase tracking-wider text-muted font-medium w-20">
                  Impact
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Q1 '26",
                  "Medicare coverage expansion for UNITY prenatal screening",
                  "High",
                ],
                [
                  "~May '26",
                  "Lock-up expiry (180 days) — watch insider behavior",
                  "Medium",
                ],
                [
                  "Q2 '26",
                  "Q1 2026 earnings — first quarter toward raised guidance",
                  "Medium",
                ],
                [
                  "H2 '26",
                  "Pan-cancer MRD test launch ($30B TAM opportunity)",
                  "High",
                ],
                [
                  "FY '26",
                  "Full-year GAAP profitability — triggers institutional buying, potential index inclusion",
                  "High",
                ],
                [
                  "2027+",
                  "International market entry (EU, Asia regulatory submissions)",
                  "Medium",
                ],
              ].map(([timing, desc, impact]) => (
                <tr
                  key={desc}
                  className="border-b border-border-light last:border-0"
                >
                  <td className="py-2.5 font-mono text-xs text-navy font-medium align-top">
                    {timing}
                  </td>
                  <td className="py-2.5 text-foreground">{desc}</td>
                  <td className="py-2.5 text-center">
                    <span
                      className={`text-[10px] font-semibold ${
                        impact === "High" ? "text-green" : "text-muted"
                      }`}
                    >
                      {impact}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ─── Risks ─── */}
        <SectionHead title="Key Risks" id="risks" />
        <div className="bg-red-bg border border-red/10 rounded p-5 mb-16">
          <div className="grid md:grid-cols-2 gap-2">
            {[
              "Natera dominance (~60% NIPT share) — competitive response risk",
              "Reimbursement / payer coverage changes for NIPT",
              "Oncology execution risk — still very early with small revenue base",
              "Lock-up expiry (May 5, 2026) could create selling pressure",
              "Regulatory risk — changes to LDT oversight or FDA requirements",
              "Stock down ~49% from 52W high — sentiment overhang",
            ].map((risk, i) => (
              <div key={i} className="flex gap-2 text-sm py-1">
                <span className="text-red font-bold shrink-0">!</span>
                <span className="text-muted">{risk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Footer ─── */}
        <footer className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted leading-relaxed mb-2">
            This document is for informational purposes only and does not
            constitute investment advice. Data as of March 16, 2026.
            Always conduct your own due diligence before making investment
            decisions.
          </p>
          <p className="text-xs text-muted-light">
            Data sourced from SEC filings, company earnings releases, and
            publicly available analyst reports.
          </p>
        </footer>
      </main>
    </div>
  );
}
