import '../style/index.css'
import Header from '../home-page/components/Header'
import HomeSection from '../home-page/components/HomeSection'
import AboutSection from '../home-page/components/AboutSection'
import FeaturesSection from '../home-page/components/FeaturesSection'
import SuggestionSection from '../home-page/components/SuggestionSection'
import Footer from '../home-page/components/Footer'
import Filler from '../home-page/reusable-component/Filler'


function HomePage() {
    return (
        <>
            <Header />
            <HomeSection />
            <AboutSection />
            <Filler />
            <FeaturesSection />
            <SuggestionSection />
            <Footer />
        </>
    )
}

export default HomePage