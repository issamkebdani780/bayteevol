import { TrendingDown, TrendingUp, AlertCircle, Info } from 'lucide-react'

export default function PricePrediction() {
  return (
    <section className="py-24 bg-white dark:bg-brand-emerald-900 border-y border-brand-emerald-100 dark:border-brand-emerald-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 w-full">
            {/* Fake Chart UI */}
            <div className="bg-brand-emerald-50 dark:bg-brand-emerald-950 rounded-3xl p-8 shadow-inner border border-brand-emerald-100 dark:border-brand-emerald-800">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-brand-emerald-900 dark:text-white">ALG → IST</h3>
                  <p className="text-brand-emerald-600 dark:text-brand-emerald-400 font-medium">Price trend for next 30 days</p>
                </div>
                <div className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-4 py-2 rounded-full font-bold flex items-center gap-2">
                  <TrendingDown size={20} />
                  Buy Now
                </div>
              </div>

              {/* Chart Bars Placeholder */}
              <div className="h-48 flex items-end justify-between gap-2 border-b-2 border-l-2 border-brand-emerald-200 dark:border-brand-emerald-700 pb-2 pl-2">
                {[60, 55, 50, 45, 40, 45, 50, 65, 75, 80, 85, 90].map((height, i) => (
                  <div key={i} className="w-full relative group">
                    <div 
                      className={`w-full rounded-t-sm transition-all duration-500 hover:opacity-80 ${i === 4 ? 'bg-brand-gold-500' : 'bg-brand-emerald-300 dark:bg-brand-emerald-700'}`} 
                      style={{ height: `${height}%` }}
                    />
                    {i === 4 && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-gold-600 text-white text-xs font-bold py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        Lowest: €199
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs font-medium text-brand-emerald-500 dark:text-brand-emerald-400">
                <span>Today</span>
                <span>In 15 Days</span>
                <span>In 30 Days</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl font-serif font-bold mb-6 text-brand-emerald-900 dark:text-white">Know exactly when to book</h2>
            <p className="text-xl text-brand-emerald-700 dark:text-brand-emerald-300 mb-8">
              Our AI analyzes billions of historical flight prices to predict future trends. We'll tell you whether to buy now or wait for a better deal.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <TrendingDown className="text-green-600 dark:text-green-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-300">Price likely to decrease</h4>
                  <p className="text-green-700 dark:text-green-400/80 text-sm">Wait to book. Prices are expected to drop by 15% in the next 7 days.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
                <TrendingUp className="text-orange-600 dark:text-orange-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-300">Price likely to increase</h4>
                  <p className="text-orange-700 dark:text-orange-400/80 text-sm">Buy now. Prices for this route historically rise 3 weeks before departure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
