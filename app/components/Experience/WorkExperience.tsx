"use client";
import React, { useEffect, useRef } from "react";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import MotionUp from "../MotionComponent/MotionUp";
import ExperienceCard, { IExperienceItem } from "./ExperienceCard";
import { motion, useInView, Variants } from "motion/react";
import ALogo from "../../public/assets/A.svg";
import Tlogo from "../../public/assets/Tlogo.png";
import { RiNextjsFill } from "react-icons/ri";

const WorkExperience = () => {
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  const workData: IExperienceItem[] = [
    {
      id: 1,
      companyName: "AntStack",
      companyType: "Full Stack Serverless Company",
      logo: ALogo,
      startDate: "2022",
      endDate: "Present",
      jobPosition: "Member of Technical Staff-2",
      jobDescription:
        "Headed product design initiatives, defined design strategy, and ensured alignment with business objectives for market-leading products.",
      jobDetails: [
        {
          detailsId: 11,
          details:
            "Built and published a scalable UI component library to JFrog Artifactory, enabling consistent, reusable design systems across multiple applications. Integrated Ladle for isolated component testing, boosting development efficiency.",
        },
        {
          detailsId: 12,
          details:
            "Optimized frontend performance through lazy loading, minimized API calls, and progressive prefetching, resulting in faster load times and improved user experience across large-scale web apps",
        },
        {
          detailsId: 13,
          details:
            "Developed CMS-driven, configurable modules using Sanity.io, allowing non-technical users to update content independently. This reduced engineering involvement and improved go-to-market agility.",
        },
        {
          detailsId: 14,
          details:
            "Implemented federated authentication with Auth0 and Okta, ensuring secure, seamless enterprise SSO and session management. Enhanced security and user onboarding for internal and external users.",
        },
        {
          detailsId: 15,
          details:
            "Engineered a dynamic, server-side Ag Grid system supporting large datasets, nested views, and customizable filters. This improved app scalability, data handling, and decision-making workflows.",
        },
      ],
    },
    {
      id: 2,
      companyName: "Tata Consultancy Service",
      companyType: "Global IT services and consulting firm",
      logo: Tlogo,
      startDate: "2020",
      endDate: "2022",
      jobPosition: "System Engineer",
      jobDescription:
        "Headed product design initiatives, defined design strategy, and ensured alignment with business objectives for market-leading products.",
      jobDetails: [
        {
          detailsId: 21,
          details:
            "Implemented full-stack SEO strategies to improve Core Web Vitals, increase organic traffic, and enhance website visibility in search engines.",
        },
        {
          detailsId: 22,
          details:
            "Built a high-performance marketing website using Astro with Static Site Generation (SSG), delivering clean HTML, fast load times, and minimal JavaScript for SEO impact.",
        },
        {
          detailsId: 23,
          details:
            "Integrated analytics tools like Google Analytics, Ahrefs, and Mixpanel to monitor SEO KPIs, track user behavior, and evaluate marketing effectiveness.",
        },
        {
          detailsId: 24,
          details:
            "Configured Strapi as a headless CMS, enabling the marketing team to manage blogs, meta tags, canonical URLs, and structured data without dev involvement.",
        },
        {
          detailsId: 25,
          details:
            "Developed smooth GSAP animations to boost user engagement, while authoring internal documentation on SEO-friendly coding and performance best practices.",
        },
      ],
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
        duration: 0.3,
        delay: 0.1,
        ease: "easeIn",
      },
    },
  };

  return (
    <div
      className="font-sans flex flex-col gap-8 pt-[85px] md:pt-[30px]"
      id="experience"
    >
      <div className="flex flex-col gap-2.5">
        <MotionUp>
          <div className="flex items-center gap-5">
            <BiBriefcaseAlt2 size={40} className="h-[35px] md:h-[40px]" />
            <h2 className={"text-[24px] md:text-[26px] font-bold"}>
              My Experience
            </h2>
          </div>
        </MotionUp>
        <MotionUp>
          <p
            className="text-[#999999] text-[16px] md:text-[20px] font-medium "
            style={{ lineHeight: "150%" }}
          >
            Navigating diverse environments with adaptability and expertise for
            holistic solutions.
          </p>
        </MotionUp>
      </div>
      <div className="flex flex-col gap-10">
        {workData.map((work, index) => {
          return (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
            >
              <ExperienceCard
                experienceData={work}
                cardVariants={cardVariants}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;
