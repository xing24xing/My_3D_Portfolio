import React from 'react'
import {motion} from 'framer-motion'
import { styles} from '../styles'
import {ComputersCanvas } from "./canvas";
import Text from './Text';
import { SectionWrapper } from '../hoc';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto '>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className="mt-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#6836d6]">Khushi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a <Text /></p>
          <div className="mt-20">
          <a href="https://drive.google.com/file/d/1Zhv1BhmKiza7ygHI3C2qny9vMnGbxMbs/view?usp=sharing" // Replace with the actual URL to your resume
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#915EFF] text-white font-semibold rounded-lg shadow-lg"
            >
              Dowmload Resume
            </a>
          </div>
        </div>
        </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default SectionWrapper(Hero, "home");