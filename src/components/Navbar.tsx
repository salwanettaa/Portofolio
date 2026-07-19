import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

const NAV_ITEMS = [
  { label: 'Home', index: 0 },
  { label: 'Projects', index: 1 },
  { label: 'Skills', index: 2 },
  { label: 'Experience', index: 3 },
  { label: 'Education', index: 4 },
  { label: 'Contact', index: 5 },
];

const DOT_ITEMS = [
  { label: '01 HOME', desc: 'Secure Welcome', index: 0 },
  { label: '02 LABS', desc: 'Projects Portfolio', index: 1 },
  { label: '03 SKILLS', desc: 'Core Capabilities', index: 2 },
  { label: '04 LEADERSHIP', desc: 'Experience & Leadership', index: 3 },
  { label: '05 EDUCATION', desc: 'Academic Vault', index: 4 },
  { label: '06 CONNECT', desc: 'Secure Contact', index: 5 },
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (index: number) => {
    onNavigate(index);
    setIsOpen(false);
  };

  return (
    <>
      {/* Sticky Main Navigation */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4 pointer-events-none">
        <div className="w-full bg-[#0c0c0e]/95 backdrop-blur-md border border-pink-500/20 hover:border-pink-500/40 px-4 sm:px-6 py-3 rounded-xl shadow-md pointer-events-auto flex items-center justify-between transition-colors">
          
          {/* Logo / Branding */}
          <button 
            onClick={() => handleNavigate(0)} 
            className="flex items-center gap-2 font-display text-[14px] tracking-widest font-black text-white cursor-pointer"
          >
            <div className="w-7 h-7 bg-yellow-400 font-mono text-black font-extrabold text-[12px] leading-none shrink-0 rounded flex items-center justify-center">
              Y
            </div>
            <span className="font-extrabold tracking-tight uppercase text-white">
              NETTA<span className="text-pink-500">.</span>
            </span>
            <span className="hidden xs:inline-flex items-center font-mono text-[9px] bg-pink-500/10 text-pink-400 px-2 py-0.5 rounded border border-pink-500/20 font-bold">
              <Terminal className="w-2.5 h-2.5 mr-1 text-pink-400" /> SYS_CONNECTED
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.index;
              return (
                <button
                  key={item.index}
                  onClick={() => handleNavigate(item.index)}
                  className={`relative px-3 py-1.5 rounded-lg font-sans text-[13px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive ? 'text-yellow-400 animate-pulse' : 'text-zinc-100 hover:text-yellow-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-[#161619] border border-zinc-800 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Hamburger toggle button on mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/80 text-zinc-100 hover:text-pink-500 hover:border-pink-500/30 focus:outline-none cursor-pointer transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5 text-pink-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark background backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Sliding menu card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-4 right-4 z-40 bg-[#0c0c0e]/98 backdrop-blur-lg border border-pink-500/30 rounded-2xl p-5 shadow-2xl md:hidden flex flex-col gap-3"
            >
              {/* System Header Accent */}
              <div className="flex items-center justify-between border-b border-pink-500/10 pb-3 mb-1">
                <span className="font-mono text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                  &gt; SECURE_MENU_PORT
                </span>
                <span className="font-mono text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                  ACTIVE
                </span>
              </div>
              
              <div className="flex flex-col gap-1.5">
                {DOT_ITEMS.map((item) => {
                  const isActive = activeSection === item.index;
                  return (
                    <button
                      key={item.index}
                      onClick={() => handleNavigate(item.index)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer text-left ${
                        isActive 
                          ? 'bg-pink-500/15 border-pink-500/50 text-yellow-400' 
                          : 'bg-zinc-950/60 border-zinc-900 text-zinc-300 hover:border-zinc-800 hover:text-white'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="font-mono text-[11px] font-black tracking-wider">
                          {item.label}
                        </span>
                        <span className="font-sans text-[10px] text-zinc-500 font-semibold uppercase tracking-wide">
                          {item.desc}
                        </span>
                      </div>
                      
                      {isActive ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse ring-4 ring-yellow-400/20" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Vertical Dot-Navigation Indicator for desktop */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 items-end">
        {DOT_ITEMS.map((item) => {
          const isActive = activeSection === item.index;
          return (
            <button
              key={item.index}
              onClick={() => handleNavigate(item.index)}
              className="group flex items-center gap-2 pr-1 cursor-pointer relative animate-fade-in"
              aria-label={`Go to ${item.label}`}
            >
              {/* Tooltip Description on Hover */}
              <div className="absolute right-7 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 flex flex-col items-end">
                <span className="bg-zinc-950 border border-pink-500/30 text-white font-mono text-[9px] tracking-widest px-2 py-1 rounded shadow-md whitespace-nowrap uppercase">
                  {item.label}
                </span>
                <span className="text-yellow-400 font-sans text-[9px] mr-1 whitespace-nowrap uppercase tracking-wider font-semibold">
                  {item.desc}
                </span>
              </div>

              {/* Active / Inactive Dot Indicator */}
              <div className="relative flex items-center justify-center">
                {isActive ? (
                  <motion.div
                    layoutId="activeDotRing"
                    className="w-2.5 h-2.5 rounded-full bg-pink-500 ring-4 ring-pink-500/20 z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-pink-400 transition-all duration-150 ml-[2px]" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
