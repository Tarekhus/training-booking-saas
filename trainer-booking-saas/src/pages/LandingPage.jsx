import FeatureStrip from '../components/landing/FeatureStrip'
import HeroSection from '../components/landing/HeroSection'
import SearchSection from '../components/landing/SearchSection'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <SearchSection />
        <FeatureStrip />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
