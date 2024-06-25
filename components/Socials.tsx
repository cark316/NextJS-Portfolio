import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((items, index) => {
        return <Link href={items.path} key={index} className={iconStyles}>{items.icon}</Link>;
      })}
    </div>
  );
};

export default Socials;
