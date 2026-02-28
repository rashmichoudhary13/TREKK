import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "motion/react";

const nav = [
    {
        title: "About",
        href: "#about"
    },
    {
        title: "Travel guide",
        href: "#travel"
    },
    {
        title: "News",
        href: "#news"
    },
    {
        title: "Reviews",
        href: "#review"
    },
]

const Navbar = ({ setScaleCursor }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(open){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return() => {
            document.body.style.overflow = "auto";
        }
    },[open]);

    return (
        <div className='bg-orange-50 min-h-16 flex flex-col justify-center' onMouseEnter={() => setScaleCursor(2)} onMouseLeave={() => setScaleCursor(1)}>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='mx-6 flex justify-between'>
                {/* Logo Section  */}
                <h2 className='font-bold text-2xl'> TREKK </h2>

                {/* Navigation item */}
                <ul className='md:flex justify-around w-1/2 ml-8 hidden '>
                    {nav.map((item) => (
                        <li className='text-2xl' key={item.title} onMouseEnter={() => setScaleCursor(3)} onMouseLeave={() => setScaleCursor(2)}>
                            <a href={item.href}> {item.title} </a>
                        </li>
                    ))}
                </ul>

                {/* Button  */}
                <button className='border-2 py-2 px-8 rounded-full cursor-pointer hidden lg:block bg-white'>
                    Get the App
                </button>

                <div className='md:hidden'>
                    {open ?
                        <HiX size={30} className='relative z-60' onClick={() => setOpen(false)} /> :
                        <HiMenu size={30} className='relative ' onClick={() => setOpen(true)} />
                    }
                </div>

                {/* Mobile menu  */}
                {open && (
                    <div className='absolute w-62 h-full bg-[#fafdf3] top-0 right-0 z-50'>
                        <ul className='p-10 flex flex-col h-1/2 justify-between'>
                            {nav.map((item) => (
                                <li className='text-2xl' onClick={() => setOpen(false)}>
                                    <a href={item.href}> {item.title} </a>
                                </li>
                            ))

                            }
                        </ul>
                    </div>
                )

                }
            </motion.nav>
        </div>
    )
}

export default Navbar