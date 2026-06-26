import { motion } from 'framer-motion'
import { Bot, LineChart, Calendar, Zap, Bell, Heart } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Bot,
      title: 'AI Flight Assistant',
      desc: 'Find the perfect flight using natural language. Just type what you need and let our engine do the rest.',
      colSpan: 'md:col-span-2 lg:col-span-2'
    },
    {
      icon: LineChart,
      title: 'Smart Price Prediction',
      desc: 'Know exactly when to buy with AI-driven forecasts.',
      colSpan: 'md:col-span-1 lg:col-span-1'
    },
    {
      icon: Calendar,
      title: 'Flexible Dates',
      desc: 'Explore cheaper options within a date range.',
      colSpan: 'md:col-span-1 lg:col-span-1'
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      desc: 'Book your flight in seconds with our streamlined checkout. No redirects.',
      colSpan: 'md:col-span-2 lg:col-span-1'
    },
    {
      icon: Bell,
      title: 'Live Price Alerts',
      desc: 'Get notified instantly when prices drop for your watched routes.',
      colSpan: 'md:col-span-1 lg:col-span-1'
    },
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
    <section className="py-32 bg-brand-emerald-50 dark:bg-brand-emerald-950 relative overflow-hidden" id="features">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-white/50 to-transparent dark:from-brand-emerald-900/20 dark:to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 text-brand-emerald-900 dark:text-white"
          >
            Why Choose BayteeVol
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-emerald-600 dark:text-brand-emerald-300 max-w-2xl mx-auto"
          >
            We combined the latest AI technology with premium design to give you the ultimate booking experience.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`bg-white dark:bg-brand-emerald-900/40 p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-transparent dark:border-brand-emerald-800/50 hover:border-brand-gold-500/30 group relative overflow-hidden ${feature.colSpan}`}
            >
              {/* Internal Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold-500/0 via-brand-gold-500/0 to-brand-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-2xl" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-brand-emerald-50 dark:bg-brand-emerald-800/80 text-brand-emerald-600 dark:text-brand-gold-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-emerald-900 dark:text-white group-hover:text-brand-gold-600 dark:group-hover:text-brand-gold-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brand-emerald-600 dark:text-brand-emerald-300 opacity-90 leading-relaxed text-lg mt-auto">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
