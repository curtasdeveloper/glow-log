import '../../style/index.css'
import { PiCalculatorThin } from "react-icons/pi";
import { CiPen } from "react-icons/ci";
import { PiTimerBold } from "react-icons/pi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoNutrition } from "react-icons/io5";
import FeatureCard from '../reusable-component/card/FeatureCard';
import FutureFeatureCard from '../reusable-component/card/FutureFeatureCard';


function Features() {
    const cardCoreFeaturesContent = [
        {
            featureNumber: 1,
            icon: <PiCalculatorThin className='size-10 text-primary-purple'/>,
            heading: "Fitness Tools",
            text: "BMI calculator, calorie generator, and other essential fitness calculation tools to optimize your health metrics."
        },
        {
            featureNumber: 2,
            icon: <CiPen className='size-10 text-primary-purple'/>,
            heading: "Journey Tracker",
            text: "BMI calculator, calorie generator, and other essential fitness calculation tools to optimize your health metrics."
        },
        {
            featureNumber: 3,
            icon: <PiTimerBold className='size-10 text-primary-purple'/>,
            heading: "Session Handlers",
            text: "BMI calculator, calorie generator, and other essential fitness calculation tools to optimize your health metrics."
        }
    ]
    const cardNewGainsIncomingContent = [
        {
            featureNumber: 1,
            icon: <GiForkKnifeSpoon className='size-10 text-foreground-white'/>,
            heading: "Diet Planner",
            text: "Comprehensive meal planning and nutrition tracking to complement your fitness routine."
        },
        {
            featureNumber: 2,
            icon: <IoNutrition className='size-10 text-foreground-white'/>,
            heading: "Food Suggester",
            text: "AI-powered food recommendations based on your fitness goals and dietary preferences."
        }
    ]
    return(
        <>
            <div className='bg-background-black py-4'>
                <div id="features-container" className='bg-background-black text-foreground-white py-5'>
                    <header className='flex flex-col gap-4 items-center'>
                        <h1 className='text-3xl font-title font-semibold text-center'>Tools that will Fuel your <span className='text-primary-purple'>Peak</span></h1>
                        <p className='text-lg font-heading opacity-70 text-center lg:w-1/2 sm:px-4'>
                            Built for those who strive for better, TrackPeak combines fitness and tech to help you track smarter, stay consistent, and reach your peak.
                        </p>
                    </header>
                </div>
                <h1 className='text-primary-purple font-bold text-2xl text-center my-4'>Core Features</h1>
                <div className='flex flex-col gap-3 px-2 lg:flex-row lg:gap-6 lg:px-6 items-center'>
                    {cardCoreFeaturesContent.map(({featureNumber, icon, heading, text}) => {
                        return <FeatureCard key={featureNumber} icon={icon} heading={heading} text={text}/>
                    })}
                </div>
                <div className='flex justify-center item-center'>
                    <hr className='my-8 w-3/4 border-foreground-white opacity-30'/>
                </div>
                <h1 className='text-primary-purple font-bold text-2xl text-center my-4'>New Gains Incoming</h1>
                <div className='flex flex-col gap-3 px-2 lg:flex-row lg:gap-6 lg:px-6 items-center lg:justify-center'>
                    {cardNewGainsIncomingContent.map(({featureNumber, icon, heading, text}) => {
                        return <FutureFeatureCard key={featureNumber} icon={icon} heading={heading} text={text}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default Features