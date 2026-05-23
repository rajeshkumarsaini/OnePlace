"use client";

import { MessageSquare, BarChart3, GitBranch, ClipboardList, ArrowRight, Send, Bot, User } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Ask questions in plain English",
    description: "Query your entire financial data estate conversationally. No SQL, no dashboards — just answers.",
  },
  {
    icon: BarChart3,
    title: "Get real-time insights from your data",
    description: "The Copilot synthesises live data streams, historical trends, and market signals into clear, actionable insights.",
  },
  {
    icon: GitBranch,
    title: "Trigger agent workflows via conversation",
    description: "Say the word and agents execute. From initiating a reconciliation run to filing a regulatory report.",
  },
  {
    icon: ClipboardList,
    title: "Audit trail for every decision",
    description: "Every Copilot response and agent action is logged with full explainability — satisfying regulators and auditors.",
  },
];

const conversation = [
  {
    role: "user",
    message: "What is our current portfolio VaR at 99% confidence?",
  },
  {
    role: "assistant",
    message: "Current 1-day VaR at 99% confidence is $4.2M across all portfolios. Your Equities book is the primary contributor at $2.8M (67%), driven by recent volatility in tech holdings. This is within your approved limit of $6M.",
    data: { label: "Portfolio VaR", value: "$4.2M", change: "+8.3% vs yesterday", status: "within limit" },
  },
  {
    role: "user",
    message: "Which positions are most at risk? Show me the top 5.",
  },
  {
    role: "assistant",
    message: "I've identified the top 5 highest-risk positions by VaR contribution. The Risk Assessment Agent has already flagged NVDA and MSFT for limit review. Shall I trigger an automated risk report for the CRO?",
    positions: [
      { ticker: "NVDA", var: "$840K", pct: "20%" },
      { ticker: "MSFT", var: "$620K", pct: "15%" },
      { ticker: "AAPL", var: "$510K", pct: "12%" },
      { ticker: "AMZN", var: "$380K", pct: "9%" },
      { ticker: "GOOGL", var: "$290K", pct: "7%" },
    ],
  },
  {
    role: "user",
    message: "Yes, trigger the risk report and alert the CRO.",
  },
  {
    role: "assistant",
    message: "Done. The Reporting Agent has generated the risk summary (ref: RPT-2024-1847) and dispatched it to the CRO inbox. Audit trail updated. Would you like me to also run a stress test scenario?",
    action: "Report RPT-2024-1847 dispatched",
  },
];

export default function Copilot() {
  return (
    <section id="copilot" className="py-32 lg:py-44 bg-[#0A1628] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="badge mb-6 mx-auto w-fit">
            <Bot className="w-3 h-3" />
            AI Copilot
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Your Financial{" "}
            <span className="text-gradient">Intelligence Copilot</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Converse with your data, trigger agents, and get explainable answers — all within a single, enterprise-grade interface.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Feature list */}
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-600/30 flex items-center justify-center shrink-0 group-hover:bg-blue-600/30 transition-colors duration-200">
                  <feature.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 glow-blue hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                Try Copilot
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Chat interface mockup */}
          <div className="glass rounded-2xl border border-blue-900/40 overflow-hidden shadow-2xl shadow-blue-950/40">
            {/* Chat header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-blue-900/40 bg-[#060E1A]/60">
              <div className="w-8 h-8 rounded-full bg-blue-600/30 border border-blue-600/50 flex items-center justify-center">
                <Bot className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">OnePlace Copilot</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-emerald-400">Connected to 6 active agents</span>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="text-[10px] text-slate-500 font-mono">Context: Portfolio Risk</span>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
              {conversation.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  {/* Avatar */}
                  <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center ${
                    msg.role === "user"
                      ? "bg-blue-600/30 border border-blue-600/50"
                      : "bg-emerald-600/30 border border-emerald-600/50"
                  }`}>
                    {msg.role === "user"
                      ? <User className="w-3.5 h-3.5 text-blue-400" />
                      : <Bot className="w-3.5 h-3.5 text-emerald-400" />
                    }
                  </div>

                  {/* Message bubble */}
                  <div className={`flex-1 ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col`}>
                    <div className={`rounded-xl px-3 py-2 max-w-[85%] ${
                      msg.role === "user"
                        ? "bg-blue-600/30 border border-blue-700/40 text-blue-100 self-end"
                        : "bg-[#060E1A]/80 border border-blue-900/40 text-slate-300"
                    }`}>
                      <p className="text-xs leading-relaxed">{msg.message}</p>
                    </div>

                    {/* Inline data card */}
                    {msg.data && (
                      <div className="mt-2 bg-[#0A1628] border border-blue-900/40 rounded-xl p-3 max-w-[85%] w-full">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] text-slate-500">{msg.data.label}</span>
                          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400`}>{msg.data.status}</span>
                        </div>
                        <div className="text-xl font-black text-white">{msg.data.value}</div>
                        <div className="text-[10px] text-yellow-400">{msg.data.change}</div>
                      </div>
                    )}

                    {/* Positions table */}
                    {msg.positions && (
                      <div className="mt-2 bg-[#0A1628] border border-blue-900/40 rounded-xl p-3 max-w-[85%] w-full">
                        <div className="space-y-1">
                          {msg.positions.map((pos) => (
                            <div key={pos.ticker} className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-white font-mono">{pos.ticker}</span>
                              <div className="flex items-center gap-3">
                                <span className="text-[10px] text-slate-400">{pos.var}</span>
                                <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                                  <div className="h-full bg-red-500/70 rounded-full" style={{ width: pos.pct }} />
                                </div>
                                <span className="text-[10px] text-red-400">{pos.pct}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action badge */}
                    {msg.action && (
                      <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/20 border border-emerald-700/40 text-[10px] text-emerald-400 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {msg.action}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input bar */}
            <div className="px-4 py-3 border-t border-blue-900/40 bg-[#060E1A]/40">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0A1628] border border-blue-900/30">
                <input
                  type="text"
                  placeholder="Ask anything about your financial data..."
                  className="flex-1 bg-transparent text-xs text-slate-300 placeholder-slate-600 outline-none"
                  readOnly
                />
                <button className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center shrink-0 hover:bg-blue-500 transition-colors">
                  <Send className="w-3 h-3 text-white" />
                </button>
              </div>
              <p className="text-[10px] text-slate-600 mt-1.5 text-center">
                Powered by Context Fabric · All queries are logged for compliance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
