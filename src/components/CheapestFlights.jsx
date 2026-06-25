import { Plane, ArrowRight } from 'lucide-react'

export default function CheapestFlights() {
  const flights = [
    { from: 'ALG', to: 'IST', airline: 'Turkish Airlines', price: '€199', time: '10:30 AM', date: 'Tomorrow' },
    { from: 'ALG', to: 'CDG', airline: 'Air France', price: '€145', time: '02:15 PM', date: 'Today' },
    { from: 'ALG', to: 'DXB', airline: 'Emirates', price: '€320', time: '11:45 PM', date: 'Next Week' },
    { from: 'ALG', to: 'DOH', airline: 'Qatar Airways', price: '€390', time: '08:00 AM', date: 'In 2 Days' },
  ]

  return (
    <section className="py-24 bg-brand-emerald-50 dark:bg-brand-emerald-950" id="deals">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-4 text-brand-emerald-900 dark:text-white">Cheapest Flights Today</h2>
            <p className="text-lg text-brand-emerald-600 dark:text-brand-emerald-300">Live prices from Algiers to popular destinations.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flights.map((flight, idx) => (
            <div key={idx} className="bg-white dark:bg-brand-emerald-900 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all border border-brand-emerald-100 dark:border-brand-emerald-800 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold-500/10 rounded-bl-full -z-0 transition-transform group-hover:scale-150" />
              <div className="relative z-10">
                <div className="text-sm font-medium text-brand-emerald-500 mb-4">{flight.date} • {flight.time}</div>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-3xl font-bold font-serif text-brand-emerald-900 dark:text-white">{flight.from}</div>
                  <Plane className="text-brand-gold-500" />
                  <div className="text-3xl font-bold font-serif text-brand-emerald-900 dark:text-white">{flight.to}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-brand-emerald-600 dark:text-brand-emerald-400">{flight.airline}</div>
                  <div className="text-2xl font-bold text-brand-gold-600 dark:text-brand-gold-500">{flight.price}</div>
                </div>
                <button className="w-full mt-6 bg-brand-emerald-50 dark:bg-brand-emerald-950 text-brand-emerald-900 dark:text-white font-semibold py-3 rounded-xl border border-brand-emerald-200 dark:border-brand-emerald-800 group-hover:bg-brand-gold-600 group-hover:text-white group-hover:border-transparent transition-all flex items-center justify-center gap-2">
                  Book <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
