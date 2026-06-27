import { Calendar, Briefcase, ChevronRight, ChevronDown, User, Plane, Edit2, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import SearchBar from '../components/SearchBar'

export default function SearchResults() {
  const [priceRange, setPriceRange] = useState(65161)

  const topAirlines = [
    { name: 'Ajet', price: '18 841,00 DZD', logo: '/air/ajet.png', fallback: 'AJ' },
    { name: 'Turkish Airlines', price: '54 665,00 DZD', logo: '/air/images.png', fallback: 'TK' },
    { name: 'Air Algerie', price: '60 010,00 DZD', logo: '/air/Air-Alger.png', fallback: 'AH' },
    { name: 'Ita Airways', price: '60 772,00 DZD', logo: '/air/ita.png', fallback: 'IT' },
    { name: 'Lufthansa', price: '62 500,00 DZD', logo: '/air/lufthansa.png', fallback: 'LH' }
  ]

  const flights = [
    { 
      date: 'Aller 27 juin 2026', 
      depTime: '13:55', depCode: 'CZL', depCity: 'Constantine', 
      arrTime: '04:50', arrCode: 'SSH', arrCity: 'Sharm El Sheikh', 
      duration: '07h:00m', stops: '1 escale', 
      airline: 'Turkish Airlines', baggage: 'Avec bagage économique', 
      price: '65 161 DZD', type: 'Aller simple',
      logo: '/air/images.png' 
    },
    { 
      date: 'Aller 27 juin 2026', 
      depTime: '15:30', depCode: 'CZL', depCity: 'Constantine', 
      arrTime: '06:15', arrCode: 'SSH', arrCity: 'Sharm El Sheikh', 
      duration: '08h:45m', stops: '1 escale', 
      airline: 'Air Algerie', baggage: 'Avec bagage économique', 
      price: '68 400 DZD', type: 'Aller simple',
      logo: '/air/Air-Alger.png'
    },
    { 
      date: 'Aller 27 juin 2026', 
      depTime: '09:00', depCode: 'CZL', depCity: 'Constantine', 
      arrTime: '23:30', arrCode: 'SSH', arrCity: 'Sharm El Sheikh', 
      duration: '14h:30m', stops: '2 escales', 
      airline: 'Saudia Airlines', baggage: 'Bagage soute inclus', 
      price: '72 900 DZD', type: 'Aller simple',
      logo: '/air/Saudia_Logo.png'
    }
  ]

  return (
    <div className="min-h-screen bg-brand-emerald-50 dark:bg-brand-emerald-950 pt-32 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Search Summary Bar */}
        <SearchBar containerClassName="bg-white dark:bg-brand-emerald-900 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 p-4 md:p-6 mb-10 w-full" />

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white dark:bg-brand-emerald-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 sticky top-32">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-lg text-brand-emerald-900 dark:text-white">Filtrer</h3>
                <button className="text-sm text-blue-500 hover:underline font-medium">Réinitialiser</button>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-brand-emerald-900 dark:text-white flex items-center gap-2 text-[15px]">
                    <ChevronDown size={16} /> Prix
                  </h4>
                  <span className="text-xs text-slate-400 font-medium cursor-pointer hover:text-slate-600">Effacer</span>
                </div>
                <div className="px-2">
                  <div className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">{priceRange} DZD - </div>
                  <input 
                    type="range" 
                    min="40000" 
                    max="100000" 
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-gold-600"
                  />
                </div>
              </div>

              {/* Stops Filter */}
              <div className="mb-8 border-t border-gray-100 dark:border-gray-800 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-brand-emerald-900 dark:text-white flex items-center gap-2 text-[15px]">
                    <ChevronDown size={16} /> Escale(s)
                  </h4>
                  <span className="text-xs text-slate-400 font-medium cursor-pointer hover:text-slate-600">Effacer</span>
                </div>
                <div className="space-y-4 px-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-brand-gold-600 focus:ring-brand-gold-600 cursor-pointer" defaultChecked />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">1 escale</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-brand-gold-600 focus:ring-brand-gold-600 cursor-pointer" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">2 escales</span>
                  </label>
                </div>
              </div>

            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow overflow-hidden">
            {/* Top Airlines Carousel */}
            <div className="flex gap-3 overflow-x-auto pb-4 mb-4 scrollbar-none">
              {topAirlines.map((airline, idx) => (
                <div key={idx} className="bg-white dark:bg-brand-emerald-900/80 border border-gray-100 dark:border-gray-800 rounded-2xl p-3 flex items-center gap-4 min-w-[220px] shadow-sm hover:shadow-md transition-all cursor-pointer shrink-0">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 overflow-hidden bg-white">
                    <img 
                      src={airline.logo} 
                      alt={airline.name} 
                      className="w-[85%] h-[85%] object-contain" 
                      onError={(e) => { 
                        e.target.style.display = 'none'; 
                        e.target.nextSibling.style.display = 'flex'; 
                      }} 
                    />
                    <div style={{display: 'none'}} className="w-full h-full items-center justify-center font-bold text-brand-emerald-900 text-sm bg-blue-50">
                      {airline.fallback}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-slate-500 dark:text-slate-400">{airline.name}</span>
                    <span className="text-[15px] font-black text-brand-emerald-900 dark:text-white leading-tight">{airline.price}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sort Tabs */}
            <div className="flex flex-wrap items-center gap-8 mb-6 text-[15px] font-bold text-slate-500 dark:text-slate-400 border-b border-gray-200 dark:border-gray-800 pb-4">
              <button className="flex items-center gap-1 hover:text-brand-emerald-900 dark:hover:text-white transition-colors">Heure de départ <ChevronDown size={16} /></button>
              <button className="flex items-center gap-1 hover:text-brand-emerald-900 dark:hover:text-white transition-colors">Heure d'arrivée <ChevronDown size={16} /></button>
              <button className="flex items-center gap-1 hover:text-brand-emerald-900 dark:hover:text-white transition-colors">Durée <ChevronDown size={16} /></button>
              <button className="flex items-center gap-1 text-brand-emerald-900 dark:text-white border-b-2 border-brand-emerald-900 dark:border-white pb-4 -mb-[18px]">Prix <ChevronDown size={16} /></button>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="font-bold text-brand-emerald-900 dark:text-white text-lg">{flights.length} Vols trouvés</div>
              <button className="bg-brand-gold-50 dark:bg-orange-900/20 text-brand-gold-600 border border-brand-gold-200 dark:border-brand-gold-900 px-5 py-2.5 rounded-xl text-[15px] font-bold flex items-center gap-2 hover:bg-brand-gold-100 dark:hover:bg-orange-900/40 transition-colors">
                <Calendar size={18} /> Cliquez ici pour voir les meilleurs prix
              </button>
            </div>

            {/* Flight Results */}
            <div className="flex flex-col gap-6">
              {flights.map((flight, idx) => (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-brand-emerald-900/80 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-brand-gold-200 dark:border-brand-gold-900/50 flex flex-col xl:flex-row gap-6 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-gold-600" />
                  
                  {/* Left Side: Flight Info */}
                  <div className="flex-grow flex flex-col justify-between pl-2 md:pl-4 min-w-0">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-bold mb-4 md:mb-6 text-sm">
                      <Calendar size={16} />
                      <span>{flight.date}</span>
                    </div>
                    
                    <div className="flex flex-wrap xl:flex-nowrap items-center justify-between gap-4 xl:gap-6 min-w-0">
                      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center p-2 border border-gray-100 shadow-sm">
                        <img src={flight.logo} alt={flight.airline} className="max-w-full max-h-full object-contain" />
                      </div>
                      
                      <div className="flex flex-col items-center min-w-[80px]">
                        <span className="text-3xl font-black text-brand-emerald-900 dark:text-white">{flight.depTime}</span>
                        <span className="text-brand-gold-600 font-black text-xl">{flight.depCode}</span>
                        <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400">({flight.depCity})</span>
                      </div>
                      
                      <div className="flex-grow hidden md:flex flex-col items-center px-4">
                        <div className="text-[13px] text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2 font-bold">
                          {flight.duration}
                        </div>
                        <div className="w-full flex items-center">
                          <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600 relative">
                            <Plane size={16} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                          </div>
                          <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                        </div>
                        <div className="text-[13px] font-bold text-slate-600 dark:text-slate-400 mt-2">
                          {flight.stops}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center min-w-[80px]">
                        <span className="text-3xl font-black text-brand-emerald-900 dark:text-white">{flight.arrTime}</span>
                        <span className="text-brand-gold-600 font-black text-xl">{flight.arrCode}</span>
                        <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400">({flight.arrCity})</span>
                      </div>
                      
                      <div className="flex flex-col items-center gap-1 text-[13px] text-slate-600 dark:text-slate-300 max-w-[100px] text-center font-bold">
                        <Briefcase size={18} className="text-slate-400" />
                        <span>{flight.baggage}</span>
                      </div>

                      <div className="hidden 2xl:block">
                        <button className="px-5 py-2.5 rounded-xl border border-brand-gold-500 text-brand-gold-600 font-bold hover:bg-brand-gold-50 transition-colors flex items-center gap-1 text-[15px] bg-brand-gold-50/30">
                          Détails <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side: Pricing */}
                  <div className="xl:w-64 shrink-0 xl:pl-8 xl:border-l border-gray-100 dark:border-gray-800 flex flex-col items-center xl:items-end justify-center gap-2 mt-6 xl:mt-0 pt-6 xl:pt-0 border-t xl:border-t-0">
                    <a href="#" className="text-blue-500 hover:underline text-[15px] font-bold mb-1">
                      Détails du vol
                    </a>
                    <div className="text-3xl font-black text-brand-emerald-900 dark:text-white whitespace-nowrap mb-1">
                      {flight.price}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 text-[15px] font-medium mb-3">
                      {flight.type}
                    </div>
                    <button className="w-full bg-brand-gold-600 hover:bg-brand-gold-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-lg shadow-brand-gold-500/20 text-center text-[15px]">
                      Réserver ce vol
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Mock */}
            <div className="flex justify-center mt-12 mb-8">
              <div className="flex items-center gap-2">
                <button className="w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-400 bg-white dark:bg-brand-emerald-900 shadow-sm"><ChevronRight size={20} className="rotate-180" /></button>
                <button className="w-12 h-12 rounded-xl border border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center shadow-sm">1</button>
                <button className="w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 bg-white dark:bg-brand-emerald-900 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-sm transition-colors font-bold">2</button>
                <button className="w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 bg-white dark:bg-brand-emerald-900 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-sm transition-colors"><ChevronRight size={20} /></button>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 bg-brand-gold-600 text-white rounded-full px-6 py-4 shadow-xl shadow-brand-gold-500/30 hover:bg-brand-gold-700 transition-all hover:-translate-y-1 z-50 flex items-center gap-3 font-bold text-[15px]">
        Chat en direct
        <MessageCircle size={24} className="fill-current" />
        <div className="w-3.5 h-3.5 bg-[#4ade80] rounded-full border-2 border-white absolute -bottom-0 -left-1"></div>
      </button>
    </div>
  )
}
