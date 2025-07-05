import '../../style/index.css'
import { useState } from 'react'
import PurpleButton from '../reusable-component/button/PurpleButton'
import { PiHandshakeThin } from "react-icons/pi";

function LoginForm() {
    return (
        <>
            <section className='text-foreground-white w-full h-full flex flex-col item-center justify-center'>
                <header className='h-1/3 2xs:h-3/10 flex flex-col item-center justify-end pb-7'>
                    <div className='flex justify-center'>
                        <PiHandshakeThin className='size-12 2xs:size-10 sm:size-12' />
                    </div>
                    <h1 className='text-center font-title text-2xl font-extrabold 2xs:text-xl sm:text-2xl'>Welcome Back to Peak Mode</h1>
                    <p className='text-center font-heading text-md opacity-95 2xs:text-sm sm:text-lg'>Log in to access your personalized dashboard and continue your journey with tracked sets, sessions, and insights—all ready and waiting.</p>
                </header>
                <hr className='w-full opacity-20 border border-foreground-white mx-auto mb-3 2xs:mb-[-22px] sm:mb-[-80px]' />
                <form action=""
                    className='flex flex-col items-center justify-center h-1/2 2xs:h-7/10'>
                    <div className='flex flex-col gap-1 w-full mb-3'>
                        <label className='font-title text-md ' htmlFor="login-email">Email</label>
                        <input required placeholder='johndoe@example.com' className='p-2 font-title rounded-md shadow-sm bg-background-secondary outline outline-background-tertiary focus:outline-background-purple-lining' type="login-email" name="login-email" id="login-email" />
                    </div>
                    <div className='flex flex-col gap-1 w-full mb-1'>
                        <label className='font-title text-md ' htmlFor="login-password">Password</label>
                        <input required placeholder='xxxxxxxx' className='p-2 font-title rounded-md shadow-sm bg-background-secondary outline outline-background-tertiary focus:outline-background-purple-lining' type="login-password" name="login-password" id="login-password" />
                    </div>
                    <div className='flex items-center justify-between w-full mb-3'>
                        <div className='flex gap-1 items-center'>
                            <input type="checkbox" name="remember-me" id="remember-me" />
                            <label className='font-title text-md 2xs:text-sm' htmlFor="remember-me">Remember Me</label>
                        </div>
                        <button type="button" className='font-title duration-150 2xs:text-sm'>
                            <span>Forgot Your Password?</span>
                        </button> 
                    </div>
                    <button type="submit" className='mb-5 px-2 2xs:py-2 flex items-center justify-center gap-1 rounded-md h-10 w-1/2 md:w-3/4 bg-background-tertiary font-title hover:bg-primary-purple duration-150'>
                        <span>Log in</span>
                    </button>  
                    <hr className='w-3/4 opacity-20 border border-foreground-white mx-auto mb-8' />
                    <footer className='flex items-center justify-center gap-2'>
                        <p className='font-title text-md opacity-75'>Don't Have An Account?</p>
                        <button type="button" className='font-title duration-150'>
                            <span>Register now.</span>
                        </button> 
                    </footer>
                </form>
            </section>
        </>
    ) 
}

function SignupForm() {
    return (
        <>
        </>
    )
}

function AccountForm({text}) {
    const [ accountFormIsVisible, setAccountFormIsVisible ] = useState(false)
    const [ noAccountYet, setNoAccountYet ] = useState(false)
    const [ didForgotPassword, setDidForgotPassword ] = useState(false)
    
    // const [ haveNoAccount, setAccountFormIsVisiblesetHaveNoAccount ] = useState(false)
    const handleClick = () => {
        const newIsVisible = !accountFormIsVisible
        setAccountFormIsVisible(newIsVisible)
        console.log("Should be visible now.", newIsVisible);
    }
    const handleNoAccountYet = () => {
        // const newShowLoginForm = !showLogInForm
        // setShowLoginForm(newShowLoginForm)
    } 
    return (
        <>
            <PurpleButton onClick={handleClick} text={text}/>
            {accountFormIsVisible && 
                <div className='fixed top-0 left-0 w-screen h-screen z-40 flex items-center justify-center'>
                    <div id="account-container" className='z-42 flex items-center justify-center p-4 w-full h-4/5 2xs:h-9/10'>
                        <div id='infos-container'
                            className='flex flex-col justify-between p-6 2xs:p-4 bg-background-purple-lining w-full h-full sm:h-4/5 sm:w-4/5 rounded-4xl relative'>
                                {!noAccountYet && <LoginForm />}
                                {noAccountYet && <SignupForm />}
                                {didForgotPassword && <ForgotPasswordForm />}
                        </div>
                    </div>
                    <div onClick={handleClick} className="fixed top-0 left-0 w-screen h-screen bg-background-tertiary opacity-75 z-41"></div>
                </div>
            }
        </>
    )
}

export default AccountForm