import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full text-white">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello, I am <br />
              <span className="text-accent">Saad Ahmad</span>
            </h1>
            <p className="max-w-[512px] mb-8 text-white/80">
              I excel at crafting elegant digital experiences, proficency in a wide range of tools & libraries.
            </p>
            {/* Buttons & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="secondary" className="flex items-center gap-2">
                <a href="/resume.pdf" download="resume">
                  Resume
                </a>
                <FiDownload className="text-base" />
              </Button>
              <div>
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-md flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Placeholder Image */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

// old style
