import { Star } from 'lucide-react'

export default function TrustedAirlines() {
  const airlines = [
    { name: 'Air Algerie', image: '/air/Air-Alger.png', rating: 4 },
    { name: 'Saudia Airlines', image: '/air/Saudia_Logo.png', rating: 5 },
    { name: 'Partner Airline', image: '/air/images.png', rating: 4 },
    { name: 'Air Algerie', image: '/air/Air-Alger.png', rating: 4 },
    { name: 'Saudia Airlines', image: '/air/Saudia_Logo.png', rating: 5 },
    { name: 'Partner Airline', image: '/air/images.png', rating: 4 },
  ]
  
  return (
    <section className="py-16 bg-white dark:bg-brand-emerald-950 overflow-hidden relative border-y border-brand-emerald-50 dark:border-brand-emerald-900/30">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald-50/50 via-transparent to-brand-emerald-50/50 dark:from-brand-emerald-950/80 dark:via-transparent dark:to-brand-emerald-950/80 z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-12 text-center relative z-20">
        <p className="text-sm font-bold text-brand-emerald-400 dark:text-brand-emerald-500 uppercase tracking-[0.2em] mb-3">
          Global Partners
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-emerald-900 dark:text-white">
          Trusted by the World's Best
        </h2>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group mask-edge z-20">
        
        {/* Scrolling Track */}
        <div 
          className="flex whitespace-nowrap animate-scroll group-hover:[animation-play-state:paused] py-4 w-max"
          style={{ animation: 'scroll 45s linear infinite' }}
        >
          {/* Duplicate array 3 times for seamless looping */}
          {[0, 1, 2].map((setIndex) => (
            <div key={setIndex} className="flex gap-16 md:gap-24 items-center px-8 md:px-12">
              {airlines.map((airline, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center gap-2 group/item cursor-pointer"
                >
                  <div className="h-12 md:h-16 flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
                    <img src={airline.image} alt={airline.name} className="max-h-full max-w-[150px] object-contain drop-shadow-sm" />
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-y-2 group-hover/item:translate-y-0">
                    {[...Array(airline.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-brand-gold-500 fill-brand-gold-500" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .mask-edge {
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.33333%)); }
        }
      `}</style>
    </section>
  )
}
