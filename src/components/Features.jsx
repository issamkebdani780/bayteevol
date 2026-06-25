import { Bot, LineChart, Calendar, Zap, Bell, Heart } from 'lucide-react'

export default function Features() {
  const features = [
    { icon: Bot, title: 'AI Flight Assistant', desc: 'Find the perfect flight using natural language.' },
    { icon: LineChart, title: 'Smart Price Prediction', desc: 'Know exactly when to buy with AI-driven forecasts.' },
    { icon: Calendar, title: 'Flexible Dates', desc: 'Explore cheaper options within a date range.' },
    { icon: Zap, title: 'Instant Booking', desc: 'Book your flight in seconds with our streamlined checkout.' },
    { icon: Bell, title: 'Live Price Alerts', desc: 'Get notified instantly when prices drop.' },
    { icon: Heart, title: 'Personalized Recommendations', desc: 'Tailored flight suggestions based on your preferences.' },
  ]

  return (
    <section className="py-24 bg-brand-emerald-50 dark:bg-brand-emerald-950" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 text-brand-emerald-900 dark:text-white">Why Choose BayteeVol</h2>
          <p className="text-lg text-brand-emerald-600 dark:text-brand-emerald-300 max-w-2xl mx-auto">
            We combined the latest AI technology with premium design to give you the ultimate booking experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white dark:bg-brand-emerald-900/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-transparent dark:border-brand-emerald-800 hover:border-brand-gold-500/30 group">
              <div className="w-14 h-14 bg-brand-emerald-100 dark:bg-brand-emerald-800 text-brand-emerald-600 dark:text-brand-gold-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-emerald-900 dark:text-white">{feature.title}</h3>
              <p className="text-brand-emerald-600 dark:text-brand-emerald-300">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
