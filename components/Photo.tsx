"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="h-full w-full relative">
      <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {delay:2 ,duration:0.4, ease:"easeIn"}}}>
        <div className="h-[324px] w-[324px] xl:h-[512px] xl:w-[512px] mix-blend-lighten">
          <Image
            src="/photo.jpg"
            priority
            quality={100}
            fill
            alt="photo"
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
