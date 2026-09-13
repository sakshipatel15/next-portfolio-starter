import type { ReactNode } from "react";
import {
  FaReact,
  FaNodeJs,
  FaCss3,
  FaHtml5,
  FaGitAlt,
  FaAngular,
  FaFire,
} from "react-icons/fa";
import {
  SiTypescript,
  SiIonic,
  SiSupabase,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReactNative, TbPlaceholder } from "react-icons/tb";

import PackageJson from "../../package.json";

const skills: string[] = PackageJson.author.skills;

function normalizeSkill(skill: string) {
  return skill.replace(/[\s.]/g, "").toLowerCase();
}

const skillIconMap: Record<string, ReactNode> = {
  react: <FaReact />,
  reactjs: <FaReact />,
  reactnative: <TbBrandReactNative />,
  angular: <FaAngular />,
  ionic: <SiIonic />,
  html: <FaHtml5 />,
  html5: <FaHtml5 />,
  typescript: <SiTypescript />,
  javascript: <IoLogoJavascript />,
  nodejs: <FaNodeJs />,
  nextjs: <SiNextdotjs />,
  css: <FaCss3 />,
  css3: <FaCss3 />,
  tailwindcss: <SiTailwindcss />,
  supabase: <SiSupabase />,
  firebase: <FaFire />,
  git: <FaGitAlt />,
};

export const mappedSkills = skills.map((skill) => {
  const key = normalizeSkill(skill);
  return {
    name: skill,
    icon: skillIconMap[key] || <TbPlaceholder />,
  };
});
