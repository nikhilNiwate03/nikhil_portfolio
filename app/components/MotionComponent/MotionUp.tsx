"use client";
import React from "react";
import { motion } from "motion/react";

const MotionUp = ({
  children,
  customTranstion,
}: {
  children: React.ReactNode;
  customTranstion?: {};
}) => {
  const transition = {
    duration: 0.3,
    delay: 0.2,
    ease: "easeOut",
  };
  return (
    <>
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ ...transition, ...customTranstion }}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="font-sans"
      >
        {children}
      </motion.div>
    </>
  );
};

export default MotionUp;
