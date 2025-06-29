import './index.css'
function About() {
    return (
        <>
            <header className='h-[20vh]' id='about-section'></header>
            <div className='h-[80vh] grid grid-cols-2 grid-rows-4'>
                <div className=""></div>
                <div className="">
                    <p className='inconsolata text-lg ml-[-40vw] text-center'>GlowLog is a personal progress tracker built for those who want to stay intentional <br /> about their fitness, finances, and overall lifestyle.</p>
                </div>
                <div className=""></div>
                <div className="">
                    <p className='inconsolata text-lg ml-[-25vw] text-center'>Inspired by the idea of “glow-ups” — physical, financial, and mental — GlowLog <br />is a minimalist yet powerful tool that lets you log your workouts, track your spending, <br /> and document your life updates, all in one place.</p>
                </div>
                <div className="row-span-2">
                    <p className='mt-[32px] ml-[100px] text-7xl cormorant-garamond text-zinc-700 font-semilight'>ABOUT</p>
                    <p className='mt-[-24px] text-center text-8xl playfair-display text-zinc-800 font-semilight'>GLOWLOG</p>
                </div>
                <div className="row-span-2 flex flex-col items-center gap-[4em]">
                    <p className='inconsolata text-lg text-center ml-[-5vw]'>This is a personal project made to explore the intersection of goal-setting and self-awareness. Whether you're building habits, budgeting your money, or just want a digital journal to reflect on your growth, GlowLog is designed to be your quiet companion in that journey.</p>
                    <p className='text-center inconsolata text-lg'>Built using React, GitHub as a backend source, and a simple modern design, <br />this web app reflects my vision for a lightweight but effective self-tracking tool.</p>
                </div>
            </div>
        </>
    )
}

export default About