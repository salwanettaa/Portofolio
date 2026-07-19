import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Award, GraduationCap, ArrowDown, Calendar, Star, X, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { educationHistory } from '../data';

interface CredentialsSectionProps {
  onNavigate: (index: number) => void;
}

interface DetailModalState {
  isOpen: boolean;
  type: 'education' | 'certification';
  title: string;
  source: string;
  duration: string;
  subtitle?: string;
  highlights: string[];
  extraInfo?: string;
  images?: string[];
}

export default function CredentialsSection({ onNavigate }: CredentialsSectionProps) {
  const [modal, setModal] = useState<DetailModalState>({
    isOpen: false,
    type: 'education',
    title: '',
    source: '',
    duration: '',
    highlights: [],
  });

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleOpenEdu = (edu: typeof educationHistory[0]) => {
    setCurrentImgIndex(0);
    setModal({
      isOpen: true,
      type: 'education',
      title: edu.degree,
      source: edu.source,
      duration: edu.duration,
      subtitle: edu.gpa ? (edu.id === 'presuniv' ? `GPA: ${edu.gpa}` : edu.gpa) : undefined,
      highlights: edu.highlights,
    });
  };

  const handleOpenKada = () => {
    setCurrentImgIndex(0);
    setModal({
      isOpen: true,
      type: 'certification',
      title: 'Korea-ASEAN Digital Academy (Batch 2 Graduate)',
      source: 'Organized by NIPA, Ministry of Science and ICT Korea, and Komdigi Indonesia',
      duration: 'Completed: Nov 2025',
      subtitle: '250 Hours Intensive',
      highlights: [
        'Program Framework: Supported by the Government of the Republic of Korea through the ASEAN-Korea Cooperation Fund (AKCF) as part of the Korea-ASEAN Digital Innovation Flagship (KADIF).',
        'Backend & Web Engineering: Web Development (Basics & Advanced), Backend Development, and DevOps & CI/CD pipelines.',
        'Data & Cloud Architecture: Cloud Services Utilization and Basis of Data Analysis.',
        'Security & Design Foundations: AI Ethics and Data Security, along with UI/UX Design Basics.',
        'Practical Capstone: Collaborative Team Projects executing end-to-end agile software development cycles.'
      ],
      extraInfo: 'KADIF Initiative - 250 Hours of Intensive International Training.',
      images: [
        '/images/education/images4.jpg',
        '/images/education/images3.jpg',
        '/images/education/images1.jpg',
        '/images/education/images2.png'
      ]
    });
  };

  return (
    <section 
      id="page-4"
      className="snap-section relative bg-[#120b16] px-6 py-12 flex flex-col justify-between overflow-y-auto text-zinc-100"
    >
      {/* Ambient background soft light */}
      <div className="absolute top-[30%] left-[10%] w-80 h-80 bg-[#fb588f]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Page Header */}
      <div className="pt-12 sm:pt-14 max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-2 font-mono text-[10px] lg:text-[12px] text-[#fb588f] font-bold">
          <GraduationCap className="w-3.5 h-3.5 text-[#fb588f]" />
          <span>05 // ACADEMIC EDUCATION &amp; CERTIFICATIONS</span>
        </div>
        <div className="hidden sm:block text-right font-mono text-[11px] lg:text-[13px] text-zinc-100 font-bold uppercase tracking-widest">
          ACADEMIC ARCHIVE
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto w-full flex flex-col justify-center my-auto z-10 pt-4 pb-4">
        
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-3 uppercase tracking-tight">
            Education &amp; Certifications
          </h2>
          <p className="text-zinc-400 font-sans text-xs sm:text-sm tracking-wide">
            Select any education or certification card to view verified scores, GPA highlights, course requirements, and certification logs.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          
          {/* Column A: Academic Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-800/60 pb-2 mb-1">
              <GraduationCap className="w-4 h-4 text-yellow-400" />
              <h3 className="font-display font-bold text-sm text-zinc-200 uppercase tracking-widest">
                Academic Degrees
              </h3>
            </div>

            {educationHistory.map((edu) => (
              <button
                key={edu.id}
                onClick={() => handleOpenEdu(edu)}
                className="w-full text-left bg-[#1b0c1c]/80 border border-zinc-800 hover:border-yellow-400/50 hover:bg-[#1b0c1c] rounded-2xl p-5 transition-all group flex justify-between items-center cursor-pointer shadow-sm hover:shadow-yellow-400/5"
              >
                <div>
                  <span className="font-mono text-[10px] text-yellow-400 font-bold uppercase tracking-wider block mb-1">
                    {edu.duration}
                  </span>
                  <h4 className="font-display font-black text-white text-[15px] sm:text-[17px] group-hover:text-yellow-400 transition-colors">
                    {edu.source}
                  </h4>
                  <span className="font-sans text-xs text-zinc-400 mt-1 block">
                    {edu.degree}
                  </span>
                </div>
                <div className="text-zinc-500 group-hover:text-yellow-400 transition-colors pl-4 text-xs font-mono font-bold shrink-0 uppercase tracking-widest hidden xs:block">
                  View Detail &rarr;
                </div>
              </button>
            ))}
          </div>

          {/* Column B: Professional Certifications & Scores */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-800/60 pb-2 mb-1">
              <Award className="w-4 h-4 text-[#fb588f]" />
              <h3 className="font-display font-bold text-sm text-zinc-200 uppercase tracking-widest">
                Verified Scores &amp; Certs
              </h3>
            </div>

            {/* KADA Certificate Card */}
            <button
              onClick={handleOpenKada}
              className="w-full text-left bg-[#1b0c1c]/80 border border-zinc-800 hover:border-emerald-400/50 hover:bg-[#1b0c1c] rounded-2xl p-5 transition-all group flex justify-between items-center cursor-pointer shadow-sm hover:shadow-emerald-400/5"
            >
              <div>
                <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                  Completed: November 2025
                </span>
                <h4 className="font-display font-black text-white text-[15px] sm:text-[17px] group-hover:text-emerald-400 transition-colors">
                  Korea-ASEAN Digital Academy
                </h4>
                <span className="font-sans text-xs text-zinc-400 mt-1 block">
                  Batch 2 Graduate (250 Hours)
                </span>
              </div>
              <div className="text-zinc-500 group-hover:text-emerald-400 transition-colors pl-4 text-xs font-mono font-bold shrink-0 uppercase tracking-widest hidden xs:block">
                View Detail &rarr;
              </div>
            </button>

          </div>

        </div>

      </div>

      {/* Detail Overlay Modal using Framer Motion */}
      <AnimatePresence>
        {modal.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop click-away */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModal({ ...modal, isOpen: false })}
              className="absolute inset-0 bg-[#0d0711]/90 backdrop-blur-md"
            />

            {/* Modal Body Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-[#1b0c1c] border border-zinc-800 rounded-3xl w-full max-w-lg p-6 sm:p-8 overflow-y-auto max-h-[90vh] shadow-2xl z-10 scrollbar-thin"
            >
              {/* Close Button */}
              <button 
                onClick={() => setModal({ ...modal, isOpen: false })}
                className="absolute top-5 right-5 text-zinc-400 hover:text-white bg-zinc-900/60 p-2 rounded-full cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>



              {/* Title & Institution */}
              <h3 className="font-display font-black text-2xl text-white uppercase leading-tight mb-1">
                {modal.title}
              </h3>
              <p className="font-sans font-extrabold text-zinc-300 text-sm mb-4">
                {modal.source}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-b border-zinc-800/80 py-3 mb-5">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-zinc-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-zinc-500 font-mono block uppercase">Timeline</span>
                    <span className="text-xs text-white font-bold font-mono">{modal.duration}</span>
                  </div>
                </div>
                {modal.subtitle && (
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-zinc-500 shrink-0" />
                    <div>
                      <span className="text-[10px] text-zinc-500 font-mono block uppercase">Evaluation</span>
                      <span className="text-xs text-white font-bold font-mono">{modal.subtitle}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Image Carousel (if images are provided) */}
              {modal.images && modal.images.length > 0 && (
                <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-5 border border-zinc-800 bg-zinc-950/60 group">
                  {/* Images */}
                  <div className="absolute inset-0 flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentImgIndex * 100}%)` }}>
                    {modal.images.map((img, i) => (
                      <img 
                        key={i}
                        src={img}
                        alt={`Slide ${i + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover shrink-0 select-none"
                      />
                    ))}
                  </div>

                  {/* Hover Navigation Controls */}
                  {modal.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(prev => prev === 0 ? modal.images!.length - 1 : prev - 1); }}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/65 hover:bg-black/85 border border-zinc-800/80 flex items-center justify-center text-white cursor-pointer transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(prev => prev === modal.images!.length - 1 ? 0 : prev + 1); }}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/65 hover:bg-black/85 border border-zinc-800/80 flex items-center justify-center text-white cursor-pointer transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Indicators dot bar */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {modal.images.map((_, i) => (
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
              )}

              {/* Verified details / course highlights */}
              <div className="space-y-4 text-left">
                <h4 className="font-mono text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  Verified Academic Log &amp; Highlights
                </h4>
                <div className="space-y-3">
                  {modal.highlights.map((h, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0 mt-1.5" />
                      <p className="text-zinc-200 font-sans text-xs sm:text-[13px] leading-relaxed font-semibold">
                        {h}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Footnote */}
              {modal.extraInfo && (
                <p className="font-mono text-[9px] text-emerald-400 uppercase tracking-wider mt-6 pt-3 border-t border-zinc-850">
                  // {modal.extraInfo}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Slide Navigation Footer */}
      <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto z-10 border-t border-zinc-900 pt-4">
        <div className="flex justify-between items-center text-zinc-100 font-mono text-[11.5px] lg:text-[13px] font-bold">
          <div className="uppercase tracking-widest text-[#84cc16] font-bold">EDUCATION &amp; CERTIFICATIONS</div>
          <div className="flex gap-4">
            <button 
              onClick={() => onNavigate(3)} 
              className="hover:text-white transition-colors cursor-pointer py-1 block pr-2"
            >
              PREVIOUS
            </button>
            <button 
              onClick={() => onNavigate(5)} 
              className="flex items-center gap-1 hover:text-white transition-colors py-1 cursor-pointer pr-4 text-yellow-400 font-bold"
            >
              <span>NEXT (CONTACT)</span>
              <ArrowDown className="w-3 h-3 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
