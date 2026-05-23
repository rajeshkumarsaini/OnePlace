"use client";

import { Lock, Database, FileCheck, Users, ShieldCheck, Globe } from "lucide-react";

const pillars = [
  {
    icon: Database,
    title: "Data Sovereignty",
    description: "Your data never leaves your environment. OnePlace deploys on-premise or in your private cloud — full control, zero data egress.",
    color: "blue",
  },
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    description: "Every request authenticated and authorized. mTLS everywhere, principle of least privilege enforced at the infrastructure layer.",
    color: "purple",
  },
  {
    icon: FileCheck,
    title: "Complete Audit Logging",
    description: "Every agent action, every decision, every data access is immutably logged. Full explainability for regulators, auditors, and internal review.",
    color: "emerald",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description: "Granular RBAC with attribute-based access control (ABAC) integration. Align platform access with your existing identity and governance framework.",
    color: "orange",
  },
];

const certifications = [
  { name: "SOC 2 Type II", desc: "Audited annually by Big 4", color: "blue" },
  { name: "ISO 27001", desc: "Information security certified", color: "emerald" },
  { name: "FedRAMP", desc: "US federal compliance ready", color: "purple" },
  { name: "GDPR", desc: "EU data protection compliant", color: "blue" },
  { name: "CCPA", desc: "California privacy certified", color: "emerald" },
  { name: "DORA", desc: "EU digital resilience compliant", color: "orange" },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badgeBg: string }> = {
  blue: { bg: "bg-blue-600/15", border: "border-blue-600/30", text: "text-blue-400", badgeBg: "bg-blue-500/20 border-blue-700/40 text-blue-300" },
  purple: { bg: "bg-purple-600/15", border: "border-purple-600/30", text: "text-purple-400", badgeBg: "bg-purple-500/20 border-purple-700/40 text-purple-300" },
  emerald: { bg: "bg-emerald-600/15", border: "border-emerald-600/30", text: "text-emerald-400", badgeBg: "bg-emerald-500/20 border-emerald-700/40 text-emerald-300" },
  orange: { bg: "bg-orange-600/15", border: "border-orange-600/30", text: "text-orange-400", badgeBg: "bg-orange-500/20 border-orange-700/40 text-orange-300" },
};

export default function TrustSecurity() {
  return (
    <section id="security" className="py-32 lg:py-44 bg-[#0A1628] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-900/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="badge mb-6 mx-auto w-fit">
            <ShieldCheck className="w-3 h-3" />
            Security & Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Enterprise-Grade{" "}
            <span className="text-gradient">Security & Compliance</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Built from the ground up for regulated financial environments. Security is not a feature — it is the foundation.
          </p>
        </div>

        {/* Four pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pillars.map((pillar) => {
            const c = colorMap[pillar.color];
            return (
              <div key={pillar.title} className="glass rounded-2xl p-8 border border-blue-900/30 card-hover group text-center">
                <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 ${c.bg} border ${c.border} group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className={`w-7 h-7 ${c.text}`} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="glass rounded-2xl p-12 border border-blue-900/30">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Certifications & Compliance</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert) => {
              const c = colorMap[cert.color];
              return (
                <div
                  key={cert.name}
                  className={`rounded-xl p-4 text-center border ${c.badgeBg} group hover:scale-105 transition-transform duration-200 cursor-default`}
                >
                  <div className={`text-base font-black ${c.text} mb-1`}>{cert.name}</div>
                  <div className="text-[10px] text-slate-500 leading-tight">{cert.desc}</div>
                </div>
              );
            })}
          </div>

          <div className="divider my-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { value: "256-bit", label: "AES Encryption at Rest", sub: "and in transit" },
              { value: "99.97%", label: "Uptime SLA", sub: "with financial-grade redundancy" },
              { value: "SOC 2", label: "Annual Third-Party Audit", sub: "by Big 4 firm" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-black text-blue-400 mb-1">{item.value}</div>
                <div className="text-sm font-semibold text-white">{item.label}</div>
                <div className="text-xs text-slate-500">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-slate-600 mt-8">
          OnePlace holds full regulatory approval documentation available upon NDA for qualified financial institutions.
          Contact our compliance team for detailed security attestations and penetration test results.
        </p>
      </div>
    </section>
  );
}
