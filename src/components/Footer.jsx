import { Plane, Globe, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-brand-emerald-950 text-brand-emerald-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-brand-emerald-800 pb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-gold-500 text-brand-emerald-950 p-2 rounded-xl">
                <Plane size={24} />
              </div>
              <span className="text-2xl font-bold font-serif text-white">
                Baytee<span className="text-brand-gold-500">Vol</span>
              </span>
            </div>
            <p className="mb-8 max-w-sm leading-relaxed text-brand-emerald-400">
              The premium, AI-powered flight booking platform designed for modern travelers. Book smarter, travel better.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-emerald-900 flex items-center justify-center hover:bg-brand-gold-500 hover:text-brand-emerald-950 transition-colors"><Globe size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-emerald-900 flex items-center justify-center hover:bg-brand-gold-500 hover:text-brand-emerald-950 transition-colors"><Mail size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-emerald-900 flex items-center justify-center hover:bg-brand-gold-500 hover:text-brand-emerald-950 transition-colors"><Phone size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-emerald-900 flex items-center justify-center hover:bg-brand-gold-500 hover:text-brand-emerald-950 transition-colors"><MapPin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 font-medium text-brand-emerald-400">
              <li><a href="#" className="hover:text-brand-gold-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-gold-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-gold-400 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-brand-gold-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Product</h4>
            <ul className="space-y-4 font-medium text-brand-emerald-400">
              <li><a href="#" className="hover:text-brand-gold-400 transition-colors">Flight Search</a></li>
              <li><a href="#" className="hover:text-brand-gold-400 transition-colors">AI Assistant</a></li>
              <li><a href="#" className="hover:text-brand-gold-400 transition-colors">Price Predictor</a></li>
              <li><a href="#" className="hover:text-brand-gold-400 transition-colors">Mobile App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4 font-medium text-brand-emerald-400">
              <li><a href="#" className="hover:text-brand-gold-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-gold-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold-400 transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-emerald-500 font-medium">
          <p>&copy; {new Date().getFullYear()} BayteeVol. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
