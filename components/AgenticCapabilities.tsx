"use client";

import { Shield, Eye, GitMerge, UserCheck, FileText, Droplets, Activity, Zap } from "lucide-react";

const agents = [
  {
    icon: Shield,
    name: "Risk Assessment Agent",
    description:
      "Real-time portfolio risk analysis with multi-factor stress testing. Monitors VaR, CVaR, and tail risk continuously across all asset classes.",
    capabilities: ["Real-time VaR calculation", "Stress testing automation", "Counterparty exposure monitoring"],
    color: "blue",
    processingRate: "12,400 positions/sec",
  },
  {
    icon: Eye,
    name: "Compliance Monitor Agent",
    description:
      "Continuous regulatory breach detection across MiFID II, DORA, BASEL III, and AML directives. Zero-latency alert generation with audit trails.",
    capabilities: ["Pre-trade compliance checks", "Regulatory breach alerting", "Automated audit documentation"],
    color: "purple",
    processingRate: "99.98% detection rate",
  },
  {
    icon: GitMerge,
    name: "Trade Reconciliation Agent",
    description:
      "Automated exception handling for post-trade reconciliation. Identifies, investigates, and resolves breaks with minimal human intervention.",
    capabilities: ["Multi-system reconciliation", "Break investigation automation", "STP rate optimization"],
    color: "emerald",
    processingRate: "847K trades/day",
  },
  {
    icon: UserCheck,
    name: "KYC / AML Agent",
    description:
      "End-to-end customer due diligence automation. Aggregates data across 200+ sources, applies risk scoring, and flags suspicious patterns instantly.",
    capabilities: ["Identity verification", "Sanctions screening", "Behavioral analytics"],
    color: "orange",
    processingRate: "4 min avg. onboarding",
  },
  {
    icon: FileText,
    name: "Reporting Agent",
    description:
      "Automated generation and submission of regulatory reports — COREP, FINREP, MiFIR transaction reporting — with validation before filing.",
    capabilities: ["COREP / FINREP automation", "MiFIR transaction reporting", "Validation & submission"],
    color: "teal",
    processingRate: "340+ report types",
  },
  {
    icon: Droplets,
    name: "Liquidity Management Agent",
    description:
      "Real-time intraday liquidity optimization across accounts, currencies, and counterparties. Predictive cash flow modelling with automated sweeping.",
    capabilities: ["Intraday liquidity monitoring", "Cash flow prediction", "Automated fund sweeping"],
    color: "cyan",
    processingRate: "$2.4B managed",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  blue: {
    bg: "bg-blue-600/15",
    border: "border-blue-600/30",
    text: "text-blue-400",
    badge: "bg-blue-500/20 text-blue-300 border-blue-700/40",
  },
  purple: {
    bg: "bg-purple-600/15",
    border: "border-purple-600/30",
    text: "text-purple-400",
    badge: "bg-purple-500/20 text-purple-300 border-purple-700/40",
  },
  emerald: {
    bg: "bg-emerald-600/15",
    border: "border-emerald-600/30",
    text: "text-emerald-400",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-700/40",
  },
  orange: {
    bg: "bg-orange-600/15",
    border: "border-orange-600/30",
    text: "text-orange-400",
    badge: "bg-orange-500/20 text-orange-300 border-orange-700/40",
  },
  teal: {
    bg: "bg-teal-600/15",
    border: "border-teal-600/30",
    text: "text-teal-400",
    badge: "bg-teal-500/20 text-teal-300 border-teal-700/40",
  },
  cyan: {
    bg: "bg-cyan-600/15",
    border: "border-cyan-600/30",
    text: "text-cyan-400",
    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-700/40",
  },
};

export default function AgenticCapabilities() {
  return (
    <section id="agents" className="py-32 lg:py-44 bg-[#060E1A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="badge mb-6 mx-auto w-fit">
            <Zap className="w-3 h-3" />
            AI Agents
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Intelligent Agents for{" "}
            <span className="text-gradient">Every Financial Workflow</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Pre-built, domain-trained agents ready to deploy across your financial operations. Each agent understands the full context of its domain — not just the task.
          </p>
        </div>

        {/* Agents grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => {
            const colors = colorMap[agent.color];
            return (
              <div
                key={agent.name}
                className="glass rounded-2xl p-8 border border-blue-900/30 card-hover group relative overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl ${colors.bg}`}
                  style={{ background: `radial-gradient(circle at 50% 0%, ${agent.color === "blue" ? "rgba(37,99,235,0.08)" : agent.color === "emerald" ? "rgba(16,185,129,0.08)" : "rgba(139,92,246,0.08)"} 0%, transparent 70%)` }}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.bg} border ${colors.border} group-hover:scale-110 transition-transform duration-300`}>
                    <agent.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>

                  {/* Status indicator */}
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">Active</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-white mb-2">{agent.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{agent.description}</p>

                  {/* Capabilities */}
                  <ul className="space-y-1.5 mb-4">
                    {agent.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-xs text-slate-300">
                        <Activity className={`w-3 h-3 ${colors.text} shrink-0`} />
                        {cap}
                      </li>
                    ))}
                  </ul>

                  {/* Processing rate badge */}
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-semibold ${colors.badge}`}>
                    <Zap className="w-3 h-3" />
                    {agent.processingRate}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Need a custom agent for your specific workflow?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-700/50 text-blue-400 hover:text-white hover:border-blue-500 hover:bg-blue-900/30 font-semibold text-sm transition-all duration-200"
          >
            Explore Custom Agent Development
          </a>
        </div>
      </div>
    </section>
  );
}
