import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import CTA from '@/components/home/CTA';
import { LogoCloud } from "@/components/ui/logo-cloud";

import Roadmap from '@/components/home/Roadmap';

const partners = [
  {
    name: "SOLANA",
    hoverClassName: "hover:text-[#9945FF] hover:drop-shadow-[0_0_15px_rgba(153,69,255,0.9)]",
  },
  {
    name: "PUMP.FUN",
    hoverClassName: "hover:text-[#00FF00] hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.9)]",
  },
  {
    name: "DEXSCREENER",
    hoverClassName: "hover:text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]",
  },
  {
    name: "BIRDEYE",
    hoverClassName: "hover:text-[#2D70F7] hover:drop-shadow-[0_0_15px_rgba(45,112,247,0.9)]",
  },
  {
    name: "HELIUS",
    hoverClassName: "hover:text-[#F78200] hover:drop-shadow-[0_0_15px_rgba(247,130,0,0.9)]",
  },
  {
    name: "JUPITER",
    hoverClassName: "hover:text-cyan-400 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]",
  },
  {
    name: "SUPABASE",
    hoverClassName: "hover:text-[#3ECF8E] hover:drop-shadow-[0_0_15px_rgba(62,207,142,0.9)]",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-black selection:bg-cyan-500/30">

      {/* Background Blobs */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-[30%] right-[-20%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[10%] w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[150px] animate-blob animation-delay-4000 mix-blend-screen" />

        {/* Vignette / Side Darkening */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90" />
      </div>

      <div className="relative z-10">
        <Hero />
        <LogoCloud items={partners} />
        <HowItWorks />
        <Features />
        <Roadmap />
        <CTA />
      </div>

    </div>
  );
}