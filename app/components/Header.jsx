import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from "motion/react"
import Link from "next/link";

const Header = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Transform opacity based on scroll position
  const barOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Monitor scroll to determine visibility and check screen size
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 300);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950); // 768px is a common breakpoint for mobile
    };
    
    // Set initial states
    handleResize();
    
    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    
    // Clean up event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div 
          initial={{scale: 0}}
          whileInView={{scale: 1}}
          transition = {{duration:0.8, type:'spring', stiffness:100}}
        >
            <Image src={assets.profile_img} alt='' className='rounded-full w-28'/>
        </motion.div>
        <motion.h3
          initial={{y:-20, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition = {{duration:0.6, delay:0.3}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi there! I'm Vikash K S <Image src={assets.hand_icon} alt='' className='w-6'/></motion.h3>

        <motion.h1
          initial={{y:-30, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition = {{duration:0.8, delay:0.5}}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>software engineer based in Chennai, India.</motion.h1>
        
        <motion.p 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition = {{duration:0.6, delay:0.7}}
        className='max-w-2xl mx-auto font-Ovo'>I’m a Software Engineer at Visteon with a B.Tech in ECE from VIT Chennai. Passionate about solving problems and driving innovation with cutting-edge technology.</motion.p>
        
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a
              initial={{y:30, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition = {{duration:0.6, delay:1}}
            href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>
            
            <motion.a
              initial={{y:30, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition = {{duration:0.6, delay:1.2}}
            href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>my resume <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
        </div>

        <motion.div 
        className={`fixed z-40 flex ${
          isMobile 
            ? "bottom-10 left-1/2 transform -translate-x-1/2 flex-row gap-6" 
            : "right-10 top-1/2 transform -translate-y-1/2 flex-col gap-6"
        }`}
        style={{ opacity: barOpacity }}
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6, delay:1.3 }}
      >
        <div className={`flex ${isMobile ? "flex-row" : "flex-col"} items-center gap-6`}>
          <div className="rounded-full bg-gray-200 p-3 cursor-pointer hover:bg-gray-300 transition-all duration-300">
            <Link href="https://linkedin.com/in/your-linkedin" target="_blank" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077B5">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </Link>
          </div>
          
          <div className="rounded-full bg-gray-200 p-3 cursor-pointer hover:bg-gray-300 transition-all duration-300">
            <Link href="https://github.com/ksvikash" target="_blank" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#24292e">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </Link>
          </div>
          
          <div className="rounded-full bg-gray-200 p-3 cursor-pointer hover:bg-gray-300 transition-all duration-300">
            <Link href="#contact" aria-label="Contact Me">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#333">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>

    </div>
  )
}

export default Header
