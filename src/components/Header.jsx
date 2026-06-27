import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Plane, Moon, Sun, Menu, X, MapPin, Home, Building, Utensils, Globe, ChevronDown } from 'lucide-react'

export default function Header({ darkMode, toggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-6 left-1/2 -translate-x-1/2 w-[96%] max-w-7xl z-50 transition-all duration-300`}>
        <div className={`bg-brand-emerald-50/95 dark:bg-brand-emerald-900/95 backdrop-blur-xl rounded-full px-6 py-3 flex justify-between items-center shadow-lg border border-white/50 dark:border-white/10 ${isScrolled ? 'shadow-xl bg-white/95 dark:bg-brand-emerald-900/95' : ''}`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-2xl font-serif text-brand-emerald-900 dark:text-white tracking-widest font-bold flex items-center">
              BAYTEE<span className="text-brand-gold-500">VOL</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-[15px] text-[#475569] dark:text-gray-300">
            <a href="#location" className="flex items-center gap-2 hover:text-brand-emerald-900 dark:hover:text-white transition-colors">
              <MapPin size={18} /> Location
            </a>
            <a href="#vacance" className="flex items-center gap-2 hover:text-brand-emerald-900 dark:hover:text-white transition-colors">
              <Home size={18} /> Location de vacance
            </a>
            <a href="#hotels" className="flex items-center gap-2 hover:text-brand-emerald-900 dark:hover:text-white transition-colors">
              <Building size={18} /> Hotels
            </a>
            <a href="#restaurants" className="flex items-center gap-2 hover:text-brand-emerald-900 dark:hover:text-white transition-colors">
              <Utensils size={18} /> Restaurants
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
            <button className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <Globe size={16} className="text-brand-gold-500" />
              <span className="bg-brand-emerald-200 text-brand-emerald-900 text-[11px] font-bold px-1.5 py-0.5 rounded">EN</span>
              <span className="text-[14px] font-medium text-slate-700 dark:text-gray-300">English</span>
              <ChevronDown size={14} className="text-slate-500" />
            </button>

            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow text-brand-emerald-900 dark:text-white border border-gray-100 dark:border-gray-700"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* CTA */}
            <button className="px-6 py-2.5 rounded-full bg-brand-emerald-900 hover:bg-brand-emerald-950 dark:bg-brand-gold-500 dark:hover:bg-brand-gold-600 text-white dark:text-brand-emerald-900 font-semibold transition-colors shadow-md text-[15px]">
              Start Exploring
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-brand-emerald-900 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 mt-4 w-full bg-white dark:bg-brand-emerald-900 rounded-2xl shadow-xl py-6 px-6 flex flex-col gap-4 lg:hidden border border-gray-100 dark:border-gray-800">
            <a href="#location" className="text-lg font-medium flex items-center gap-3 text-slate-700 dark:text-gray-300">
              <MapPin size={20} /> Location
            </a>
            <a href="#vacance" className="text-lg font-medium flex items-center gap-3 text-slate-700 dark:text-gray-300">
              <Home size={20} /> Location de vacance
            </a>
            <a href="#hotels" className="text-lg font-medium flex items-center gap-3 text-slate-700 dark:text-gray-300">
              <Building size={20} /> Hotels
            </a>
            <a href="#restaurants" className="text-lg font-medium flex items-center gap-3 text-slate-700 dark:text-gray-300">
              <Utensils size={20} /> Restaurants
            </a>
            <hr className="border-gray-100 dark:border-gray-800 my-2" />
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-700 dark:text-gray-300">Dark Mode</span>
              <button onClick={toggleDarkMode} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            <button className="w-full mt-4 px-6 py-3 rounded-xl bg-brand-emerald-900 dark:bg-brand-gold-500 text-white dark:text-brand-emerald-900 font-semibold">
              Start Exploring
            </button>
          </div>
        )}
      </header>
    </>
  )
}
