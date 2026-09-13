import {
  FaReact,
  FaNodeJs,
  FaCss3,
  FaHtml5,
  FaGitAlt,
  FaAngular,
  FaVuejs,
  FaAws,
  FaDocker,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiTypescript, SiNativescript, SiMui } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";
import { TbPlaceholder } from "react-icons/tb";

import PackageJson from "../../package.json";

const skills: string[] = PackageJson.author.skills;

// A mapping of skills to their respective icons
// Extend new skills by importing the corresponding icon from react-icons
const skillIconMap: { [key: string]: JSX.Element } = {
  react: <FaReact />,
  angular: <FaAngular />,
  html: <FaHtml5 />,
  vuejs: <FaVuejs />,
  typescript: <SiTypescript />,
  nodejs: <FaNodeJs />,
  graphql: <GrGraphQl />,
  nextjs: <RiNextjsFill />,
  reactnative: <SiNativescript />,
  css: <FaCss3 />,
  javascript: <IoLogoJavascript />,
  bootstrap: <BsBootstrapFill />,
  materialui: <SiMui />,
  aws: <FaAws />,
  docker: <FaDocker />,
  git: <FaGitAlt />,
  java: <FaJava />,
  expressjs: <FaNodeJs />,
  python: <FaPython />,
};

// Map the skills to their icons
export const mappedSkills = skills.map((skill) => {
  const skillName = skill.replace(/\s/g, "").toLowerCase();
  return {
    name: skill,
    icon: skillIconMap[skillName] || <TbPlaceholder />, // Fallback to Placeholder Icon if no icon is found
  };
});
