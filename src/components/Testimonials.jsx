import { Star } from 'lucide-react'

export default function Testimonials() {
  const row1 = [
    {
      text: "The AI Travel Companion is a game-changer. I typed my complex preferences for my parents' Umrah trip and instantly got the perfect recommendation.",
      name: "Tariq Mansour",
      platform: "Trustpilot",
      highlight: false,
      initials: "TM"
    },
    {
      text: "Our stay at Ajwa Hotel Sultanahmet was a dream. A completely alcohol-free environment with Ottoman architecture felt spiritually uplifting.",
      name: "Farhan Syahputra",
      platform: "Trustpilot",
      highlight: false,
      initials: "FS"
    },
    {
      text: "Baytee verified every single halal claim for our Dubai trip. The women-only pool was actually private and the food was genuinely halal-certified.",
      name: "Aisha Bello",
      platform: "Google",
      highlight: false,
      initials: "AB"
    },
    {
      text: "Finding hotels with truly private pools was always exhausting. Baytee made booking our Antalya resort completely stress-free. Absolute privacy!",
      name: "Zahra Ahmed",
      platform: "Trustpilot",
      highlight: true,
      initials: "ZA"
    }
  ]

  const row2 = [
    {
      text: "Customer service is always prompt and the platform keeps adding new features. Booking halal-friendly hotels has never felt this seamless.",
      name: "Omar K.",
      platform: "Google",
      highlight: true,
      initials: "OK"
    },
    {
      text: "With so many travel platforms out there, Baytee stood out as a stellar choice. The halal filters work perfectly and the AI assistant saved hours.",
      name: "Yusuf Ali",
      platform: "Trustpilot",
      highlight: false,
      initials: "YA"
    },
    {
      text: "The price prediction chart was spot on. I waited 3 days as advised and the price dropped exactly when it said it would. Excellent service!",
      name: "Sarah J.",
      platform: "Trustpilot",
      highlight: false,
      initials: "SJ"
    },
    {
      text: "Cleanest UI I have ever seen for booking flights and hotels. The interface is gorgeous and the customer support is extremely helpful.",
      name: "Michael T.",
      platform: "Google",
      highlight: false,
      initials: "MT"
    }
  ]

  const TestimonialCard = ({ data }) => (
    <div className={`w-[350px] md:w-[400px] flex-shrink-0 p-8 rounded-3xl shadow-sm border ${
      data.highlight 
        ? 'bg-brand-emerald-900 text-white border-transparent shadow-xl' 
        : 'bg-white dark:bg-brand-emerald-900/50 text-brand-emerald-900 dark:text-white border-gray-100 dark:border-gray-800'
    } transition-transform hover:-translate-y-2 duration-300 flex flex-col h-[280px]`}>
      <div className="flex gap-1 mb-6 text-brand-gold-500">
        {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" stroke="none" />)}
      </div>
      <p className={`mb-8 text-[15px] leading-relaxed font-medium whitespace-normal ${data.highlight ? 'text-gray-200' : 'text-slate-600 dark:text-slate-300'}`}>
        {data.text}
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${
          data.highlight 
            ? 'bg-white/20 text-white' 
            : 'bg-brand-emerald-50 dark:bg-gray-800 text-brand-emerald-900 dark:text-white'
        }`}>
          {data.initials}
        </div>
        <div>
          <div className="font-bold text-[15px] whitespace-normal">{data.name}</div>
          <div className={`text-xs mt-0.5 whitespace-normal ${data.highlight ? 'text-gray-400' : 'text-slate-500'}`}>
            {data.platform}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-32 bg-brand-emerald-50 dark:bg-brand-emerald-950 overflow-hidden">
      <div className="text-center mb-16 container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-brand-emerald-900 dark:text-white">
          Loved by Travelers Worldwide
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          See what our community has to say about Baytee.
        </p>
      </div>

      <div className="relative flex flex-col gap-6 mask-edge pb-10">
        
        {/* Row 1 - Scrolling Left */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-6 animate-scroll-left group-hover:[animation-play-state:paused] w-max px-3">
            {[...row1, ...row1, ...row1, ...row1].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} data={t} />
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolling Right */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-6 animate-scroll-right group-hover:[animation-play-state:paused] w-max px-3">
            {[...row2, ...row2, ...row2, ...row2].map((t, i) => (
              <TestimonialCard key={`r2-${i}`} data={t} />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .mask-edge {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
      `}</style>
    </section>
  )
}
