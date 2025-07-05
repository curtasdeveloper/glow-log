import '../../style/index.css'
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import Logo from '../../public/purple-logo.png'

function Header() {
    const [isVisible, setIsVisible] = useState(false)

    function handleSideBarVisibility(){
        const sideBarIsVisible = !isVisible;
        setIsVisible(sideBarIsVisible);
    }

    return (
        <>
            <header className='z-15 fixed top-0 flex items-center justify-between bg-background-black w-full h-16 md:h-18 md:text-xl lg:h-22 px-2 sm:px-4 md:px-12'>
                <div id="logo-container" className='flex items-center'>
                    <img src={Logo} alt="L" className='size-12 lg:size-14'/>
                    <a href="#">
                        <span className='font-title font-bold text-lg text-foreground-white'>Track<span className='text-primary-purple'>Peak</span></span>
                    </a>
                </div>
                <nav id='navigation-container' className='hidden lg:block '>
                    <ul className='flex lg:gap-6 xl:gap-8'>
                        <li className='text-foreground-white font-heading'><a href="#about-container">About</a></li>
                        <li className='text-foreground-white font-heading'><a href="#features-container">Features</a></li>
                    </ul>
                </nav>
                <div id='hamburger-container' className='block lg:hidden'>
                    <FiMenu onClick={handleSideBarVisibility} className='size-8 text-foreground-white' />
                </div>
            </header>

            <aside id='sidebar-container' className={`${isVisible ? 'block' : 'hidden'} ` + 'lg:hidden'}>
                <nav className='z-20 p-6 bg-background-secondary h-[100vh] w-9/10 md:max-lg:w-1/2 lg:hidden fixed top-0 right-0 flex items-center justify-center'>
                    <ul className='flex flex-col gap-2 items-center'>
                        <li className='text-foreground-white font-heading text-xl'>
                            <a href="#about-container" onClick={handleSideBarVisibility}>About</a>
                        </li>
                        <li className='text-foreground-white font-heading text-xl'>
                            <a href="#features-container" onClick={handleSideBarVisibility}>Features</a>
                        </li>
                        <li onClick={handleSideBarVisibility} className='text-foreground-white font-heading underline underline-offset-4 cursor-pointer font-light text-lg'>Close</li>
                    </ul>
                </nav>
                <div onClick={handleSideBarVisibility} className="fixed h-full top-0 left-0 overlay w-full z-10 bg-zinc-900 opacity-40">
                </div>
            </aside>
        </>
    )
}

export default Header