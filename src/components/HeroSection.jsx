import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Tag, Zap, HeadphonesIcon, Search } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Aviation background" 
          className="w-full h-full object-cover opacity-80 dark:opacity-60 mix-blend-overlay dark:mix-blend-normal"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald-50/50 via-transparent to-brand-emerald-50 dark:from-brand-emerald-950/80 dark:via-brand-emerald-950/50 dark:to-brand-emerald-950" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 text-brand-emerald-900 dark:text-white">
            Where AI Meets <span className="text-brand-gold-600 dark:text-brand-gold-500 text-glow-gold">Aviation</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-emerald-800 dark:text-brand-emerald-100 mb-12 max-w-3xl mx-auto">
            Experience the world's most advanced flight booking platform. Smart, fast, and beautifully simple.
          </p>

          {/* AI Search Widget */}
          <div className="max-w-4xl mx-auto bg-white/70 dark:bg-brand-emerald-900/70 backdrop-blur-xl border border-white/40 dark:border-white/10 p-4 md:p-6 rounded-3xl shadow-2xl mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative w-full">
                <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold-500" size={24} />
                <input 
                  type="text" 
                  placeholder="e.g., Find the cheapest flight from Algiers to Istanbul next week"
                  className="w-full bg-white/50 dark:bg-black/20 border border-brand-emerald-100 dark:border-brand-emerald-800 rounded-2xl py-4 pl-12 pr-4 text-lg focus:outline-none focus:ring-2 focus:ring-brand-gold-500 placeholder-brand-emerald-500/50 dark:placeholder-brand-emerald-200/50 transition-all text-brand-emerald-900 dark:text-white"
                />
              </div>
              <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-brand-gold-600 hover:bg-brand-gold-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all shadow-lg hover:shadow-brand-gold-500/30 whitespace-nowrap">
                <Search size={20} />
                Smart Search
              </button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6 text-sm font-medium text-brand-emerald-900 dark:text-brand-emerald-100">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/40 dark:bg-white/5 rounded-full border border-white/20 hover:bg-white/60 dark:hover:bg-white/10 cursor-pointer transition-colors">
                <span>Algiers (ALG)</span>
                <span>→</span>
                <span>Anywhere</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/40 dark:bg-white/5 rounded-full border border-white/20 hover:bg-white/60 dark:hover:bg-white/10 cursor-pointer transition-colors">
                <span>Any dates</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/40 dark:bg-white/5 rounded-full border border-white/20 hover:bg-white/60 dark:hover:bg-white/10 cursor-pointer transition-colors">
                <span>1 Passenger</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/40 dark:bg-white/5 rounded-full border border-white/20 hover:bg-white/60 dark:hover:bg-white/10 cursor-pointer transition-colors">
                <span>Economy</span>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-brand-emerald-800 dark:text-brand-emerald-200">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-brand-gold-600 dark:text-brand-gold-500" />
              <span className="font-medium">Secure Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="text-brand-gold-600 dark:text-brand-gold-500" />
              <span className="font-medium">Best Price Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-brand-gold-600 dark:text-brand-gold-500" />
              <span className="font-medium">AI Smart Search</span>
            </div>
            <div className="flex items-center gap-2">
              <HeadphonesIcon className="text-brand-gold-600 dark:text-brand-gold-500" />
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
