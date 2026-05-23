"use client";

import { useState } from "react";
import { Building2, TrendingUp, Shield, PieChart, FileSearch, ArrowRight } from "lucide-react";

const tabs = [
  { id: "retail", label: "Retail Banking", icon: Building2 },
  { id: "capital", label: "Capital Markets", icon: TrendingUp },
  { id: "insurance", label: "Insurance", icon: Shield },
  { id: "asset", label: "Asset Management", icon: PieChart },
  { id: "regtech", label: "RegTech", icon: FileSearch },
];

const useCases: Record<string, Array<{ icon: string; title: string; description: string; kpi: string; kpiLabel: string; detail: string }>> = {
  retail: [
    {
      icon: "👤",
      title: "Intelligent KYC Onboarding",
      description: "Fully automated customer due diligence combining document verification, sanctions screening, and risk scoring. Reduce manual review by 90%.",
      kpi: "4 min",
      kpiLabel: "avg. onboarding time (down from 5 days)",
      detail: "Used by 18+ retail banks",
    },
    {
      icon: "🔍",
      title: "Real-Time Fraud Detection",
      description: "Behavioral analytics agent monitors transaction patterns 24/7. Identifies anomalies in milliseconds and triggers automated freezes on suspected fraud.",
      kpi: "94%",
      kpiLabel: "fraud detection accuracy improvement",
      detail: "$240M in fraud prevented annually",
    },
    {
      icon: "📞",
      title: "Proactive Customer Risk Alerts",
      description: "AI agents monitor customer financial health indicators and proactively flag at-risk accounts for relationship manager outreach before defaults occur.",
      kpi: "38%",
      kpiLabel: "reduction in delinquency rates",
      detail: "Net promoter score +24 pts",
    },
  ],
  capital: [
    {
      icon: "⚖️",
      title: "Post-Trade Reconciliation",
      description: "Automated multi-system reconciliation with intelligent break investigation. The agent identifies root causes and initiates resolution workflows without human intervention.",
      kpi: "99.8%",
      kpiLabel: "straight-through processing rate",
      detail: "847K trades reconciled daily",
    },
    {
      icon: "📊",
      title: "Real-Time Risk Monitoring",
      description: "Continuous VaR, PnL, and exposure monitoring across all books. Agents alert on limit breaches and can automatically hedge positions per pre-defined rules.",
      kpi: "12ms",
      kpiLabel: "average risk calculation latency",
      detail: "Covering $18B AUM",
    },
    {
      icon: "📋",
      title: "MiFIR Transaction Reporting",
      description: "Fully automated MiFID II / MiFIR trade reporting with real-time validation. Eliminates manual reconciliation between front-office systems and reporting infrastructure.",
      kpi: "100%",
      kpiLabel: "regulatory filing accuracy",
      detail: "Zero late submissions since deployment",
    },
  ],
  insurance: [
    {
      icon: "📝",
      title: "Automated Claims Processing",
      description: "AI agents process routine claims end-to-end — from FNOL to payment — applying policy rules, fraud checks, and reserve calculations automatically.",
      kpi: "72 hrs",
      kpiLabel: "average claims cycle (down from 21 days)",
      detail: "86% of claims require no human touch",
    },
    {
      icon: "📈",
      title: "Dynamic Underwriting",
      description: "Real-time underwriting decisions powered by 1,000+ risk signals. Agents dynamically price policies, apply exclusions, and generate quotes in seconds.",
      kpi: "3.2x",
      kpiLabel: "improvement in underwriting throughput",
      detail: "Loss ratio improved by 8.4 points",
    },
    {
      icon: "🔒",
      title: "Solvency II Reporting",
      description: "Continuous Solvency Capital Requirement monitoring with automated ORSA report generation. Regulators receive accurate, timely filings without manual intervention.",
      kpi: "100%",
      kpiLabel: "Solvency II compliance rate",
      detail: "Regulatory penalties: $0",
    },
  ],
  asset: [
    {
      icon: "🎯",
      title: "Portfolio Rebalancing Automation",
      description: "Drift monitoring and automated rebalancing within pre-defined tolerance bands. Agents execute optimal trade sequences to minimize market impact and transaction costs.",
      kpi: "45bps",
      kpiLabel: "annual cost saving per $1B AUM",
      detail: "Used across $120B in AUM",
    },
    {
      icon: "📉",
      title: "ESG Data Aggregation",
      description: "Intelligent aggregation of ESG scores across 40+ data providers with standardized scoring. Automated portfolio-level ESG reporting for institutional clients.",
      kpi: "98%",
      kpiLabel: "data coverage across portfolio",
      detail: "SFDR Article 8/9 compliant",
    },
    {
      icon: "🌐",
      title: "Fund Administration Automation",
      description: "NAV calculation, investor reporting, and subscription/redemption processing fully automated. Agents validate, calculate, and distribute with audit trails at every step.",
      kpi: "90%",
      kpiLabel: "reduction in fund admin manual effort",
      detail: "T+0 NAV publication for daily funds",
    },
  ],
  regtech: [
    {
      icon: "🛡️",
      title: "DORA Compliance Management",
      description: "Continuous monitoring of ICT risk, incident detection, and third-party oversight. Automated DORA compliance reports generated and filed within required timeframes.",
      kpi: "100%",
      kpiLabel: "DORA requirement coverage",
      detail: "Certified by Big 4 auditors",
    },
    {
      icon: "🔎",
      title: "AML / Sanctions Screening",
      description: "Real-time screening against OFAC, UN, EU, and 50+ other lists with intelligent risk scoring. Dramatically reduce false positives while improving true detection rates.",
      kpi: "78%",
      kpiLabel: "reduction in false positive alerts",
      detail: "0 regulatory sanctions since deployment",
    },
    {
      icon: "📑",
      title: "Regulatory Change Management",
      description: "Automated monitoring of regulatory horizon scanning across 60+ global regulators. The platform identifies rule changes, maps impact to processes, and triggers remediation.",
      kpi: "6 wks",
      kpiLabel: "faster average regulatory change implementation",
      detail: "Covers 140+ regulatory frameworks",
    },
  ],
};

export default function UseCases() {
  const [activeTab, setActiveTab] = useState("retail");

  return (
    <section id="use-cases" className="py-24 md:py-32 bg-[#060E1A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-900/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge mb-4 mx-auto w-fit">Industry Solutions</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Built for{" "}
            <span className="text-gradient">Every Financial Vertical</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Domain-specific use cases with proven ROI across retail banking, capital markets, insurance, asset management, and regulatory technology.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "glass-light text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases[activeTab].map((uc, i) => (
            <div
              key={uc.title}
              className="glass rounded-2xl p-6 border border-blue-900/30 card-hover group flex flex-col"
            >
              <div className="text-3xl mb-4">{uc.icon}</div>

              <h3 className="text-base font-bold text-white mb-2">{uc.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{uc.description}</p>

              {/* KPI highlight */}
              <div className="bg-blue-950/50 border border-blue-800/30 rounded-xl p-3 mb-4">
                <div className="text-2xl font-black text-blue-400 leading-none">{uc.kpi}</div>
                <div className="text-xs text-slate-400 mt-0.5">{uc.kpiLabel}</div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 font-medium">{uc.detail}</span>
                <ArrowRight className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
