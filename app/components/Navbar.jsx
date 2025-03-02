import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const sideMenuPress = useRef();
    const [isScroll, setIsScroll] = useState(false)

    const openMenu = () => {
      sideMenuPress.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
      sideMenuPress.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        if(scrollY > 50){
          setIsScroll(true)
        }
        else{
          setIsScroll(false)
        }
      })
    },[])

  return (
    <>

      {/* THIS IS FOR GRADIENT NEAR THE NAVBAR FOR LIGHT MODE - TO BE CHANGED*/}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
          <Image src={assets.bg_color_new} alt='' className='w-full py-4' />
      </div>

      <nav className = {`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm duration-500 dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt = "" className='w-28 cursor-pointer mr-14'/>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-60 duration-500 dark border dark:border-white/50 dark:bg-transparent"}`}>
            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About</a></li>
            <li><a className='font-Ovo' href="#educ">Education</a></li>
            <li><a className='font-Ovo' href="#work">Work</a></li>
            <li><a className='font-Ovo' href="#projects">Projects</a></li>
            <li><a className='font-Ovo' href="#contact">Contact</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button onClick={()=> setIsDarkMode(prev => !prev)}>
              <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
          </button>
          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt = "" className='w-3' /></a>
          


          {/*THIS IS FOR THE PHONE MENU - TO BE CHANGED*/}
          <button className='block md:hidden ml-3' onClick={openMenu}>
              <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
          </button>

          <ul ref={sideMenuPress} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-50 transition duration-500 dark:bg-darkHover dark:text-white'>
            
            <div className='absolute right-6 top-6' onClick={closeMenu}>
              <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'/>
            </div>
            
            <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#about">About</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#educ">Education</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#work">Work</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#projects">Projects</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact</a></li>
        </ul>

        
        </div>
      </nav>
    </>
  )
}

export default Navbar
