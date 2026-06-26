import { motion } from 'framer-motion'
import { Sparkles, User, Plane, CheckCircle2 } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function AIDemo() {
  const [isTyping, setIsTyping] = useState(false)
  const [showResponse, setShowResponse] = useState(false)

  // A simple simulated effect when in view
  const handleViewportEnter = () => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setShowResponse(true)
    }, 2000)
  }

  return (
    <section className="py-32 bg-brand-emerald-50 dark:bg-brand-emerald-950 relative overflow-hidden" id="ai-demo">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-gold-500/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-emerald-500/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-brand-emerald-900 dark:text-white leading-tight"
          >
            Your Personal <br/>
            <span className="text-brand-gold-600 dark:text-brand-gold-500 text-glow-gold">AI Travel Assistant</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-emerald-700 dark:text-brand-emerald-300 mb-10 leading-relaxed max-w-lg"
          >
            Stop searching manually. Just tell our AI where you want to go, and it will analyze millions of routes, prices, and schedules to find the perfect itinerary for you in seconds.
          </motion.p>
          <ul className="space-y-6">
            {[
              "Natural language understanding",
              "Real-time pricing & availability",
              "Personalized recommendations"
            ].map((text, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="flex items-center gap-4 text-xl font-medium text-brand-emerald-800 dark:text-brand-emerald-200"
              >
                <div className="p-1 rounded-full bg-brand-gold-100 dark:bg-brand-gold-900/30">
                  <CheckCircle2 size={24} className="text-brand-gold-600 dark:text-brand-gold-500" />
                </div>
                {text}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 w-full max-w-xl mx-auto perspective-1000">
          <motion.div 
            initial={{ opacity: 0, rotateY: 10, z: -100 }}
            whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
            onViewportEnter={handleViewportEnter}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="bg-white/80 dark:bg-brand-emerald-900/80 backdrop-blur-3xl rounded-[2.5rem] p-8 shadow-2xl border border-white/50 dark:border-white/10"
          >
            <div className="space-y-8">
              {/* User Message */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, originX: 1, originY: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="flex items-start gap-4 flex-row-reverse"
              >
                <div className="w-12 h-12 rounded-full bg-brand-emerald-100 dark:bg-brand-emerald-800 flex items-center justify-center shrink-0 shadow-inner">
                  <User size={24} className="text-brand-emerald-600 dark:text-brand-emerald-300" />
                </div>
                <div className="bg-brand-emerald-700 text-white rounded-3xl rounded-tr-md p-5 text-lg shadow-lg">
                  Find the cheapest flight from Algiers to Istanbul next week.
                </div>
              </motion.div>

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-gold-100 dark:bg-brand-gold-900/50 flex items-center justify-center shrink-0">
                    <Sparkles size={20} className="text-brand-gold-600 dark:text-brand-gold-400" />
                  </div>
                  <div className="bg-brand-emerald-50 dark:bg-brand-emerald-800/50 rounded-3xl rounded-tl-md p-5 flex gap-2 items-center">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 bg-brand-emerald-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-brand-emerald-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-brand-emerald-400 rounded-full" />
                  </div>
                </motion.div>
              )}

              {/* AI Message */}
              {showResponse && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, originX: 0, originY: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", bounce: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-gold-100 dark:bg-brand-gold-900/80 flex items-center justify-center shrink-0 shadow-inner">
                    <Sparkles size={24} className="text-brand-gold-600 dark:text-brand-gold-400" />
                  </div>
                  <div className="bg-brand-emerald-50 dark:bg-brand-emerald-800/60 rounded-3xl rounded-tl-md p-6 text-lg shadow-lg text-brand-emerald-900 dark:text-brand-emerald-50 border border-brand-emerald-100 dark:border-brand-emerald-700/50">
                    <p className="mb-6 leading-relaxed">I found a great option for you. Turkish Airlines has a direct flight next Thursday.</p>
                    
                    {/* Flight Card inside chat */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-brand-emerald-950 p-5 rounded-2xl border border-brand-emerald-100 dark:border-brand-emerald-800 shadow-sm cursor-pointer"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <span className="font-bold font-serif text-3xl text-brand-gold-600 dark:text-brand-gold-500">€199</span>
                        <span className="text-sm font-bold text-brand-emerald-600 dark:text-brand-emerald-300 bg-brand-emerald-100 dark:bg-brand-emerald-800 px-3 py-1.5 rounded-full">Direct</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-medium mb-6">
                        <div>
                          <div className="text-2xl font-bold">ALG</div>
                          <div className="text-brand-emerald-500 mt-1">10:30 AM</div>
                        </div>
                        <div className="relative flex-1 mx-4 flex items-center justify-center">
                          <div className="absolute w-full h-[2px] bg-brand-emerald-100 dark:bg-brand-emerald-800" />
                          <Plane className="text-brand-gold-500 relative bg-white dark:bg-brand-emerald-950 px-2" size={36} />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">IST</div>
                          <div className="text-brand-emerald-500 mt-1">03:15 PM</div>
                        </div>
                      </div>
                      <button className="w-full bg-brand-emerald-900 dark:bg-brand-gold-600 text-white font-bold py-4 rounded-xl hover:bg-brand-emerald-800 dark:hover:bg-brand-gold-500 transition-colors shadow-md">
                        Book Now
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
