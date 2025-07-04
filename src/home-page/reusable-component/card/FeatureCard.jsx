import '../../../style/index.css'
import { useState } from 'react';

function FeatureCard({icon, heading, text}) {
    const [ isShowing, setIsShowing ] = useState(false);
    function showPreview() {
        const isVisible = !isShowing
        setIsShowing(isVisible)
    }
    return (
        <>
            <section className='flex flex-col gap-2 items-center text-foreground-white bg-background-secondary p-2 rounded-2xl hover:translate-y-[-4px] duration-150 sm:w-3/4 md:w-1/2 '>
                {icon}
                <h1 className='text-2xl font-title text-center'>{heading}</h1>
                <p className='opacity-90 font-heading text-center lg:w-3/4'>{text}</p>
                <span onMouseEnter={showPreview} onMouseLeave={showPreview} className='text-md font-heading underline underline-offset-2 opacity-75 cursor-pointer'>see preview.</span>
            </section>

            {isShowing && 
                <div className={`pointer-events-none fixed top-1/2 left-1/2 transition-opacity duration-500 ${isShowing ? 'opacity-100' : 'opacity-0'} transform -translate-x-1/2 -translate-y-1/2 w-1/3 z-20 bg-primary-purple h-1/2 rounded-2xl`}>
                </div>
            }
        </>
    )
}

export default FeatureCard