import { Plane, Hotel, Car, Shield, Activity, Plus, ArrowRight } from 'lucide-react'

export default function TripPlanner() {
  const steps = [
    { icon: Plane, label: 'Flight', desc: 'Istanbul, IST' },
    { icon: Plus, label: '', isPlus: true },
    { icon: Hotel, label: 'Hotel', desc: 'Bosphorus View' },
    { icon: Plus, label: '', isPlus: true },
    { icon: Car, label: 'Transfer', desc: 'Airport Pickup' },
    { icon: Plus, label: '', isPlus: true },
    { icon: Activity, label: 'Activities', desc: '2 Tours' },
    { icon: Plus, label: '', isPlus: true },
    { icon: Shield, label: 'Insurance', desc: 'Full Coverage' },
  ]

  return (
    <section className="py-24 bg-brand-emerald-50 dark:bg-brand-emerald-950 border-t border-brand-emerald-100 dark:border-brand-emerald-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 text-brand-emerald-900 dark:text-white">Seamless Trip Planning</h2>
          <p className="text-lg text-brand-emerald-600 dark:text-brand-emerald-300 max-w-2xl mx-auto">
            Don't stop at flights. Build your entire itinerary in one place and save up to 25% when you bundle.
          </p>
        </div>

        <div className="bg-white dark:bg-brand-emerald-900 rounded-3xl p-8 lg:p-12 shadow-xl border border-brand-emerald-100 dark:border-brand-emerald-800">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 mb-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {step.isPlus ? (
                  <div className="w-8 h-8 rounded-full bg-brand-emerald-50 dark:bg-brand-emerald-950 flex items-center justify-center text-brand-emerald-400">
                    <Plus size={16} />
                  </div>
                ) : (
                  <div className="group cursor-pointer flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-brand-emerald-100 dark:bg-brand-emerald-800 flex items-center justify-center text-brand-emerald-600 dark:text-brand-gold-500 mb-3 group-hover:bg-brand-gold-500 group-hover:text-white transition-all shadow-sm">
                      <step.icon size={28} />
                    </div>
                    <span className="font-bold text-brand-emerald-900 dark:text-white">{step.label}</span>
                    <span className="text-xs text-brand-emerald-500">{step.desc}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-brand-gold-50 dark:bg-brand-gold-900/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between border border-brand-gold-200 dark:border-brand-gold-800/50">
            <div>
              <h3 className="text-2xl font-bold font-serif text-brand-emerald-900 dark:text-brand-gold-50 mb-2">Total Package Savings: €145</h3>
              <p className="text-brand-emerald-700 dark:text-brand-gold-200/80">Book together to unlock exclusive bundled discounts.</p>
            </div>
            <button className="mt-4 md:mt-0 bg-brand-gold-600 hover:bg-brand-gold-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center gap-2 shadow-lg hover:shadow-brand-gold-500/40">
              Build This Trip <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
