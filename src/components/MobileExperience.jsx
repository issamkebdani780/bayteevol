import { Download, Apple, Play } from 'lucide-react'

export default function MobileExperience() {
  return (
    <section className="py-24 bg-brand-emerald-50 dark:bg-brand-emerald-950 relative overflow-hidden border-t border-brand-emerald-100 dark:border-brand-emerald-800">
      {/* Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-emerald-500/20 dark:bg-brand-emerald-500/30 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight text-brand-emerald-900 dark:text-white">
              The world's smartest travel app. <br/>
              <span className="text-brand-gold-600 dark:text-brand-gold-400">Now in your pocket.</span>
            </h2>
            <p className="text-xl text-brand-emerald-700 dark:text-brand-emerald-200 mb-10 max-w-lg leading-relaxed">
              Book flights in seconds, get live gate updates, and manage your entire itinerary offline. Award-winning design built for speed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 bg-brand-emerald-900 dark:bg-white text-white dark:text-brand-emerald-950 px-8 py-4 rounded-2xl font-bold hover:bg-brand-emerald-800 dark:hover:bg-brand-gold-50 transition-colors shadow-lg">
                <Apple size={24} />
                <div className="text-left">
                  <div className="text-xs font-normal opacity-80">Download on the</div>
                  <div className="text-lg leading-tight">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-3 bg-white dark:bg-white/10 backdrop-blur-md border border-brand-emerald-200 dark:border-white/20 text-brand-emerald-900 dark:text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-emerald-50 dark:hover:bg-white/20 transition-colors shadow-lg">
                <Play size={24} />
                <div className="text-left">
                  <div className="text-xs font-normal opacity-80">GET IT ON</div>
                  <div className="text-lg leading-tight">Google Play</div>
                </div>
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-brand-emerald-600 dark:text-brand-emerald-300 font-medium">
              <Download size={20} /> Over 2 Million Downloads
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full flex justify-center">
            {/* Mobile App Mockup Container */}
            <div className="relative w-72 h-[600px] bg-white dark:bg-black rounded-[3rem] border-[8px] border-brand-emerald-200 dark:border-brand-emerald-800/50 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-emerald-200 dark:bg-black rounded-b-2xl z-20" />
              <img src="/app-mockup.png" alt="App interface" className="w-full h-full object-cover relative z-10" />
              {/* Fallback if image fails */}
              <div className="absolute inset-0 bg-brand-emerald-100 dark:bg-brand-emerald-900 flex items-center justify-center text-center p-6 text-brand-emerald-600 dark:text-brand-emerald-300 z-0">
                Mockup UI goes here
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
