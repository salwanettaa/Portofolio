import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowDown, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ShieldCheck, 
  Terminal, 
  Briefcase, 
  Calendar, 
  Award 
} from 'lucide-react';

interface ExperienceSectionProps {
  onNavigate: (index: number) => void;
}

interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  bullets: string[];
  theme: 'pink' | 'yellow' | 'purple' | 'green';
  tagline: string;
  images?: string[];
}

export default function ExperienceSection({ onNavigate }: ExperienceSectionProps) {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleOpenExp = (exp: ExperienceItem) => {
    setSelectedExp(exp);
    setCurrentImgIndex(0);
  };

  const ALL_EXPERIENCES: ExperienceItem[] = [
    {
      id: 'lead-gh',
      role: 'Volunteer',
      organization: 'Garuda Hacks (2025)',
      duration: '2025',
      bullets: [
        'Provided on-site assistance for 500+ participants needs, including handling minor logistical issues and relaying information to relevant committees.'
      ],
      theme: 'purple',
      tagline: 'Provided on-site assistance for 500+ hackathon participants.',
      images: [
        '/images/activity/garuda1 (1).jpg',
        '/images/activity/garuda1 (2).jpg',
        '/images/activity/garudacertif.png'
      ]
    },
    {
      id: 'lead-preuni',
      role: 'Facilitator',
      organization: 'PREUNI 2025 (2025)',
      duration: '2025',
      bullets: [
        'Facilitated 12 sessions over 3 days, delivering prepared material on resume and LinkedIn building to 300+ freshmen.',
        'Helped guide students in understanding and applying the content to enhance their professional profiles.'
      ],
      theme: 'yellow',
      tagline: 'Facilitated 12 sessions on resume and LinkedIn building for 300+ freshmen.',
      images: [
        '/images/activity/preuni.jpg'
      ]
    },
    {
      id: 'lead-xpertalks',
      role: 'Head of Secretary',
      organization: 'XPERTALKS 2025 (2025)',
      duration: '2025',
      bullets: [
        'Coordinated administration and documentation for 5 career events (webinars, CV coaching, talent mapping, workshop) attended by 250+ participants, ensuring effective information flow across divisions.'
      ],
      theme: 'pink',
      tagline: 'Coordinated administration for 5 career events with 250+ participants.',
      images: [
        '/images/activity/xpertalks.jpg'
      ]
    },
    {
      id: 'lead-resume',
      role: 'Resume Reviewer Intern',
      organization: 'President University (2025)',
      duration: '2025',
      bullets: [
        'Reviewed and evaluated 300+ student resumes, providing structured feedback on content clarity, formatting, and role alignment to improve overall resume quality.'
      ],
      theme: 'green',
      tagline: 'Reviewed and evaluated 300+ student resumes with structured feedback.',
      images: [
        '/images/activity/intern.jpg'
      ]
    },
    {
      id: 'lead-ese',
      role: 'Secretary and LO',
      organization: '3rd Economic Survival Exhibition (2025)',
      duration: '2025',
      bullets: [
        'Handled administrative tasks and meeting documentation.',
        'Assisted as a Liaison Officer on the event day, providing direct support to the judges and ensuring a smooth event flow for over 2,000 attendees.'
      ],
      theme: 'yellow',
      tagline: 'Secretary & LO for an exhibition with over 2,000 attendees.',
      images: [
        '/images/activity/exhib.jpg'
      ]
    },
    {
      id: 'lead-expo',
      role: 'Event Support',
      organization: 'Resume & LinkedIn EXPO (2025)',
      duration: '2025',
      bullets: [
        'Assisted in managing 1,000+ first-year students during a 4-day expo with 16 committee members, ensuring smooth registration flow and participant guidance.'
      ],
      theme: 'pink',
      tagline: 'Managed logistics and guidance for 1,000+ students during a 4-day expo.',
      images: [
        '/images/activity/expo.jpg'
      ]
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Render gorgeous, high-fidelity pictorial polaroid-style photos representing active campus and work engagements
  const renderExperiencePhoto = (id: string, theme: string) => {
    const exp = ALL_EXPERIENCES.find(e => e.id === id);
    const mainImageUrl = exp?.images?.[0] || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80';
    const style = getThemeStyles(theme);

    return (
      <div className="w-full h-32 relative overflow-hidden group/img">
        {/* Real photo from the details array */}
        <img 
          src={mainImageUrl} 
          alt={exp?.organization || 'Activity Photo'} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Semi-transparent dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50" />
        
        {/* Overlay grid scanlines */}
        <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#facc15 0.8px, transparent 0.8px)', backgroundSize: '8px 8px' }} />

        {/* Dynamic header badge/text overlay */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-sm border border-zinc-800/80 px-2 py-0.5 rounded-md font-mono text-[7px] sm:text-[8px] text-[#facc15] font-extrabold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span>{exp?.id || 'sys'}_LOG</span>
          </div>
          <span className={`font-mono text-[7px] sm:text-[8px] border px-1.5 py-0.5 rounded font-black uppercase ${style.badge}`}>
            {exp?.duration}
          </span>
        </div>

        {/* Quick title preview at the bottom left */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 pointer-events-none">
          <span className="font-mono text-[8px] sm:text-[9.5px] font-black text-yellow-350 block mb-0.5 drop-shadow-sm truncate">
            {exp?.role}
          </span>
          <span className="font-sans text-[7.5px] sm:text-[8.5px] text-zinc-300 block truncate leading-none">
            {exp?.organization}
          </span>
        </div>
      </div>
    );
  };

  // Render distinct aesthetic icons for each card
  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case 'pink':
        return {
          glow: 'shadow-pink-500/10 border-pink-500/20 hover:border-[#fb588f]',
          text: 'text-[#fb588f]',
          bg: 'bg-[#fb588f]/10',
          btn: 'bg-[#fb588f] hover:bg-[#fb588f]/90 text-white',
          badge: 'border-[#fb588f]/30 text-[#fb588f] bg-[#fb588f]/5'
        };
      case 'yellow':
        return {
          glow: 'shadow-yellow-400/10 border-yellow-400/20 hover:border-yellow-400',
          text: 'text-yellow-400',
          bg: 'bg-yellow-400/10',
          btn: 'bg-yellow-400 hover:bg-yellow-350 text-black',
          badge: 'border-yellow-400/30 text-yellow-400 bg-yellow-400/5'
        };
      case 'purple':
        return {
          glow: 'shadow-purple-500/10 border-purple-500/20 hover:border-purple-400',
          text: 'text-purple-400',
          bg: 'bg-purple-500/10',
          btn: 'bg-purple-500 hover:bg-purple-400 text-white',
          badge: 'border-purple-500/30 text-purple-400 bg-purple-500/5'
        };
      case 'green':
      default:
        return {
          glow: 'shadow-emerald-500/10 border-emerald-500/20 hover:border-emerald-400',
          text: 'text-emerald-400',
          bg: 'bg-emerald-500/10',
          btn: 'bg-emerald-500 hover:bg-[#84cc16] text-black',
          badge: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5'
        };
    }
  };

  return (
    <section 
      id="page-3"
      className="snap-section relative bg-[#120b16] px-4 sm:px-6 py-12 flex flex-col justify-between overflow-y-auto text-zinc-100"
    >
      {/* Background decorations */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#fb588f]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-64 h-64 bg-yellow-400/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Page Header */}
      <div className="pt-12 sm:pt-14 max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-2 font-mono text-[10px] lg:text-[12px] text-[#fb588f] font-bold">
          <Sparkles className="w-3.5 h-3.5 text-[#fb588f]" />
          <span>04 // EXPERIENCE &amp; LEADERSHIP</span>
        </div>
        <div className="hidden sm:block text-right font-mono text-[11px] lg:text-[13px] text-zinc-100 font-bold uppercase tracking-widest">
          PROFESSIONAL BACKGROUND
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center z-10 py-4 overflow-hidden">
        
        {/* Playful Yellow Whimsical Title & Steering Buttons */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="text-left">
            <h2 className="font-display font-black text-3xl sm:text-4.5xl lg:text-5xl xl:text-6xl text-[#facc15] tracking-tight rotate-[-1.5deg]">
              Experience &amp; Leadership Activities
            </h2>
          </div>
          
          {/* Slide arrow steering controllers */}
          <div className="flex items-center gap-2">
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
        </div>

        <p className="text-white text-[14px] sm:text-[15.5px] lg:text-[17px] xl:text-[18.5px] font-semibold text-left mb-4 font-sans max-w-2xl lg:max-w-3xl leading-relaxed">
          Swipe or scroll the cards below horizontally to explore my professional engagements. Click any card to load the secure logs and verify implementation details.
        </p>

        {/* Swipeable Horizontal Cards Container */}
        <div 
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scroll-smooth scrollbar-none select-none"
        >
          {ALL_EXPERIENCES.map((exp) => {
            const style = getThemeStyles(exp.theme);
            return (
              <div
                key={exp.id}
                onClick={() => handleOpenExp(exp)}
                className={`w-[270px] sm:w-[310px] shrink-0 bg-[#1b0c1c]/90 border-2 rounded-3xl p-5 relative overflow-hidden flex flex-col justify-between text-left shadow-lg cursor-pointer transform hover:translate-y-[-4px] transition-all duration-300 snap-center ${style.glow}`}
              >
                {/* Micro badge indicator */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-[8px] font-black uppercase tracking-widest border px-2 py-0.5 rounded-full ${style.badge}`}>
                    {exp.duration}
                  </span>
                  <Briefcase className={`w-4 h-4 ${style.text}`} />
                </div>

                {/* Aesthetic Photographic/Mockup Preview Window */}
                <div className="rounded-xl overflow-hidden border border-zinc-900 bg-[#070709] mb-3 select-none">
                  {renderExperiencePhoto(exp.id, exp.theme)}
                </div>

                {/* Body Content */}
                <div className="mb-3">
                  <h4 className="font-display font-bold text-white text-[16.5px] tracking-tight mb-1 leading-snug">
                    {exp.role}
                  </h4>
                  <p className="font-mono text-[11.5px] text-zinc-100 font-extrabold truncate mb-3">
                    {exp.organization}
                  </p>
                  <p className="text-[13px] text-white font-sans leading-relaxed line-clamp-2 font-bold">
                    {exp.tagline}
                  </p>
                </div>

                {/* Interact footer indicator button */}
                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-400 font-extrabold uppercase">
                    COMPLETED
                  </span>
                  <span className={`font-mono text-[9px] font-black uppercase tracking-wider flex items-center gap-1 ${style.text}`}>
                    DETAILS &gt;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Slide Navigation Footer */}
      <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto z-10 border-t border-zinc-800 pt-4">
        <div className="flex justify-between items-center text-zinc-100 font-mono text-[11.5px] lg:text-[13px] font-bold">
          <div className="uppercase tracking-widest text-[#facc15] font-black">PROFESSIONAL TIMELINE</div>
          <div className="flex gap-4">
            <button 
              onClick={() => onNavigate(2)} 
              className="hover:text-white transition-colors cursor-pointer py-1 block pr-2"
            >
              PREVIOUS
            </button>
            <button 
              onClick={() => onNavigate(4)} 
              className="flex items-center gap-1 hover:text-white transition-colors py-1 cursor-pointer pr-4 text-pink-400 font-bold"
            >
              <span>NEXT (EDUCATION)</span>
              <ArrowDown className="w-3 h-3 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Floating Details Modal overlay */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Blurry dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Card content frame */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-[#1b0c1c] border-2 border-[#fb588f]/40 rounded-3xl w-full max-w-lg p-6 text-left relative overflow-y-auto max-h-[90vh] shadow-2xl z-10 scrollbar-thin"
            >
              {/* Top aesthetic security banner */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#fb588f] via-[#facc15] to-[#84cc16]" />

              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header inside popup */}
              <div className="mt-2 mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[9px] uppercase tracking-wide bg-[#fb588f]/10 text-[#fb588f] border border-[#fb588f]/20 px-2 py-0.5 rounded font-black">
                    {selectedExp.duration}
                  </span>
                </div>

                <h3 className="font-display font-black text-white text-xl sm:text-2xl tracking-tight leading-none">
                  {selectedExp.role}
                </h3>
                <p className="font-sans text-xs font-bold text-yellow-400 mt-1 uppercase">
                  {selectedExp.organization}
                </p>
              </div>

              {/* Photo preview in Modal - Slidable Image Gallery */}
              {selectedExp.images && selectedExp.images.length > 0 ? (
                <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-4 border border-zinc-800 bg-zinc-950/60 group">
                  {/* Images */}
                  <div 
                    className="absolute inset-0 flex transition-transform duration-500 ease-out" 
                    style={{ transform: `translateX(-${currentImgIndex * 100}%)` }}
                  >
                    {selectedExp.images.map((img, i) => (
                      <img 
                        key={i}
                        src={img}
                        alt={`Experience Slide ${i + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover shrink-0 select-none"
                      />
                    ))}
                  </div>

                  {/* Navigation Controls */}
                  {selectedExp.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(prev => prev === 0 ? selectedExp.images!.length - 1 : prev - 1); }}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/65 hover:bg-black/85 border border-zinc-800/80 flex items-center justify-center text-white cursor-pointer transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(prev => prev === selectedExp.images!.length - 1 ? 0 : prev + 1); }}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/65 hover:bg-black/85 border border-zinc-800/80 flex items-center justify-center text-white cursor-pointer transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Indicators dot bar */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {selectedExp.images.map((_, i) => (
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
                <div className="rounded-xl overflow-hidden border border-zinc-900 bg-[#070709] mb-4 select-none">
                  {renderExperiencePhoto(selectedExp.id, selectedExp.theme)}
                </div>
              )}

              {/* Verified Badge decors */}
              <div className="bg-black/35 rounded-2xl border border-zinc-800 p-4 mb-4">
                <span className="font-mono text-[10.5px] font-black text-zinc-100 uppercase tracking-widest block mb-2.5">
                  RESPONSIBILITIES &amp; IMPACT
                </span>
                <ul className="space-y-3">
                  {selectedExp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-white text-[13.5px] leading-relaxed font-semibold font-sans">
                      <span className="text-[#fb588f] mt-1 shrink-0 font-extrabold text-[8.5px]">■</span>
                      <p>{b}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer decals inside popup */}
              <div className="flex items-center justify-end pt-3 border-t border-zinc-800 font-mono text-[11px] text-zinc-100 font-bold">
                <button
                  onClick={() => setSelectedExp(null)}
                  className="px-3.5 py-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-[9.5px] font-black cursor-pointer uppercase transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </section>
  );
}
