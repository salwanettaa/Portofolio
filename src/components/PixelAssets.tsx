import React from 'react';
import { motion } from 'motion/react';

export const PixelHeart = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 8 8" 
    className={`w-6 h-6 fill-cyber-pink pixel-heart ${className}`}
    shapeRendering="crispEdges"
  >
    <path d="M2 1h1v1h2V1h1v1h1v3H6v1H5v1H3V6H2V5H1V2h1V1z" />
  </svg>
);

export const PixelCat = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg 
      viewBox="0 0 16 16" 
      className="w-16 h-16 fill-white"
      shapeRendering="crispEdges"
    >
      {/* Body */}
      <path d="M4 10h8v3H4v-3z" />
      {/* Head */}
      <path d="M11 8h4v3h-4V8z" />
      {/* Ears */}
      <path d="M12 7h1v1h-1zM14 7h1v1h-1z" />
      {/* Tail - Pudgy version */}
      <path d="M2 9h2v2H2z" />
      {/* Zzz animation */}
      <motion.g
        animate={{ opacity: [0, 1, 0], y: [-2, -8] }}
        transition={{ duration: 2, repeat: Infinity, times: [0, 0.5, 1] }}
      >
        <text x="13" y="6" fontSize="4" className="fill-cyber-mint font-pixel">z</text>
      </motion.g>
      <motion.g
        animate={{ opacity: [0, 1, 0], y: [-2, -10] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.7, times: [0, 0.5, 1] }}
      >
        <text x="15" y="4" fontSize="4" className="fill-cyber-mint font-pixel">z</text>
      </motion.g>
    </svg>
  </div>
);

export const PixelFolderIcon = ({ color = "var(--color-cyber-purple)" }) => (
  <svg viewBox="0 0 16 16" className="w-12 h-12" style={{ fill: color }} shapeRendering="crispEdges">
    <path d="M1 3h5v2h9v8H1V3z" />
    <path d="M2 4h3v1H2V4z" opacity="0.3" />
  </svg>
);

export const PixelFileIcon = ({ color = "var(--color-cyber-mint)" }) => (
  <svg viewBox="0 0 16 16" className="w-12 h-12" style={{ fill: color }} shapeRendering="crispEdges">
    <path d="M3 2h8l3 3v9H3V2z" />
    <path d="M11 2v3h3" fill="none" stroke="black" strokeWidth="1" opacity="0.2" />
  </svg>
);
