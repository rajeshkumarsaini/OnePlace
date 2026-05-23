"use client";

import { BookOpen, Scale, BarChart2, Settings2, ChevronRight, CheckCircle } from "lucide-react";

const layers = [
  {
    icon: Scale,
    title: "Regulatory Intelligence",
    color: "blue",
    description: "Continuously updated regulatory knowledge across global jurisdictions.",
    items: ["BASEL III / IV Capital Requirements", "DORA Digital Resilience", "MiFID II / MiFIR", "SOX Financial Controls", "EMIR Trade Reporting", "Dodd-Frank Compliance"],
  },
  {
    icon: BarChart2,
    title: "Market Domain Knowledge",
    color: "emerald",
    description: "Deep financial market expertise encoded into reusable AI context.",
    items: ["Derivatives Pricing Models", "Credit Risk Frameworks", "Fixed Income Analytics", "FX & Rates Logic", "Equity Research Patterns", "Structured Products"],
  },
  {
    icon: Settings2,
    title: "Operational Processes",
    color: "purple",
    description: "End-to-end financial operations modelled as executable context.",
    items: ["KYC / AML Due Diligence", "Trade Lifecycle Management", "Post-Trade Reconciliation", "Regulatory Reporting", "Collateral Management", "Fund Administration"],
  },
];

const experts = [
  { role: "Chief Risk Officers", count: "12" },
  { role: "Compliance Specialists", count: "28" },
  { role: "Quant Analysts", count: "19" },
  { role: "Operations Experts", count: "34" },
];

export default function ContextFabric() {
  return (
    <section id="context-fabric" className="py-24 bg-[#060E1A] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge mb-4 mx-auto w-fit">
            <BookOpen className="w-3 h-3" />
            Domain Intelligence Layer
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Domain-Expert{" "}
            <span className="text-gradient">Context Fabric</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Not just AI — financial intelligence built by industry veterans with decades of hands-on
            experience across capital markets, compliance, and operations.
          </p>
        </div>

        {/* Expert contributors bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {experts.map(({ role, count }) => (
            <div key={role} className="glass rounded-xl p-4 text-center card-hover">
              <div className="text-3xl font-black text-gradient-blue mb-1">{count}+</div>
              <div className="text-sm text-slate-400">{role}</div>
            </div>
          ))}
        </div>

        {/* Fabric diagram */}
        <div className="relative mb-16">
          {/* Fabric visual — layered mesh */}
          <div className="flex items-center justify-center mb-12">
            <svg viewBox="0 0 800 200" className="w-full max-w-3xl h-32 opacity-60" xmlns="http://www.w3.org/2000/svg">
              {/* Layer lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={`h${i}`}
                  x1="0"
                  y1={40 * i + 10}
                  x2="800"
                  y2={40 * i + 10}
                  stroke={i % 2 === 0 ? "#2563EB" : "#10B981"}
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  strokeDasharray="8 4"
                />
              ))}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((i) => (
                <line
                  key={`v${i}`}
                  x1={40 * i + 5}
                  y1="0"
                  x2={40 * i + 5}
                  y2="200"
                  stroke="#2563EB"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                />
              ))}
              {/* Intersection nodes */}
              {[1, 3, 7, 11, 14, 17].map((col) =>
                [1, 3].map((row) => (
                  <circle
                    key={`n${col}${row}`}
                    cx={40 * col + 5}
                    cy={40 * row + 10}
                    r="4"
                    fill="#3B82F6"
                    opacity="0.8"
                  />
                ))
              )}
              {/* Labels */}
              <text x="60" y="105" fill="#64748B" fontSize="11" fontFamily="monospace">REGULATORY</text>
              <text x="310" y="105" fill="#64748B" fontSize="11" fontFamily="monospace">MARKET DOMAIN</text>
              <text x="560" y="105" fill="#64748B" fontSize="11" fontFamily="monospace">OPERATIONS</text>
            </svg>
          </div>

          {/* Three columns */}
          <div className="grid md:grid-cols-3 gap-6">
            {layers.map(({ icon: Icon, title, color, description, items }) => (
              <div
                key={title}
                className={`glass rounded-2xl p-6 card-hover border ${
                  color === "blue"
                    ? "border-blue-800/30 hover:border-blue-600/50"
                    : color === "emerald"
                    ? "border-emerald-800/30 hover:border-emerald-600/50"
                    : "border-purple-800/30 hover:border-purple-600/50"
                } transition-colors duration-300`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    color === "blue"
                      ? "bg-blue-600/20"
                      : color === "emerald"
                      ? "bg-emerald-600/20"
                      : "bg-purple-600/20"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      color === "blue"
                        ? "text-blue-400"
                        : color === "emerald"
                        ? "text-emerald-400"
                        : "text-purple-400"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400 mb-5 leading-relaxed">{description}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle
                        className={`w-3.5 h-3.5 flex-shrink-0 ${
                          color === "blue"
                            ? "text-blue-400"
                            : color === "emerald"
                            ? "text-emerald-400"
                            : "text-purple-400"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="glass rounded-2xl p-8 border border-blue-900/30 text-center">
          <blockquote className="text-lg text-slate-300 italic leading-relaxed mb-4">
            &ldquo;OnePlace&apos;s Context Fabric is the first platform we&apos;ve used that actually understands
            the nuances of Basel IV capital calculations without needing us to explain the underlying
            business logic. It speaks our language from day one.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-800/60 border border-blue-700/40 flex items-center justify-center text-sm font-bold text-blue-300">
              MK
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-white">Michael K.</div>
              <div className="text-xs text-slate-500">Chief Risk Officer, Global Tier-1 Bank</div>
            </div>
            <div className="ml-4">
              <ChevronRight className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
