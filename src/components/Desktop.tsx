import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PixelFolderIcon, PixelFileIcon, PixelHeart, PixelCat } from './PixelAssets';
import Window from './Window';

interface DesktopIconProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const DesktopIcon = ({ label, icon, onClick }: DesktopIconProps) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="flex flex-col items-center gap-2 group w-24"
  >
    <div className="group-hover:drop-shadow-[0_0_8px_rgba(224,170,255,0.8)] transition-all">
      {icon}
    </div>
    <span className="text-[10px] md:text-xs font-mono bg-cyber-bg/80 px-2 py-1 group-hover:bg-cyber-pink group-hover:text-cyber-bg transition-colors">
      {label}
    </span>
  </motion.button>
);

export default function Desktop() {
  const [openWindow, setOpenWindow] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [selectedWriteup, setSelectedWriteup] = useState<number | null>(null);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [catClicks, setCatClicks] = useState(0);

  const handleCatClick = () => {
    setCatClicks(prev => prev + 1);
    if (catClicks + 1 === 5) {
      setOpenWindow('secret_flag');
      setCatClicks(0);
    }
  };

  const resetSelection = () => {
    setSelectedProject(null);
    setSelectedCert(null);
    setSelectedWriteup(null);
  };

  const projects = [
    { 
      title: "Scholarz-Path", 
      desc: "An AI-powered scholarship recommendation system.", 
      longDesc: "This project uses a custom scraping engine and a matching algorithm to pair student profiles with international scholarships. Built as a solution for educational accessibility.",
      tech: ["React", "Python", "FastAPI", "PostgreSQL"],
      links: { github: "#", demo: "#" }
    },
    { 
      title: "TUAI", 
      desc: "Smart agriculture AI solution.", 
      longDesc: "TUAI (Tumbuh AI) provides real-time crop disease detection using computer vision models. It helps farmers identify pests through a simple mobile interface.",
      tech: ["Next.js", "TensorFlow", "Firebase"],
      links: { github: "#" }
    },
    { 
      title: "Packet Sniffer", 
      desc: "Cybersec tool for network analysis.", 
      longDesc: "A low-level network analysis tool developed for capturing and dissecting TCP/UDP packets for educational security audits.",
      tech: ["Python", "Scapy", "Linux"],
      links: {}
    }
  ];

  const certificates = [
    {
      title: "Google Cyber Security Professional",
      issuer: "Google / Coursera",
      date: "2024",
      desc: "Comprehensive foundation in cybersecurity, covering threat landscape, security controls, and incident response.",
      img: "https://api.dicebear.com/7.x/identicon/svg?seed=GoogleCert"
    },
    {
      title: "CompTIA Security+ (In progress)",
      issuer: "CompTIA",
      date: "2024",
      desc: "Current focus on core security functions and pursuing an entry-level IT security career.",
      img: "https://api.dicebear.com/7.x/identicon/svg?seed=CompTIA"
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta / Coursera",
      date: "2023",
      desc: "Professional certificate covering React, UI/UX design, and front-end development best practices.",
      img: "https://api.dicebear.com/7.x/identicon/svg?seed=Meta"
    },
    {
      title: "President University Dean's List Q3",
      issuer: "President University",
      date: "2023",
      desc: "Academic excellence award for maintaining a GPA above 3.5 in the IT program.",
      img: "https://api.dicebear.com/7.x/identicon/svg?seed=PubList"
    }
  ];

  const writeups = [
    {
      title: "HTB: Tactics Walkthrough",
      type: "CTF Walkthrough",
      date: "2024-03-15",
      difficulty: "Medium",
      content: "A detailed breakdown of exploiting an SMB share vulnerability to gain user access on the Tactics machine from HackTheBox. Focuses on nmap scanning and smbclient usage."
    },
    {
      title: "SQL Injection Fundamentals",
      type: "Educational",
      date: "2024-01-20",
      content: "An introductory guide to understanding SQL injection (SQLi), its impact on database security, and how to implement prepared statements for mitigation."
    }
  ];

  return (
    <div className="relative min-h-screen p-8 pt-20 flex flex-col md:flex-row items-start w-full h-full" onClick={() => isStartMenuOpen && setIsStartMenuOpen(false)}>
      {/* Sidebar Grid */}
      <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-4 gap-8 md:w-32 z-10 w-full md:w-auto shrink-0">
        <DesktopIcon 
          label="projects/" 
          icon={<PixelFolderIcon color="var(--color-cyber-pink)" />} 
          onClick={() => { setOpenWindow('projects'); resetSelection(); }}
        />
        <DesktopIcon 
          label="certificates/" 
          icon={<PixelFolderIcon color="var(--color-cyber-purple)" />} 
          onClick={() => { setOpenWindow('certificates'); resetSelection(); }}
        />
        <DesktopIcon 
          label="writeups/" 
          icon={<PixelFolderIcon color="var(--color-cyber-mint)" />} 
          onClick={() => { setOpenWindow('writeups'); resetSelection(); }}
        />
        <DesktopIcon 
          label="identity_card.xoxo" 
          icon={<PixelFileIcon color="white" />} 
          onClick={() => { setOpenWindow('identity'); resetSelection(); }}
        />
      </div>

      {/* Area Tengah: The Personal Manifesto / Introduction */}
      <div className="flex-1 flex items-center justify-center p-10 w-full md:h-[calc(100vh-120px)] mt-10 md:mt-0">
        <div className="w-[600px] bg-black/60 border border-cyber-pink/40 p-6 font-mono text-[10px] text-cyber-pink/80 shadow-[0_0_20px_rgba(255,121,198,0.15)] backdrop-blur-md relative overflow-hidden">
          
          {/* Decorative Sparkles in corners */}
          <span className="absolute top-2 left-2 text-[8px] opacity-50 text-cyber-mint">✨</span>
          <span className="absolute bottom-2 right-2 text-[8px] opacity-50 text-cyber-mint">✨</span>

          {/* Header */}
          <div className="flex justify-between items-center border-b border-cyber-pink/20 pb-3 mb-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-cyber-pink/50"></div>
              <div className="w-2 h-2 rounded-full bg-cyber-purple/50"></div>
              <div className="w-2 h-2 rounded-full bg-cyber-mint/50"></div>
            </div>
            <span className="font-pixel text-[10px] tracking-[0.2em] text-cyber-mint">HELLO_VISITOR.SYS</span>
            <span className="text-cyber-pink/50 text-[10px]">v1.1</span>
          </div>

          {/* Body: Introduction Narrative */}
          <div className="space-y-4 text-[11px] leading-relaxed text-white/90">
            <div className="flex gap-2">
              <span className="text-cyber-mint font-bold">root@netta:~$</span>
              <span className="text-cyber-pink animate-pulse italic">whoami</span>
            </div>

            <p>
              I am a <span className="text-cyber-mint font-bold">Tech Enthusiast</span> and 
              <span className="text-cyber-purple font-bold"> Cybersecurity Student</span> 
              who believes that code should not only be functional but also unbreakable. 
              Currently navigating my 5th semester at President University, I spend my days bridging the gap between 
              <span className="text-cyber-pink italic"> aesthetic interfaces</span> and 
              <span className="text-cyber-mint italic"> robust security protocols</span>.
            </p>

            <p>
              My journey isn't just about writing lines of code; it's about solving puzzles—whether it's building 
              scalable applications like <span className="text-white underline decoration-cyber-purple/50">Scholarz-Path</span> 
              or hunting for vulnerabilities in a CTF challenge. I thrive at the intersection of 
              <span className="text-cyber-purple"> creativity</span> and <span className="text-cyber-mint"> defense</span>.
            </p>

            <div className="bg-cyber-purple/10 border-l-2 border-cyber-purple p-3 my-2">
              <p className="text-[10px] text-cyber-purple italic">
                "I build with the heart of a developer and protect with the mind of a hacker."
              </p>
            </div>

            <p>
              I'm currently preparing for my <span className="text-cyber-pink font-bold">Professional Internship (Sept 2026)</span>. 
              I am looking for opportunities where I can contribute to meaningful projects, secure digital assets, and grow alongside 
              the brightest minds in the industry.
            </p>

            <div className="pt-4 flex items-center justify-between border-t border-cyber-pink/10">
              <span className="text-cyber-mint font-pixel text-[8px]">Let's build something secure together ♡</span>
              <div className="flex gap-2 text-[14px]">
                  <span>💌</span>
                  <span>👩💻</span>
                  <span>🛡️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Re-locating Star Button Trigger Area */}
      <div className="fixed bottom-0 left-0 w-32 h-14 z-50">
        <button 
           onClick={(e) => { e.stopPropagation(); setIsStartMenuOpen(!isStartMenuOpen); }}
           className="w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      {/* Start Menu Overlay */}
      <AnimatePresence>
        {isStartMenuOpen && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="fixed bottom-16 left-4 w-64 glass-window z-40 border-4 border-cyber-purple p-2 shadow-[0_-10px_30px_rgba(224,170,255,0.2)]"
          >
            <div className="bg-cyber-purple text-black font-pixel text-[10px] px-2 py-1 mb-2">Netta_OS v5.0.1</div>
            <div className="space-y-1">
              <button 
                onClick={() => { setOpenWindow('identity'); setIsStartMenuOpen(false); }}
                className="w-full text-left px-4 py-2 hover:bg-cyber-purple/20 text-xs font-mono text-white/80"
              >
                [0] View Identity
              </button>
              <button 
                className="w-full text-left px-4 py-2 hover:bg-cyber-purple/20 text-xs font-mono text-white/80"
                onClick={() => window.location.reload()}
              >
                [1] Restart System
              </button>
              <button 
                className="w-full text-left px-4 py-2 hover:bg-cyber-purple/20 text-xs font-mono text-white/80"
                onClick={() => { setOpenWindow('projects'); setIsStartMenuOpen(false); }}
              >
                [2] Run Apps
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Re-locating Decorative Assets for better visibility */}
      <div className="fixed bottom-20 right-8 flex flex-col items-end gap-4 z-0">
        <div className="flex gap-2 mb-4 pointer-events-none">
          <PixelHeart className="opacity-60 scale-75" />
          <PixelHeart className="opacity-80" />
        </div>
        <button 
          onClick={handleCatClick}
          className="bg-cyber-bg/40 backdrop-blur-sm p-4 border border-cyber-purple mb-4 cursor-pointer hover:border-cyber-pink transition-colors active:scale-95 pointer-events-auto"
        >
           <PixelCat />
        </button>
      </div>

      {/* Windows */}
      <Window 
        title="CRITICAL_ERROR: EXPLOIT_FOUND" 
        isOpen={openWindow === 'secret_flag'} 
        onClose={() => setOpenWindow(null)}
      >
        <div className="text-center space-y-6 py-8">
          <div className="text-4xl animate-bounce">🚩</div>
          <h2 className="font-pixel text-cyber-pink text-lg tracking-widest">SYSTEM_BREACH_SUCCESSFUL</h2>
          <div className="p-4 bg-cyber-pink/20 border-2 border-dashed border-cyber-pink font-mono text-sm">
            {"FLAG{PIX3L_C4T_BYP4SS_COMPLETED}"}
          </div>
          <p className="text-[10px] text-white/50 font-mono italic">
            "You found the hidden entry point. Your curiosity is your greatest asset."
          </p>
        </div>
      </Window>

      <Window 
        title="projects_explorer.exe" 
        isOpen={openWindow === 'projects'} 
        onClose={() => setOpenWindow(null)}
      >
        {selectedProject === null ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
            {projects.map((p, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedProject(i)}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-cyber-pink/10 hover:bg-cyber-pink/20 border-2 border-cyber-pink flex items-center justify-center transition-colors shadow-[0_0_10px_rgba(255,121,198,0.1)]">
                  <PixelFileIcon color="var(--color-cyber-pink)" />
                </div>
                <span className="text-[10px] font-pixel text-white group-hover:text-cyber-pink text-center break-all px-2">{p.title}.sys</span>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => setSelectedProject(null)}
              className="text-[10px] font-pixel text-cyber-mint hover:text-white transition-colors mb-6 block"
            >
              {"<"} BACK_TO_DIRECTORY
            </button>
            
            <div className="border-4 border-cyber-pink p-6 bg-black/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <PixelFileIcon color="white" />
              </div>
              <h3 className="font-pixel text-xl text-cyber-pink mb-4">{projects[selectedProject].title}</h3>
              <p className="font-mono text-sm text-white/80 leading-relaxed mb-8">
                {projects[selectedProject].longDesc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {projects[selectedProject].tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-cyber-purple/10 border border-cyber-purple text-cyber-purple text-[10px] font-bold uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="pixel-button px-6 py-2 text-[10px]">VIEW SOURCE</button>
                <button className="pixel-button !bg-cyber-mint px-6 py-2 text-[10px]">LAUNCH LIVE</button>
              </div>
            </div>
          </div>
        )}
      </Window>

      <Window 
        title="certificates_viewer.sys" 
        isOpen={openWindow === 'certificates'} 
        onClose={() => setOpenWindow(null)}
      >
        {selectedCert === null ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
            {certificates.map((c, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCert(i)}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-cyber-purple/10 hover:bg-cyber-purple/20 border-2 border-cyber-purple flex items-center justify-center transition-colors shadow-[0_0_10px_rgba(224,170,255,0.1)] overflow-hidden">
                   <img src={c.img} alt={c.title} className="w-10 h-10 object-contain opacity-70 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                </div>
                <span className="text-[10px] font-pixel text-white group-hover:text-cyber-purple text-center break-words px-2">cert_{i+1}.sys</span>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => setSelectedCert(null)}
              className="text-[10px] font-pixel text-cyber-mint hover:text-white transition-colors mb-6 block"
            >
              {"<"} BACK_TO_LIST
            </button>
            
            <div className="border-4 border-cyber-purple p-6 bg-black/40 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-32 h-32 bg-white/5 border-2 border-cyber-purple flex items-center justify-center">
                 <img src={certificates[selectedCert].img} alt="cert" className="w-20 h-20 object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="font-pixel text-lg text-cyber-purple">{certificates[selectedCert].title}</h3>
                <div className="flex justify-between items-center bg-cyber-purple/10 px-3 py-1 font-mono text-[10px] text-cyber-purple">
                  <span>ISSUER: {certificates[selectedCert].issuer}</span>
                  <span>DATE: {certificates[selectedCert].date}</span>
                </div>
                <p className="font-mono text-sm text-white/80 leading-relaxed">
                  {certificates[selectedCert].desc}
                </p>
                <button className="pixel-button px-6 py-2 text-[10px] !bg-cyber-purple text-black">VIEW CREDENTIAL</button>
              </div>
            </div>
          </div>
        )}
      </Window>

      <Window 
        title="writeups_log.txt" 
        isOpen={openWindow === 'writeups'} 
        onClose={() => setOpenWindow(null)}
      >
        {selectedWriteup === null ? (
          <div className="space-y-2">
            {writeups.map((w, i) => (
              <div 
                key={i}
                onClick={() => setSelectedWriteup(i)}
                className="flex items-center gap-4 p-3 border-l-4 border-cyber-mint bg-cyber-mint/5 hover:bg-cyber-mint/10 transition-all cursor-pointer group"
              >
                 <PixelFileIcon color="var(--color-cyber-mint)" />
                 <div className="flex-1">
                    <h4 className="font-pixel text-[10px] text-cyber-mint group-hover:text-white transition-colors">{w.title}</h4>
                    <p className="text-[10px] text-white/40 mt-1">{w.type} | {w.date}</p>
                 </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => setSelectedWriteup(null)}
              className="text-[10px] font-pixel text-cyber-mint hover:text-white transition-colors mb-6 block"
            >
              {"<"} BACK_TO_LOGS
            </button>
            
            <div className="border-4 border-cyber-mint p-6 bg-black/40 space-y-6">
              <div className="border-b border-cyber-mint/30 pb-4">
                <h3 className="font-pixel text-lg text-cyber-mint">{writeups[selectedWriteup].title}</h3>
                <div className="flex gap-4 mt-2 font-mono text-[10px] text-white/50">
                  <span>DATE: {writeups[selectedWriteup].date}</span>
                  <span>TYPE: {writeups[selectedWriteup].type}</span>
                  {writeups[selectedWriteup].difficulty && <span>DIFFICULTY: {writeups[selectedWriteup].difficulty}</span>}
                </div>
              </div>
              
              <div className="font-mono text-sm text-white/80 leading-relaxed whitespace-pre-wrap">
                {writeups[selectedWriteup].content}
              </div>
              
              <div className="pt-4 border-t border-cyber-mint/30 flex gap-4">
                 <button className="pixel-button px-6 py-2 text-[10px] !bg-cyber-mint text-black">READ FULL PDF</button>
              </div>
            </div>
          </div>
        )}
      </Window>

      <Window 
        title="identity_card.xoxo" 
        isOpen={openWindow === 'identity'} 
        onClose={() => setOpenWindow(null)}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-cyber-pink shadow-[0_0_20px_rgba(255,121,198,0.5)] p-1 bg-gradient-to-br from-cyber-purple to-cyber-mint">
              <div className="w-full h-full rounded-full bg-cyber-bg overflow-hidden flex items-center justify-center hover:grayscale-0 transition-all duration-500 border-2 border-cyber-bg">
                 {/* 
                    USER: Replace the src below with your photo URL 
                    Example: src="/my_photo.jpg" 
                 */}
                 <img 
                    src="/netta.jpg" 
                    alt="Netta" 
                    className="w-full h-full object-cover antialiased" 
                    style={{ imageRendering: 'auto' }} 
                  />
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <div className="px-2 py-1 bg-cyber-pink text-black font-pixel text-[8px]">LVL.19</div>
              <div className="px-2 py-1 bg-cyber-purple text-black font-pixel text-[8px]">COFFEE_DRIVEN</div>
            </div>
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <h2 className="font-pixel text-xl md:text-2xl text-cyber-mint uppercase tracking-widest underline decoration-wavy underline-offset-8 decoration-cyber-pink/50">
                Salwanetta Jauza Yumna
              </h2>
              <p className="text-cyber-purple text-xs md:text-sm mt-3 font-mono font-bold">
                SEMESTER 5 IT STUDENT @ PRESUNIV
              </p>
            </div>
            
            <div className="space-y-2 text-xs md:text-sm text-white/70 font-mono leading-relaxed bg-black/30 p-4 border-l-4 border-cyber-pink">
              <p>{">"} Concentration: Cyber Security</p>
              <p>{">"} Other Interest: Back-End Developer</p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
              {["React", "JavaScript", "Kali", "Next.js", "Supabase", "SQL", "MongoDB", "Autopsy", "FTK Imager", "Wireshark", "NetworkMiner", "NIST Framework"].map(tag => (
                <span key={tag} className="px-2 py-1 bg-cyber-purple text-black text-[9px] font-bold uppercase">{tag}</span>
              ))}
            </div>

            <div className="flex gap-4 pt-4 justify-center md:justify-start">
               <button className="pixel-button px-4 py-2 text-[10px]">GITHUB</button>
               <button className="pixel-button px-4 py-2 text-[10px] !bg-cyber-mint">LINKEDIN</button>
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
}
