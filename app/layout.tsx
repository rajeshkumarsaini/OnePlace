import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "OnePlace — Financial Services Agentic Platform",
  description:
    "OnePlace is the agentic AI platform for financial services, powered by domain-expert context engineering and pre-built financial agents.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <Nav />
        {children}
      </body>
    </html>
  );
}
