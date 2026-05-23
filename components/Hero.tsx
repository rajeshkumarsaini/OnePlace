"use client";

import { ArrowRight, Play, TrendingUp, Shield, Zap, Globe } from "lucide-react";

const stats = [
  { icon: Globe, value: "47+", label: "Financial Institutions" },
  { icon: TrendingUp, value: "3.2B+", label: "Transactions Processed" },
  { icon: Shield, value: "99.97%", label: "Platform Uptime" },
  { icon: Zap, value: "85%", label: "Cost Reduction" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center gradient-hero grid-pattern overflow-hidden pt-20">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/5 rounded-full blur-3xl" />
      </div>

      {/* Network node SVG background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Connection lines */}
        <line x1="15%" y1="30%" x2="35%" y2="55%" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="35%" y1="55%" x2="65%" y2="40%" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="65%" y1="40%" x2="85%" y2="65%" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="25%" y1="70%" x2="50%" y2="80%" stroke="#10B981" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="50%" y1="80%" x2="75%" y2="70%" stroke="#10B981" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="15%" y1="30%" x2="25%" y2="70%" stroke="#3B82F6" strokeWidth="0.3" strokeDasharray="3 10" />
        <line x1="85%" y1="65%" x2="75%" y2="70%" stroke="#3B82F6" strokeWidth="0.3" strokeDasharray="3 10" />
        {/* Nodes */}
        <circle cx="15%" cy="30%" r="4" fill="#3B82F6" opacity="0.6" />
        <circle cx="35%" cy="55%" r="6" fill="#2563EB" opacity="0.8" />
        <circle cx="65%" cy="40%" r="5" fill="#10B981" opacity="0.7" />
        <circle cx="85%" cy="65%" r="4" fill="#3B82F6" opacity="0.6" />
        <circle cx="25%" cy="70%" r="3" fill="#10B981" opacity="0.5" />
        <circle cx="50%" cy="80%" r="5" fill="#2563EB" opacity="0.7" />
        <circle cx="75%" cy="70%" r="4" fill="#3B82F6" opacity="0.6" />
        <circle cx="55%" cy="20%" r="3" fill="#10B981" opacity="0.5" />
        <line x1="55%" y1="20%" x2="65%" y2="40%" stroke="#10B981" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="55%" y1="20%" x2="35%" y2="55%" stroke="#10B981" strokeWidth="0.3" strokeDasharray="3 10" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 badge mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Agentic Finance Platform · Powered by Context Fabric
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6 animate-slide-up">
            <span className="text-white">One Place for</span>
            <br />
            <span className="text-gradient">Financial Intelligence</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-200">
            Copilot-powered automation built on domain-expert Context Fabric.
            Map your <span className="text-blue-400 font-semibold">KPIs to processes to data</span> — and
            let AI agents execute with precision across every financial workflow.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up animation-delay-300">
            <a
              href="#agents"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-200 glow-blue hover:scale-105 hover:shadow-xl hover:shadow-blue-600/30"
            >
              See It In Action
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#platform"
              className="flex items-center gap-2 px-8 py-4 rounded-xl glass-light hover:bg-white/10 text-slate-200 font-semibold text-base transition-all duration-200 hover:scale-105"
            >
              <Play className="w-4 h-4 text-blue-400" />
              Explore Platform
            </a>
          </div>

          {/* Dashboard mockup */}
          <div className="relative mx-auto max-w-3xl animate-float animation-delay-400">
            <div className="glass rounded-2xl border border-blue-900/40 p-4 shadow-2xl shadow-blue-950/40">
              {/* Mockup header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-blue-900/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#060E1A]/60 border border-blue-900/30">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-slate-400 font-mono">oneplace.ai — Active Agents: 6</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-blue-800/60" />
                  ))}
                </div>
              </div>

              {/* Agent grid */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { name: "Risk Assessment", status: "Running", val: "94.2", unit: "score", color: "emerald" },
                  { name: "Compliance Monitor", status: "Active", val: "0", unit: "breaches", color: "blue" },
                  { name: "KYC/AML Agent", status: "Processing", val: "1,247", unit: "reviews", color: "emerald" },
                  { name: "Trade Reconciliation", status: "Active", val: "99.8%", unit: "matched", color: "blue" },
                  { name: "Reporting Agent", status: "Scheduled", val: "23", unit: "reports", color: "yellow" },
                  { name: "Liquidity Mgmt", status: "Optimizing", val: "$2.4B", unit: "managed", color: "emerald" },
                ].map((agent) => (
                  <div
                    key={agent.name}
                    className="bg-[#060E1A]/80 rounded-xl p-3 border border-blue-900/20 text-left"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-slate-400 font-medium leading-tight">{agent.name}</span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                        agent.color === "emerald"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : agent.color === "yellow"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}>
                        {agent.status}
                      </span>
                    </div>
                    <div className="text-lg font-black text-white">{agent.val}</div>
                    <div className="text-[10px] text-slate-500">{agent.unit}</div>
                  </div>
                ))}
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#060E1A]/60 border border-blue-900/20">
                <div className="flex items-center gap-3">
                  <span className="status-active text-xs text-slate-300 font-medium">All systems operational</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">Updated 2s ago</span>
              </div>
            </div>

            {/* Glow beneath */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-blue-600/20 blur-2xl rounded-full" />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-blue-900/30 bg-[#060E1A]/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 justify-center">
                <div className="w-9 h-9 rounded-lg bg-blue-900/40 border border-blue-800/40 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-xl font-black text-white leading-none">{value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
