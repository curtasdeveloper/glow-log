import '../style/index.css'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'


function HomePage() {
    return (
        <>
            <Header />
            <HomeSection />
            <AboutSection />
        </>
    )
}

export default HomePage