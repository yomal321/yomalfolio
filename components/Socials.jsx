"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

// icons

const icons = [
  // {
  //  geegege path: "https://www.youtube.com/@inspirelk438",
  //   name: <RiYoutubeFill />,
  // },
  {
    path: "https://www.linkedin.com/in/yomal-theekshana-7618b9314/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/yomal321",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100093065264289&mibextid=wwXIfr&mibextid=wwXIfr",
    name: <RiFacebookFill />,
  },
  {
    path: "#",
    name: <RiInstagramFill />,
  },
];
const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
