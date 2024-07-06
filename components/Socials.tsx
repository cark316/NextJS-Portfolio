import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  { icon: <FaGithub />, path: "https://github.com/cark316" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/saadahmad21" },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((items, index) => {
        return <Link href={items.path} key={index} className={iconStyles} target="_blank">{items.icon}</Link>;
      })}
    </div>
  );
};

export default Socials;
