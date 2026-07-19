import { motion } from 'motion/react';
import { ArrowDown, Shield, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (index: number) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section 
      id="page-0"
      className="snap-section relative bg-[#120b16] px-6 py-12 flex flex-col justify-between overflow-hidden text-zinc-100"
    >
      {/* Background radial glowing ambient light */}
      <div className="absolute top-[15%] right-[15%] w-96 h-96 bg-pink-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[15%] left-[10%] w-80 h-80 bg-yellow-400/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Top Bar Indicators */}
      <div className="pt-12 sm:pt-14 flex items-center justify-between w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto z-10">
        <div className="flex items-center gap-2 font-mono text-[10px] lg:text-[12px] font-bold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-3.5 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
          <span>PORTFOLIO PLATFORM // WELCOME</span>
        </div>
        <div className="font-mono text-[11px] lg:text-[13px] text-pink-400 font-extrabold uppercase tracking-widest hidden sm:block">
          PERSONAL PORTFOLIO
        </div>
      </div>

      {/* Main split Hero & Bio contents */}
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center my-auto z-10 pt-4 pb-4">
        
        {/* Left Side: Formal & Elegant Typography */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 font-mono text-[10px] font-bold uppercase tracking-wider">
              <Shield className="w-3 h-3" />
              Application Security &amp; Web Systems
            </div>
            
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white uppercase tracking-tight leading-none">
              Salwanetta JAUZA<br className="hidden lg:inline" /> Yumna
            </h1>
            
            <p className="font-display font-semibold italic text-yellow-400 text-lg sm:text-xl lg:text-2xl tracking-wide">
              Cyber Security Enthusiast &amp; Web Developer
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl"
          >
            <p className="text-zinc-200 text-[15px] sm:text-[16.5px] lg:text-[18px] leading-relaxed font-sans font-medium">
A full-stack developer dedicated to building secure and resilient digital systems. I focus on combining robust software engineering with practical cybersecurity practices.            </p>
          </motion.div>

          <div className="pt-2">
            <span className="font-mono text-[10px] lg:text-[11px] text-zinc-500 block uppercase tracking-wider">
              Current Academic Standing: <strong className="text-yellow-400">President University (GPA 3.87)</strong>
            </span>
          </div>
        </div>

        {/* Right Side: Professional Photo/Avatar Card with Badges */}
        <div className="md:col-span-5 flex justify-center items-center py-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Soft pink outline shadow splash */}
            <div className="absolute -inset-2.5 bg-[#fb588f] rounded-3xl transform rotate-[2deg] opacity-90 blur-[1px]" />
            
            {/* The Picture Container Card */}
            <div className="relative w-48 h-56 lg:w-56 lg:h-64 bg-zinc-900 border-4 border-white rounded-2xl overflow-hidden shadow-xl flex flex-col items-center justify-center">
              <img 
                src="/images/home/profile.JPG" 
                alt="Salwanetta J. Yumna"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Sticker Badge overlay: AppSec Auditor style */}
            <div className="absolute top-3 -right-12 bg-white border border-[#fb588f] text-[#fb588f] font-display italic text-[11px] lg:text-[12px] font-black px-3.5 py-1.5 rounded-full shadow-md transform rotate-[10deg] hover:scale-105 transition-transform cursor-default select-none">
              AppSec Auditor
            </div>
            
            {/* Sticker Badge overlay: Full-Stack Dev style */}
            <div className="absolute bottom-5 -left-10 bg-white border border-[#fb588f] text-[#fb588f] font-display italic text-[11px] lg:text-[12px] font-black px-3.5 py-1.5 rounded-full shadow-md transform rotate-[-8deg] hover:scale-105 transition-transform cursor-default select-none">
              Full-Stack Dev
            </div>
          </motion.div>
        </div>

      </div>

      {/* Navigation and Indicators Footer */}
      <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto z-10 pt-4 border-t border-zinc-900">
        <div className="flex justify-between items-center text-zinc-100 font-mono text-[11.5px] sm:text-[13px] uppercase tracking-wider font-bold">
          <div className="flex items-center gap-6">
            <span className="text-[#fb588f] font-extrabold">CYBER SECURITY &amp; WEB SYSTEMS</span>
            <span className="text-zinc-400">|</span>
            <span className="text-yellow-400 font-extrabold">GPA 3.89</span>
          </div>
          <button 
            onClick={() => onNavigate(1)} 
            className="flex items-center gap-1 hover:text-white transition-colors py-1 cursor-pointer font-black text-yellow-400"
          >
            <span>NEXT (PROJECTS)</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
