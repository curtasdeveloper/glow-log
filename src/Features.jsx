import './index.css'

function FeaturesContent({title, description}) {
    return (
        <section className='max-w-[400px] mx-auto flex items-center flex-col gap-2'>
            <h1 className='inconsolata text-2xl font-bold text-center'>{title}</h1>
            <p className='text-center text-lg inconsolata'>{description}</p>
        </section>
    )
}
function Features() {

    return (
        <>
            <header className="h-[20vh]"></header>
            <main className='h-[80vh] grid grid-cols-3 grid-rows-3'>
                <div className="flex items-center">
                    <FeaturesContent title='Unified Logging System' description='Log your fitness routines, financial records, and diary entries in one integrated platform — no need to jump between apps.' />
                </div>
                <div className="flex items-end">
                    <FeaturesContent title='Fitness Tracker' description='Track your workouts, weight, and body goals. Stay consistent and see your physical progress over time.' />
                </div>
                <div className=""></div>
                <div className=""></div>
                <div className="ml-[-35em] mt-[1em]">
                    <FeaturesContent title='Finance Tracker' description='Log income, expenses, and savings. Know where your money is going, and take charge of your personal budget.' />
                </div>
                <div className="">
                    <p className='mt-[32px] ml-[100px] text-7xl cormorant-garamond text-zinc-700 font-semilight'>current</p>
                    <p className='mt-[-24px] text-center text-8xl playfair-display text-zinc-800 font-semilight'>FEATURES</p>
                </div>
                <div className="mr-[-5em]">
                    <FeaturesContent title='Minimal Analytics (Coming Soon)' description='View trends from your logs — fitness improvements, spending patterns, or journaling consistency — in clean visual summaries.' />
                </div>
                <div className="mt-[-2em]">
                    <FeaturesContent title='Diary & Life Updates' description='Write journal entries, reflect on your week, or plan your goals. Keep track of your mindset and milestones.' />
                </div>
                <div className=""></div>
            </main>
        </>
    )
}

export default Features