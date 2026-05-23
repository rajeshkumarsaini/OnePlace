"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Zap } from "lucide-react";

type Item = { label: string; description: string; href: string };
type Menu = { label: string; items: Item[] };

const menus: Menu[] = [
  {
    label: "Product",
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
    items: [
      {
        label: "Context Engineering",
        description:
          "Structure domain expertise into reusable context your agents can reason over — not just retrieve from a vector store.",
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
          "Every agent decision is explainable, auditable and traceable — meeting the standards set by financial regulators.",
        href: "/approach/governance",
      },
    ],
  },
  {
    label: "Solutions",
    items: [
      {
        label: "Lien Perfection",
        description:
          "Automate lien search, collateral verification, UCC filing and real-time perfection tracking across all 50 states.",
        href: "/solutions/lien-perfection",
      },
      {
        label: "Credit Line Management",
        description:
          "Continuously monitor utilisation, covenants and risk signals to adjust revolving credit lines dynamically.",
        href: "/solutions/credit-line-management",
      },
      {
        label: "Small Business Relationship Agent",
        description:
          "Identify growth opportunities, flag at-risk relationships and personalise banker outreach across your SMB portfolio.",
        href: "/solutions/small-business-relationship-agent",
      },
    ],
  },
  {
    label: "Marketplace",
    items: [
      {
        label: "Data Products & Tools",
        description:
          "Certified financial datasets, enrichment APIs and analytical tools curated for agentic financial use cases.",
        href: "/marketplace/data-products",
      },
      {
        label: "Agents Library",
        description:
          "Browse and deploy pre-built, domain-trained agents for lending, compliance, risk and banking operations.",
        href: "/marketplace/agents",
      },
      {
        label: "Connectors",
        description:
          "Ready-made integrations with Salesforce, nCino, Finastra, Temenos, Snowflake and 50+ banking platforms.",
        href: "/marketplace/connectors",
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        label: "Insights",
        description:
          "Research papers, product perspectives and original analysis from the OnePlace team and industry experts.",
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
          "Comprehensive API reference, developer guides and architecture documentation for builders.",
        href: "/resources/documentation",
      },
    ],
  },
];

export default function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(null), 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white border-b border-gray-200"
    >
      <div className="max-w-screen-xl mx-auto px-8 xl:px-12">
        <div className="relative flex items-center h-[64px]">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            onClick={() => setOpen(null)}
          >
            <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
              <Zap className="w-[15px] h-[15px] text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[16px] font-bold tracking-tight text-gray-900">
              One<span className="text-blue-600">Place</span>
            </span>
          </Link>

          {/* ── Nav items — absolutely centered ── */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
            {menus.map((menu) => (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => { cancelClose(); setOpen(menu.label); }}
                onMouseLeave={scheduleClose}
              >
                {/* Trigger button */}
                <button
                  className={`flex items-center gap-1 px-4 py-2 rounded-md text-[14px] font-medium transition-colors duration-150 select-none ${
                    open === menu.label
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {menu.label}
                  <ChevronDown
                    className={`w-[13px] h-[13px] transition-transform duration-200 ${
                      open === menu.label
                        ? "rotate-180 text-gray-700"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                {/* ── Per-item dropdown ── */}
                {open === menu.label && (
                  <div
                    className="absolute top-full left-0 z-50 mt-1 w-[360px] bg-white rounded-xl border border-gray-200 overflow-hidden"
                    style={{ boxShadow: "0 8px 30px -4px rgba(0,0,0,0.14), 0 2px 8px -2px rgba(0,0,0,0.06)" }}
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    {/* Invisible mouse bridge */}
                    <div className="absolute -top-2 left-0 right-0 h-2" />

                    <div className="px-2 py-2">
                      {menu.items.map(({ label, description, href }, idx) => (
                        <Link
                          key={label}
                          href={href}
                          onClick={() => setOpen(null)}
                          className={`group block px-4 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-150 ${
                            idx < menu.items.length - 1
                              ? "border-b border-gray-100"
                              : ""
                          }`}
                        >
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="text-[14px] font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-150">
                              {label}
                            </span>
                            <ArrowRight className="w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150" />
                          </div>
                          <p className="text-[12.5px] text-gray-500 leading-relaxed">
                            {description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ── Right side CTA ── */}
          <div className="hidden lg:flex items-center ml-auto shrink-0 gap-4">
            <Link
              href="#"
              className="text-[14px] font-medium text-gray-500 hover:text-gray-900 transition-colors"
              onClick={() => setOpen(null)}
            >
              Sign in
            </Link>
            <Link
              href="/sandbox"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-[13px] font-semibold hover:bg-blue-700 transition-colors duration-150"
              onClick={() => setOpen(null)}
            >
              OnePlace Sandbox
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="lg:hidden ml-auto p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="flex flex-col gap-[5px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block w-[18px] h-[1.5px] bg-gray-700 transition-all duration-200 origin-center ${
                    mobileOpen && i === 0 ? "rotate-45 translate-y-[6.5px]"
                    : mobileOpen && i === 1 ? "opacity-0"
                    : mobileOpen && i === 2 ? "-rotate-45 -translate-y-[6.5px]"
                    : ""
                  }`}
                />
              ))}
            </span>
          </button>

        </div>
      </div>

      {/* ── Mobile panel ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-2">
            {menus.map((menu) => (
              <div key={menu.label} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() =>
                    setMobileExpanded((v) => v === menu.label ? null : menu.label)
                  }
                  className="w-full flex items-center justify-between py-4 text-[14px] font-medium text-gray-700"
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
                        className="block px-3 py-3 rounded-lg hover:bg-gray-50 group"
                      >
                        <div className="text-[13px] font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
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
