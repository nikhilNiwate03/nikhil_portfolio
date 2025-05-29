"use client";
import React from "react";
import ProjectCards from "../Projects/ProjectCards";
import blog from "../../public/assets/tech/blog.png";
import { RiBloggerLine } from "react-icons/ri";
import MotionVisible from "../MotionComponent/MotionVisible";

const Blog = () => {
  const blogData = [
    {
      projectTitle:
        "How to Set Up a Private Package Repository with JFrog Artifactory",
      projectImage: blog,
      projectDescription: `Developed a modern, responsive company website highlighting serverless offerings, services, solutions, and case studies.
Implemented dynamic content management and blogging features to enhance SEO and user engagement.`,
      projectUrl:
        "https://www.antstack.com/blog/how-to-set-up-a-private-package-repository-with-j-frog-artifactory-ant-stack-full-stack-serverless-company/",
      projectUrlName: "blog.com",
      techStack: ["React Js", "JFrog", "Roolup", "Monorepo"],
    },
  ];
  return (
    <div className="pt-[85px] md:pt-[30px]" id="blog">
      <MotionVisible>
        <div>
          <div className="flex flex-col items-start gap-2.5 pb-[30px]">
            <div className="flex gap-2 items-center">
              <RiBloggerLine size={30} className="h-[35px] md:h-[40px]" />
              <p className="text-[24px] md:text-[26px] font-bold">My Blog</p>
            </div>
          </div>
          {blogData.map((blog) => {
            return <ProjectCards key={blog.projectTitle} projectData={blog} />;
          })}
        </div>
      </MotionVisible>
    </div>
  );
};

export default Blog;
