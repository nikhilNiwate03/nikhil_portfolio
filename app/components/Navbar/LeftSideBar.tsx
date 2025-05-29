"use client";
import React, { useState } from "react";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { PiStack } from "react-icons/pi";
import { RiBloggerLine } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LeftSideBar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    {
      name: "Home",
      url: "#home",
      icon: <IoPersonOutline size={30} />,
    },
    {
      name: "Experience",
      url: "#experience",
      icon: <BiBriefcaseAlt2 size={30} />,
    },
    {
      name: "Projects",
      url: "#projects",
      icon: <MdOutlineRocketLaunch size={30} />,
    },
    {
      name: "Stacks",
      url: "#stacks",
      icon: <PiStack size={30} />,
    },
    {
      name: "Blog",
      url: "#blog",
      icon: <RiBloggerLine size={30} />,
    },
  ];

  return (
    <div className="h-full flex items-center justify-center flex-col gap-[40px]">
      <div className="mt-[20px]">
        <Avatar style={{ height: "50px", width: "50px" }}>
          <AvatarFallback className="text-[20px] font-semibold">
            NN
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="h-full flex flex-col items-center justify-center gap-[40px]">
        {links.map((link) => {
          return (
            <div
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative"
              key={link.name}
            >
              <a href={link.url}>{link.icon}</a>
              {hoveredLink === link.name && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-white text-sm mt-1 border absolute top-[-4px] left-[55px] text-[16px] uppercase font-semibold bg-black px-2 py-1 rounded shadow-lg"
                >
                  {link.name}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSideBar;
