import '../style/index.css'
import { PiLockKeyThin } from "react-icons/pi";

function ForgotPasswordPage() {
    
    return (
        <>
            <div className='h-screen w-screen bg-background-black flex items-center justify-center'>
                <div id='form-container' className='z-42 flex flex-col w-9/10 h-8/10 sm:h-8/10 sm:w-4/5 md:w-8/10 lg:h-4/5 lg:w-7/10 xl:w-6/10 rounded-lg bg-background-secondary sm:flex-row'>
                    <div id='infos-container' className='text-foreground-white flex flex-col items-center justify-center sm:rounded-l-lg rounded-t-lg bg-background-purple-lining sm:bg-background-secondary w-full h-1/3 sm:w-1/2 sm:h-full'>
                        <PiLockKeyThin className='size-8 sm:size-9 lg:size-10'/>
                        <h1 className='text-center font-bold font-title lg:text-xl'>Reset and Restart Strong</h1>
                        <p className='text-center font-light font-heading text-sm w-3/4 2xs:max-xs:w-full sm:w-4/5'>Because missing a password shouldn’t stop your progress.</p>
                    </div>
                    <div id='inputs-container' className='bg-background-purple-lining rounded-b-lg sm:rounded-lg w-full h-2/3 sm:w-1/2 sm:h-full'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPasswordPage