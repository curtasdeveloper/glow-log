import './index.css'
import './custom.css'
function HomeMainContent() {    
    return (
        <>
            <main className='flex flex-col items-center justify-center h-[80vh] pt-[20vh] '>
                <p className="mb-[-20px] text-xl font-light inconsolata">document things in your</p>
                <p className="mb-[-16px] ml-[24px] text-9xl p-none  playfair-display text-neutral-950 ">SELF<span className="ml-[-28px] text-5xl font-thin inconsolata">,</span></p>
                <p className="mb-[-14px] mr-[32px] text-8xl ibm-plex-serif-regular text-zinc-800 font-semibold">WEALTH</p>
                <p className="mb-[-14px] ml-[90px] text-xl font-light inconsolata">and</p>
                <p className="mt-[-4px] text-8xl cormorant-garamond text-zinc-900 font-semibold">HEALTH</p>
                <button className='h-[48px] w-[148px] bg-zinc-900 text-zinc-100 rounded-[4px] inconsolata'>get started.</button>
            </main>
            <footer className='h-[20vh] flex items-center justify-center'>
                <p className='text-2xl font-light inconsolata text-center'>Your journey to a healthier body, smarter spending, and a brighter future—fully logged.</p>
            </footer>
        </>    
    )
}    

export default HomeMainContent