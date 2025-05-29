"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import LocalTime from "../LocalTime";
import ConnectForm from "./ConnectForm";
import MotionVisible from "../MotionComponent/MotionVisible";

const Footer = () => {
  return (
    <div className="border-t">
      <div className="max-w-[850px] m-auto  p-6 pt-[40px] pb-[50px] md:pb-[50px] flex flex-col gap-4">
        <p className="text-[40px] text-[#FAFAFA]">Let's Connect</p>
        <div className="border-l border-l-white pl-4 flex gap-5">
          <div className="flex-1 flex flex-col md:flex-row items-start justify-around gap-5">
            <div>
              <h4 className="text-[16px] text-[#999999] font-semibold flex flex-col gap-1.5">
                <p>Time for me:</p> <LocalTime />
              </h4>
            </div>
            <div className="flex flex-col gap-2.5">
              <h4 className="text-[16px] font-semibold">Email:</h4>
              <a
                href="mailto:nikhil.niwate@gmail.com"
                className="text-[#999999] text-[16px] font-medium cursor-pointer hover:text-[#FAFAFA]"
              >
                nikhil.niwate@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              <h4 className="text-[16px] font-semibold">Phone:</h4>
              <a
                href="tel:+919004274949"
                className="text-[#999999] text-[16px] font-medium cursor-pointer hover:text-[#FAFAFA] flex items-center gap-2"
              >
                <FiPhone />
                (+91) 9004274949
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              <h4 className="text-[16px] font-semibold">Socials:</h4>
              <a
                href="https://www.linkedin.com/in/nikhil-niwate-949531143/"
                className="text-[#999999] text-[16px] font-medium cursor-pointer hover:text-[#FAFAFA] flex gap-2 items-center"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
          {/* <div className="flex-1/4">
            <ConnectForm />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
