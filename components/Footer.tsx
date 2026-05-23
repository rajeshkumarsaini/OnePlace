import { Zap, ExternalLink, Share2, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Platform Overview", href: "#platform" },
    { label: "Context Fabric", href: "#context-fabric" },
    { label: "AI Agents", href: "#agents" },
    { label: "Copilot", href: "#copilot" },
    { label: "Pricing", href: "#pricing" },
    { label: "Security", href: "#security" },
  ],
  Solutions: [
    { label: "Retail Banking", href: "#use-cases" },
    { label: "Capital Markets", href: "#use-cases" },
    { label: "Insurance", href: "#use-cases" },
    { label: "Asset Management", href: "#use-cases" },
    { label: "RegTech", href: "#use-cases" },
    { label: "Custom Solutions", href: "#contact" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Whitepapers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Webinars", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Data Processing", href: "#" },
    { label: "Security Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#060E1A] border-t border-blue-900/30 relative">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-200">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">One</span>
                <span className="text-blue-400">Place</span>
              </span>
            </a>

            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              The enterprise-grade agentic AI platform for financial services. Powered by domain-expert Context Fabric. Trusted by 47+ financial institutions worldwide.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg glass-light border border-blue-900/40 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-700/40 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg glass-light border border-blue-900/40 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-700/40 transition-all duration-200"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@oneplace.ai"
                aria-label="Email"
                className="w-9 h-9 rounded-lg glass-light border border-blue-900/40 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-700/40 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-xs text-slate-600">
              © {new Date().getFullYear()} OnePlace Financial Technologies Ltd. All rights reserved.
              Registered in England &amp; Wales No. 14782930.
            </div>
            <div className="flex flex-wrap gap-4">
              {["Terms", "Privacy", "Cookies", "Security"].map((item) => (
                <a key={item} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-150">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Regulatory disclaimer */}
          <div className="mt-4 pt-4 border-t border-blue-900/15">
            <p className="text-[11px] text-slate-700 leading-relaxed max-w-4xl">
              <strong className="text-slate-600">Regulatory Disclaimer:</strong> OnePlace is a technology platform provider and does not provide financial, investment, legal, or regulatory advice. All financial decisions remain the responsibility of the licensed financial institution deploying the platform. OnePlace AI agents operate within the parameters and controls configured by the deploying institution. Past performance metrics cited represent customer outcomes and are not guarantees of future results. OnePlace complies with applicable data protection regulations including GDPR and CCPA.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
