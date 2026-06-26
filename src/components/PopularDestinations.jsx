import { motion } from 'framer-motion'
import { MapPin, Clock, Sun, ArrowRight } from 'lucide-react'

export default function PopularDestinations() {
  const destinations = [
    { id: 1, name: 'Istanbul', country: 'Turkey', price: '€199', duration: '3h 45m', weather: '22°C', season: 'Spring', image: '/dest-istanbul.png' },
    { id: 2, name: 'Dubai', country: 'UAE', price: '€349', duration: '6h 20m', weather: '30°C', season: 'Winter', image: '/dest-dubai.png' },
    { id: 3, name: 'Maldives', country: 'Maldives', price: '€699', duration: '10h 15m', weather: '28°C', season: 'Dry Season', image: '/dest-maldives.png' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 15 } }
  }

  return (
    <section className="py-32 bg-white dark:bg-brand-emerald-900" id="explore">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-emerald-900 dark:text-white"
            >
              Popular Destinations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-brand-emerald-600 dark:text-brand-emerald-300 max-w-2xl"
            >
              Discover our most booked locations with AI-optimized fares for the upcoming season.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center gap-2 text-brand-gold-600 dark:text-brand-gold-500 font-bold hover:gap-4 transition-all text-lg"
          >
            View All Destinations <ArrowRight size={24} />
          </motion.button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group/grid"
        >
          {destinations.map((dest, idx) => (
            <motion.div 
              key={dest.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group/card cursor-pointer rounded-[2.5rem] overflow-hidden bg-brand-emerald-50 dark:bg-brand-emerald-950 shadow-sm hover:shadow-2xl transition-all duration-500 group-hover/grid:opacity-50 hover:!opacity-100 border border-transparent dark:border-brand-emerald-800 hover:border-brand-gold-500/30"
            >
              <div className="relative h-80 overflow-hidden">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald-950/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  className="absolute top-6 right-6 bg-white/90 dark:bg-black/60 backdrop-blur-xl px-5 py-2.5 rounded-full font-bold text-brand-emerald-900 dark:text-white shadow-lg"
                >
                  From {dest.price}
                </motion.div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold font-serif mb-2 text-brand-emerald-900 dark:text-white group-hover/card:text-brand-gold-600 dark:group-hover/card:text-brand-gold-400 transition-colors">{dest.name}</h3>
                <p className="text-brand-emerald-600 dark:text-brand-emerald-400 mb-8 flex items-center gap-2 font-medium text-lg">
                  <MapPin size={20} className="text-brand-gold-500" /> {dest.country}
                </p>
                <div className="flex justify-between items-center text-sm font-bold text-brand-emerald-700 dark:text-brand-emerald-200 bg-white dark:bg-brand-emerald-900/50 p-4 rounded-2xl border border-brand-emerald-100 dark:border-brand-emerald-800">
                  <div className="flex items-center gap-2"><Clock size={18} className="text-brand-gold-600 dark:text-brand-gold-500"/> {dest.duration}</div>
                  <div className="flex items-center gap-2"><Sun size={18} className="text-brand-gold-600 dark:text-brand-gold-500"/> {dest.weather}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
