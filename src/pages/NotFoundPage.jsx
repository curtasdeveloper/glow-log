import '../style/index.css'
import Logo from '../public/purple-logo.png'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <>
            <div id="logo-container" className='z-15 fixed top-0 flex items-center bg-background-black w-full h-16 md:h-18 md:text-xl lg:h-22 px-2 sm:px-4 md:px-12'>
                <img src={Logo} alt="L" className='size-12 lg:size-14'/>
                <button onClick={() => navigate("/")}>
                    <span className='font-title font-bold text-lg text-foreground-white'>Track<span className='text-primary-purple'>Peak</span></span>
                </button>
            </div>
            <div className='bg-background-primary h-screen flex flex-col items-center justify-center gap-2'>
                <h1 className='text-center font-title font-extrabold text-8xl text-primary-purple opacity-25'>404</h1>
                <p className='text-foreground-white font-title font-bold text-4xl text-center'>Page Not Found</p>
                <p className='text-center font-title text-md text-foreground-white opacity-70'>It seems the page you're looking for doesn't exist, Let's get you back on track.</p>
                <button className='bg-primary-purple text-foreground-white rounded-md p-4 font-heading duration-100 hover:scale-95 active:scale-90' onClick={() => navigate("/")}>Return to HomePage</button>
            </div>
        </>
    )
}

export default NotFoundPage