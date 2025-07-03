import '../style/index.css'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import Filler from './reusable-component/Filler'


function HomePage() {
    return (
        <>
            <Header />
            <HomeSection />
            <AboutSection />
            <Filler />
            <FeaturesSection />
        </>
    )
}

export default HomePage