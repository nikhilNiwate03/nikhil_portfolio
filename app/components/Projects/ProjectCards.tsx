import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaLink } from "react-icons/fa6";

interface IPorjectItems {
  projectTitle: string;
  projectImage: StaticImageData | string;
  projectDescription: string;
  projectUrl: string;
  projectUrlName?: string;
  techStack: string[];
}

interface IProjectCards {
  projectData: IPorjectItems;
}

const ProjectCards = ({ projectData }: IProjectCards) => {
  const cleanUrl = projectData.projectUrl
    .replace(/^https?:\/\//, "") // Remove http:// or https://
    .replace(/\/$/, "");
  return (
    <div className="flex flex-col md:flex-row gap-5  p-2 items-center">
      <div className="h-[200px] flex-1 flex flex-col gap-2">
        <div className="flex md:hidden flex-col md:flex-row items-start md:items-center justify-between">
          <h4 className="">{projectData.projectTitle}</h4>
          {cleanUrl && (
            <a
              href={projectData.projectUrl}
              target="_blank"
              className="flex items-center gap-1.5 text-[#999999]  hover:text-gray-300 md:p-1.5 rounded-md"
            >
              <FaLink />

              <p className=" font-semibold" style={{ fontSize: "14px" }}>
                {projectData.projectUrlName
                  ? projectData.projectUrlName
                  : cleanUrl}
              </p>
            </a>
          )}
        </div>
        <Image
          src={projectData.projectImage}
          alt={projectData.projectTitle}
          className="border"
          style={{
            width: "100%",
            borderRadius: "6px",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="hidden md:flex flex-col md:flex-row items-start md:items-center justify-between">
          <h4 className="">{projectData.projectTitle}</h4>
          {cleanUrl && (
            <a
              href={projectData.projectUrl}
              target="_blank"
              className="flex items-center gap-1.5 text-[#999999]  hover:text-gray-300 md:p-1.5 rounded-md"
            >
              <FaLink />

              <p className=" font-semibold" style={{ fontSize: "14px" }}>
                {projectData.projectUrlName
                  ? projectData.projectUrlName
                  : cleanUrl}
              </p>
            </a>
          )}
        </div>
        <div className="text-[#999999] text-[12px] md:text-[14px] flex flex-col gap-2">
          <p>{projectData.projectDescription}</p>
          <ul className="flex flex-wrap gap-3.5  list-disc list-inside w-full">
            {projectData.techStack.map((val) => {
              return <li key={val}>{val}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
