"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";
import { useScramble } from "use-scramble";
import { GoDownload } from "react-icons/go";
import "./HeroSection.css";
import { FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  const [playText, setPlayText] = useState(false);
  let emailText = "Email Me";
  const { ref, replay } = useScramble({
    text: emailText,
    speed: 2,
    tick: 5,
    step: 2,
    scramble: 5,
    seed: 2,
    range: [32, 125],
    overflow: true,
    playOnMount: playText,
  });

  const transition = {
    duration: 0.3,
    delay: 0.2,
    ease: "linear",
  };

  return (
    <div
      className="p-0 pt-[140px] md:py-[80px] max-w-[850px] m-auto px-6"
      id="home"
    >
      <motion.p
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={transition}
        className="font-sans"
        style={{
          color: "rgb(153, 153, 153)",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "normal",
        }}
      >
        ✋Hello I Am
      </motion.p>
      <motion.h2
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ ...transition, delay: 0.3 }}
        className="font-sans text-[45px] md:text-[85px]"
        style={{
          color: "rgb(255, 255, 255)",
          fontWeight: 700,
          lineHeight: "normal",
        }}
      >
        Nikhil Vikas Niwate
      </motion.h2>
      <motion.p
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ ...transition, delay: 0.35 }}
        className="font-sans text-base leading-relaxed not-italic max-w-lg"
        style={{
          color: "rgb(153, 153, 153)",
          fontWeight: 500,
          lineHeight: "normal",
          fontSize: "18px",
          letterSpacing: "0.05rem",
        }}
      >
        Experienced Frontend developer, with a passion for crafting seamless
        digital experiences and a proven track record.
      </motion.p>
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ ...transition, delay: 0.42 }}
        className="font-sans mt-5 flex flex-col md:flex-row gap-5 items-center justify-between"
      >
        <Button
          variant="secondary"
          style={{
            fontWeight: 500,
            lineHeight: "100%",
            cursor: "pointer",
            width: 200,
            background: "transparent",
            border: "1px solid rgb(32, 32, 33)",
          }}
          className="font-sans uppercase text-[#808080] hover:text-white "
          asChild
          onMouseOver={replay}
        >
          <Link href={"mailto:nikhil.niwate@gmail.com"}>
            <MdOutlineMail size={30} />
            <span
              className="font-sans hover:text-white"
              style={{ fontSize: "15px", width: 70 }}
              ref={ref}
            >
              Email Me
            </span>
          </Link>
        </Button>

        <div className="flex gap-10 items-center">
          <a
            href="https://www.linkedin.com/in/nikhil-niwate-949531143/"
            target="_blank"
            className="flex flex-end gap-2 flex-row hover-underline-animation left-side"
          >
            <FaLinkedin size={20} />
            <p>LinkedIn</p>
          </a>
          <a
            href="/assets/Nikhil_Niwate_Resume_2025.pdf"
            download={"Test.pdf"}
            className="flex flex-end gap-2 flex-row hover-underline-animation left-side"
          >
            <GoDownload size={20} />
            <p>Download CV</p>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
