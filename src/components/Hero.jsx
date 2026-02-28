import React, {useEffect}from 'react'
import { motion } from 'motion/react'

const Hero = () => {
    return (
        <div id="about" className='relative py-4 overflow-hidden md:mx-6'>
            {/* MObile bg image  */}
            <motion.img
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
             src="mountain.png" className='absolute inset-0 w-full h-full object-cover md:hidden bg-opacity-0'/>

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/50 md:hidden" />

            <div className='relative flex flex-col md:flex-row gap-5 pb-2 items-center my-7 md:my-0'>
                
                {/* Heading  */}
                <motion.div
                    initial={{
                        x: -1000,
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: "easeIn",
                    }}
                    className='flex-1 text-3xl md:text-[10rem] leading-none font-semibold'>
                    <h2>DISCOVER</h2>
                    <h2 className='text-white md:text-secondary dark:text-secondary'>NEW TRAILS</h2>
                </motion.div>

                {/* Content  */}
                <div className='w-80 md:w-97.5 flex flex-col items-center md:my-10 md:mx-10 md:text-2xl text-white md:text-black dark:text-white'>
                    <motion.p
                        initial={{
                            x: 500,
                        }}
                        animate={{
                            x: 0
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.5,
                            ease: "easeIn",
                        }}
                        className='mb-4'>
                        Your next adventure starts here.
                        Plan, track and explore breathtaking trails with TREKK -- your reliable guide to the great outdoors.
                    </motion.p>
                    <motion.button
                    initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1,
                            delay: 1,
                            ease: "easeIn",
                        }}
                        className='border-2 py-1 md:py-4 px-5 md:px-35 rounded-full cursor-pointer bg-secondary dark:bg-secondary dark:text-black text-white'>
                        Start Now
                    </motion.button>
                </div>
            </div>

            <div className='hidden md:block'>
                <motion.img 
                initial={{
                    y: 1000,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                }}
                src="mountain.png" alt="" className='rounded-xl w-full h-137.5'/>
            </div>
        </div>
    )
}

export default Hero