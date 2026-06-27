import { Calendar, Briefcase, ChevronRight, Plane } from 'lucide-react'

export default function CheapestFlights() {
  const flights = [
    { 
      date: 'Aller 03 juil. 2026', 
      depTime: '11:45', depCode: 'ALG', depCity: 'Algiers', 
      arrTime: '15:25', arrCode: 'CAI', arrCity: 'Cairo', 
      duration: '19h:50m', stops: '1 escale', 
      airline: 'Air Algerie', baggage: 'Avec bagage économique', 
      price: '43 559 DZD', type: 'Aller simple' 
    },
    { 
      date: 'Aller 05 juil. 2026', 
      depTime: '09:00', depCode: 'ALG', depCity: 'Algiers', 
      arrTime: '14:20', arrCode: 'IST', arrCity: 'Istanbul', 
      duration: '4h:20m', stops: 'Direct', 
      airline: 'Turkish Airlines', baggage: 'Bagage cabine', 
      price: '52 100 DZD', type: 'Aller simple' 
    },
    { 
      date: 'Aller 10 juil. 2026', 
      depTime: '08:30', depCode: 'ALG', depCity: 'Algiers', 
      arrTime: '11:15', arrCode: 'CDG', arrCity: 'Paris', 
      duration: '2h:45m', stops: 'Direct', 
      airline: 'Air France', baggage: 'Avec bagage soute', 
      price: '38 900 DZD', type: 'Aller simple' 
    },
  ]

  return (
    <section className="py-32 bg-brand-emerald-50 dark:bg-brand-emerald-950" id="deals">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-brand-emerald-900 dark:text-white">
              Cheapest Flights Today
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Live prices from Algiers to popular destinations.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {flights.map((flight, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-brand-emerald-900/80 rounded-[1.5rem] p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col lg:flex-row gap-8 lg:gap-12"
            >
              {/* Left Side: Flight Info */}
              <div className="flex-grow flex flex-col justify-between">
                {/* Date Header */}
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium mb-6">
                  <Calendar size={18} />
                  <span>{flight.date}</span>
                </div>
                
                {/* Main Row */}
                <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-6">
                  {/* Airline */}
                  <div className="w-24 font-bold text-brand-emerald-900 dark:text-white">
                    {flight.airline}
                  </div>
                  
                  {/* Departure */}
                  <div className="flex flex-col items-center min-w-[80px]">
                    <span className="text-2xl font-bold text-brand-emerald-900 dark:text-white">{flight.depTime}</span>
                    <span className="text-brand-gold-500 font-bold text-lg">{flight.depCode}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">({flight.depCity})</span>
                  </div>
                  
                  {/* Route Line */}
                  <div className="flex-grow hidden md:flex flex-col items-center px-4">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-2">
                      {flight.duration}
                    </div>
                    <div className="w-full flex items-center">
                      <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600 relative">
                        <Plane size={14} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                      <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    </div>
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                      {flight.stops}
                    </div>
                  </div>
                  
                  {/* Arrival */}
                  <div className="flex flex-col items-center min-w-[80px]">
                    <span className="text-2xl font-bold text-brand-emerald-900 dark:text-white">{flight.arrTime}</span>
                    <span className="text-brand-gold-500 font-bold text-lg">{flight.arrCode}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">({flight.arrCity})</span>
                  </div>
                  
                  {/* Baggage */}
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 max-w-[120px] text-center">
                    <Briefcase size={16} className="flex-shrink-0" />
                    <span>{flight.baggage}</span>
                  </div>

                  {/* Details Button */}
                  <div className="hidden xl:block">
                    <button className="px-4 py-2 rounded-lg border border-brand-emerald-900 dark:border-white/20 text-brand-emerald-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center gap-1 text-sm">
                      Détails <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Right Side: Pricing */}
              <div className="lg:w-64 lg:pl-8 lg:border-l border-gray-100 dark:border-gray-800 flex flex-col items-center lg:items-end justify-center gap-3 mt-4 lg:mt-0">
                <a href="#" className="text-[#3b82f6] hover:underline text-sm font-medium mb-1">
                  Détails du vol
                </a>
                <div className="text-3xl font-bold text-brand-emerald-900 dark:text-white whitespace-nowrap">
                  {flight.price}
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">
                  {flight.type}
                </div>
                <button className="w-full bg-brand-emerald-900 hover:bg-brand-emerald-950 dark:bg-brand-gold-500 dark:hover:bg-brand-gold-600 text-white dark:text-brand-emerald-900 font-bold py-3 px-6 rounded-xl transition-colors shadow-md text-center">
                  Réserver ce vol
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
