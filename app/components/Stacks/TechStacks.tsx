"use client";
import React, { useEffect, useRef } from "react";
import MotionUp from "../MotionComponent/MotionUp";
import { PiStack } from "react-icons/pi";
import nextJs from "../../public/assets/tech/next.svg";
import html from "../../public/assets/tech/html.svg";
import css from "../../public/assets/tech/css.svg";
import react from "../../public/assets/tech/react.svg";
import astro from "../../public/assets/tech/astro.svg";
import gsap from "../../public/assets/tech/gsap.webp";
import javascript from "../../public/assets/tech/javscript.svg";
import typescript from "../../public/assets/tech/typescript.svg";

import nodejs from "../../public/assets/tech/nodejs.svg";
import jest from "../../public/assets/tech/jest.webp";
import redux from "../../public/assets/tech/redux.svg";
import sanity from "../../public/assets/tech/sanity.svg";
import strapi from "../../public/assets/tech/strapi_logo.svg";
import sass from "../../public/assets/tech/sass.svg";
import vite from "../../public/assets/tech/vitest.svg";
import svelte from "../../public/assets/tech/svelte.svg";
import framer from "../../public/assets/tech/framer.svg";

import Image from "next/image";
import { motion, useInView, Variants } from "motion/react";
import MotionVisible from "../MotionComponent/MotionVisible";

const TechStacks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const techStackData = [
    {
      techName: "Next Js",
      techDescription: "Web development framework",
      techLogo: nextJs,
    },
    {
      techName: "React Js",
      techDescription: "Web development framework",
      techLogo: react,
    },
    {
      techName: "Javascript",
      techDescription: "Scripting language",
      techLogo: javascript,
    },
    {
      techName: "Typescript",
      techDescription: "Strongly typed programming language",
      techLogo: typescript,
    },
    {
      techName: "Astro Js",
      techDescription: "Web development framework",
      techLogo: astro,
    },
    {
      techName: "Svelte",
      techDescription: "Web development framework",
      techLogo: svelte,
    },
    {
      techName: "GSAP",
      techDescription: "Animation library",
      techLogo: gsap,
    },
    {
      techName: "Vite",
      techDescription: "Frontend build tool ",
      techLogo: vite,
    },
    {
      techName: "HTML",
      techDescription: "Markup language",
      techLogo: html,
    },
    {
      techName: "CSS",
      techDescription: "Style sheet language",
      techLogo: css,
    },
    {
      techName: "Node js",
      techDescription: "JavaScript runtime environment ",
      techLogo: nodejs,
    },
    {
      techName: "Jest",
      techDescription: "JavaScript testing framework",
      techLogo: jest,
    },
    {
      techName: "Redux",
      techDescription: "State management library",
      techLogo: redux,
    },
    {
      techName: "Strapi",
      techDescription: "Headless CMS platform",
      techLogo: strapi,
    },
    {
      techName: "Sanity",
      techDescription: "Headless CMS platform",
      techLogo: sanity,
    },
    {
      techName: "Sass",
      techDescription: "CSS preprocessor",
      techLogo: sass,
    },
    {
      techName: "Framer Motion",
      techDescription: "React animation library ",
      techLogo: framer,
    },
  ];

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
    <div
      className=" flex flex-col gap-30px pt-[85px] md:pt-[30px]"
      ref={ref}
      id="stacks"
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={cardVariants}
        className="flex flex-col items-start gap-2.5 pb-[30px]"
      >
        <div className="flex gap-2 items-center">
          <PiStack size={30} className="h-[35px] md:h-[40px]" />
          <p className="text-[24px] md:text-[26px] font-bold">My Stacks</p>
        </div>
        <p
          className="text-[#999999] text-[16px] md:text-[20px] font-medium "
          style={{ lineHeight: "150%" }}
        >
          Commitment to staying updated with the latest design trends and
          techniques.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {techStackData.map((tech, index) => {
          return (
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={cardVariants}
              key={`${tech.techName}`}
              className="flex flex-row md:flex-row items-start md:items-center md:px-[24px] py-[14px] gap-2.5"
            >
              <div
                className={`border w-[50px] object-cover h-[50px] p-2 rounded-[7px] bg-[#19191A] ${
                  tech.techName === "Framer Motion" && "bg-amber-300"
                }`}
              >
                <Image
                  src={tech.techLogo}
                  alt={tech.techName}
                  width={50}
                  style={{ height: "100%" }}
                />
              </div>
              <div className={`flex flex-col`}>
                <h3 className="text-[16px]">{tech.techName}</h3>
                <p className="text-[14px] text-[#999999]">
                  {tech.techDescription}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStacks;
