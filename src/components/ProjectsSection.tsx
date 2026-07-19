import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Terminal, 
  ExternalLink, 
  Github, 
  ShieldCheck, 
  X, 
  Layers, 
  Sparkles,
  ArrowDown,
  Fingerprint,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Project, CaseStudy } from '../types';
import { projects, caseStudies } from '../data';

interface ProjectsSectionProps {
  onNavigate: (index: number) => void;
}

export default function ProjectsSection({ onNavigate }: ProjectsSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<'all' | 'web' | 'cybersecurity' | 'iot' | 'mobile'>('all');
  const [activeTab, setActiveTab] = useState<'builds' | 'writeups'>('builds');
  const [selectedCaseCategory, setSelectedCaseCategory] = useState<'all' | 'web' | 'stego' | 'forensics'>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImgIndex(0);
  };

  const handleOpenCaseStudy = (cs: CaseStudy) => {
    setSelectedCaseStudy(cs);
  };

  // Prevent parent snap container scroll when any modal is open
  useEffect(() => {
    if (selectedProject || selectedCaseStudy) {
      const snapContainer = document.querySelector('.snap-container');
      if (snapContainer) {
        (snapContainer as HTMLElement).style.overflowY = 'hidden';
      }
      document.body.style.overflow = 'hidden';
    } else {
      const snapContainer = document.querySelector('.snap-container');
      if (snapContainer) {
        (snapContainer as HTMLElement).style.overflowY = 'auto';
      }
      document.body.style.overflow = '';
    }
    return () => {
      const snapContainer = document.querySelector('.snap-container');
      if (snapContainer) {
        (snapContainer as HTMLElement).style.overflowY = 'auto';
      }
      document.body.style.overflow = '';
    };
  }, [selectedProject, selectedCaseStudy]);

  // Filter systems based on search term & domain selection
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = 
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.purposeHook.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techStack.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesDomain = selectedDomain === 'all' ? true : project.domains.includes(selectedDomain);
      return matchesSearch && matchesDomain;
    });
  }, [searchTerm, selectedDomain]);

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(cs => {
      const query = searchTerm.toLowerCase();
      const matchesSearch = (
        cs.title.toLowerCase().includes(query) ||
        cs.category.toLowerCase().includes(query) ||
        cs.context.toLowerCase().includes(query)
      );
      
      let matchesCategory = true;
      if (selectedCaseCategory === 'web') {
        matchesCategory = cs.category === 'Web Application Pentesting';
      } else if (selectedCaseCategory === 'stego') {
        matchesCategory = cs.category === 'Steganography & Cryptanalysis' || cs.category === 'Steganography & File Carving';
      } else if (selectedCaseCategory === 'forensics') {
        matchesCategory = cs.category === 'Windows Host Forensics & DFIR' || cs.category === 'Forensic Signal Processing';
      }
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCaseCategory]);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Render high-fidelity custom visual mockup illustrations representing the project inside cute visual window panels ("Gambar details")
  const renderProjectVisualMockup = (id: string, heightClass = 'h-44') => {
    const project = projects.find(p => p.id === id);
    const mainImageUrl = project?.images?.[0] || 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80';

    return (
      <div className={`w-full ${heightClass} relative rounded-xl overflow-hidden group/img`}>
        {/* Main image with zoom effect on card hover */}
        <img 
          src={mainImageUrl} 
          alt={project?.name || 'Project Screenshot'} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Semi-transparent dark overlay for code/tech contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50" />
        
        {/* Overlay grid scanlines to maintain the cool cybersecurity/tech theme */}
        <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ec4899 0.8px, transparent 0.8px)', backgroundSize: '8px 8px' }} />

        {/* Dynamic header badge/text overlay to keep it feeling high-tech but grounded */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-sm border border-zinc-800/80 px-2 py-0.5 rounded-md font-mono text-[7px] sm:text-[8px] text-pink-400 font-extrabold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
            <span>{project?.id || 'sys'}_NODE</span>
          </div>
          {project?.demoUrl && (
            <span className="font-mono text-[7px] sm:text-[8px] bg-[#fb588f] text-white px-1.5 py-0.5 rounded shadow-md font-bold uppercase">
              LIVE APP
            </span>
          )}
        </div>

        {/* Tech stack badge list preview at the bottom left */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap gap-1 pointer-events-none">
          {project?.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="font-mono text-[7px] sm:text-[8px] bg-black/80 backdrop-blur-sm border border-zinc-850 px-1.5 py-0.5 rounded text-zinc-300 font-semibold">
              {tech}
            </span>
          ))}
          {project && project.techStack.length > 3 && (
            <span className="font-mono text-[7px] sm:text-[8px] bg-black/80 backdrop-blur-sm border border-zinc-850 px-1.5 py-0.5 rounded text-zinc-400">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <section 
      id="page-1"
      className="snap-section relative bg-[#120b16] px-4 sm:px-6 py-12 flex flex-col justify-between overflow-y-auto text-zinc-100"
    >
      {/* Background glowing layer */}
      <div className="absolute top-[30%] right-[5%] w-96 h-96 bg-[#fb588f]/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Page Header */}
      <div className="pt-12 sm:pt-14 max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#fb588f]" />
          <span className="font-mono text-[10px] lg:text-[12px] font-bold uppercase tracking-widest text-[#fb588f]">
            02 // REPOSITORIES &amp; PROJECTS PORTFOLIO
          </span>
        </div>
        <div className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] lg:text-[13px] text-zinc-100 uppercase font-bold tracking-widest">
          PROJECT REPOSITORY LIST
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center z-10 py-4 overflow-hidden">
        
        {/* Playful Yellow Title & Slide Steering Controls */}
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-left flex items-center gap-2">
            <h2 className="font-display font-black text-3xl sm:text-4.5xl lg:text-5xl xl:text-6xl text-[#facc15] tracking-tight rotate-[-1.5deg] leading-none uppercase">
              PROJECTS
            </h2>
            {/* Cute star decal */}
            <div className="relative w-7 h-7 sm:w-10 sm:h-10 shrink-0 rotate-[15deg]">
              <svg viewBox="0 0 100 100" className="w-[100%] h-[100%] animate-spin-slow animate-spin">
                <circle cx="50" cy="50" r="10" fill="#ffffff" />
                <circle cx="50" cy="25" r="12" fill="#84cc16" />
                <circle cx="50" cy="75" r="12" fill="#84cc16" />
                <circle cx="25" cy="50" r="12" fill="#84cc16" />
                <circle cx="75" cy="50" r="12" fill="#84cc16" />
              </svg>
            </div>
          </div>

          {activeTab === 'builds' && (
            <div className="flex items-center gap-2 self-end sm:self-center">
              {/* Slide controllers */}
              <button 
                onClick={() => scroll('left')}
                className="p-2.5 rounded-full border border-zinc-800 bg-[#1b0c1c] text-zinc-300 hover:bg-[#fb588f]/10 hover:border-[#fb588f] hover:text-white transition-all cursor-pointer"
                title="Slide Left"
              >
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-2.5 rounded-full border border-zinc-800 bg-[#1b0c1c] text-zinc-300 hover:bg-[#fb588f]/10 hover:border-[#fb588f] hover:text-white transition-all cursor-pointer"
                title="Slide Right"
              >
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>
          )}
        </div>

        {/* Toggle Tabs: Builds vs Writeups */}
        <div className="flex border-b border-zinc-900 mb-5 select-none font-mono">
          <button
            onClick={() => { setActiveTab('builds'); setSearchTerm(''); setSelectedDomain('all'); setSelectedCaseCategory('all'); }}
            className={`pb-3 px-4 font-bold uppercase tracking-wider border-b-2 text-[10.5px] sm:text-[12px] transition-all cursor-pointer ${
              activeTab === 'builds'
                ? 'border-[#fb588f] text-white font-black'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            🛠️ Interactive Prototypes
          </button>
          <button
            onClick={() => { setActiveTab('writeups'); setSearchTerm(''); setSelectedDomain('all'); setSelectedCaseCategory('all'); }}
            className={`pb-3 px-4 font-bold uppercase tracking-wider border-b-2 text-[10.5px] sm:text-[12px] transition-all cursor-pointer ${
              activeTab === 'writeups'
                ? 'border-[#fb588f] text-white font-black'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            📄 Security Write-ups
          </button>
        </div>

        {activeTab === 'builds' ? (
          <>
            {/* Search & Fast Filters */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3.5 pb-3 border-b border-zinc-900/60 mb-5">
              {/* Compact Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                <input 
                  type="text"
                  placeholder="Search repository..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-black/40 border border-[#fb588f]/20 focus:border-[#fb588f]/60 outline-none text-[12px] lg:text-[13.5px] rounded-lg py-2.5 px-8 pl-9 text-zinc-100 placeholder:text-zinc-600 font-mono shadow-inner"
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white">
                    <X className="w-3" />
                  </button>
                )}
              </div>

              {/* Minimal Domain filter tag badges */}
              <div className="flex flex-wrap items-center gap-2 select-none text-[11px] lg:text-[12.5px]">
                <button
                  onClick={() => setSelectedDomain('all')}
                  className={`font-mono text-[10px] lg:text-[11px] font-bold px-4 py-1.5 rounded-full border transition-all uppercase cursor-pointer ${
                    selectedDomain === 'all' 
                      ? 'bg-yellow-400 text-black border-yellow-400 shadow-sm font-black' 
                      : 'bg-zinc-900/80 text-zinc-400 border-zinc-800/60 hover:text-zinc-200 font-extrabold hover:border-zinc-700'
                  }`}
                >
                  ALL
                </button>
                <button
                  onClick={() => setSelectedDomain('web')}
                  className={`font-mono text-[10px] lg:text-[11px] font-bold px-4 py-1.5 rounded-full border transition-all uppercase cursor-pointer ${
                    selectedDomain === 'web' 
                      ? 'bg-[#fb588f] text-white border-[#fb588f] font-black' 
                      : 'bg-zinc-900/80 text-zinc-400 border-zinc-800/60 hover:text-zinc-200 font-extrabold hover:border-zinc-700'
                  }`}
                >
                  Web Development
                </button>
                <button
                  onClick={() => setSelectedDomain('cybersecurity')}
                  className={`font-mono text-[10px] lg:text-[11px] font-bold px-4 py-1.5 rounded-full border transition-all uppercase cursor-pointer ${
                    selectedDomain === 'cybersecurity' 
                      ? 'bg-emerald-500 text-black border-emerald-500 font-black' 
                      : 'bg-zinc-900/80 text-zinc-400 border-zinc-800/60 hover:text-zinc-200 font-extrabold hover:border-zinc-700'
                  }`}
                >
                  Cyber Security
                </button>
                <button
                  onClick={() => setSelectedDomain('iot')}
                  className={`font-mono text-[10px] lg:text-[11px] font-bold px-4 py-1.5 rounded-full border transition-all uppercase cursor-pointer ${
                    selectedDomain === 'iot' 
                      ? 'bg-cyan-500 text-black border-cyan-500 font-black' 
                      : 'bg-zinc-900/80 text-zinc-400 border-zinc-800/60 hover:text-zinc-200 font-extrabold hover:border-zinc-700'
                  }`}
                >
                  IoT & Hardware
                </button>
                <button
                  onClick={() => setSelectedDomain('mobile')}
                  className={`font-mono text-[10px] lg:text-[11px] font-bold px-4 py-1.5 rounded-full border transition-all uppercase cursor-pointer ${
                    selectedDomain === 'mobile' 
                      ? 'bg-purple-500 text-white border-purple-500 font-black' 
                      : 'bg-zinc-900/80 text-zinc-400 border-zinc-800/60 hover:text-zinc-200 font-extrabold hover:border-zinc-700'
                  }`}
                >
                  Mobile App
                </button>
              </div>
            </div>

            {/* Swipeable Horizontal Cards Container - Visual Image Previews */}
            <div 
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scroll-smooth scrollbar-none select-none"
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => handleOpenProject(project)}
                  className="w-[285px] sm:w-[340px] lg:w-[370px] xl:w-[400px] shrink-0 bg-[#170a1a]/95 border-2 border-zinc-800/80 hover:border-[#fb588f]/80 rounded-2xl p-4.5 relative overflow-hidden flex flex-col gap-3.5 text-left shadow-lg cursor-pointer group hover:translate-y-[-4px] transition-all duration-300 snap-center"
                >
                  {/* Card Meta Indicator */}
                  <div className="flex items-center justify-between font-mono text-[11px] lg:text-[12.5px] text-zinc-100 uppercase tracking-widest px-1 font-bold">
                    <span className="text-[#fb588f] font-bold group-hover:text-pink-400 transition-colors">
                      // REPO_0{index + 1}
                    </span>
                    <span className="font-semibold">{project.category.split(' ')[0]}</span>
                  </div>

                  {/* Cover Screenshot Mockup - main visual priority */}
                  <div className="shadow-inner rounded-xl overflow-hidden border border-zinc-900 bg-[#070709] transition-all duration-300 group-hover:border-[#fb588f]/30">
                    {renderProjectVisualMockup(project.id, "h-36 sm:h-44 lg:h-52")}
                  </div>

                  {/* Clean Footer Text Overlay with interactive prompt */}
                  <div className="px-1 py-0.5 flex items-center justify-between gap-3">
                    <div className="overflow-hidden w-full">
                      <h3 className="font-sans font-black text-white text-[13px] lg:text-[15.5px] tracking-tight leading-none group-hover:text-yellow-400 transition-all uppercase truncate mb-1">
                        {project.name}
                      </h3>
                      {project.role && (
                        <p className="font-mono text-[9px] text-[#fb588f] uppercase tracking-wider mb-1.5 truncate">
                          {project.role}
                        </p>
                      )}
                      <span className="font-mono text-[10px] lg:text-[11.5px] text-zinc-400 uppercase tracking-widest block truncate font-semibold">
                        View project details &gt;
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-[#fb588f]/10 group-hover:border-[#fb588f]/40 group-hover:text-[#fb588f] transition-all shrink-0">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}

              {filteredProjects.length === 0 && (
                <div className="w-full py-12 flex flex-col items-center justify-center text-zinc-500 font-mono text-xs">
                  <Terminal className="w-6 h-6 text-pink-500/30 mb-2 animate-bounce" />
                  <p>NO PROJECTS MATCHED SEARCH CRITERIA</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Search Box & Fast Filters for Write-ups */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3.5 pb-3 border-b border-zinc-900/60 mb-5">
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full lg:w-auto">
                {/* Compact Search Box */}
                <div className="relative w-full md:w-64 shrink-0">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                  <input 
                    type="text"
                    placeholder="Search write-ups..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-black/40 border border-[#fb588f]/20 focus:border-[#fb588f]/60 outline-none text-[12px] lg:text-[13.5px] rounded-lg py-2.5 px-8 pl-9 text-zinc-100 placeholder:text-zinc-600 font-mono shadow-inner"
                  />
                  {searchTerm && (
                    <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white">
                      <X className="w-3" />
                    </button>
                  )}
                </div>

                {/* Categories filtering tag badges */}
                <div className="flex flex-wrap items-center gap-1.5 select-none text-[11px] lg:text-[12.5px]">
                  <button
                    onClick={() => setSelectedCaseCategory('all')}
                    className={`font-mono text-[9.5px] lg:text-[10.5px] font-bold px-3.5 py-1.5 rounded-full border transition-all uppercase cursor-pointer ${
                      selectedCaseCategory === 'all' 
                        ? 'bg-yellow-400 text-black border-yellow-400 shadow-sm font-black' 
                        : 'bg-zinc-900/80 text-zinc-400 border-zinc-800/60 hover:text-zinc-200 font-extrabold hover:border-zinc-700'
                    }`}
                  >
                    ALL
                  </button>
                  <button
                    onClick={() => setSelectedCaseCategory('web')}
                    className={`font-mono text-[9.5px] lg:text-[10.5px] font-bold px-3.5 py-1.5 rounded-full border transition-all uppercase cursor-pointer ${
                      selectedCaseCategory === 'web' 
                        ? 'bg-[#fb588f] text-white border-[#fb588f] font-black' 
                        : 'bg-zinc-900/80 text-zinc-400 border-zinc-800/60 hover:text-zinc-200 font-extrabold hover:border-zinc-700'
                    }`}
                  >
                    Web Pentesting
                  </button>
                  <button
                    onClick={() => setSelectedCaseCategory('stego')}
                    className={`font-mono text-[9.5px] lg:text-[10.5px] font-bold px-3.5 py-1.5 rounded-full border transition-all uppercase cursor-pointer ${
                      selectedCaseCategory === 'stego' 
                        ? 'bg-purple-500 text-white border-purple-500 font-black' 
                        : 'bg-zinc-900/80 text-zinc-400 border-zinc-800/60 hover:text-zinc-200 font-extrabold hover:border-zinc-700'
                    }`}
                  >
                    Stego & Crypto
                  </button>
                  <button
                    onClick={() => setSelectedCaseCategory('forensics')}
                    className={`font-mono text-[9.5px] lg:text-[10.5px] font-bold px-3.5 py-1.5 rounded-full border transition-all uppercase cursor-pointer ${
                      selectedCaseCategory === 'forensics' 
                        ? 'bg-emerald-500 text-black border-emerald-500 font-black' 
                        : 'bg-zinc-900/80 text-zinc-400 border-zinc-800/60 hover:text-zinc-200 font-extrabold hover:border-zinc-700'
                    }`}
                  >
                    Forensics & DFIR
                  </button>
                </div>
              </div>
              <div className="text-zinc-400 font-mono text-[10px] uppercase font-bold tracking-wider shrink-0 lg:text-right">
                Showing {filteredCaseStudies.length} write-ups
              </div>
            </div>

            {/* Grid of Case Studies */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[320px] pr-1.5 scrollbar-thin">
              {filteredCaseStudies.map((cs) => (
                <div
                  key={cs.id}
                  onClick={() => handleOpenCaseStudy(cs)}
                  className="bg-[#170a1a]/95 border-2 border-zinc-800/80 hover:border-[#fb588f]/80 rounded-2xl p-4 flex flex-col justify-between text-left shadow-lg cursor-pointer group hover:translate-y-[-2px] transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-[#fb588f] mb-2 font-extrabold">
                      <span>// {cs.engagement} ENGAGEMENT {cs.teamName ? `(${cs.teamName})` : ''}</span>
                      <span className="text-zinc-400">{cs.timeline}</span>
                    </div>
                    <h3 className="font-sans font-black text-white text-[12.5px] sm:text-[13.5px] uppercase tracking-tight leading-snug group-hover:text-yellow-400 transition-colors mb-2">
                      {cs.title}
                    </h3>
                    <p className="font-mono text-[9.5px] text-emerald-400 font-extrabold uppercase tracking-wider mb-2">
                      {cs.category}
                    </p>
                    <p className="text-[11.5px] text-zinc-300 line-clamp-3 font-sans leading-relaxed">
                      {cs.context}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-zinc-950/60 flex items-center justify-between">
                    <span className="font-mono text-[9.5px] text-zinc-400 uppercase tracking-widest font-semibold">
                      Read Full Report &gt;
                    </span>
                    <div className="w-6.5 h-6.5 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-400 group-hover:bg-[#fb588f]/10 group-hover:border-[#fb588f]/40 group-hover:text-[#fb588f] transition-all">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredCaseStudies.length === 0 && (
                <div className="col-span-full py-12 flex flex-col items-center justify-center text-zinc-500 font-mono text-xs">
                  <Terminal className="w-6 h-6 text-pink-500/30 mb-2 animate-bounce" />
                  <p>NO WRITE-UPS MATCHED SEARCH CRITERIA</p>
                </div>
              )}
            </div>
          </>
        )}

      </div>

      {/* Slide Navigation Footer */}
      <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto z-10 border-t border-zinc-800 pt-4">
        <div className="flex justify-between items-center text-zinc-100 font-mono text-[11.5px] lg:text-[13px] font-bold">
          <div className="uppercase tracking-widest text-[#84cc16] font-bold">PROJECT PORTFOLIO</div>
          <div className="flex gap-4">
            <button 
              onClick={() => onNavigate(0)} 
              className="hover:text-white transition-colors cursor-pointer py-1 block pr-2"
            >
              PREVIOUS
            </button>
            <button 
              onClick={() => onNavigate(2)} 
              className="flex items-center gap-1 hover:text-white transition-colors py-1 cursor-pointer pr-4 text-pink-400 font-bold"
            >
              <span>NEXT (SKILLS)</span>
              <ArrowDown className="w-3 h-3 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Project Details Modal popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Blurry dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Card frame containing details */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-[#1b0c1c] border-2 border-[#fb588f]/40 rounded-3xl w-full max-w-3xl p-4 sm:p-5 md:p-7 text-left relative overflow-hidden shadow-2xl z-10 max-h-[94vh] overflow-y-auto"
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header - Always Visible at the Top on Mobile & Desktop */}
              <div className="mb-4 pr-10 border-b border-zinc-900 pb-3">
                <span className="font-mono text-[8px] sm:text-[9px] font-black text-[#fb588f] uppercase tracking-widest bg-[#fb588f]/10 border border-[#fb588f]/20 px-2.5 py-1 rounded-md mb-2 inline-block font-extrabold">
                  {selectedProject.category}
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-[#facc15] tracking-tight leading-none uppercase">
                  {selectedProject.name}
                </h3>
                {selectedProject.role && (
                  <p className="font-mono text-[9px] sm:text-[10px] text-zinc-400 uppercase tracking-wider mt-1 font-bold">
                    Role: <span className="text-[#fb588f]">{selectedProject.role}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch pt-1">
                
                {/* Left col: Visual mockup illustration + action buttons */}
                <div className="md:col-span-5 flex flex-col justify-between gap-4">
                  <div>
                    {/* Sliding Image Gallery */}
                    {selectedProject.images && selectedProject.images.length > 0 ? (
                      <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-4 border border-zinc-800 bg-zinc-950/60 group">
                        {/* Images */}
                        <div 
                          className="absolute inset-0 flex transition-transform duration-500 ease-out" 
                          style={{ transform: `translateX(-${currentImgIndex * 100}%)` }}
                        >
                          {selectedProject.images.map((img, i) => (
                            <img 
                              key={i}
                              src={img}
                              alt={`Project Slide ${i + 1}`}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover shrink-0 select-none"
                            />
                          ))}
                        </div>

                        {/* Navigation Controls */}
                        {selectedProject.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(prev => prev === 0 ? selectedProject.images!.length - 1 : prev - 1); }}
                              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/65 hover:bg-black/85 border border-zinc-800/80 flex items-center justify-center text-white cursor-pointer transition-all opacity-0 group-hover:opacity-100"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(prev => prev === selectedProject.images!.length - 1 ? 0 : prev + 1); }}
                              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/65 hover:bg-black/85 border border-zinc-800/80 flex items-center justify-center text-white cursor-pointer transition-all opacity-0 group-hover:opacity-100"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>

                            {/* Indicators dot bar */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                              {selectedProject.images.map((_, i) => (
                                <button
                                  key={i}
                                  onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(i); }}
                                  className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                                    currentImgIndex === i ? 'bg-[#fb588f] w-3' : 'bg-white/40'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="shadow-lg rounded-xl overflow-hidden mb-4">
                        {renderProjectVisualMockup(selectedProject.id)}
                      </div>
                    )}
                  </div>

                  {/* Highlighted TARGET LINK Callouts */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <a 
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 font-mono text-[9px] font-black text-white bg-zinc-900 border border-zinc-800 hover:border-[#fb588f]/50 py-2.5 rounded-xl transition-all font-semibold"
                    >
                      <Github className="w-3.5 h-3.5 text-[#fb588f]" />
                      <span>SOURCE CODE</span>
                    </a>

                    <a 
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 font-mono text-[9px] font-black text-black bg-yellow-400 hover:bg-yellow-350 py-2.5 rounded-xl transition-all shadow-sm font-semibold"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-3 h-3 text-black" />
                    </a>
                  </div>
                </div>

                {/* Right col: Content implementation, features, security implementations, and specs */}
                <div className="md:col-span-7 flex flex-col justify-between gap-5">
                  <div className="space-y-4">
                    <div>
                      <p className="text-zinc-200 text-[13px] sm:text-[14px] leading-relaxed font-sans font-medium">
                        {selectedProject.purposeHook}
                      </p>
                    </div>

                    {/* Key Features Block */}
                    {selectedProject.features && selectedProject.features.length > 0 && (
                      <div>
                        <span className="font-mono text-[10.5px] font-bold text-yellow-400 uppercase tracking-widest block mb-2">
                          Key Features
                        </span>
                        <ul className="space-y-1.5">
                          {selectedProject.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-yellow-400 mt-1 shrink-0 text-[10px]">✦</span>
                              <p className="text-zinc-300 text-[12.5px] leading-relaxed font-sans">{feat}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Core Implementations Block */}
                    <div>
                      <span className="font-mono text-[10.5px] font-bold text-zinc-100 uppercase tracking-widest block mb-2">
                        Core Implementations & Scope
                      </span>
                      <ul className="space-y-1.5">
                        {selectedProject.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#fb588f] mt-1 shrink-0 text-[8px] select-none">■</span>
                            <p className="text-zinc-300 text-[12.5px] leading-relaxed font-sans">{bullet}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Security Implementation Column/Block */}
                    {selectedProject.securityImplementation && selectedProject.securityImplementation.length > 0 && (
                      <div className="rounded-2xl bg-emerald-500/5 border border-emerald-500/20 p-4">
                        <div className="flex items-center gap-2 mb-2.5">
                          <ShieldCheck className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                          <span className="font-mono text-[10px] font-bold tracking-wider text-emerald-400 uppercase">
                            Security Implementation
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {selectedProject.securityImplementation.map((secItem, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-emerald-400 mt-1 shrink-0 text-[10px] select-none">✔</span>
                              <p className="text-zinc-300 text-[12px] leading-relaxed font-sans">{secItem}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tech stack full buttons row */}
                  <div className="pt-3.5 border-t border-zinc-800/60 flex flex-wrap gap-1.5 items-center">
                    <span className="font-mono text-[10px] text-zinc-400 uppercase font-bold mr-2">Tech Stack:</span>
                    {selectedProject.techStack.map(tech => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] font-semibold px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
              
              {/* Lower compliance footer info inside modal */}
              <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-zinc-400 font-mono text-[11px]">
                <div className="flex items-center gap-1.5 uppercase tracking-wider text-zinc-500 text-[10px] font-semibold">
                  <Terminal className="w-3.5 h-3.5 text-[#fb588f]/60" /> Project Workspace Secure
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-mono text-[10px] font-bold cursor-pointer uppercase transition-all"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}

        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Blurry dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Card frame containing details */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-[#1b0c1c] border-2 border-emerald-500/40 rounded-3xl w-full max-w-3xl p-4 sm:p-5 md:p-7 text-left relative overflow-hidden shadow-2xl z-10 max-h-[94vh] overflow-y-auto"
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="pt-2">
                {/* Header info */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-mono text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {selectedCaseStudy.category}
                  </span>
                  <span className="font-mono text-[9px] font-bold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Timeline: {selectedCaseStudy.timeline}
                  </span>
                  <span className="font-mono text-[9px] font-bold text-[#fb588f] bg-[#fb588f]/10 border border-[#fb588f]/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {selectedCaseStudy.engagement} ENGAGEMENT {selectedCaseStudy.teamName ? `(${selectedCaseStudy.teamName})` : ''}
                  </span>
                </div>

                <h3 className="font-sans font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-tight mb-4 uppercase">
                  {selectedCaseStudy.title}
                </h3>

                {/* Context Section */}
                <div className="bg-black/40 border border-zinc-800/80 rounded-2xl p-4.5 mb-6">
                  <h4 className="font-mono text-[10.5px] font-black text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>CONTEXT &amp; CORE VULNERABILITY</span>
                  </h4>
                  <p className="text-zinc-200 text-[13px] leading-relaxed font-sans">
                    {selectedCaseStudy.context}
                  </p>
                </div>

                {/* Technical Resolution Flow */}
                <div>
                  <h4 className="font-mono text-[10.5px] font-black text-white uppercase tracking-widest mb-4 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-pink-500" />
                    <span>TECHNICAL RESOLUTION FLOW</span>
                  </h4>

                  <div className="space-y-4">
                    {selectedCaseStudy.steps.map((step, idx) => (
                      <div 
                        key={idx} 
                        className="bg-[#120b16]/60 border border-zinc-900 rounded-2xl p-4 flex items-start gap-3.5 hover:border-emerald-500/20 transition-all"
                      >
                        <div className="w-6.5 h-6.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-[11px] font-bold shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <h5 className="font-sans font-bold text-white text-[13.5px] leading-snug mb-1 uppercase">
                            {step.title.includes('→') ? step.title.split('→')[0].trim() : step.title}
                          </h5>
                          <p className="text-zinc-400 text-[12px] sm:text-[12.5px] leading-relaxed font-sans">
                            {step.title.includes('→') ? step.title.split('→')[1].trim() : step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-900/60 flex justify-end">
                  <button
                    onClick={() => setSelectedCaseStudy(null)}
                    className="px-5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-mono text-[11px] font-bold uppercase transition-all cursor-pointer"
                  >
                    Close Report
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </section>
  );
}
