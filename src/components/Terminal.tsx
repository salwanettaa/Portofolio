import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TerminalProps {
  onComplete: () => void;
}

export default function Terminal({ onComplete }: TerminalProps) {
  const [lines, setLines] = useState<string[]>([]);
  const fullLines = [
    "> Initializing netta_OS v1.0.0....",
    "> Location: President University",
    "> Focus: Cyber Security & Back-End Developer",
    "> Decrypting profile_data.txt....",
    "> Bypassing firewall....",
    "> ACCESS GRANTED"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLines(prev => {
        if (prev.length < fullLines.length) {
          return [...prev, fullLines[prev.length]];
        }
        clearInterval(interval);
        return prev;
      });
    }, 600);

    const completionTimeout = setTimeout(() => {
        if (lines.length === fullLines.length) {
            onComplete();
        }
    }, fullLines.length * 600 + 1200);

    return () => {
        clearInterval(interval);
        clearTimeout(completionTimeout);
    };
  }, [onComplete]);

  useEffect(() => {
    if (lines.length === fullLines.length) {
        const timer = setTimeout(onComplete, 1200);
        return () => clearTimeout(timer);
    }
  }, [lines.length, onComplete]);

  return (
    <div className="fixed inset-0 bg-cyber-bg flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-2xl pixel-box p-6 md:p-8 font-mono text-xs md:text-sm leading-relaxed overflow-hidden">
        {/* Terminal Header */}
        <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
          <div className="w-3 h-3 rounded-full bg-cyber-pink shadow-[0_0_8px_rgba(255,121,198,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-cyber-purple opacity-50"></div>
          <div className="w-3 h-3 rounded-full bg-cyber-mint opacity-50"></div>
          <div className="ml-auto font-pixel text-[8px] text-white/20 tracking-tighter">TERMINAL.SYS</div>
        </div>

        <div className="space-y-3">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={(line && line.includes("ACCESS GRANTED"))
                ? "text-cyber-pink font-black animate-pulse text-base md:text-lg mt-4 bg-cyber-pink/10 py-2 px-4 inline-block" 
                : (line && line.includes("....")) ? "text-white/40 italic" : "text-cyber-mint"}
            >
              {line}
            </motion.div>
          ))}
          {lines.length < fullLines.length && (
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-cyber-mint ml-1 align-middle"
            />
          )}
        </div>

        {/* Decorative Progress Bar */}
        {lines.length > 0 && lines.length < fullLines.length && (
          <div className="mt-12 h-1 bg-white/5 relative overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(lines.length / fullLines.length) * 100}%` }}
              className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-pink"
            />
          </div>
        )}
      </div>
    </div>
  );
}

