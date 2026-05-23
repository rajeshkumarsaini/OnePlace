import { ArrowRight, Zap, ShieldCheck, Clock, LayoutGrid } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "OnePlace Sandbox — Try Before You Buy",
  description: "Explore the OnePlace platform risk-free. No commitment, no credit card.",
};

const agents = [
  {
    name: "Lien Perfection Agent",
    description: "Automate lien search, filing and perfection tracking across all 50 states.",
    tag: "Lending",
  },
  {
    name: "Credit Line Management Agent",
    description: "Dynamic monitoring and adjustment of revolving credit facilities in real time.",
    tag: "Credit Risk",
  },
  {
    name: "Small Business Relationship Agent",
    description: "AI-driven outreach, opportunity identification and relationship deepening for SMB portfolios.",
    tag: "Relationship Banking",
  },
];

const features = [
  { icon: Zap, label: "Instant access", detail: "No setup, no waiting — explore live in minutes" },
  { icon: ShieldCheck, label: "Isolated environment", detail: "Sandboxed data — your production systems are never touched" },
  { icon: Clock, label: "30-day trial", detail: "Full platform access with no commitment" },
  { icon: LayoutGrid, label: "All agents included", detail: "Every agent in the library is available to test" },
];

export default function SandboxPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-gray-100 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 mb-5">
            OnePlace Sandbox
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Try before you buy
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-10">
            Explore the full OnePlace platform in an isolated, pre-configured environment.
            Run real agents against synthetic financial data — no commitment, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Launch Sandbox
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="px-6 py-3 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:border-gray-300 hover:text-gray-900 transition-colors"
            >
              Talk to an expert
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">{label}</div>
                <div className="text-sm text-gray-500 mt-0.5 leading-snug">{detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Available agents */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Agents available in the sandbox</h2>
          <p className="text-sm text-gray-500 mb-10">
            Each agent is pre-loaded with synthetic financial data so you can see real outcomes immediately.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="rounded-xl border border-gray-200 p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-150 cursor-pointer group"
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full mb-4">
                  {agent.tag}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {agent.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{agent.description}</p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Try this agent <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 border-t border-gray-100 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to explore?</h2>
          <p className="text-gray-500 text-sm mb-8">
            Your sandbox environment is ready. No installation, no configuration — just log in and start.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Launch Sandbox
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
