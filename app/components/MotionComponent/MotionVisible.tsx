import { Variants, motion } from "motion/react";
import React, { ReactNode } from "react";

const MotionVisible = ({ children }: { children: ReactNode }) => {
  const cardVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.1,
        ease: "easeIn",
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};

export default MotionVisible;
