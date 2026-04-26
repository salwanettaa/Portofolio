import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Square } from 'lucide-react';

interface WindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Window({ title, isOpen, onClose, children }: WindowProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed inset-0 flex items-center justify-center p-4 z-40 pointer-events-none"
        >
          <div className="w-full max-w-3xl glass-window rounded-none border-4 border-cyber-pink shadow-[0_0_40px_rgba(255,121,198,0.2)] pointer-events-auto overflow-hidden flex flex-col max-h-[85vh]">
            {/* Title Bar */}
            <div className="bg-cyber-pink text-cyber-bg px-4 py-2 flex items-center justify-between font-pixel text-xs">
              <span>{title}</span>
              <div className="flex gap-2">
                <Minus size={14} className="cursor-pointer hover:bg-cyber-bg/20" />
                <Square size={12} className="cursor-pointer hover:bg-cyber-bg/20" />
                <X size={14} onClick={onClose} className="cursor-pointer hover:bg-white text-cyber-bg transition-colors" />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar bg-black/40">
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
