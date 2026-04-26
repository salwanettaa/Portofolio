/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Terminal from './components/Terminal';
import Desktop from './components/Desktop';

type AppState = 'landing' | 'booting' | 'os';

export default function App() {
  const [state, setState] = useState<AppState>('landing');

  React.useEffect(() => {
    console.log("%c netta_OS v1.0.0 ", "background: #FF79C6; color: #0D0D15; font-weight: bold; font-size: 20px; padding: 5px;");
    console.log("%c > FLAG{y0u_f0und_f1rst_fl4g_c0ngratz!} ", "color: #84FFC9; font-family: monospace; font-size: 14px;");
    console.log("Looking for more flags? Try interacting with the system ...");
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden bg-cyber-bg selection:bg-cyber-pink selection:text-white">
      {/* Refined Scanline Overlay */}
      <div className="scanline-overlay" />

      <AnimatePresence mode="wait">
        {state === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative z-10"
          >
            {/* Artistic Flair Frame Decorations */}
            <div className="absolute top-10 left-10 w-24 h-24 border-t-4 border-l-4 border-cyber-pink shadow-[-4px_-4px_0px_#8D3D6A] opacity-80" />
            <div className="absolute bottom-10 right-10 w-24 h-24 border-b-4 border-r-4 border-cyber-purple shadow-[4px_4px_0px_#000] opacity-80" />

            <div className="space-y-8 max-w-2xl">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center justify-center gap-4 mb-4"
              >
                <div className="w-6 h-6 bg-cyber-pink shadow-[4px_4px_0px_#8D3D6A]"></div>
                <h2 className="font-pixel text-xl text-cyber-purple tracking-widest">SYS_V1.0.0</h2>
              </motion.div>

              <motion.h1 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-pixel text-3xl md:text-5xl text-white tracking-widest leading-relaxed drop-shadow-[0_0_15px_rgba(255,121,198,0.3)]"
              >
                Hi, I'm <span className="text-cyber-pink">Netta</span>
              </motion.h1>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-pixel text-xs md:text-sm text-cyber-pink uppercase tracking-tighter"
              >
                Let's get to know me!
              </motion.h1>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-black/60 border-2 border-cyber-mint/30 py-3 px-8 text-cyber-mint font-mono text-sm tracking-widest uppercase"
              >
                [ IT Student  @ President University ]
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-16"
              >
                <button
                  onClick={() => setState('booting')}
                  className="pixel-button px-10 py-5 text-sm md:text-base cursor-pointer"
                >
                  [enter_my_world.exe]
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {state === 'booting' && (
          <motion.div key="terminal-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Terminal onComplete={() => setState('os')} />
          </motion.div>
        )}

        {state === 'os' && (
          <motion.div
            key="os"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10"
          >
            {/* Top Artistic Flair Header Bar */}
            <div className="fixed top-0 left-0 right-0 h-14 bg-black border-b-4 border-cyber-pink flex items-center justify-between px-6 z-30 shadow-[0_4px_20px_rgba(255,121,198,0.2)]">
              <div className="flex items-center gap-4">
                 <div className="w-5 h-5 bg-cyber-pink shadow-[2px_2px_0px_#8D3D6A]" />
                 <h1 className="font-pixel text-xs md:text-sm text-cyber-pink uppercase tracking-tighter">Netta's Space</h1>
              </div>
              <div className="flex gap-4 md:gap-8 text-[10px] md:text-xs font-bold uppercase overflow-hidden">
                {/* <span className="hidden sm:inline text-cyber-mint">SYS.STATUS: ACTIVE</span>
                <span className="flex items-center gap-2 text-cyber-pink">
                  <motion.svg 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ duration: 1.5, repeat: Infinity }}
                    width="12" height="12" viewBox="0 0 16 16" fill="currentColor"
                  >
                    <path d="M2 2h2v2H2zM4 4h2v2H4zM6 6h2v2H6zM8 4h2v2H8zM10 2h2v2h-2zM4 8h2v2H4zM6 10h2v2H6zM8 8h2v2H8z" />
                  </motion.svg>
                  3 LIVES
                </span> */}
                <span className="bg-cyber-purple/20 px-3 py-1 font-mono text-cyber-purple border border-cyber-purple/30">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>

            

            <Desktop />

            {/* Artistic Flair Footer Taskbar */}
            <div className="fixed bottom-0 left-0 right-0 h-14 bg-black border-t-4 border-cyber-purple flex items-center px-4 justify-between z-30 shadow-[0_-4px_20px_rgba(224,170,255,0.1)]">
              <div className="flex items-center gap-4">
                <div className="bg-cyber-purple text-black px-6 py-2 font-black text-xs cursor-pointer hover:bg-white transition-colors uppercase font-pixel tracking-tighter">
                  START
                </div>
                <div className="hidden md:flex gap-2 opacity-50">
                  <div className="w-5 h-5 border-2 border-white/20" />
                  <div className="w-5 h-5 border-2 border-white/20 bg-white/10" />
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="hidden sm:block px-4 py-1 border border-white/10 text-[10px] text-white/40 font-mono tracking-widest uppercase">
                  SYSTEM READY // PORT 3000
                </div>
                <div className="bg-[#1A1A2E] px-3 py-1 border border-white/20">
                  <span className="text-[10px] font-bold text-cyber-mint tracking-widest uppercase">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

