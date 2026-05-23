import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ContextFabric from "@/components/ContextFabric";
import Methodology from "@/components/Methodology";
import AgenticCapabilities from "@/components/AgenticCapabilities";
import Copilot from "@/components/Copilot";
import UseCases from "@/components/UseCases";
import TrustSecurity from "@/components/TrustSecurity";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060E1A]">
      <Navigation />
      <Hero />
      <ContextFabric />
      <Methodology />
      <AgenticCapabilities />
      <Copilot />
      <UseCases />
      <TrustSecurity />
      <CTA />
      <Footer />
    </main>
  );
}
