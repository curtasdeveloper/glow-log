import '../style/index.css'
import { PiHandWavingThin } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function SignUpPage() {
    const navigate = useNavigate();
    const totalPages = 4;
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        backupEmail: '',
        password: '',
        confirmPassword: '',
        gender: '',
        birthYear: '',
        birthMonth: '',
        birthDay: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };    

    let [ pageValue, setPageValue ] = useState(0)

    const handleNextInfoPage = () => {
        if (!validateCurrentPage()) return;
    
        if (pageValue < totalPages) {
            setPageValue(pageValue + 1);
        } else {
            const finalData = {
                name: `${formData.firstName} ${formData.lastName}`,
                email: `${formData.username}@trackpeak.com`,
                backupEmail: formData.backupEmail,
                password: formData.password,
                gender: formData.gender,
                birthDate: `${formData.birthYear}-${formData.birthMonth}-${formData.birthDay}`
            };
            console.log(finalData);
        }
    };
    

    const handleBackInfoPage = () => {
        if (pageValue === 0) {
            navigate("/")
        }
        const newValue = pageValue-1
        setPageValue(newValue)
    }
    const validateCurrentPage = () => {
        if (pageValue === 0) {
            if (!formData.firstName.trim()) {
                toast.error("Please atleast enter your first name.")
                return false;
            }
        } else if (pageValue === 1) {
            if (!formData.username.trim()) {
                toast.error("Username is required.");
                return false;
            }
            // Optionally validate email format
            if (formData.backupEmail && !/\S+@\S+\.\S+/.test(formData.backupEmail)) {
                toast.error("Enter a valid backup email.");
                return false;
            }
        } else if (pageValue === 2) {
            if (!formData.password) {
                toast.error("Password is required.");
                return false;
            }
            if (formData.password !== formData.confirmPassword) {
                toast.error("Passwords do not match.");
                return false;
            }
        } else if (pageValue === 3) {
            if (!formData.birthYear || !formData.birthMonth || !formData.birthDay) {
                toast.error("Complete birthdate is required.");
                return false;
            }
            if (!formData.gender) {
                toast.error("Please select your gender.");
                return false;
            }
        }
    
        return true;
    };
    
    return (
        <>
            <div className='h-screen w-screen bg-background-black flex items-center justify-center'>
                <div id='form-container' className='z-42 flex flex-col w-9/10 h-8/10 sm:h-8/10 sm:w-4/5 md:w-8/10 lg:h-4/5 lg:w-7/10 xl:w-6/10 rounded-lg bg-background-secondary sm:flex-row'>
                    <div id='infos-container' className='text-foreground-white flex flex-col items-center justify-center sm:rounded-l-lg rounded-t-lg bg-background-purple-lining sm:bg-background-secondary w-full h-1/3 sm:w-1/2 sm:h-full'>
                        <PiHandWavingThin className='size-8 sm:size-9 lg:size-10'/>
                        <h1 className='2xs:max-xs:text-[16px] text-center font-bold font-title lg:text-xl md:w-3/4'>Start Your Fitness Journey with TrackPeak</h1>
                        <p className='text-center 2xs:max-xs:text-[12px] font-light font-heading text-sm w-3/4 2xs:max-xs:w-full sm:w-4/5'>Join TrackPeak for smarter tracking and stronger results with tools that keep you consistent, focused, and climbing toward your peak.</p>
                    </div>
                    <div id='inputs-container' className='bg-background-purple-lining rounded-b-lg sm:rounded-lg w-full h-2/3 sm:w-1/2 sm:h-full grid grid-rows-4 grid-cols-1'>
                        <header className='row-span-1 flex items-center sm:items-end justify-center'>
                            <h1 className='font-heading text-xl lg:text-xl font-semibold text-center opacity-75 text-foreground-white '>Creating a TrackPeak Account...</h1>
                        </header>
                        <form action="" className='text-foreground-white row-span-2 flex flex-col justify-center items-center'>
                            
                            {pageValue === 0 && 
                            <div id="signup-email-container" className='flex flex-col w-full px-4 sm:px-6'>
                                <label htmlFor="signup-firstname"
                                    className='font-title text-md'
                                    >First Name</label>
                                <input  value={formData.firstName} onChange={handleChange} required type="text" name="firstName" id="signup-firstname" placeholder='John'
                                    className='bg-background-secondary p-2 rounded-md font-title text-sm outline-none font-thin'/>
                                <br />
                                <label htmlFor="signup-lastname"
                                    className='font-title text-md'
                                    >Last Name <span className='opacity-70'> ( Optional )</span></label>
                                <input value={formData.lastName} onChange={handleChange} type="text" name="lastName" id="signup-lastname" placeholder='Doe'
                                    className='bg-background-secondary p-2 rounded-md font-title text-sm outline-none font-thin'/>
                            </div>}

                            {pageValue === 1 &&
                            <div id="signup-username-container" className='flex flex-col w-full px-4 sm:px-6'>
                            <label htmlFor="signup-username" className='font-title text-md'>
                                Username
                            </label>
                            <input 
                                value={formData.username}
                                onChange={handleChange}
                                required 
                                type="text" 
                                name="username" 
                                id="signup-username" 
                                placeholder='johndoe22'
                                className='bg-background-secondary p-2 rounded-md font-title text-sm outline-none font-thin' 
                            />
                            <br />
                            <label htmlFor="signup-backemail" className='font-title text-md'>
                                Backup Email <span className='opacity-70'> ( Verification Purposes. )</span>
                            </label>
                            <input 
                                value={formData.backupEmail}
                                onChange={handleChange}
                                type="email" 
                                name="backupEmail" 
                                id="signup-backemail" 
                                placeholder='backup@gmail.com'
                                className='bg-background-secondary p-2 rounded-md font-title text-sm outline-none font-thin' 
                            />
                        </div>}

                        {pageValue === 2 &&
                        <div id="signup-password-container" className='flex flex-col w-full px-4 sm:px-6'>
                            <label htmlFor="signup-password" className='font-title text-md'>
                                Password
                            </label>
                            <input 
                                value={formData.password}
                                onChange={handleChange}
                                required 
                                type="password" 
                                name="password" 
                                id="signup-password" 
                                placeholder='Enter your password'
                                className='bg-background-secondary p-2 rounded-md font-title text-sm outline-none font-thin' 
                            />
                            <br />
                            <label htmlFor="signup-confirm-password" className='font-title text-md'>
                                Confirm Password
                            </label>
                            <input 
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required 
                                type="password" 
                                name="confirmPassword" 
                                id="signup-confirm-password" 
                                placeholder='Re-enter your password'
                                className='bg-background-secondary p-2 rounded-md font-title text-sm outline-none font-thin' 
                            />
                        </div>}

                        {pageValue === 3 &&
                        <div id="signup-birth-gender-container" className='flex flex-col w-full px-4 sm:px-6'>
                            <label className='font-title text-md'>
                                Birthdate
                            </label>
                            <div className='flex gap-2 mt-1'>
                                <input 
                                    value={formData.birthYear}
                                    onChange={handleChange}
                                    required 
                                    type="number" 
                                    name="birthYear" 
                                    id="signup-birthyear" 
                                    placeholder='Year'
                                    min={1900}
                                    max={2023}
                                    className='no-spin bg-background-secondary p-2 rounded-md font-title text-sm outline-none font-thin w-1/3' 
                                />
                                <select 
                                    value={formData.birthMonth}
                                    onChange={handleChange}
                                    required 
                                    name="birthMonth" 
                                    id="signup-birthmonth"
                                    className='focus:outline-none bg-background-secondary p-2 rounded-md font-title text-sm outline-none font-thin w-1/3'
                                >
                                    <option value="" disabled>Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                                <input 
                                    value={formData.birthDay}
                                    onChange={handleChange}
                                    required 
                                    type="number" 
                                    name="birthDay" 
                                    id="signup-birthday" 
                                    placeholder='Day'
                                    min={1} 
                                    max={31}
                                    className='no-spin bg-background-secondary p-2 rounded-md font-title text-sm outline-none font-thin w-1/3' 
                                />
                            </div>
                            <br />
                            <label htmlFor="signup-gender" className='font-title text-md'>
                                Gender
                            </label>
                            <select 
                                value={formData.gender}
                                onChange={handleChange}
                                required 
                                name="gender" 
                                id="signup-gender"
                                className='bg-background-secondary p-2 rounded-md font-title text-sm outline-none font-thin'
                            >
                                <option value="" disabled>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                        </div>}


                        </form>
                        <nav className='row-span-1 flex flex-col items-center justify-between pb-4 sm:px-6 px-4'> 
                            <div className='h-[2px] w-4/5 grid grid-cols-5 gap-[1px]'>
                                <div className={pageValue >= 0 ? "bg-background-secondary" : "bg-foreground-white" + ` rounded-xl row-span-1 col-span-1 opacity-60`}></div>
                                <div className={pageValue >= 1 ? "bg-background-secondary" : "bg-foreground-white" + ` rounded-xl row-span-1 col-span-1 opacity-60`}></div>
                                <div className={pageValue >= 2 ? "bg-background-secondary" : "bg-foreground-white" + ` rounded-xl row-span-1 col-span-1 opacity-60`}></div>
                                <div className={pageValue >= 3 ? "bg-background-secondary" : "bg-foreground-white" + ` rounded-xl row-span-1 col-span-1 opacity-60`}></div>
                                <div className={pageValue >= 4 ? "bg-background-secondary" : "bg-foreground-white" + ` rounded-xl row-span-1 col-span-1 opacity-60`}></div>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <button onClick={handleBackInfoPage} className='flex items-center gap-[4px] font-title bg-foreground-white border-none rounded-md px-2 py-2 text-background-secondary'>{pageValue > 0 ? <IoIosArrowBack className='size-4' /> : <AiFillHome className='size-4 text-background-secondary'/>}<span>{pageValue === 0 ? "Home" : "Back"}</span></button>
                                <button onClick={handleNextInfoPage} className='bg-background-secondary px-4 py-2 rounded-lg text-foreground-white font-title font-bold'>{pageValue != totalPages ? "Next" : "Sign Up"}</button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpPage