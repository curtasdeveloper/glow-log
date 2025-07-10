import '../../style/index.css'

function Footer() {
    return (
        <>
            <footer className='flex flex-col justify-between bg-background-black py-4 h-[20vh] w-full border-t border-background-tertiary text-foreground-white'>
                <div className='flex justify-evenly flex-col sm:flex-row gap-2' >
                    <ul className='flex gap-4 justify-center'>
                        <li className='font-title'><a href="">Home</a></li>
                        <li className='font-title'><a href="#about-container">About</a></li>
                        <li className='font-title'><a href="#features-container">Features</a></li>
                        <li className='font-title'><a onClick={ () => window.scrollTo({top: 0, behavior: "smooth"}) } href="">Get Started</a></li>
                    </ul>
                    <ul className='flex gap-4 justify-center'>
                        <li className='font-title text-primary-purple opacity-75' ><a href="https://github.com/curtasdeveloper" target="_blank" >Github Account</a></li>
                        <li className='font-title text-primary-purple opacity-75' ><a href="mailto:louisecurtandrei.pacete@gmail.com" target="_blank" >Email Account</a></li>
                    </ul>
                </div>
                <p className='text-center font-title text-sm opacity-75'>&copy; 2025 TrackPeakk</p>
            </footer>
        </>
    )
}

export default Footer