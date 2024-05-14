import { BsGithub, BsWordpress } from "react-icons/bs";
import {
  FaBootstrap,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import {
  SiAdobeillustrator,
  SiBlender,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiKeras,
  SiMongodb,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
  SiVisualstudiocode,
} from "react-icons/si";

export const abouts = [
  {
    id: 1,
    title: "Frontend Centric",
    tools: [
      { name: "HTMl", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "React", icon: <SiReact /> },
      { name: "Tailwindcss", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Wordpress", icon: <BsWordpress /> },
    ],
  },
  {
    id: 2,
    title: "Backend Centric",
    tools: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Node", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
    ],
  },
  {
    id: 3,
    title: "Designing",
    tools: [
      { name: "Blender", icon: <SiBlender /> },
      { name: "Adobe Illutrator", icon: <SiAdobeillustrator /> },
      { name: "Figma", icon: <IoLogoFigma /> },
    ],
  },
  {
    id: 4,
    title: "Databases",
    tools: [
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "MySql", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    id: 5,
    title: "Data Science",
    tools: [
      { name: "Jupyter", icon: <SiJupyter /> },
      { name: "Keras", icon: <SiKeras /> },
      { name: "Tensorflow", icon: <SiTensorflow /> },
    ],
  },
  {
    id: 6,
    title: "Productivity",
    tools: [
      { name: "VS Code", icon: <SiVisualstudiocode /> },
      { name: "Github", icon: <BsGithub /> },
    ],
  },
];
