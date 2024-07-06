"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Frontend Developement",
    desc: "Frontend Developement",
    href: "",
  },
  {
    num: "02",
    title: "Fullstack Developement",
    desc: "Fullstack Developement",
    href: "",
  },
  {
    num: "03",
    title: "No code Developement",
    desc: "Webflow/Framer Developement",
    href: "",
  },
  {
    num: "04",
    title: "UI/UX Design",
    desc: "UI/UX Design",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 text-white">
      <div className="container mx-auto">
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {delay:2.4, duration:0.4,ease:"easeIn"}}} className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service,index)=>(
            <div key={index} className="group flex-1 flex flex-col justify-center gap-6">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link href={service.href} className="h-12 w-12 bg-white rounded-xl flex items-center justify-center group-hover:bg-accent transition-all duration-500"><BsArrowDownRight className="text-3xl text-primary"/></Link>
              </div>
              <h2 className="text-4xl font-bold leading-none">{service.title}</h2>
              <p className="text-white/60">{service.desc}</p>
              <div className="border border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
