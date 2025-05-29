"use client";
import Blog from "./components/Blog/Blog";
import WorkExperience from "./components/Experience/WorkExperience";
import HeroSection from "./components/HeroSection/HeroSection";
import Projects from "./components/Projects/Projects";
import TechStacks from "./components/Stacks/TechStacks";

export default function Home() {
  return (
    <div className="mt-[10px] md:mt-24 overflow-hidden font-sans">
      <HeroSection />
      <div className="max-w-[850px] mx-auto py-2.5 md:py-5 flex flex-col  md:gap-[100px] mb-[80px] px-6">
        <WorkExperience />
        <Projects />
        <TechStacks />
        <Blog />
      </div>
    </div>
  );
}
