import React from 'react'
import CurvedLine from './CurvedLine'
import { motion } from 'motion/react'
const Travel = () => {
  return (
    <div className='mb-10 -mt-50 relative' id="news">
      <CurvedLine right={1} />
      <div className='relative grid grid-cols-1 md:grid-cols-2 gap-20'>
        <div>
          <motion.img
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ type: "spring", duration: 0.5, delay: 0.4, }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            src="phoneMerge.png" alt="" className='max-w-[600px] w-full h-auto relative' />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          <h2 className='text-3xl md:text-8xl font-bold'> TRAVEL WITH CONFIDENCE </h2>
          <p className='my-5 max-w-lg'>Discover amazing outdoor experiences, trusted route suggestions and the best
            maps around the world, recommended by thousands of mountain guides, trail rangers
            and other industry professionals.
          </p>
          <button className='py-1 md:py-4 px-5 md:px-10 rounded-full cursor-pointer bg-secondary dark:bg-secondary dark:text-black text-white'> Download the App </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Travel