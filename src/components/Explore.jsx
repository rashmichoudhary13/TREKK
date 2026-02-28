import React from 'react'
import { motion } from 'motion/react'
import CurvedLine from './CurvedLine'

const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: "easeInOut",
            },
        },
    }
}
const Explore = ({ setScaleCursor }) => {
    return (
        <div id="explore">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                }}
                className='block md:hidden'>
                <img src="combinePhone.png" />
            </motion.div>

            <div className='flex justify-between relative mx-3 md:mx-0'>
                <CurvedLine right={0} />
                <div className='flex flex-col gap-6 md:h-content md:justify-between'>
                    {/* Heading  */}
                    <div className='md:w-[65%] mx-auto md:mx-0'>
                        <motion.h2
                            variants={fadeUp(0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{
                                once: true,
                            }}
                            className='text-3xl md:text-8xl font-bold'> EXPLORE THE WORLD </motion.h2>
                        <motion.p
                            variants={fadeUp(0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{
                                once: true,
                            }}
                            className='my-4 md:w-80'> Discover amazing experiences in the world's most exciting outdoor destinations.</motion.p>
                        <motion.button
                            variants={fadeUp(0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{
                                once: true,
                            }}
                            className=' text-sm border-2 py-2 md:py-4 px-3 md:px-35 rounded-full cursor-pointer bg-secondary dark:bg-secondary dark:text-black text-white'>
                            Go to the Travel Guide
                        </motion.button>
                    </div>

                    {/* Review  */}
                    <div className='flex divide-x divide-neutral-400'>
                        <motion.div
                            variants={fadeUp(0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{
                                once: true,
                            }}
                            className='p-1 md:p-3 font-bold '>
                            <h2 className='text-lg md:text-7xl'>68%</h2>
                            <p className='text-sm md:text-2xl'>of happy clients</p>
                        </motion.div>
                        <motion.div
                            variants={fadeUp(0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{
                                once: true,
                            }}
                            className='p-1 md:p-3 font-bold'>
                            <h2 className='text-lg md:text-7xl'>1.2K+</h2>
                            <p className='text-sm md:text-2xl'>user reviews</p>
                        </motion.div>
                        <motion.div
                            variants={fadeUp(0.4)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{
                                once: true,
                            }}
                            className='p-1 md:p-3 font-bold'>
                            <h2 className='text-lg md:text-7xl'>1.5K+</h2>
                            <p className='text-sm md:text-2xl'>destinations</p>
                        </motion.div>
                    </div>
                </div>

                <div className='relative hidden md:block'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9, y: 100 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        viewport={{
                            amount: 0.3,
                        }}
                        onMouseEnter={() => setScaleCursor(4)}
                        onMouseLeave={() => setScaleCursor(1)}
                        src="combinePhone.png" alt="" className='max-w-[500px] w-full h-auto' />
                </div>
            </div>

        </div>
    )
}

export default Explore