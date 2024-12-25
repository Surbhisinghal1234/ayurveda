import './App.css'
import Navbar from './components/Navbar'
import IconSection from './components/IconSection/IconSection'
import AyurvedicConsultation from './components/AyurvedicConsultation/AyurvedicConsultation'
import RestoreHarmony from './components/restoreHarmony/RestoreHarmony'
import AyurvedicApproach from './components/ayurvedicApproach/AyurvedicApproach'
import HomeApp from './components/homeApp/HomeApp'
import Footer from './components/footer/Footer'
import ExpertMain from './components/experts/ExpertMain'
import CustomerMain from './components/customerStories/CustomerMain'
import MagicIndex from './components/magicWithUs/MagicIndex'
import HeroSection from './components/heroSection/HeroSection'

function App() {
  return (
    <>
    <div className="container mx-auto">
      <Navbar/>
      <HeroSection/>
      <IconSection/>
      <MagicIndex/>
      <AyurvedicConsultation/>
      <RestoreHarmony/>
      <AyurvedicApproach/>
      <CustomerMain/>
      <ExpertMain/>
      <HomeApp/>
      <Footer/>
    </div>

    </>
  )
}

export default App
