import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const Cursor = ({ scale = 1 }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 500,
    damping: 40,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 500,
    damping: 40,
    mass: 0.5,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[999]"
      style={{
        x: springX,
        y: springY,
        backgroundColor: "white",
        mixBlendMode: "difference",
      }}
      animate={{ scale }}
      transition={{ duration: 0.3, ease: "easeOut"}}
    />
  );
};

export default Cursor;