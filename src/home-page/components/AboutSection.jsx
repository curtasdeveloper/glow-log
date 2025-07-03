import '../../style/index.css'
import { PiLightningLight } from "react-icons/pi";
import { PiPulse } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { FiUser } from "react-icons/fi";
function List({icon, text}) {
    return (
        <li style={{listStyle: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem'}} 
            className='font-heading text-md text-foreground-white font-semibold'>
            {icon}
            {text}
        </li>
    )
}
function AboutSection() {
    return (
        <>
            <div id='about-container'
                className='bg-background-black text-foreground-white flex flex-col gap-12 py-5'
            >
                <header className='flex flex-col gap-4 items-center'>
                    <h1 className='text-4xl font-title font-semibold text-center'>About <span className='text-primary-purple'>TrackPeak</span></h1>
                    <p className='text-lg font-heading opacity-70 text-center lg:w-1/2 sm:px-4'>
                        Built for those who strive for better, TrackPeak combines fitness and tech to help you track smarter, stay consistent, and reach your peak.
                    </p>
                </header>
                <div className='flex justify-center items-center px-2'>
                    <section className='border-1 border-background-tertiary rounded-2xl flex flex-col gap-6 items-center p-2 sm:px-2 md:py-4 justify-center md:w-1/2 hover:bg-background-secondary duration-200 hover:scale-105'>
                        <header className='flex flex-col items-center gap-2 lg:gap-4'>
                            <h1 className='font-title text-xl font-semibold lg:text-center'>Powering Your Progress</h1>
                            <p className='font-heading text-center text-lg opacity-80 lg:text-center lg:w-3/4'>
                                We believe that tracking your fitness journey shouldn't be complicated. TrackPeak simplifies the process while providing powerful insights to help you reach your peak performance.
                            </p>
                        </header>
                        <ul className='flex flex-col gap-2 pl-8'>
                            <List icon={<PiLightningLight className='text-primary-purple size-6'/>} text={"Comprehensive workout tracking"}/>
                            <List icon={<GoGoal className='text-primary-purple size-5'/>} text={"Goal-driven progress monitoring"}/>
                            <List icon={<PiPulse className='text-primary-purple size-6'/>} text={"Real-time session and recovery management"}/>
                        </ul>
                        <footer>
                            <p className='text-center font-heading text-sm font-semilight'>TrackPeak exists to empower fitness enthusiasts of all levels by providing intuitive tools that transform how you track, analyze, and improve your workout performance.</p>
                        </footer>
                    </section>
                </div>
                <div className='flex items-center justify-center px-2'>
                    <section className='flex flex-col gap-4 items-center rounded-2xl border-1 border-background-tertiary hover:bg-background-secondary duration-200 hover:scale-105 p-2 md:w-1/2'>
                        <FiUser className='text-primary-purple size-10'/>
                        <h1 className='font-title text-2xl font-bold text-foreground-white'>Meet the Creator</h1>
                        <p className='font-heading opacity-100 font-light text-center text-lg md:text-md'>Hi, I'm <span className='text-primary-purple opacity-100 font-bold'>Curt</span> — the creator of <span className="font-bold">TrackPeak</span> . I built this platform out of a deep love for fitness and a desire to make progress tracking feel simple, motivating, and actually useful.</p>
                        <p className='font-heading opacity-100 font-light text-center text-lg md:text-md'>I believe real results come from consistency, not perfection. That’s why TrackPeak is designed to keep you focused, accountable, and always moving forward.</p>
                        <p className='font-heading opacity-100 font-light text-center text-lg md:text-md'>Whether you're just starting your journey or chasing your next personal record, I’m excited to help you reach your peak.</p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AboutSection