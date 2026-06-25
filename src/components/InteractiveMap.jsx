export default function InteractiveMap() {
  return (
    <section className="py-24 bg-brand-emerald-50 dark:bg-brand-emerald-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 text-brand-emerald-900 dark:text-white">Explore the World</h2>
          <p className="text-lg text-brand-emerald-600 dark:text-brand-emerald-300 max-w-2xl mx-auto">
            Drag the map to discover live starting fares to anywhere in the world from your location.
          </p>
        </div>

        {/* Stylized Map Container */}
        <div className="w-full h-[600px] bg-brand-emerald-200 dark:bg-brand-emerald-900 rounded-3xl overflow-hidden shadow-2xl border border-brand-emerald-300 dark:border-brand-emerald-700 relative flex items-center justify-center islamic-pattern">
          {/* Map Overlay Pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-emerald-900/20 mix-blend-multiply" />
          
          <div className="text-center z-10 bg-white/80 dark:bg-brand-emerald-950/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50 dark:border-white/10">
            <div className="w-16 h-16 bg-brand-gold-100 dark:bg-brand-gold-900/50 text-brand-gold-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/></svg>
            </div>
            <h3 className="text-2xl font-bold font-serif text-brand-emerald-900 dark:text-white mb-2">Mapbox Integration Ready</h3>
            <p className="text-brand-emerald-600 dark:text-brand-emerald-400 max-w-sm">
              Connect your Mapbox API key to enable the interactive WebGL globe with live flight routes and dynamic pricing nodes.
            </p>
            <button className="mt-6 px-6 py-2 bg-brand-emerald-900 dark:bg-brand-emerald-800 text-white rounded-full font-medium hover:bg-brand-emerald-800 dark:hover:bg-brand-emerald-700 transition-colors">
              View Demo Map
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
