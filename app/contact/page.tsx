"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 313 4426513",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "saadahmad2111@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lahore, Punjab, Pakistan",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:h-[55%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 from-[#141414] to-black bg-gradient-to-b rounded-xl">
              <h3 className="text-4xl font-bold text-white">
                Let{"'"}s work together
              </h3>
              <p className="text-white/60">
                Have an idea in mind? Let{"'"}s build something that is remarkable and memorable for you and me.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="name" placeholder="Name" />
                <Input type="email" placeholder="Email" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                      <SelectItem value="est">Frontend Developement</SelectItem>
                      <SelectItem value="cst">
                        Fullstack Developement
                      </SelectItem>
                      <SelectItem value="mst">UI/UX Design</SelectItem>
                      <SelectItem value="sst">Other queries</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea className="h-52" placeholder="Type your message here." />
              <Button variant="secondary" className="max-w-40">Send message</Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 text-white">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=> {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-12 h-12 xl:w-20 bg-[#141414] text-accent rounded-md flex items-center justify-center">
                    <div className="text-2xl">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
