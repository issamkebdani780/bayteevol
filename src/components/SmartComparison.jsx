import { Check, X, Info } from 'lucide-react'

export default function SmartComparison() {
  const options = [
    { provider: 'BayteeVol AI', price: '€199', duration: '3h 45m', stops: 'Direct', baggage: true, refund: true, wifi: true, co2: 'Low' },
    { provider: 'Google Flights', price: '€215', duration: '3h 45m', stops: 'Direct', baggage: false, refund: false, wifi: true, co2: 'Medium' },
    { provider: 'Skyscanner', price: '€195', duration: '6h 20m', stops: '1 Stop', baggage: false, refund: false, wifi: false, co2: 'High' },
  ]

  return (
    <section className="py-24 bg-white dark:bg-brand-emerald-900 border-t border-brand-emerald-100 dark:border-brand-emerald-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 text-brand-emerald-900 dark:text-white">Smart Comparison</h2>
          <p className="text-lg text-brand-emerald-600 dark:text-brand-emerald-300 max-w-2xl mx-auto">
            We don't just compare prices. We analyze the total value of your ticket including hidden fees, comfort, and environmental impact.
          </p>
        </div>

        <div className="overflow-x-auto pb-8">
          <div className="min-w-[800px] border border-brand-emerald-100 dark:border-brand-emerald-800 rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-brand-emerald-900">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-emerald-50 dark:bg-brand-emerald-950">
                  <th className="p-6 font-serif font-bold text-lg text-brand-emerald-900 dark:text-white border-b border-brand-emerald-100 dark:border-brand-emerald-800">Features</th>
                  {options.map((opt, i) => (
                    <th key={i} className={`p-6 font-bold text-lg border-b border-brand-emerald-100 dark:border-brand-emerald-800 ${i === 0 ? 'bg-brand-gold-50 dark:bg-brand-gold-900/20 text-brand-gold-700 dark:text-brand-gold-400' : 'text-brand-emerald-900 dark:text-white'}`}>
                      {opt.provider}
                      {i === 0 && <span className="ml-2 text-xs bg-brand-gold-500 text-white px-2 py-1 rounded-full uppercase tracking-wider align-middle">Best Value</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-brand-emerald-800 dark:text-brand-emerald-200 font-medium">
                {[
                  { label: 'Price', key: 'price' },
                  { label: 'Duration', key: 'duration' },
                  { label: 'Stops', key: 'stops' },
                  { label: 'Checked Baggage', key: 'baggage', type: 'bool' },
                  { label: 'Refundable', key: 'refund', type: 'bool' },
                  { label: 'In-flight WiFi', key: 'wifi', type: 'bool' },
                  { label: 'Carbon Emissions', key: 'co2' }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-brand-emerald-100 dark:border-brand-emerald-800 last:border-0 hover:bg-brand-emerald-50/50 dark:hover:bg-brand-emerald-800/30 transition-colors">
                    <td className="p-6 flex items-center gap-2">
                      {row.label}
                      <Info size={16} className="text-brand-emerald-400 opacity-50" />
                    </td>
                    {options.map((opt, i) => (
                      <td key={i} className={`p-6 ${i === 0 ? 'bg-brand-gold-50/30 dark:bg-brand-gold-900/10' : ''}`}>
                        {row.type === 'bool' ? (
                          opt[row.key] ? <Check className="text-green-500" /> : <X className="text-red-400" />
                        ) : (
                          <span className={row.key === 'price' && i === 0 ? 'text-2xl font-bold text-brand-gold-600 dark:text-brand-gold-500' : ''}>
                            {opt[row.key]}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
