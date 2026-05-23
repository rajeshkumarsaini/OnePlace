"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  LayoutGrid,
  Brain,
  PenTool,
  Sliders,
  Network,
  Database,
  ShieldCheck,
  FileCheck,
  CreditCard,
  Users,
  Package,
  Wrench,
  Bot,
  Plug,
  Lightbulb,
  Building2,
  BookOpen,
  ChevronDown,
  ArrowRight,
  Zap,
} from "lucide-react";

const menus = [
  {
    label: "Product",
    items: [
      {
        icon: LayoutGrid,
        label: "Overview",
        description: "The full OnePlace platform at a glance",
        href: "/product/overview",
      },
      {
        icon: Brain,
        label: "Cortex",
        description: "Domain-aware AI reasoning engine",
        href: "/product/cortex",
      },
      {
        icon: PenTool,
        label: "Studio",
        description: "Visual builder for agents and workflows",
        href: "/product/studio",
      },
      {
        icon: Sliders,
        label: "Control Plane",
        description: "Orchestration, monitoring and governance",
        href: "/product/control-plane",
      },
    ],
  },
  {
    label: "Approach",
    items: [
      {
        icon: Network,
        label: "Context Engineering",
        description: "Build domain intelligence your agents can reason over",
        href: "/approach/context-engineering",
      },
      {
        icon: Database,
        label: "Data Products",
        description: "Reusable, governed financial data building blocks",
        href: "/approach/data-products",
      },
      {
        icon: ShieldCheck,
        label: "Governance",
        description: "Audit trails, controls and explainability by design",
        href: "/approach/governance",
      },
    ],
  },
  {
    label: "Solutions",
    items: [
      {
        icon: FileCheck,
        label: "Lien Perfection",
        description: "Automate lien search, filing and tracking end-to-end",
        href: "/solutions/lien-perfection",
      },
      {
        icon: CreditCard,
        label: "Credit Line Management",
        description: "Dynamic credit monitoring and line adjustment agents",
        href: "/solutions/credit-line-management",
      },
      {
        icon: Users,
        label: "Small Business Relationship Agent",
        description: "AI-driven relationship management for SMB banking",
        href: "/solutions/small-business-relationship-agent",
      },
    ],
  },
  {
    label: "Marketplace",
    items: [
      {
        icon: Package,
        label: "Data Products & Tools",
        description: "Curated financial datasets and enrichment tools",
        href: "/marketplace/data-products",
      },
      {
        icon: Bot,
        label: "Agents Library",
        description: "Pre-built agents ready to deploy in your environment",
        href: "/marketplace/agents",
      },
      {
        icon: Plug,
        label: "Connectors",
        description: "Integrations with core banking, CRM and data platforms",
        href: "/marketplace/connectors",
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        icon: Lightbulb,
        label: "Insights",
        description: "Research, perspectives and product updates",
        href: "/resources/insights",
      },
      {
        icon: Building2,
        label: "Company",
        description: "Our story, team and mission",
        href: "/resources/company",
      },
      {
        icon: BookOpen,
        label: "Documentation",
        description: "Guides, API reference and developer resources",
        href: "/resources/documentation",
      },
    ],
  },
];

function Dropdown({ items }: { items: typeof menus[0]["items"] }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
      <div
        className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        style={{ minWidth: "320px" }}
      >
        <div className="p-2">
          {items.map(({ icon: Icon, label, description, href }) => (
            <Link
              key={label}
              href={href}
              className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-150 group"
            >
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-50 transition-colors duration-150">
                <Icon className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors duration-150" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-150 leading-snug">
                  {label}
                </div>
                <div className="text-xs text-gray-500 mt-0.5 leading-snug">{description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(null), 120);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200" ref={navRef}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="flex items-center h-16 gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 mr-4">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[17px] font-bold tracking-tight text-gray-900">
              One<span className="text-blue-600">Place</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1">
            {menus.map((menu) => (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    open === menu.label
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {menu.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      open === menu.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === menu.label && <Dropdown items={menu.items} />}
              </div>
            ))}
          </nav>

          {/* Sandbox CTA */}
          <div className="hidden lg:flex items-center gap-3 ml-auto shrink-0">
            <Link
              href="/sandbox"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors duration-150"
            >
              <span>OnePlace Sandbox</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden ml-auto flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-50"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-screen-xl mx-auto px-6 py-4 space-y-1">
            {menus.map((menu) => (
              <div key={menu.label}>
                <button
                  onClick={() =>
                    setMobileExpanded((v) => (v === menu.label ? null : menu.label))
                  }
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  {menu.label}
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      mobileExpanded === menu.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === menu.label && (
                  <div className="mt-1 ml-3 space-y-1 border-l border-gray-100 pl-4">
                    {menu.items.map(({ icon: Icon, label, href }) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      >
                        <Icon className="w-4 h-4 text-gray-400 shrink-0" />
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 pb-1">
              <Link
                href="/sandbox"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors duration-150"
              >
                OnePlace Sandbox
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
