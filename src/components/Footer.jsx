import React from 'react'
import { FaStar } from "react-icons/fa";
import { motion } from 'motion/react';

const Footer = () => {
    return (
        <div id="review">
            <div className='relative mt-6'>
                <div className='w-full h-96 absolute rounded-3xl overflow-hidden'>
                    <motion.img 
                    initial={{
                            opacity: 0.5,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 0.5,
                        }}
                        viewport={{
                            once: true,
                        }}src="trekking.jpg" alt="" className='w-full h-full object-cover rounded-3xl' />
                </div>

                <div className='relative p-5 md:p-16 grid grid-cols-1 md:grid-cols-2 md:gap-15'>
                    <motion.div
                    initial={{x:-200, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{delay: 0.8, duration: 1}}
                    viewport={{
                        once: true,
                    }}
                    >
                        <h2 className='text-2xl md:text-6xl font-bold'> SEEK REVIEWS OF TREKK APP</h2>
                        <button className='py-1 md:py-3 px-5 md:px-[50px] rounded-full cursor-pointer bg-[#ff791f] text-white my-2 md:my-8'> See all reviews </button>
                    </motion.div>

                    {/* rating card  */}
                    <div className='flex md:justify-end my-4 md:my-0 md:mx-10'>
                        <motion.div 
                        initial={{
                            opacity: 0.3,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 1,
                            duration: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className='flex flex-col gap-8'>

                            {/* card 1  */}
                            <div className=' flex gap-3 items-center w-50 h-20 border-2 rounded-lg bg-white/20 backdrop-blur-2xl border border-white/30 shadow-lg p-2'>
                                <div className='bg-blue-500 w-12 h-12 rounded-full border border-white'>
                                    <img src="profile.png" alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className='text-white mb-2 md:mb-0'>
                                    <p> Nellie Russell </p>
                                    <p className='flex gap-1'>
                                        <FaStar color="gold" size={15} />
                                        <FaStar color="gold" size={15} />
                                        <FaStar color="gold" size={15} />
                                        <FaStar color="gold" size={15} />
                                        <FaStar color="gold" size={15} />
                                    </p>
                                </div>
                            </div>

                            {/* card 2 */}
                            <div className='md:mx-20 flex gap-3 items-center w-50 h-20 border-2 rounded-lg bg-white/20 backdrop-blur-2xl border  border-white/30 shadow-lg p-2'>
                                <div className='bg-blue-500 w-12 h-12 rounded-full border border-white overflow-clip'>
                                    <img src="profile2.png" alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className='text-white mb-2 md:mb-0'>
                                    <p> Rory Todd </p>
                                    <p className='flex gap-1'>
                                        <FaStar color="gold" size={15} />
                                        <FaStar color="gold" size={15} />
                                        <FaStar color="gold" size={15} />
                                        <FaStar color="gold" size={15} />
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div 
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            className=' mt-4 md:mt-10 py-3 flex flex-col md:flex-row gap-5 md:justify-between text-gray-500'>
                <p>UI inspired by a Dribble Concept <br /> Fully implemented and animated by me</p>

                <p>2025 TREKK, Inc. All rights reserved</p>

                <div>
                    <ul className='flex gap-10 cursor-pointer'>
                        <li>About</li>
                        <li>Reviews</li>
                        <li>Travel guide</li>
                        <li>News</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    )
}

export default Footer