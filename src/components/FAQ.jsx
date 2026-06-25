import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    { q: 'How does the AI Price Prediction work?', a: 'Our AI analyzes millions of historical data points, seasonal trends, and current airline pricing strategies to forecast whether a flight price will go up or down. It boasts a 92% accuracy rate.' },
    { q: 'Can I cancel or change my flight?', a: 'Yes. Every booking through BayteeVol clearly indicates its cancellation policy. We offer flexible filters so you can specifically search for fully refundable tickets.' },
    { q: 'Are there any hidden fees?', a: 'No. The price you see on our Smart Comparison table is the final price you pay. We include taxes, estimated baggage fees, and processing charges upfront.' },
    { q: 'How do I use the AI Chat to book?', a: 'Simply type what you need in plain English (e.g., "I need a window seat to Tokyo next Friday under €500"). The AI will handle the complex filtering and present the best bookable options instantly.' }
  ]

  return (
    <section className="py-24 bg-white dark:bg-brand-emerald-900" id="support">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 text-brand-emerald-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-lg text-brand-emerald-600 dark:text-brand-emerald-300">Everything you need to know about booking with BayteeVol.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-brand-gold-500 bg-brand-gold-50 dark:bg-brand-emerald-950 dark:border-brand-gold-500/50 shadow-md' : 'border-brand-emerald-100 dark:border-brand-emerald-800 bg-white dark:bg-brand-emerald-900 hover:border-brand-emerald-300 dark:hover:border-brand-emerald-700'}`}
            >
              <button 
                className="w-full px-6 py-5 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span className="font-bold text-lg text-brand-emerald-900 dark:text-white">{faq.q}</span>
                <ChevronDown 
                  className={`text-brand-emerald-500 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-brand-gold-600' : ''}`} 
                  size={24} 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-brand-emerald-700 dark:text-brand-emerald-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
