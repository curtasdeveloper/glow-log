import './index.css'

function SuggestionForm () {
    return <form className='flex flex-col items-start justify-center gap-4 w-[100%] py-[16px]' action="" method="post">
        <div className='w-[100%]'>
            <label className='text-md text-zinc-800 inconsolata' htmlFor="suggestion-text">Your Suggestion *</label>
            <input className='border-1 text-sm border-zinc-400 font-monospace w-[100%] h-[32px] px-[8px] rounded-lg focus:outline-zinc-500 focus:bg-none focus:outline-1 focus:shadow-sm' type="text" id='suggestion-text' placeholder='Tell me about your idea, future request, or improvement suggestion...'/>
        </div>

        <div className='w-[100%]'>
            <label className='text-md text-zinc-800 inconsolata' htmlFor="suggestion-name-or-email">Your Name or Email (Optional)</label>
            <input className='border-1 text-sm border-zinc-400 font-monospace w-[100%] h-[32px] px-[8px] rounded-lg focus:outline-zinc-500 focus:bg-none focus:outline-1 focus:shadow-sm' type="text" id='suggestion-name-or-email' placeholder='john.doe@example or John Doe'/>
            <span className='block text-sm text-zinc-700 inconsolata' >Leave your contact info if you'd like me to follow up with you.</span>
        </div>
        <button className='h-[40px] w-[148px] bg-zinc-900 text-zinc-100 rounded-[4px] inconsolata' type="submit">send suggestion.</button>
    </form>
}
function Suggestion() {
    return (
        <>
            <div className='flex items-center justify-center h-[100vh] bg-zinc-200 '>
                <main className='h-[80%] w-[50%] flex flex-col items-start justify-between bg-zinc-300 px-[2em] py-[3em] rounded-lg shadow-xl'>
                    <header>
                        <h1 className='inconsolata text-2xl font-semibold text-zinc-900'>Help Me Improve</h1>
                        <p className='text-md text-zinc-800 inconsolata'>Have an idea for a new feature or improvement? I'd love to hear from you! Your feedback will helps me build a better experience for everyone.</p>
                    </header>
                    <SuggestionForm />
                    <footer className='flex justify-center w-[100%]'>
                        <p className='text-center text-sm text-zinc-800 inconsolata'>We review all suggestions and appreciate your time in helping us improve our platform.</p>
                    </footer>
                </main> 
            </div>
        </>
    )
}

export default Suggestion