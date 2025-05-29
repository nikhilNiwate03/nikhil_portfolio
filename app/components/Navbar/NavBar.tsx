"use client";
import React, { useState } from "react";
import "./Navbar.css";
import WorkStatus from "../WorkStatus";
import LocalTime from "../LocalTime";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { PiStack } from "react-icons/pi";
import { RiBloggerLine } from "react-icons/ri";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Cross as Hamburger } from "hamburger-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      name: "Home",
      url: "#home",
      icon: <IoPersonOutline size={20} />,
      mobIcon: <IoPersonOutline size={35} />,
    },
    {
      name: "Experience",
      url: "#experience",
      icon: <BiBriefcaseAlt2 size={20} />,
      mobIcon: <BiBriefcaseAlt2 size={35} />,
    },
    {
      name: "Projects",
      url: "#projects",
      icon: <MdOutlineRocketLaunch size={20} />,
      mobIcon: <MdOutlineRocketLaunch size={35} />,
    },
    {
      name: "Stacks",
      url: "#stacks",
      icon: <PiStack size={20} />,
      mobIcon: <PiStack size={35} />,
    },
    {
      name: "Blog",
      url: "#blog",
      icon: <RiBloggerLine size={20} />,
      mobIcon: <RiBloggerLine size={35} />,
    },
  ];

  const handleOpenMenu = () => {
    console.log("OPEN");
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar_main  flex justify-center md:justify-between items-center">
        <div className="hidden md:block">
          <WorkStatus />
        </div>
        <div className="flex lg:hidden gap-2 links_div">
          {links.map((val) => {
            return (
              <a
                key={val.name}
                href={val.url}
                className="flex items-center gap-1.5 text-white text-sm mt-1 text-[14px] uppercase font-semibold bg-black px-2 py-1 shadow-lg"
              >
                <span>{val.icon}</span>
                {val.name}
              </a>
            );
          })}
        </div>
        <div
          className={"navbar_mobile w-full flex items-center justify-between"}
        >
          <Avatar style={{ height: "50px", width: "50px" }}>
            <AvatarFallback className="text-[20px] font-semibold">
              NN
            </AvatarFallback>
          </Avatar>
          <div className="relative flex">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>
        <div className="hidden lg:flex gap-3 text-[16px] ">
          <p className="text-[16px] text-[#999999]">Local Time: </p>
          <LocalTime />
        </div>
      </div>
      <div className={`mobile_menu ${isOpen && "openPanel"}`}>
        <div className="h-full w-full flex flex-col items-center justify-start pt-[40px] px-[35px] gap-5">
          {links.map((val) => {
            return (
              <a
                key={val.name}
                href={val.url}
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center gap-5 text-white text-sm mt-1 text-[32px] uppercase font-semibold bg-black px-2 py-1 shadow-lg"
              >
                <span>{val.mobIcon}</span>
                {val.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
