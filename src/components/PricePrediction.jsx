import { motion } from 'framer-motion'
import { TrendingDown, TrendingUp } from 'lucide-react'

export default function PricePrediction() {
  const chartData = [60, 55, 50, 45, 40, 45, 50, 65, 75, 80, 85, 90]

  return (
    <section className="py-32 bg-white dark:bg-brand-emerald-900 border-y border-brand-emerald-100 dark:border-brand-emerald-800 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 w-full perspective-1000">
            {/* Fake Chart UI */}
            <motion.div 
              initial={{ opacity: 0, rotateY: -10, x: -50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-brand-emerald-50 dark:bg-brand-emerald-950 rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-brand-emerald-100 dark:border-brand-emerald-800"
            >
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-3xl font-bold font-serif text-brand-emerald-900 dark:text-white mb-2">ALG → IST</h3>
                  <p className="text-brand-emerald-600 dark:text-brand-emerald-400 font-medium">Price trend for next 30 days</p>
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 px-5 py-2.5 rounded-full font-bold flex items-center gap-2 shadow-sm"
                >
                  <TrendingDown size={20} />
                  Buy Now
                </motion.div>
              </div>

              {/* Chart Bars */}
              <div className="h-56 flex items-end justify-between gap-3 border-b-2 border-l-2 border-brand-emerald-200 dark:border-brand-emerald-800/50 pb-2 pl-2 relative">
                {/* Horizontal Guide Lines */}
                <div className="absolute top-0 w-full border-b border-dashed border-brand-emerald-200 dark:border-brand-emerald-800/30 opacity-50" />
                <div className="absolute top-1/2 w-full border-b border-dashed border-brand-emerald-200 dark:border-brand-emerald-800/30 opacity-50" />

                {chartData.map((height, i) => (
                  <div key={i} className="w-full relative group flex items-end h-full z-10">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (i * 0.05), duration: 0.8, type: "spring" }}
                      className={`w-full rounded-t-md transition-all duration-300 group-hover:opacity-80 ${i === 4 ? 'bg-brand-gold-500 shadow-lg shadow-brand-gold-500/40' : 'bg-brand-emerald-300 dark:bg-brand-emerald-700'}`} 
                    />
                    {i === 4 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                        className="absolute -top-12 left-1/2 -translate-x-1/2 bg-brand-gold-600 text-white text-sm font-bold py-1.5 px-3 rounded-lg whitespace-nowrap shadow-xl z-20"
                      >
                        Lowest: €199
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-gold-600 rotate-45" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-sm font-semibold text-brand-emerald-500 dark:text-brand-emerald-400">
                <span>Today</span>
                <span>In 15 Days</span>
                <span>In 30 Days</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-emerald-900 dark:text-white leading-tight"
            >
              Know exactly <br/>
              <span className="text-brand-gold-600 dark:text-brand-gold-500 text-glow-gold">when to book</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-brand-emerald-700 dark:text-brand-emerald-300 mb-10 leading-relaxed max-w-lg"
            >
              Our AI analyzes billions of historical flight prices to predict future trends. We'll tell you whether to buy now or wait for a better deal.
            </motion.p>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-5 p-6 rounded-3xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 shadow-sm cursor-default transition-all"
              >
                <div className="bg-green-200 dark:bg-green-800/50 p-3 rounded-2xl shrink-0">
                  <TrendingDown className="text-green-700 dark:text-green-400" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-900 dark:text-green-300 mb-2">Price likely to decrease</h4>
                  <p className="text-green-800 dark:text-green-300 leading-relaxed">Wait to book. Prices are expected to drop by 15% in the next 7 days based on current market signals.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-5 p-6 rounded-3xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/50 shadow-sm cursor-default transition-all"
              >
                <div className="bg-orange-200 dark:bg-orange-800/50 p-3 rounded-2xl shrink-0">
                  <TrendingUp className="text-orange-700 dark:text-orange-400" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-2">Price likely to increase</h4>
                  <p className="text-orange-800 dark:text-orange-300 leading-relaxed">Buy now. Prices for this route historically rise rapidly 3 weeks before departure date.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
