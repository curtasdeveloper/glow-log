import '../../../style/index.css'

function FeatureCard({icon, heading, text}) {
    return (
        <section className='flex flex-col gap-2 items-center text-foreground-white bg-background-secondary p-2 rounded-2xl hover:translate-y-[-4px] duration-150 sm:w-3/4 md:w-1/2 '>
            {icon}
            <h1 className='text-2xl font-title text-center'>{heading}</h1>
            <p className='opacity-90 font-heading text-center lg:w-3/4'>{text}</p>
            <span className='text-md font-heading underline underline-offset-2 opacity-75'>see preview.</span>
        </section>
    )
}

export default FeatureCard