"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Zap } from "lucide-react";

const menus = [
  {
    label: "Product",
    columns: 2,
    items: [
      {
        label: "Overview",
        description:
          "See how Cortex, Studio and Control Plane work together to power financial automation at scale.",
        href: "/product/overview",
      },
      {
        label: "Cortex",
        description:
          "The domain-aware reasoning engine that understands financial context, regulations and processes out of the box.",
        href: "/product/cortex",
      },
      {
        label: "Studio",
        description:
          "A visual environment for designing, testing and deploying AI agents — no infrastructure code required.",
        href: "/product/studio",
      },
      {
        label: "Control Plane",
        description:
          "Central hub for monitoring agent performance, managing deployments and enforcing governance policies.",
        href: "/product/control-plane",
      },
    ],
  },
  {
    label: "Approach",
    columns: 1,
    items: [
      {
        label: "Context Engineering",
        description:
          "Structure domain expertise into reusable context your agents can reason over — not just retrieve.",
        href: "/approach/context-engineering",
      },
      {
        label: "Data Products",
        description:
          "Define, version and govern financial data as modular building blocks that agents consume directly.",
        href: "/approach/data-products",
      },
      {
        label: "Governance",
        description:
          "Every agent decision is explainable, auditable and traceable — meeting the bar set by financial regulators.",
        href: "/approach/governance",
      },
    ],
  },
  {
    label: "Solutions",
    columns: 1,
    items: [
      {
        label: "Lien Perfection",
        description:
          "Automate lien search, collateral verification, UCC filing and real-time tracking across all 50 states.",
        href: "/solutions/lien-perfection",
      },
      {
        label: "Credit Line Management",
        description:
          "Continuously monitor utilisation, covenants and risk signals to adjust credit lines dynamically.",
        href: "/solutions/credit-line-management",
      },
      {
        label: "Small Business Relationship Agent",
        description:
          "Identify growth opportunities, flag at-risk relationships and personalise outreach across your SMB portfolio.",
        href: "/solutions/small-business-relationship-agent",
      },
    ],
  },
  {
    label: "Marketplace",
    columns: 1,
    items: [
      {
        label: "Data Products & Tools",
        description:
          "Certified financial datasets, enrichment APIs and analytical tools curated for agentic use cases.",
        href: "/marketplace/data-products",
      },
      {
        label: "Agents Library",
        description:
          "Browse and deploy pre-built, domain-trained agents for lending, compliance, risk and operations.",
        href: "/marketplace/agents",
      },
      {
        label: "Connectors",
        description:
          "Ready-made integrations with Salesforce, nCino, Finastra, Temenos, Snowflake and 50+ platforms.",
        href: "/marketplace/connectors",
      },
    ],
  },
  {
    label: "Resources",
    columns: 1,
    items: [
      {
        label: "Insights",
        description:
          "Research papers, product perspectives and analysis from the OnePlace team and industry experts.",
        href: "/resources/insights",
      },
      {
        label: "Company",
        description:
          "Our mission, team and the story behind building the first purpose-built financial agentic platform.",
        href: "/resources/company",
      },
      {
        label: "Documentation",
        description:
          "Comprehensive API reference, how-to guides and architecture documentation for builders.",
        href: "/resources/documentation",
      },
    ],
  },
];

type MenuItem = { label: string; description: string; href: string };

function Dropdown({ items, columns }: { items: MenuItem[]; columns: number }) {
  const isTwo = columns === 2;

  return (
    <div
      className="absolute top-full left-0 pt-2 z-50"
      style={{ minWidth: isTwo ? "560px" : "380px" }}
    >
      {/* Invisible bridge so mouse can travel from trigger to panel */}
      <div className="absolute -top-2 left-0 right-0 h-2" />
      <div
        className="bg-white rounded-xl shadow-lg border border-gray-200/80 overflow-hidden"
        style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.04)" }}
      >
        <div
          className={`p-6 ${isTwo ? "grid grid-cols-2 gap-x-8 gap-y-1" : "flex flex-col gap-1"}`}
        >
          {items.map(({ label, description, href }) => (
            <Link
              key={label}
              href={href}
              className="group block px-4 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-150"
            >
              <div className="text-[14px] font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-150 mb-1 leading-snug">
                {label}
              </div>
              <div className="text-[13px] text-gray-500 leading-relaxed">
                {description}
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
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };

  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 100);
  };

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-gray-200"
      ref={navRef}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="flex items-center h-[60px] gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 mr-2">
            <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
              <Zap className="w-[15px] h-[15px] text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[16px] font-bold tracking-tight text-gray-900">
              One<span className="text-blue-600">Place</span>
            </span>
          </Link>

          {/* Desktop nav items */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1">
            {menus.map((menu) => (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => enter(menu.label)}
                onMouseLeave={leave}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-[14px] font-medium transition-colors duration-150 ${
                    open === menu.label
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {menu.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
                      open === menu.label ? "rotate-180 text-gray-600" : ""
                    }`}
                  />
                </button>
                {open === menu.label && (
                  <Dropdown items={menu.items} columns={menu.columns} />
                )}
              </div>
            ))}
          </nav>

          {/* Sandbox CTA */}
          <div className="hidden lg:flex items-center ml-auto shrink-0">
            <Link
              href="/sandbox"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-[13px] font-semibold hover:bg-blue-700 transition-colors duration-150"
            >
              OnePlace Sandbox
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden ml-auto p-2 rounded-md hover:bg-gray-50"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="flex flex-col gap-[5px]">
              <span
                className={`block w-[18px] h-[1.5px] bg-gray-700 transition-all duration-200 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block w-[18px] h-[1.5px] bg-gray-700 transition-all duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-[18px] h-[1.5px] bg-gray-700 transition-all duration-200 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="max-w-screen-xl mx-auto px-6 py-3">
            {menus.map((menu) => (
              <div key={menu.label} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() =>
                    setMobileExpanded((v) =>
                      v === menu.label ? null : menu.label
                    )
                  }
                  className="w-full flex items-center justify-between py-3.5 text-[14px] font-medium text-gray-700"
                >
                  {menu.label}
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      mobileExpanded === menu.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === menu.label && (
                  <div className="pb-4 space-y-1">
                    {menu.items.map(({ label, description, href }) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="text-[13px] font-semibold text-gray-900 mb-0.5">
                          {label}
                        </div>
                        <div className="text-[12px] text-gray-500 leading-relaxed">
                          {description}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="py-4">
              <Link
                href="/sandbox"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-blue-600 text-white text-[13px] font-semibold hover:bg-blue-700 transition-colors"
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
