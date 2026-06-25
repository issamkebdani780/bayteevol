import { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TrustedAirlines from './components/TrustedAirlines'
import Features from './components/Features'
import AIDemo from './components/AIDemo'
import PricePrediction from './components/PricePrediction'
import PopularDestinations from './components/PopularDestinations'
import CheapestFlights from './components/CheapestFlights'
import SmartComparison from './components/SmartComparison'
import InteractiveMap from './components/InteractiveMap'
import TripPlanner from './components/TripPlanner'
import Testimonials from './components/Testimonials'
import MobileExperience from './components/MobileExperience'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className="min-h-screen bg-brand-emerald-50 dark:bg-brand-emerald-950 text-brand-emerald-900 dark:text-brand-emerald-50 font-sans transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <HeroSection />
        <TrustedAirlines />
        <Features />
        <AIDemo />
        <PricePrediction />
        <PopularDestinations />
        <CheapestFlights />
        <SmartComparison />
        <InteractiveMap />
        <TripPlanner />
        <Testimonials />
        <MobileExperience />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default App
