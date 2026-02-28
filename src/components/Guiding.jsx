import React, { useRef } from 'react'
import Card from './Card'
import { cardDetails } from '../assets/data'
import { motion, useTransform, useScroll } from 'motion/react'

const Guiding = ({ setScaleCursor }) => {
    const HorizontalScroll = ({ setScaleCursor }) => {
        const targetRef = useRef(null);
        const { scrollYProgress } = useScroll({
            target: targetRef,
        });

        const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);
        return (
            <section ref={targetRef} className='relative h-[150vh]'>
                <div className='sticky top-0 h-screen overflow-hidden'>
                    <motion.div style={{ x }} className='flex gap-8 py-4 md:py-16 w-max dark:text-black' onMouseEnter={() => setScaleCursor(3)} onMouseLeave={() => setScaleCursor(1)}>
                        {cardDetails.map((item) => (
                            <Card details={item} key={item.id} />
                        ))
                        }
                    </motion.div>
                </div>
            </section>
        )
    }

    return (
        <div className='my-8 md:my-16'>

            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>

                <motion.h2
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className='text-3xl md:text-8xl font-bold md:tracking-tighter text-black dark:text-white'>OUR GUIDING VALUES</motion.h2>

                <motion.div
                     initial={{
                        x: 350,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className='flex justify-end my-3 md:my-auto mr-10'>
                    <p className='text-sm md:text-base max-w-sm leading-relaxed'>Every step you take with us is driven by trust and discovery.
                        Our goal is to create moments that inspire you to explore more, dream bigger,
                        and see the world differently.
                    </p>
                </motion.div>

            </div>

            <HorizontalScroll setScaleCursor={setScaleCursor} />
        </div>
    )
}

export default Guiding