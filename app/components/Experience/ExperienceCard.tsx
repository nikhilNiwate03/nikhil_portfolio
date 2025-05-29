"use client";
import { Variants, motion } from "motion/react";
import React from "react";
import Image, { StaticImageData } from "next/image";
import "./ExperienceCard.css";

interface ITechStackItem {
  detailsId: string | number;
  details: string;
}

export interface IExperienceItem {
  id: string | number;
  companyName: string;
  companyType: string;
  logo: StaticImageData | string;
  startDate: string;
  endDate: string;
  jobPosition: string;
  jobDescription: string;
  jobDetails: ITechStackItem[];
}

interface IExperienceCardProps {
  experienceData: IExperienceItem;
  cardVariants: Variants;
}

const ExperienceCard = ({
  experienceData,
  cardVariants,
}: IExperienceCardProps) => {
  return (
    <motion.div
      className="h-min md:border-l md:p-6  flex flex-col gap-2 md:gap-5"
      variants={cardVariants}
    >
      <div className="flex flex-col gap-2 md:flex-row items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="border bg-[#19191A] p-2.5 rounded-[8px] h-[40px] w-[40px] md:h-[50px] md:w-[50px]">
            <Image
              src={experienceData.logo}
              alt="AntStack Logo"
              width={40}
              height={40}
            />
          </div>

          <div className="flex flex-col items-start">
            <p className="text-[18px] md:text-[20px] font-bold">
              {experienceData.companyName}
            </p>
            <p className="text-[12px] md:text-[13px] font-medium text-[#999999]">
              {experienceData.companyType}
            </p>
          </div>
        </div>
        <div>
          <p className="text-md md:text-xl font-bold">
            {experienceData.startDate} - {experienceData.endDate}
          </p>
        </div>
      </div>
      <div className="md:p-4 flex flex-col gap-1">
        <p className="text-[16px] md:text-[18px] font-bold">
          {experienceData.jobPosition}
        </p>
        <p className="text-[14px] md:text-[16px] font-medium text-[#999999]">
          {experienceData.jobDescription}
        </p>
        <ul className="list-none text-[#999999] text-[14px] md:text-[16px] mt-2 flex flex-col gap-2 leading-6 pl-[3ch] relative">
          {experienceData.jobDetails.map((val) => {
            return (
              <li className="list_style" key={val.detailsId}>
                {val.details}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
