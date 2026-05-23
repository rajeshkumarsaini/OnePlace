"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Building2, Users, Calendar } from "lucide-react";

const roles = [
  "Chief Risk Officer",
  "Chief Technology Officer",
  "Chief Compliance Officer",
  "Head of Operations",
  "Head of Technology",
  "VP / Director",
  "Product Manager",
  "Solution Architect",
  "Other",
];

export default function CTA() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060E1A] via-[#0A1E4A] to-[#060E1A]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-800/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-6">
            <div className="badge w-fit">Ready to Get Started</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Ready to Transform Your{" "}
              <span className="text-gradient">Financial Operations?</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Join 47+ leading financial institutions already using OnePlace to automate workflows, reduce costs, and achieve regulatory certainty.
            </p>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                "Implementation in as little as 6 weeks",
                "Dedicated financial domain experts during onboarding",
                "Pre-built Context Fabric — no training required",
                "Full regulatory compliance from day one",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="glass rounded-xl p-4 border border-blue-900/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-300 italic leading-relaxed">
                    "OnePlace reduced our trade reconciliation breaks by 94% in the first quarter. The ROI was evident within 30 days of go-live."
                  </p>
                  <p className="text-xs text-blue-400 font-semibold mt-2">
                    Head of Operations, European Investment Bank (€120B AUM)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass rounded-2xl p-8 border border-blue-900/40 shadow-2xl shadow-blue-950/30">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Request Received</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Thank you, {formState.name}. A member of our financial services team will contact you within one business day to schedule your personalized demo.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-700/40 text-blue-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  Expect a call within 24 hours
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">Request a Demo</h3>
                  <p className="text-sm text-slate-400">See OnePlace in action with your own data and use cases.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl bg-[#060E1A]/80 border border-blue-900/40 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-600/60 focus:ring-1 focus:ring-blue-600/40 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">Company *</label>
                      <input
                        type="text"
                        required
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="Acme Bank"
                        className="w-full px-4 py-3 rounded-xl bg-[#060E1A]/80 border border-blue-900/40 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-600/60 focus:ring-1 focus:ring-blue-600/40 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane.smith@bank.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#060E1A]/80 border border-blue-900/40 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-600/60 focus:ring-1 focus:ring-blue-600/40 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Your Role *</label>
                    <select
                      required
                      value={formState.role}
                      onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#060E1A]/80 border border-blue-900/40 text-sm focus:outline-none focus:border-blue-600/60 focus:ring-1 focus:ring-blue-600/40 transition-all duration-200 appearance-none cursor-pointer text-white"
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="" disabled className="bg-[#0A1628] text-slate-400">Select your role...</option>
                      {roles.map((role) => (
                        <option key={role} value={role} className="bg-[#0A1628] text-white">{role}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-200 glow-blue hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 mt-2"
                  >
                    Schedule My Demo
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-slate-600">
                    No commitment required. Demos typically run 45 minutes with a financial services specialist.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Alternative: large CTA button */}
        <div className="mt-16 text-center">
          <div className="divider mb-8" />
          <p className="text-slate-500 text-sm mb-4">Prefer to talk now?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+18005551234"
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass-light border border-blue-800/40 text-slate-300 hover:text-white text-sm font-semibold transition-all duration-200 hover:bg-white/10"
            >
              <Users className="w-4 h-4 text-blue-400" />
              Speak with a Financial Expert
            </a>
            <a
              href="mailto:enterprise@oneplace.ai"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              enterprise@oneplace.ai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
