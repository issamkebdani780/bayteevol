import { useState, useEffect } from 'react'
import { Plane, Moon, Sun, Menu, X } from 'lucide-react'

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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-brand-emerald-950/80 backdrop-blur-lg shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-brand-emerald-600 dark:bg-brand-gold-500 text-white dark:text-brand-emerald-950 p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <Plane size={24} />
          </div>
          <span className={`text-2xl font-bold font-serif ${isScrolled ? 'text-brand-emerald-900 dark:text-brand-gold-50' : 'text-brand-emerald-900 dark:text-white'}`}>
            Baytee<span className="text-brand-gold-600 dark:text-brand-gold-500">Vol</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#flights" className="hover:text-brand-gold-600 dark:hover:text-brand-gold-500 transition-colors">Flights</a>
          <a href="#deals" className="hover:text-brand-gold-600 dark:hover:text-brand-gold-500 transition-colors">Deals</a>
          <a href="#explore" className="hover:text-brand-gold-600 dark:hover:text-brand-gold-500 transition-colors">Explore</a>
          <a href="#support" className="hover:text-brand-gold-600 dark:hover:text-brand-gold-500 transition-colors">Support</a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-brand-emerald-100 dark:hover:bg-brand-emerald-800 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="px-6 py-2.5 rounded-full bg-brand-emerald-900 dark:bg-brand-gold-500 text-white dark:text-brand-emerald-950 font-semibold hover:bg-brand-emerald-800 dark:hover:bg-brand-gold-400 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-brand-emerald-900 shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden">
          <a href="#flights" className="text-lg font-medium hover:text-brand-gold-600">Flights</a>
          <a href="#deals" className="text-lg font-medium hover:text-brand-gold-600">Deals</a>
          <a href="#explore" className="text-lg font-medium hover:text-brand-gold-600">Explore</a>
          <hr className="border-brand-emerald-100 dark:border-brand-emerald-800" />
          <div className="flex items-center justify-between">
            <span className="font-medium">Dark Mode</span>
            <button onClick={toggleDarkMode} className="p-2 bg-brand-emerald-100 dark:bg-brand-emerald-800 rounded-full">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <button className="w-full mt-4 px-6 py-3 rounded-xl bg-brand-emerald-900 dark:bg-brand-gold-500 text-white dark:text-brand-emerald-950 font-semibold">
            Sign In
          </button>
        </div>
      )}
    </header>
  )
}
