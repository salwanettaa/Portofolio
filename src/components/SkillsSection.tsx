import { useState } from 'react';
import { Terminal, Shield, Globe, Sparkles, Hammer, ArrowDown } from 'lucide-react';

interface SkillsSectionProps {
  onNavigate: (index: number) => void;
}

export default function SkillsSection({ onNavigate }: SkillsSectionProps) {
  const [activeToolCategory, setActiveToolCategory] = useState<'all' | 'dev' | 'security' | 'forensics'>('all');

  const webHardSkills = [
    'JavaScript (ES6+)',
    'React',
    'Flutter (Dart)',
    'Express.js',
    'Node.js',
    'SQL & NoSQL',
    'Firebase Cloud Firestore',
    'Web Architecture',
    'Server-Side Internet Programming',
    'HTML5 & CSS3'
  ];

  const securityHardSkills = [
    'IT Governance & Audit',
    'Security Risk Management',
    'NIST CSF Mapping',
    'Compliance Risk Scoring',
    'OWASP Top 10 Audits',
    'Input Validation & Sanitization',
    'Secure Token Management',
    'Rate Limiting implementation',
    'Digital Forensics',
    'Cryptography & Data Security',
    'Host Artifact Restoration',
    'File Carving Architecture',
    'Computer Networks & NetSec',
    'Cyber Security Fundamentals'
  ];

  const toolsAndApps = [
    { name: 'Git', type: 'Version Control', category: 'dev' },
    { name: 'GitHub', type: 'Collaborative Dev', category: 'dev' },
    { name: 'Postman', type: 'API Testing', category: 'dev' },
    { name: 'Visual Studio Code', type: 'Code Editor', category: 'dev' },
    { name: 'Burp Suite', type: 'Sec Testing', category: 'security' },
    { name: 'OWASP ZAP', type: 'Vulnerability Scan', category: 'security' },
    { name: 'Nmap', type: 'Network Scanner', category: 'security' },
    { name: 'Wireshark', type: 'Packet Analyzer', category: 'security' },
    { name: 'Autopsy', type: 'Digital Forensics', category: 'security' },
    { name: 'URH', type: 'Wireless & RF Hacking', category: 'security' },
    { name: 'FTK Imager', type: 'Disk Imaging', category: 'forensics' },
    { name: 'MFTECmd.exe', type: 'MFT Log Parser', category: 'forensics' },
    { name: 'Timeline Explorer', type: 'Forensic Viewer', category: 'forensics' },
  ];

  const softSkills = [
    { title: 'Security-First Mindset', desc: 'Prioritizing risk assessment and safe code conventions in every digital product.' },
    { title: 'Analytical Problem Solving', desc: 'Deconstructing complex performance issues and zero-day threats logically.' },
    { title: 'Compliance & Governance', desc: 'Mapping systems to NIST CSF frameworks and security risk mappings.' },
    { title: 'Effective Communication', desc: 'Translating technical audits and risks into clear, actionable development strategies.' },
  ];

  const filteredTools = activeToolCategory === 'all' 
    ? toolsAndApps 
    : toolsAndApps.filter(t => t.category === activeToolCategory);

  return (
    <section 
      id="page-2"
      className="snap-section relative bg-[#120b16] px-4 sm:px-6 py-12 flex flex-col justify-between overflow-y-auto text-zinc-100"
    >
      {/* Background soft lighting blobs */}
      <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-[#fb588f]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-72 h-72 bg-yellow-400/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Page Header */}
      <div className="pt-12 sm:pt-14 max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-2 font-mono text-[10px] lg:text-[12px] text-[#fb588f] font-bold">
          <Terminal className="w-3.5 h-3.5 text-[#fb588f]" />
          <span>03 // SKILLS ARCHITECTURE &amp; TOOLS VALIDATION</span>
        </div>
        <div className="hidden sm:block text-right font-mono text-[11px] lg:text-[13px] text-zinc-100 font-bold uppercase tracking-widest">
          PROFESSIONAL CAPABILITIES
        </div>
      </div>

      {/* Main split contents scroll container */}
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch my-auto z-10 pt-4 pb-4 overflow-y-auto max-h-[64vh] sm:max-h-[68vh] md:max-h-[70vh] lg:max-h-[72vh] pr-1.5 scrollbar-thin">
        
        {/* Column 1: Hard Skills (md:col-span-6) */}
        <div className="md:col-span-6 space-y-5 flex flex-col justify-start">
          {/* Web & Mobile development */}
          <div className="bg-[#1b0c1c]/90 border border-zinc-800/80 rounded-2xl p-5 hover:border-yellow-400/40 transition-all">
            <div className="flex items-center gap-2 mb-4 border-b border-zinc-800/60 pb-2">
              <Globe className="w-4 h-4 text-yellow-400" />
              <h3 className="font-display font-black text-white text-[13px] sm:text-[15px] uppercase tracking-wider">
                Web &amp; Mobile Development
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {webHardSkills.map((skill) => (
                <div 
                  key={skill}
                  className="bg-[#120b16]/70 border border-zinc-800/80 px-2.5 py-1.5 rounded-xl flex items-center gap-2 hover:border-yellow-400/30 hover:bg-[#120b16] transition-all"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-zinc-100">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cyber Security & Forensics */}
          <div className="bg-[#1b0c1c]/90 border border-zinc-800/80 rounded-2xl p-5 hover:border-[#fb588f]/40 transition-all">
            <div className="flex items-center gap-2 mb-4 border-b border-zinc-800/60 pb-2">
              <Shield className="w-4 h-4 text-[#fb588f]" />
              <h3 className="font-display font-black text-white text-[13px] sm:text-[15px] uppercase tracking-wider">
                Cyber Security &amp; Forensics
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {securityHardSkills.map((skill) => (
                <div 
                  key={skill}
                  className="bg-[#120b16]/70 border border-zinc-800/80 px-2.5 py-1.5 rounded-xl flex items-center gap-2 hover:border-[#fb588f]/30 hover:bg-[#120b16] transition-all"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fb588f] shrink-0" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-zinc-100">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Tools & Soft Skills (md:col-span-6) */}
        <div className="md:col-span-6 flex flex-col gap-5 justify-start">
          {/* Tools & Applications Card */}
          <div className="bg-[#1b0c1c]/90 border border-zinc-800/80 rounded-2xl p-5 hover:border-emerald-400/40 transition-all">
            <div className="flex flex-col gap-2 mb-3.5 border-b border-zinc-800/60 pb-3">
              <div className="flex items-center gap-2">
                <Hammer className="w-4 h-4 text-emerald-400" />
                <h3 className="font-display font-black text-white text-[13px] sm:text-[15px] uppercase tracking-wider">
                  Software &amp; Tools Validation
                </h3>
              </div>
              
              {/* Category pills for tools filtering */}
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                <button
                  onClick={() => setActiveToolCategory('all')}
                  className={`font-mono text-[9px] font-bold px-2.5 py-1 rounded-full border transition-all uppercase cursor-pointer ${
                    activeToolCategory === 'all'
                      ? 'bg-emerald-500 text-black border-emerald-500 font-black'
                      : 'bg-[#120b16]/80 text-zinc-400 border-zinc-800/60 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveToolCategory('dev')}
                  className={`font-mono text-[9px] font-bold px-2.5 py-1 rounded-full border transition-all uppercase cursor-pointer ${
                    activeToolCategory === 'dev'
                      ? 'bg-emerald-500 text-black border-emerald-500 font-black'
                      : 'bg-[#120b16]/80 text-zinc-400 border-zinc-800/60 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  Dev &amp; Test
                </button>
                <button
                  onClick={() => setActiveToolCategory('security')}
                  className={`font-mono text-[9px] font-bold px-2.5 py-1 rounded-full border transition-all uppercase cursor-pointer ${
                    activeToolCategory === 'security'
                      ? 'bg-emerald-500 text-black border-emerald-500 font-black'
                      : 'bg-[#120b16]/80 text-zinc-400 border-zinc-800/60 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  Security
                </button>
                <button
                  onClick={() => setActiveToolCategory('forensics')}
                  className={`font-mono text-[9px] font-bold px-2.5 py-1 rounded-full border transition-all uppercase cursor-pointer ${
                    activeToolCategory === 'forensics'
                      ? 'bg-emerald-500 text-black border-emerald-500 font-black'
                      : 'bg-[#120b16]/80 text-zinc-400 border-zinc-800/60 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  Forensics
                </button>
              </div>
            </div>

            {/* Grid of tools based on active category */}
            <div className="grid grid-cols-2 gap-2 max-h-[175px] overflow-y-auto scrollbar-thin pr-0.5">
              {filteredTools.map((tool) => (
                <div 
                  key={tool.name} 
                  className="bg-[#120b16]/90 border border-zinc-900 rounded-xl p-2 flex flex-col justify-center hover:border-emerald-500/30 transition-colors"
                >
                  <span className="font-sans font-bold text-white text-[11px] leading-tight uppercase">
                    {tool.name}
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-wider text-emerald-400 font-extrabold mt-0.5">
                    {tool.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills List */}
          <div className="bg-[#1b0c1c]/90 border border-zinc-800/80 rounded-2xl p-5 hover:border-[#fb588f]/40 transition-all flex-1">
            <div className="flex items-center gap-2 mb-3.5 border-b border-zinc-800/60 pb-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <h3 className="font-display font-black text-white text-[13px] sm:text-[15px] uppercase tracking-wider">
                Professional Soft Skills
              </h3>
            </div>

            <div className="space-y-3">
              {softSkills.map((skill) => (
                <div key={skill.title} className="flex gap-2 text-left">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0 mt-1.5" />
                  <div>
                    <h4 className="font-sans font-black text-white text-[11.5px] uppercase leading-none mb-0.5">
                      {skill.title}
                    </h4>
                    <p className="text-zinc-300 font-sans text-[10.5px] leading-tight">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Navigation Indicators Footer */}
      <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto z-10 border-t border-zinc-800 pt-4">
        <div className="flex justify-between items-center text-zinc-100 font-mono text-[11.5px] lg:text-[13px] font-bold">
          <div className="uppercase tracking-widest text-emerald-400 font-bold">SKILLS ARCHITECTURE</div>
          <div className="flex gap-4">
            <button 
              onClick={() => onNavigate(1)} 
              className="hover:text-white transition-colors cursor-pointer py-1 block pr-2"
            >
              PREVIOUS
            </button>
            <button 
              onClick={() => onNavigate(3)} 
              className="flex items-center gap-1 hover:text-white transition-colors py-1 cursor-pointer pr-4 text-yellow-400 font-bold"
            >
              <span>NEXT (EXPERIENCE)</span>
              <ArrowDown className="w-3 h-3 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


