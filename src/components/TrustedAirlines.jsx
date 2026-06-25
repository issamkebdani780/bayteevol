export default function TrustedAirlines() {
  const airlines = ['Emirates', 'Qatar Airways', 'Lufthansa', 'Air France', 'Turkish Airlines', 'Singapore Airlines', 'Delta', 'United']
  
  return (
    <section className="py-12 bg-white dark:bg-brand-emerald-950 overflow-hidden border-b border-brand-emerald-100 dark:border-brand-emerald-900">
      <div className="container mx-auto px-6 mb-6 text-center">
        <p className="text-sm font-semibold text-brand-emerald-500 uppercase tracking-widest">Trusted by leading airlines</p>
      </div>
      <div className="flex gap-12 animate-spin-slow" style={{ animation: 'scroll 20s linear infinite', width: '200%' }}>
        {/* Simple text logos for now, should be real logos */}
        {[...airlines, ...airlines].map((airline, idx) => (
          <div key={idx} className="text-2xl font-serif font-bold text-brand-emerald-200 dark:text-brand-emerald-800 whitespace-nowrap">
            {airline}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
