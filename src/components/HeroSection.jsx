import { ShieldCheck, Tag, Zap, HeadphonesIcon, Search, Plane, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function HeroSection() {
  const navigate = useNavigate()
  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center pt-40 pb-10 overflow-hidden perspective-1000">
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/aviation-hero-bg.png"
          alt="Aviation background"
          className="w-full h-[120%] object-cover opacity-80 dark:opacity-60 mix-blend-overlay dark:mix-blend-normal"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald-50/50 via-brand-emerald-50/80 to-brand-emerald-50 dark:from-brand-emerald-950/80 dark:via-brand-emerald-950/90 dark:to-brand-emerald-950" /> */}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="relative">
          {/* Floating UI Element (Abstract Ticket) */}
          <div className="absolute -top-12 -left-2 ml-10 lg:-left-24 hidden md:flex flex-col gap-3 bg-[#e9e1d8] p-5 rounded-3xl shadow-xl w-56 text-left floating-ticket z-20">
            <div className="flex justify-between items-center text-[15px] font-extrabold text-[#1a2b3c] tracking-wide">
              <span>ALG</span>
              <Plane size={16} strokeWidth={2} className="text-[#1a2b3c]" />
              <span>IST</span>
            </div>
            <div className="h-2 bg-[#cbd5e1] rounded-full w-full overflow-hidden">
              <div className="h-full bg-[#c9a775] w-[55%] rounded-full" />
            </div>
            <div className="text-[14px] font-medium text-[#1a2b3c] mt-1">Live AI Routing...</div>
          </div>

          {/* Second Floating Element (Price Drop Alert) */}
          <div className="absolute top-52 -right-4 lg:-right-16 hidden md:flex flex-col gap-2 bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-xl w-48 text-left floating-ticket-delayed z-20 border border-white/50">
            <div className="flex items-center gap-3">
              <div className="bg-brand-emerald-100 p-2 rounded-full">
                <Tag className="text-brand-emerald-600 w-5 h-5" />
              </div>
              <div>
                <div className="text-[12px] text-slate-500 font-medium">Price Drop Alert</div>
                <div className="text-[15px] font-extrabold text-slate-800">Save €45</div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 text-brand-emerald-900 dark:text-white tracking-tight">
            Where AI Meets <br className="hidden md:block" />
            <span className="text-brand-gold-600 dark:text-brand-gold-500 text-glow-gold relative inline-block">
              Aviation
              {/* Subtle underline glow */}
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-gold-500 blur-sm opacity-50" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-emerald-800 dark:text-brand-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the world's most advanced flight booking platform. Smart, fast, and beautifully simple.
          </p>

          {/* Flight Search Widget */}
          <div className="relative max-w-5xl mx-auto mb-16">
            {/* Widget Glow Background */}
            <div className="absolute -inset-4 bg-brand-gold-500/20 dark:bg-brand-gold-500/10 blur-2xl rounded-full animate-pulse" />

            <div className="relative bg-white/70 dark:bg-brand-emerald-900/70 backdrop-blur-2xl p-5 md:p-6 rounded-[2rem] shadow-2xl border border-white/50 dark:border-white/10 transition-all duration-300 text-left">

              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 text-[15px] font-semibold text-brand-emerald-800 dark:text-brand-emerald-100 px-1">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="tripType" defaultChecked className="hidden" />
                    <div className="w-5 h-5 rounded-full border-[5px] border-brand-gold-500 bg-white dark:bg-brand-emerald-950 flex-shrink-0 transition-all shadow-sm"></div>
                    <span>Aller / Retour</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="tripType" className="hidden" />
                    <div className="w-5 h-5 rounded-full border-2 border-brand-emerald-200 dark:border-brand-emerald-700 group-hover:border-brand-gold-400 bg-white/50 dark:bg-brand-emerald-950/50 flex-shrink-0 transition-all shadow-sm"></div>
                    <span>Aller simple</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="tripType" className="hidden" />
                    <div className="w-5 h-5 rounded-full border-2 border-brand-emerald-200 dark:border-brand-emerald-700 group-hover:border-brand-gold-400 bg-white/50 dark:bg-brand-emerald-950/50 flex-shrink-0 transition-all shadow-sm"></div>
                    <span>Multi-ville</span>
                  </label>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="hidden" />
                    <div className="w-5 h-5 rounded-[4px] border-2 border-brand-emerald-200 dark:border-brand-emerald-700 group-hover:border-brand-gold-400 bg-white/50 dark:bg-brand-emerald-950/50 flex-shrink-0 transition-all shadow-sm"></div>
                    <span>Bagage</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="hidden" />
                    <div className="w-5 h-5 rounded-[4px] border-2 border-brand-emerald-200 dark:border-brand-emerald-700 group-hover:border-brand-gold-400 bg-white/50 dark:bg-brand-emerald-950/50 flex-shrink-0 transition-all shadow-sm"></div>
                    <span>Direct</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="hidden" />
                    <div className="w-5 h-5 rounded-[4px] border-2 border-brand-emerald-200 dark:border-brand-emerald-700 group-hover:border-brand-gold-400 bg-white/50 dark:bg-brand-emerald-950/50 flex-shrink-0 transition-all shadow-sm"></div>
                    <span>Remboursable</span>
                  </label>
                </div>
              </div>

              {/* Main Search Bar */}
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center bg-white dark:bg-[#1e2b3c] rounded-[1.5rem] shadow-md p-1.5 gap-2 lg:gap-0 mt-2 relative">

                {/* De... & À... */}
                <div className="flex flex-col md:flex-row flex-[1.5] relative">
                  <div className="flex-1 relative">
                    <input type="text" placeholder="De..." className="w-full pl-6 pr-10 py-4 outline-none bg-transparent text-[#1e2b3c] dark:text-white placeholder-slate-400 font-bold text-xl" />
                  </div>

                  {/* Swap button md */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-gray-100 dark:border-gray-700 bg-white dark:bg-[#1e2b3c] text-[#d4af37] items-center justify-center hover:bg-gray-50 dark:hover:bg-[#1a2b3c] transition-all cursor-pointer shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 10h-14l4-4" />
                      <path d="M7 14h14l-4 4" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <input type="text" placeholder="À..." className="w-full pl-6 md:pl-10 pr-6 py-4 outline-none bg-transparent text-[#1e2b3c] dark:text-white placeholder-slate-400 font-bold text-xl" />
                  </div>
                </div>

                <div className="hidden lg:block w-[1px] h-12 bg-gray-100 dark:bg-gray-700 mx-1"></div>

                {/* Dates */}
                <div className="flex-1 min-w-[130px] relative">
                  <input
                    type="text"
                    placeholder="Votre aller"
                    readOnly
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="w-full px-5 py-4 outline-none bg-transparent text-slate-500 dark:text-slate-300 placeholder-slate-400 font-medium text-[16px] cursor-pointer"
                  />
                </div>

                <div className="hidden lg:block w-[1px] h-12 bg-gray-100 dark:bg-gray-700 mx-1"></div>

                <div className="flex-1 min-w-[130px] relative">
                  <input
                    type="text"
                    placeholder="Votre retour"
                    readOnly
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="w-full px-5 py-4 outline-none bg-transparent text-slate-500 dark:text-slate-300 placeholder-slate-400 font-medium text-[16px] cursor-pointer"
                  />
                </div>

                <div className="hidden lg:block w-[1px] h-12 bg-gray-100 dark:bg-gray-700 mx-1"></div>

                {/* Passenger & Search */}
                <div className="flex-[1.2] flex items-center justify-between pl-5 pr-1 min-w-[220px]">
                  <input type="text" defaultValue="1 passager, économique" className="w-full py-4 outline-none bg-transparent text-[#1e2b3c] dark:text-white font-bold text-[15px]" />
                  <button onClick={() => navigate('/search')} className="w-14 h-14 rounded-2xl bg-[#d4af37] hover:bg-[#c39b6b] text-white flex items-center justify-center transition-all shadow-md flex-shrink-0 cursor-pointer">
                    <Search size={24} strokeWidth={2.5} />
                  </button>
                </div>

                {/* Mock Calendar Popover */}
                {showCalendar && (
                  <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[35%] xl:left-[38%] bg-white dark:bg-[#1a2b3c] rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 p-6 z-50 w-full max-w-[600px] text-[#1e2b3c] dark:text-white animate-in fade-in slide-in-from-top-4 duration-200">
                    <div className="flex items-center justify-between mb-6">
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                        <ChevronLeft size={20} />
                      </button>
                      <div className="flex-1 text-center font-bold text-[17px]">Jun 2026</div>
                      <div className="flex-1 text-center font-bold text-[17px]">Jul 2026</div>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                        <ChevronRight size={20} />
                      </button>
                    </div>

                    <div className="flex gap-8">
                      {/* June */}
                      <div className="flex-1">
                        <div className="grid grid-cols-7 gap-1 text-center text-[13px] font-bold text-slate-400 mb-4">
                          <div>Lu</div><div>Ma</div><div>Me</div><div>Je</div><div>Ve</div><div>Sa</div><div>Di</div>
                        </div>
                        <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center text-[14px] font-medium">
                          <div className="text-gray-300">1</div><div className="text-gray-300">2</div><div className="text-gray-300">3</div><div className="text-gray-300">4</div><div className="text-gray-300">5</div><div className="text-gray-300">6</div><div className="text-gray-300">7</div>
                          <div className="text-gray-300">8</div><div className="text-gray-300">9</div><div className="text-gray-300">10</div><div className="text-gray-300">11</div><div className="text-gray-300">12</div><div className="text-gray-300">13</div><div className="text-gray-300">14</div>
                          <div className="text-gray-300">15</div><div className="text-gray-300">16</div><div className="text-gray-300">17</div><div className="text-gray-300">18</div><div className="text-gray-300">19</div><div className="text-gray-300">20</div><div className="text-gray-300">21</div>
                          <div className="text-gray-300">22</div><div className="text-gray-300">23</div><div className="text-gray-300">24</div><div className="text-gray-300">25</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">26</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">27</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">28</div>
                          <div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">29</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">30</div><div className="opacity-0">31</div><div className="opacity-0">1</div><div className="opacity-0">2</div><div className="opacity-0">3</div><div className="opacity-0">4</div>
                        </div>
                      </div>
                      {/* July */}
                      <div className="flex-1">
                        <div className="grid grid-cols-7 gap-1 text-center text-[13px] font-bold text-slate-400 mb-4">
                          <div>Lu</div><div>Ma</div><div>Me</div><div>Je</div><div>Ve</div><div>Sa</div><div>Di</div>
                        </div>
                        <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center text-[14px] font-medium">
                          <div className="opacity-0">29</div><div className="opacity-0">30</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">1</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">2</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">3</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">4</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">5</div>
                          <div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">6</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">7</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">8</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">9</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">10</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">11</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">12</div>
                          <div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">13</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">14</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">15</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">16</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">17</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">18</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">19</div>
                          <div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">20</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">21</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">22</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">23</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">24</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">25</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">26</div>
                          <div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">27</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">28</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">29</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">30</div><div className="font-bold cursor-pointer hover:bg-gray-100 rounded-lg p-1">31</div><div className="opacity-0">1</div><div className="opacity-0">2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Row */}
              <div className="mt-5 px-1 text-left">
                <button className="inline-flex items-center gap-1 text-brand-gold-600 dark:text-brand-gold-400 text-[14px] font-bold hover:text-brand-gold-500 transition-colors">
                  Choisir une compagnie <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-brand-emerald-800 dark:text-brand-emerald-200">
            {[
              { icon: ShieldCheck, text: "Secure Booking" },
              { icon: Tag, text: "Best Price Guarantee" },
              { icon: Zap, text: "AI Smart Search" },
              { icon: HeadphonesIcon, text: "24/7 Support" }
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 cursor-default hover:-translate-y-1 transition-transform"
              >
                <div className="bg-brand-gold-100 dark:bg-brand-gold-900/30 p-2 rounded-lg">
                  <badge.icon className="text-brand-gold-600 dark:text-brand-gold-400" size={24} />
                </div>
                <span className="font-bold tracking-wide">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float-ticket {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .floating-ticket {
          animation: float-ticket 4s ease-in-out infinite;
        }
        .floating-ticket-delayed {
          animation: float-ticket 4s ease-in-out 2s infinite;
        }
      `}</style>
    </section>
  )
}

function ArrowRight(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  )
}
