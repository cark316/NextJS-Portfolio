"use client";

import { motion } from "framer-motion";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

interface StackItem {
  name: string;
}

interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: StackItem[];
  image: string;
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    num: "01",
    category: "Frontend",
    title: "Project 1",
    description:
      "Landing page for e-commerce website Avion, design taken from figma.",
    stack: [
      { name: "Vite + React" },
      { name: "TailwindCSS" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
    image: "/project1.png",
    live: "https://avion-project.vercel.app",
    github: "https://github.com/cark316/Avion",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Project 2",
    description:
      "Landing page for a real estate website Estatein, design taken from figma, only 2 pages were developed and the design is not responsive.",
    stack: [
      { name: "Vite + React" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
    image: "/project2.png",
    live: "https://estatein-project.vercel.app/",
    github: "https://github.com/cark316/EstateinProject",
  },
  {
    num: "03",
    category: "Fullstack CRUD App",
    title: "Project 3",
    description:
      "Fullstack CRUD App created using Vite + React for the Frontend, Node.js + Express.js and MongoDB for the backend.",
    stack: [
      { name: "Vite + React" },
      { name: "TailwindCSS" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/project3.png",
    live: "null",
    github: "https://github.com/cark316/CRUD-User-APP",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Project 4",
    description:
      "Bouquet website layout implementation in Next.js utilizing TailwindCSS, design from figma.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }],
    image: "/project4.png",
    live: "null",
    github: "https://github.com/cark316/Kyiv-Boutique-Landing",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="group w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-8 h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-outline text-transparent">
                {project.num}
              </div>
              <h2 className="text-5xl font-bold leading-none text-white group-hover:text-accent transition-all capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-base text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 ">
                {project.live !== "null" ? (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center">
                          <BsArrowUpRight className="text-white text-4xl hover:text-accent transition-all duration-250" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center">
                        <BsGithub className="text-white text-4xl hover:text-accent transition-all duration-250" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[512px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[456px] relative group flex items-center justify-center bg-gradient-to-b from-[#141414] to-black rounded-xl overflow-hidden">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover object-left"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="hover:bg-accent text-primary text-2xl w-8 h-8 flex items-center justify-center rounded-md transition-all"
                iconStyles="text-white"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
