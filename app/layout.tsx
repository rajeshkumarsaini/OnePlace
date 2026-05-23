import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OnePlace — Financial Services Agentic Platform",
  description:
    "OnePlace is the enterprise-grade agentic AI platform for financial services. Powered by domain-expert Context Fabric, it maps your KPIs to processes to data and lets AI agents execute with precision.",
  keywords: [
    "financial services AI",
    "agentic platform",
    "context fabric",
    "financial automation",
    "AI agents finance",
    "KYC AML automation",
    "regulatory compliance AI",
    "fintech platform",
  ],
  openGraph: {
    title: "OnePlace — Financial Services Agentic Platform",
    description:
      "Copilot-powered automation built on domain-expert Context Fabric. Map your KPIs to processes to data — and let AI agents execute.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#060E1A] text-slate-100">{children}</body>
    </html>
  );
}
