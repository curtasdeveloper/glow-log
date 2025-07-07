import '../../style/index.css'
import AccountForm from '../components/AccountForm'
function HomeSection() {
    return (
        <>
            <main className='h-[100vh] w-full bg-background-black flex flex-col justify-center gap-8 items-center'>
                <div id="text-content-container" className='flex flex-col items-center gap-4 px-2'>
                    <h1 className='text-5xl font-title font-bold text-foreground-white text-center'>
                        Train Smarter
                        <br />
                        Push Farther
                        <br />
                        <span className=' text-primary-purple font-extrabold'>Peak Higher</span>  
                    </h1>
                    <p className='text-lg font-heading text-foreground-white opacity-70 text-center lg:w-1/2'>
                    TrackPeak is your all-in-one fitness tracker. Plan your sessions, stay consistent, and hit every milestone with precision tools built for personal growth.
                    </p>
                </div>
                <div id='get-started-container' className="flex justify-center">
                    <AccountForm text="Get Started."/>
                </div>
            </main>
        </>
    )
}

export default HomeSection