import { ShieldCheck, Tag, Zap, HeadphonesIcon, Plane } from 'lucide-react'
import SearchBar from './SearchBar'

export default function HeroSection() {

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center pt-40 pb-10 perspective-1000 z-20">
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
          <div className="absolute -top-12 -left-2 ml-10 lg:-left-24 hidden md:flex flex-col gap-3 bg-brand-gold-100 p-5 rounded-3xl shadow-xl w-56 text-left floating-ticket z-20">
            <div className="flex justify-between items-center text-[15px] font-extrabold text-brand-emerald-900 tracking-wide">
              <span>ALG</span>
              <Plane size={16} strokeWidth={2} className="text-brand-emerald-900" />
              <span>IST</span>
            </div>
            <div className="h-2 bg-brand-emerald-200 rounded-full w-full overflow-hidden">
              <div className="h-full bg-brand-gold-500 w-[55%] rounded-full" />
            </div>
            <div className="text-[14px] font-medium text-brand-emerald-900 mt-1">Live AI Routing...</div>
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

            <SearchBar />
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
