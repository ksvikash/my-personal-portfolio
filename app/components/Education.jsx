import { assets, educationData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Education = ({isDarkMode}) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='educ' 
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4 
        initial={{y:-20, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration: 0.5, delay:0.3}}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My Academic Journey
      </motion.h4>
      
      <motion.h2 
        initial={{y:-20, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration: 0.5, delay:0.5}}
        className='text-center text-5xl font-Ovo mb-12'
      >
        Education
      </motion.h2>

      <div className="grid md:grid-cols-1 gap-8 w-full max-w-5xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.3 * index}}
          >
            <motion.div 
              whileHover={{scale: 1.02}}
              className={`relative p-8 ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200'
              } rounded-lg shadow-lg border dark:bg-transparent dark:border-gray-400 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:borrder-white dark:hover:shadow-white dark:hover:bg-darkHover/50`}
            >
              {/* University Logo - Top Right Corner with Responsive Sizing */}
              <div className="absolute top-4 right-4">
                <Image 
                  src={isDarkMode ? edu.iconDark : edu.icon} 
                  alt={`${edu.institution} logo`} 
                  width={100} 
                  height={100} 
                  className="object-contain w-[100px] md:w-[80px] sm:w-[60px] xs:w-[50px]"
                />
              </div>

              <h3 className={`text-2xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                {edu.institution}
              </h3>
              <p className={`text-md opacity-80 mb-3 ${
                isDarkMode ? 'text-white/80' : 'text-gray-800/80'
              }`}>
                {edu.degree}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className={`text-sm opacity-70 ${
                  isDarkMode ? 'text-white/70' : 'text-gray-800/70'
                }`}>
                  {edu.period}
                </span>
                <span className={`text-sm opacity-70 ${
                  isDarkMode ? 'text-white/70' : 'text-gray-800/70'
                }`}>
                  {edu.location}
                </span>
              </div>
              <ul className={`list-disc list-inside text-sm opacity-90 ${
                isDarkMode ? 'text-white/90' : 'text-gray-800/90'
              }`}>
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education