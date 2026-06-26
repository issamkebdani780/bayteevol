import HeroSection from '../components/HeroSection'
import TrustedAirlines from '../components/TrustedAirlines'
import Features from '../components/Features'
import AIDemo from '../components/AIDemo'
import PricePrediction from '../components/PricePrediction'
import PopularDestinations from '../components/PopularDestinations'
import CheapestFlights from '../components/CheapestFlights'
import SmartComparison from '../components/SmartComparison'
import TripPlanner from '../components/TripPlanner'
import Testimonials from '../components/Testimonials'
import MobileExperience from '../components/MobileExperience'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedAirlines />
      <Features />
      <AIDemo />
      <PricePrediction />
      <PopularDestinations />
      <CheapestFlights />
      <SmartComparison />
      <TripPlanner />
      <Testimonials />
      <MobileExperience />
      <FAQ />
    </main>
  )
}
