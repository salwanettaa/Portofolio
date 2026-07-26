import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MessageSquare, Terminal, ArrowUp, FileText } from 'lucide-react';

interface ContactSectionProps {
  onNavigate: (index: number) => void;
}

export default function ContactSection({ onNavigate }: ContactSectionProps) {
  return (
    <section 
      id="page-5"
      className="snap-section relative bg-[#120b16] px-6 py-12 flex flex-col justify-between overflow-y-auto text-zinc-100"
    >
      {/* Background radial soft lights */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none font-mono text-[140px] leading-none font-black flex items-center justify-center text-pink-500">
        CONNECT
      </div>
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ec4899 1.2px, transparent 1.2px)', backgroundSize: '30px 30px' }} />
      <div className="absolute bottom-12/4 right-12/4 w-80 h-80 bg-pink-500/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="pt-12 sm:pt-14 max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-2 font-mono text-[10px] lg:text-[12px] text-[#fb588f] font-bold">
          <Terminal className="w-3.5 h-3.5 text-[#fb588f]" />
          <span>06 // CONTACT PORTAL</span>
        </div>
        <div className="hidden sm:block text-right font-mono text-[11px] lg:text-[13px] text-zinc-100 font-bold">
          AVAILABLE FOR OPPORTUNITIES
        </div>
      </div>

      {/* Split Page Contents */}
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 my-auto z-10 pt-4 pb-4 items-stretch">
        
        {/* Left Half: Aesthetic Message & Mission */}
        <div className="md:col-span-6 flex flex-col justify-center text-left">
          <span className="font-mono text-[10.5px] lg:text-[12px] uppercase tracking-[0.2em] text-[#fb588f] font-extrabold block mb-2.5">
            GET IN TOUCH
          </span>
          <h3 className="font-display font-black text-white text-3xl sm:text-4.5xl lg:text-5xl xl:text-6xl tracking-tight leading-none mb-4 uppercase">
            Let&apos;s Collaborate
          </h3>
          <p className="text-zinc-200 text-[14px] sm:text-[15.5px] lg:text-[17px] xl:text-[18.5px] font-sans leading-relaxed mb-6 font-semibold">
I am driven by practical problem-solving and always excited to join technical environments that challenge my skills. If you are looking for a dedicated team player to build secure web architectures or discuss, feel free to drop a message!          </p>

          <div className="bg-black/25 rounded-2xl border-2 border-[#120b16] p-4.5 font-mono text-[13px] lg:text-[14.5px] text-zinc-100 font-bold space-y-2.5">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Current Status: Open to Internships Opportunities</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span>Location: Cikarang/Yogyakarta, ID // Remote Worldwide</span>
            </div>
          </div>
        </div>

        {/* Right Half: Connection interactive cards with PDF Downloader */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <div className="bg-[#1b0c1c] border-2 border-[#fb588f]/30 rounded-3xl p-6.5 lg:p-8 relative overflow-hidden flex flex-col justify-between shadow-xl">
            
            {/* Direct Target callout: Highlighted PDF Download Resume button */}
            <div className="mb-5">
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl border-2 border-yellow-400 bg-yellow-400 hover:bg-yellow-300 text-black font-display font-black tracking-wide transition-all duration-200 shadow-md group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5.5 h-5.5 text-black" />
                  <span className="text-xs lg:text-sm uppercase font-black">Download Complete Resume</span>
                </div>
                <span className="font-mono text-[9.5px] lg:text-[10.5px] bg-black text-yellow-500 px-3 py-1 rounded-md font-extrabold tracking-widest">GET PDF</span>
              </a>
            </div>

            {/* Link Rows */}
            <div className="space-y-3">
              <a 
                href="mailto:salwanettayumna@gmail.com"
                className="flex items-center justify-between p-4 rounded-2xl border border-zinc-800 bg-[#2a112c]/30 hover:bg-[#2a112c]/65 hover:border-[#fb588f]/50 group transition-all duration-200 text-left"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4.5 h-4.5 text-zinc-100 group-hover:text-[#fb588f]" />
                  <span className="font-sans font-extrabold text-sm lg:text-base tracking-wide text-white">Write direct Email</span>
                </div>
                <span className="font-mono text-[11px] lg:text-[12.5px] text-zinc-100 group-hover:text-[#fb588f] truncate max-w-[150px] font-bold">salwanettayumna@gmail.com</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/salwanettajauzayumna" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl border border-zinc-800 bg-[#2a112c]/30 hover:bg-[#2a112c]/65 hover:border-[#fb588f]/50 group transition-all duration-200 text-left"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4.5 h-4.5 text-zinc-100 group-hover:text-[#fb588f]" />
                  <span className="font-sans font-extrabold text-sm lg:text-base tracking-wide text-white">LinkedIn Network</span>
                </div>
                <span className="font-mono text-[11px] lg:text-[12.5px] text-zinc-100 group-hover:text-[#fb588f] font-bold">/salwanetta...</span>
              </a>

              <a 
                href="https://github.com/salwanettaa" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl border border-zinc-800 bg-[#2a112c]/30 hover:bg-[#2a112c]/65 hover:border-[#fb588f]/50 group transition-all duration-200 text-left"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4.5 h-4.5 text-zinc-100 group-hover:text-[#fb588f]" />
                  <span className="font-sans font-extrabold text-sm lg:text-base tracking-wide text-white">GitHub Codebase</span>
                </div>
                <span className="font-mono text-[11px] lg:text-[12.5px] text-zinc-100 group-hover:text-[#fb588f] font-bold">/salwanettaa</span>
              </a>

              <a 
                href="https://wa.me/6285183149774" // direct placeholder WA connection
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl border border-[#fb588f]/10 bg-[#fb588f]/5 hover:bg-[#fb588f] hover:text-white hover:border-[#fb588f] group transition-all duration-200 text-left"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4.5 h-4.5 text-zinc-100 group-hover:text-white" />
                  <span className="font-sans font-extrabold text-sm lg:text-base tracking-wide text-[#fb588f] group-hover:text-white">Shoot WhatsApp Ping</span>
                </div>
                <span className="font-mono text-[11px] lg:text-[12.5px] text-white group-hover:text-zinc-100 font-bold">Immediate response</span>
              </a>
            </div>

            {/* Small secure terminal indicator logo */}
            <div className="mt-5 pt-3.5 border-t border-zinc-800 flex items-center justify-between">
              <span className="font-mono text-[11px] lg:text-[13px] text-zinc-100 flex items-center gap-1.5 uppercase font-bold">
                <Terminal className="w-3.5 h-3.5 text-[#fb588f]" /> SALWANETTA JAUZA YUMNA
              </span>
              <span className="font-mono text-[9px] lg:text-[11px] text-pink-500 font-extrabold uppercase tracking-widest">
                PORTFOLIO CONTACT
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Navigation Indicators Footer - NO per-page numbering */}
      <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto z-10 border-t border-zinc-800 pt-4">
        <div className="flex justify-between items-center text-zinc-100 font-mono text-[11.5px] font-bold">
          <div className="uppercase tracking-widest text-[#84cc16]">CONTACT DIRECTORY</div>
          <div className="flex gap-4">
            <button 
              onClick={() => onNavigate(4)} 
              className="hover:text-white text-zinc-400 transition-colors cursor-pointer py-1 block pr-2"
            >
              PREVIOUS
            </button>
            <button 
              onClick={() => onNavigate(0)} 
              className="flex items-center gap-1 hover:text-white text-zinc-450 transition-colors py-1 cursor-pointer pr-4 uppercase text-yellow-405 text-yellow-400 font-bold"
            >
              <span>BACK TO COVER</span>
              <ArrowUp className="w-3 h-3 text-yellow-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
