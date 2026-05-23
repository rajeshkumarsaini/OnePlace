"use client";

import { Target, Map, Database, Bot, ArrowRight, CheckSquare } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Define Business Outcomes",
    color: "blue",
    description:
      "Start with what matters: reduce operational risk, cut settlement failures, improve customer onboarding speed. OnePlace works backwards from your desired business results.",
    examples: ["Reduce trade fails by 60%", "Cut KYC time from 5 days to 4 hours", "Achieve real-time regulatory reporting"],
  },
  {
    number: "02",
    icon: Map,
    title: "Map to KPIs & Processes",
    color: "emerald",
    description:
      "The platform automatically maps each business outcome to measurable KPIs and the underlying financial processes that drive them — using the Context Fabric as the backbone.",
    examples: ["Settlement rate → Trade lifecycle process", "AML hit rate → Customer screening process", "Capital ratio → Risk calculation process"],
  },
  {
    number: "03",
    icon: Database,
    title: "Connect to Your Data",
    color: "purple",
    description:
      "OnePlace integrates with your existing data estate — core banking, trading systems, data warehouses — and aligns structured and unstructured data to the mapped processes.",
    examples: ["Bloomberg / Refinitiv feeds", "Core banking (Temenos, Finastra)", "Data lakes and warehouses"],
  },
  {
    number: "04",
    icon: Bot,
    title: "Agents Execute Automatically",
    color: "orange",
    description:
      "Domain-aware AI agents are deployed against your processes and data. They monitor, decide, and act — continuously optimising toward the KPIs you defined in step one.",
    examples: ["Real-time exception handling", "Autonomous regulatory filing", "Predictive risk intervention"],
  },
];

export default function Methodology() {
  return (
    <section id="platform" className="py-32 lg:py-44 bg-[#0A1628] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="badge mb-6 mx-auto w-fit">
            <CheckSquare className="w-3 h-3" />
            Our Methodology
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Business Outcome-Based{" "}
            <span className="text-gradient">Automation</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Unlike traditional AI tools that start with data, OnePlace starts with your business goals
            and works backwards — ensuring every automation directly impacts what your organisation cares about.
          </p>
        </div>

        {/* Flow diagram header */}
        <div className="flex items-center justify-center gap-2 mb-16 overflow-x-auto pb-2">
          {[
            { label: "Business Outcomes", short: "Outcomes" },
            { label: "KPIs", short: "KPIs" },
            { label: "Processes", short: "Processes" },
            { label: "Data", short: "Data" },
            { label: "AI Agents", short: "Agents" },
            { label: "Automation", short: "Result" },
          ].map((item, i, arr) => (
            <div key={item.label} className="flex items-center gap-2 flex-shrink-0">
              <div className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap ${
                i === 0
                  ? "bg-blue-600 text-white"
                  : i === arr.length - 1
                  ? "bg-emerald-600 text-white"
                  : "glass border border-blue-900/30 text-slate-300"
              }`}>
                {item.label}
              </div>
              {i < arr.length - 1 && (
                <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map(({ number, icon: Icon, title, color, description, examples }) => (
            <div
              key={title}
              className="glass rounded-2xl p-8 card-hover border border-blue-900/20 hover:border-blue-700/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      color === "blue"
                        ? "bg-blue-600/20"
                        : color === "emerald"
                        ? "bg-emerald-600/20"
                        : color === "purple"
                        ? "bg-purple-600/20"
                        : "bg-orange-600/20"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        color === "blue"
                          ? "text-blue-400"
                          : color === "emerald"
                          ? "text-emerald-400"
                          : color === "purple"
                          ? "text-purple-400"
                          : "text-orange-400"
                      }`}
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-black text-slate-600 font-mono">{number}</span>
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{description}</p>
                  <div className="space-y-1.5">
                    {examples.map((ex) => (
                      <div key={ex} className="flex items-center gap-2 text-xs text-slate-400">
                        <ArrowRight
                          className={`w-3 h-3 flex-shrink-0 ${
                            color === "blue"
                              ? "text-blue-500"
                              : color === "emerald"
                              ? "text-emerald-500"
                              : color === "purple"
                              ? "text-purple-500"
                              : "text-orange-500"
                          }`}
                        />
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 glass rounded-2xl p-10 border border-emerald-900/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Typical time-to-value: <span className="text-emerald-400">6–8 weeks</span>
            </h3>
            <p className="text-slate-400 text-sm">
              From onboarding to your first automated workflow — fully connected to your existing systems.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all duration-200 glow-emerald hover:scale-105"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
