import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    { name: 'Sarah J.', role: 'Frequent Traveler', text: 'BayteeVol AI saved me €200 on my flight to Dubai. The chat interface is so intuitive, it felt like texting a travel agent.', rating: 5 },
    { name: 'Michael T.', role: 'Business Consultant', text: 'The price prediction chart was spot on. I waited 3 days as advised and the price dropped exactly when it said it would.', rating: 5 },
    { name: 'Aisha K.', role: 'Digital Nomad', text: 'Cleanest UI I have ever seen for booking flights. The dark mode is gorgeous and the site is blazingly fast.', rating: 5 },
  ]

  return (
    <section className="py-24 bg-white dark:bg-brand-emerald-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 text-brand-emerald-900 dark:text-white">Trusted by Travelers</h2>
          <p className="text-lg text-brand-emerald-600 dark:text-brand-emerald-300">See what our community has to say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-brand-emerald-50 dark:bg-brand-emerald-950 p-8 rounded-3xl border border-brand-emerald-100 dark:border-brand-emerald-800 shadow-sm relative">
              <div className="flex gap-1 mb-6 text-brand-gold-500">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
              </div>
              <p className="text-brand-emerald-800 dark:text-brand-emerald-200 mb-8 italic text-lg leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold-200 dark:bg-brand-gold-800 flex items-center justify-center font-bold font-serif text-brand-emerald-900 dark:text-brand-gold-50">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-brand-emerald-900 dark:text-white">{t.name}</div>
                  <div className="text-sm text-brand-emerald-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
