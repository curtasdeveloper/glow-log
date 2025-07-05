import '../../../style/index.css'

function FeatureCard({index, icon, heading, text}) {
    return (
        <section className='flex flex-col gap-2 items-center text-foreground-white bg-background-secondary p-2 rounded-2xl hover:translate-y-[-4px] duration-150 w-9/10 sm:w-1/2 md:w-1/3 lg:w-4/10 2xl:w-3/10'>
            {index}
            {icon}
            <h1 className='text-2xl font-title text-center'>{heading}</h1>
            <p className='opacity-90 font-heading text-center lg:w-3/4'>{text}</p>
            <span className='text-sm font-heading opacity-50'>no preview available.</span>
        </section>
    )
}

export default FeatureCard