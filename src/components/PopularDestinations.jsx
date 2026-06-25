import { motion } from 'framer-motion'
import { MapPin, Clock, Sun, ArrowRight } from 'lucide-react'

export default function PopularDestinations() {
  const destinations = [
    { id: 1, name: 'Istanbul', country: 'Turkey', price: '€199', duration: '3h 45m', weather: '22°C', season: 'Spring', image: '/dest-istanbul.png' },
    { id: 2, name: 'Dubai', country: 'UAE', price: '€349', duration: '6h 20m', weather: '30°C', season: 'Winter', image: '/dest-dubai.png' },
    { id: 3, name: 'Maldives', country: 'Maldives', price: '€699', duration: '10h 15m', weather: '28°C', season: 'Dry Season', image: '/dest-maldives.png' },
  ]

  return (
    <section className="py-24 bg-white dark:bg-brand-emerald-900" id="explore">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-4 text-brand-emerald-900 dark:text-white">Popular Destinations</h2>
            <p className="text-lg text-brand-emerald-600 dark:text-brand-emerald-300 max-w-2xl">
              Discover our most booked locations with AI-optimized fares for the upcoming season.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-gold-600 dark:text-brand-gold-500 font-semibold hover:gap-4 transition-all">
            View All Destinations <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, idx) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-brand-emerald-50 dark:bg-brand-emerald-950 shadow-md hover:shadow-2xl transition-all"
            >
              <div className="relative h-72 overflow-hidden">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/50 backdrop-blur-md px-4 py-2 rounded-full font-bold text-brand-emerald-900 dark:text-white">
                  From {dest.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold font-serif mb-1 text-brand-emerald-900 dark:text-white">{dest.name}</h3>
                <p className="text-brand-emerald-600 dark:text-brand-emerald-400 mb-6 flex items-center gap-1">
                  <MapPin size={16} /> {dest.country}
                </p>
                <div className="flex justify-between items-center text-sm font-medium text-brand-emerald-700 dark:text-brand-emerald-200">
                  <div className="flex items-center gap-1"><Clock size={16} className="text-brand-gold-600 dark:text-brand-gold-500"/> {dest.duration}</div>
                  <div className="flex items-center gap-1"><Sun size={16} className="text-brand-gold-600 dark:text-brand-gold-500"/> {dest.weather}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
