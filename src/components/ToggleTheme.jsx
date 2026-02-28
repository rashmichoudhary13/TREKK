import React, { useEffect, useState } from 'react'
import { HiSun, HiMoon } from "react-icons/hi2";

const ToggleTheme = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if(dark){
      root.classList.add("dark");
      localStorage.setItem("theme","dark");
    } else {
      root.classList.remove("dark");  
      localStorage.setItem("theme","light");
    }
  },[dark]);

  return (
    <button className="border-2 rounded-full w-8 h-8 md:w-10 md:h-10 cursor-pointer bg-white text-black flex justify-center items-center text-2xl" 
    onClick={() => setDark(!dark)}>
      {dark ? <HiSun/> : <HiMoon/> }
    </button>
  )
}

export default ToggleTheme