import '../../style/index.css'
import { BsSend } from "react-icons/bs";
import { BsSendCheck } from "react-icons/bs";

function SuggestionSection() {
    return (
        <>
            <div className='h-[100vh] p-4 bg-background-black text-foreground-white flex flex-col items-center justify-center gap-8'>
                <header className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-semibold font-title'>Have a Suggestion?</h1>
                    <p className='text-center font-heading text-lg'>Help me improve <span>TrackPeak</span> by sharing your ideas and feedback.</p>
                </header>
                <form action="" className='bg-background-secondary rounded-lg p-4 flex flex-col items-center justify-center gap-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/3 lg:px-6'>
                    <header>
                        <div className='flex items-center justify-center gap-2'>
                            <BsSend className='text-primary-purple text-2xl'/>
                            <h1 className='text-2xl font-bold'>Share Your Ideas</h1>
                        </div>
                        <p className='text-center font-heading text-md opacity-80'>Your feedback helps us create a better experience for everyone!</p>
                    </header>
                    <div className='flex flex-col gap-1 w-full'>
                        <label className='font-title text-md ' htmlFor="name">Name</label>
                        <input placeholder='John Doe' className='p-2 font-title rounded-full shadow-sm bg-background-secondary outline outline-background-tertiary focus:outline-background-purple-lining ' type="text" name="name" id="name" />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <label className='font-title text-md ' htmlFor="">Email <span className='opacity-60'> ( Optional )</span></label>
                        <input placeholder='johndoe@example.com' className='p-2 font-title rounded-full shadow-sm bg-background-secondary outline outline-background-tertiary focus:outline-background-purple-lining' type="email" name="email" id="email" />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <label className='font-title text-md ' htmlFor="">Your Suggestion</label>
                        <textarea required placeholder='I would like to suggest a new feature...' className='h-18 p-2 rounded-xl shadow-sm bg-background-secondary font-title outline outline-background-tertiary focus:outline-background-purple-lining' type="text" name="suggestion" id="suggestion" />
                    </div>
                    <button type="submit" className='px-2 flex items-center justify-center gap-1 rounded-md h-10 w-1/2 md:w-3/4 bg-background-tertiary font-title hover:bg-primary-purple duration-150'>
                        <BsSendCheck className='text-foreground-white'/>
                        <span>Submit Suggestion</span>
                    </button>       
                </form>
            </div>
        </>
    )
}

export default SuggestionSection