import React from 'react';
import Logo from '../assets/images/zimtams-logo.png';
import ButtonImg from '../assets/images/button-img.png';
export default function Header() {
    return (
        <>
            <header className="bg-primary-bg ">
                <div className=" mx-auto px-2 md:px-10 md:py-4 py-2 flex justify-between items-center">
                    <img src={Logo} alt="Logo-zimtams" className='lg:w-[200px] w-30 object-contain h-20' />



                    <a href="/login" className=" relative overflow-hidden
    text-lg flex items-center gap-2
    font-medium rounded-xl md:px-4 px-2 md:py-3 py-2
    text-primary-text bg-white hover:text-white

    before:absolute before:inset-0
    before:bg-primary-text
    before:translate-x-full
    before:transition-transform before:duration-300
    hover:before:translate-x-0
    hover:border-white
    hover:border-1

    transition-colors duration-300
    ">
                        <img src={ButtonImg} alt="User Icon" className='h-10 w-10 rounded-full object-cover object-top relative z-10' />
                        <span className='relative z-10'>Hi siva</span>
                        <span className='relative z-10'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </span>

                    </a>
                </div>
            </header>
        </>
    );
}