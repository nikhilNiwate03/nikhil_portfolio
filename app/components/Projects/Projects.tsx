"use client";
import React from "react";
import serverless from "../../public/assets/tech/serverlessDays.png";
import antstack from "../../public/assets/tech/antstack.png";
import invicta from "../../public/assets/tech/invicta_proj.png";
import design from "../../public/assets/tech/design.png";
import ProjectCards from "./ProjectCards";
import { motion } from "motion/react";
import MotionVisible from "../MotionComponent/MotionVisible";
import { MdOutlineRocketLaunch } from "react-icons/md";

const Projects = () => {
  const projectsData = [
    {
      projectTitle: "AntStack Website",
      projectImage: antstack,
      projectDescription: `Developed a modern, responsive company website highlighting serverless offerings, services, solutions, and case studies.
Implemented dynamic content management and blogging features to enhance SEO and user engagement.`,
      projectUrl: "https://www.antstack.com/",
      techStack: ["Astro Js", "Strapi", "Javascript", "React Js", "GSAP"],
    },
    {
      projectTitle: "Invicta",
      projectImage: invicta,
      projectDescription: `Built a dynamic data visualization platform with interactive charts and dashboards for real-time insights.
Integrated a subscription-based access model to manage user tiers and gated premium content.`,
      projectUrl: "",
      techStack: ["Next Js", "Mantine UI", "React query", "Recharts"],
    },
    {
      projectTitle: "AntStack Design",
      projectImage: design,
      projectDescription: `Created a visually engaging website to showcase the company’s UI/UX design services and process.
Focused on smooth animations, clean layouts, and case studies to attract and convert potential clients.`,
      projectUrl: "https://www.antstack.design/",
      techStack: ["Svelte", "Strapi", "Javascript"],
    },
    {
      projectTitle: "Serverless Event",
      projectImage: serverless,
      projectDescription:
        "Developed an event website for the company’s serverless gathering, featuring event details and speaker highlights.",
      projectUrl: `https://blr.serverlessdays.io/`,
      techStack: ["Astro Js", "Strapi"],
    },
  ];

  return (
    <div className="pt-[85px] md:pt-[30px]" id="projects">
      <MotionVisible>
        <div className="flex flex-col items-start gap-2.5 pb-[30px]">
          <div className="flex gap-2 items-center">
            <MdOutlineRocketLaunch size={30} className="h-[35px] md:h-[40px]" />
            <p className="text-[24px] md:text-[26px] font-bold">My Porjects</p>
          </div>
          <p
            className="text-[#999999] text-[16px] md:text-[20px] font-medium "
            style={{ lineHeight: "150%" }}
          >
            Commitment to staying updated with the latest design trends and
            techniques.
          </p>
        </div>
      </MotionVisible>
      <div className="flex flex-col gap-[40px]">
        {projectsData.map((project) => {
          return (
            <MotionVisible key={project.projectTitle}>
              <ProjectCards projectData={project} />
            </MotionVisible>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
