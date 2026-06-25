import { motion } from 'framer-motion'
import { Sparkles, User, Plane, CheckCircle2 } from 'lucide-react'

export default function AIDemo() {
  const messages = [
    { sender: 'user', text: "Find the cheapest flight from Algiers to Istanbul next week." },
    { sender: 'ai', text: "I found a great option for you. Turkish Airlines has a direct flight next Thursday for €199.", action: true }
  ]

  return (
    <section className="py-24 bg-brand-emerald-50 dark:bg-brand-emerald-950 relative overflow-hidden" id="ai-demo">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-gold-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-emerald-900 dark:text-white">
            Your Personal <span className="text-brand-gold-600 dark:text-brand-gold-500 text-glow-gold">AI Travel Assistant</span>
          </h2>
          <p className="text-xl text-brand-emerald-700 dark:text-brand-emerald-300 mb-8 leading-relaxed">
            Stop searching manually. Just tell our AI where you want to go, and it will analyze millions of routes, prices, and schedules to find the perfect itinerary for you in seconds.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-lg font-medium text-brand-emerald-800 dark:text-brand-emerald-200">
              <CheckCircle2 className="text-brand-gold-600 dark:text-brand-gold-500" /> Natural language understanding
            </li>
            <li className="flex items-center gap-3 text-lg font-medium text-brand-emerald-800 dark:text-brand-emerald-200">
              <CheckCircle2 className="text-brand-gold-600 dark:text-brand-gold-500" /> Real-time pricing & availability
            </li>
            <li className="flex items-center gap-3 text-lg font-medium text-brand-emerald-800 dark:text-brand-emerald-200">
              <CheckCircle2 className="text-brand-gold-600 dark:text-brand-gold-500" /> Personalized recommendations
            </li>
          </ul>
        </div>

        <div className="lg:w-1/2 w-full max-w-lg mx-auto">
          <div className="bg-white/80 dark:bg-brand-emerald-900/80 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/40 dark:border-white/10">
            <div className="space-y-6">
              {/* User Message */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 flex-row-reverse"
              >
                <div className="w-10 h-10 rounded-full bg-brand-emerald-100 dark:bg-brand-emerald-800 flex items-center justify-center shrink-0">
                  <User size={20} className="text-brand-emerald-600 dark:text-brand-emerald-300" />
                </div>
                <div className="bg-brand-emerald-600 text-white rounded-2xl rounded-tr-sm p-4 text-lg shadow-md">
                  Find the cheapest flight from Algiers to Istanbul next week.
                </div>
              </motion.div>

              {/* AI Message */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-brand-gold-100 dark:bg-brand-gold-900 flex items-center justify-center shrink-0">
                  <Sparkles size={20} className="text-brand-gold-600 dark:text-brand-gold-400" />
                </div>
                <div className="bg-brand-emerald-50 dark:bg-brand-emerald-800 rounded-2xl rounded-tl-sm p-4 text-lg shadow-md text-brand-emerald-900 dark:text-brand-emerald-50 border border-brand-emerald-100 dark:border-brand-emerald-700">
                  <p className="mb-4">I found a great option for you. Turkish Airlines has a direct flight next Thursday.</p>
                  
                  {/* Flight Card inside chat */}
                  <div className="bg-white dark:bg-brand-emerald-950 p-4 rounded-xl border border-brand-emerald-100 dark:border-brand-emerald-800">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold font-serif text-xl">€199</span>
                      <span className="text-sm font-medium text-brand-emerald-500 bg-brand-emerald-100 dark:bg-brand-emerald-900 px-2 py-1 rounded">Direct</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-medium">
                      <div>
                        <div className="text-xl font-bold">ALG</div>
                        <div className="text-brand-emerald-500">10:30 AM</div>
                      </div>
                      <Plane className="text-brand-gold-500" />
                      <div className="text-right">
                        <div className="text-xl font-bold">IST</div>
                        <div className="text-brand-emerald-500">03:15 PM</div>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-brand-gold-600 text-white font-semibold py-2 rounded-lg hover:bg-brand-gold-500 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
