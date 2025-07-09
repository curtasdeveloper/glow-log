import '../../style/index.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PurpleButton from '../reusable-component/button/PurpleButton'
import { PiHandshakeThin } from "react-icons/pi";
import { PiEyeThin } from "react-icons/pi";
import { PiEyeSlashThin } from "react-icons/pi";
import toast from 'react-hot-toast';

function LoginForm() {
    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()


        // Check if the email and password are valid
    }
    const validateFormData = () => {
        if (!formData.email.trim()) {
            toast.error("Please enter your username.")
        }
        if (!formData.password.trim()) {
            toast.error("Please enter your password.")
        }
    }
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/sign-up')
    }
    const handleForgotPasswordClick = () => {
        navigate('/forgot-password')
    }
    const [ showPassword, setShowPassword ] = useState(false)
    const handleShowPasswordBtn = () => {
        const newShowPassword = !showPassword;
        setShowPassword(newShowPassword)
    }
    return (
        <>
            <div id='infos-container' className='text-foreground-white flex flex-col items-center justify-center sm:rounded-l-lg rounded-t-lg bg-background-purple-lining sm:bg-background-secondary w-full h-1/3 sm:w-1/2 sm:h-full'>
                <PiHandshakeThin className='size-8 sm:size-10 md:size-11 lg:size-12'/>
                <h1 className='text-center font-bold font-title lg:text-xl'>Welcome Back to Peak Mode</h1>
                <p className='text-center font-light font-heading text-sm w-3/4 2xs:max-xs:w-full sm:w-4/5'>Log in to access your personalized dashboard and continue your journey with tracked sets, sessions, and insights—all ready and waiting.</p>
            </div>
            <div id='inputs-container' className='flex flex-col items-center justify-center gap-2 text-foreground-white bg-background-purple-lining rounded-b-lg sm:rounded-lg w-full h-2/3 sm:w-1/2 sm:h-full'>
                <header className='hidden sm:block md:pt-10'>
                    <h1 className='font-heading text-xl lg:text-2xl font-semibold text-center opacity-75'>Time to Train Smarter</h1>
                </header>
                <form action="" onSubmit={handleSubmit} className='w-full px-4 md:px-6 flex flex-col gap-2'>
                    <hr className='opacity-45 w-3/4 m-auto'/>
                    <br />
                    <div id="login-email-container" className='flex flex-col'>
                        <label htmlFor="login-email"
                            className='font-title text-md'
                            >Email</label>
                        <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required type="email" name="login-email" id="login-email" placeholder='johndoe@example.com'
                            className='bg-background-secondary p-2 rounded-md font-title text-sm outline-none font-thin'/>
                    </div>
                    <div id="login-password-container" className='flex flex-col'>
                        <label htmlFor="login-password"
                            className='font-title text-md'
                            >Password</label>
                        <div className='flex relative'>
                            <input value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required type={showPassword ? "text": "password"} name="login-password" id="login-password" placeholder='xxxxxxxx'
                                className='bg-background-secondary p-2 rounded-md font-title text-sm outline-none w-full font-thin'/>
                            <button onClick={handleShowPasswordBtn} className='absolute top-3 right-2 outline-none' type="button">{showPassword ? <PiEyeThin /> : <PiEyeSlashThin />}</button>
                        </div>
                    </div>
                    <div id="rememberMe-and-forgotPassword-container" className='flex items-center justify-between'>
                        <div id='remember-me-container' className='flex items-center gap-1'>
                            <input type="checkbox" name="remember-me" id="remember-me"/>
                            <label htmlFor="remember-me"
                            className='font-title sm:text-[12px] md:text-sm'
                            >Remember Me</label>
                        </div>
                        <button onClick={handleForgotPasswordClick} className='font-title sm:text-[12px] md:text-sm hover:underline' type='button'>Forgot Password?</button>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={validateFormData} className='font-title text-md px-6 py-2 rounded-sm bg-background-secondary duration-100 hover:scale-95 active:scale-90' type="submit">Log In</button>
                    </div>
                    <br />
                    <hr className='opacity-45 w-3/4 m-auto'/>
                </form>
                <footer className='flex items-center justify-center gap-1'>
                    <p className='font-title text-sm opacity-70'>Don't Have An Account?</p>
                    <button onClick={handleSignUpClick} className='font-title text-sm hover:underline' type='button'>Register Now.</button>
                </footer>
            </div>
        </>
    ) 
}

function AccountForm({text}) {

    const [ accountFormIsVisible, setAccountFormIsVisible ] = useState(false)
    const handleClick = () => {
        const newIsVisible = !accountFormIsVisible
        setAccountFormIsVisible(newIsVisible)
        console.log("Should be visible now.", newIsVisible);
    }
    

    return (
        <>
            <PurpleButton onClick={handleClick} text={text}/>
            {accountFormIsVisible && 
                <div className='fixed top-0 left-0 w-screen h-screen z-40 flex items-center justify-center'>
                    <div id='form-container' className='z-42 flex flex-col w-9/10 h-8/10 sm:h-8/10 sm:w-4/5 md:w-8/10 lg:h-4/5 lg:w-7/10 xl:w-6/10 rounded-lg bg-background-secondary sm:flex-row'>
                        <LoginForm/>
                    </div>
                    <div id='overlay' onClick={handleClick} className="z-41 fixed top-0 left-0 w-screen h-screen bg-background-tertiary opacity-75"></div>
                </div>
            }
        </>
    )
}

export default AccountForm