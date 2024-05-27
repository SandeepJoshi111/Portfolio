import { FaLaravel, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import IMG1 from "../assest/Health Care Nepal.svg";
import IMG2 from "../assest/bakespace mockup.png";
// import IMG3 from "../assest/Wave Assult.png";
import IMG4 from "../assest/ASL mockup.png";
import IMG5 from "../assest/Glimmer-mockup.png";
import {
  SiJupyter,
  SiKeras,
  SiOpencv,
  SiTensorflow,
  SiChakraui,
  SiTailwindcss,
  // SiUnrealengine,
} from "react-icons/si";

export const portfolios = [
  {
    title: "Glimmerr",
    description:
      "An interactive social media platform designed like, comment and follow each individual and post about glamorous content.",
    image: IMG5,
    tools: [
      { name: "React", icon: <FaReact /> },
      { name: "Firebase", icon: <IoLogoFirebase /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Chakra", icon: <SiChakraui /> },
    ],
    links: [
      {
        github:
          "https://github.com/SandeepJoshi111/American-Sign-Language-Detection",
        demo: "https://glimmerr.vercel.app/",
      },
    ],
  },
  {
    title: "Sign Language Detection",
    description:
      "An interactive platform designed to communicate with diffrently abled people using American Sign Language. Additionally, the platform offers the ability to perform basic mathematical calculations.",
    image: IMG4,
    tools: [
      { name: "Python", icon: <FaPython /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Keras", icon: <SiKeras /> },
      { name: "Jupyter", icon: <SiJupyter /> },
    ],
    links: [
      {
        github:
          "https://github.com/SandeepJoshi111/American-Sign-Language-Detection",
        demo: "",
      },
    ],
  },
  {
    title: "BakeSpace",
    description:
      " BackSpace is an online retail platform specializing in bakery items, offering features such as adding items to a cart and demo payment processing through integrated online payment systems.",
    image: IMG2,
    tools: [
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "PHP", icon: <FaPhp /> },
    ],
    links: [
      {
        github: "https://github.com/SandeepJoshi111/BakeSpace",
        demo: "",
      },
    ],
  },
  // {
  //   title: "Wave Assault",
  //   description:
  //     "Wave Assault is a competitive, wave-based game where players engage in combat until they successfully navigate through each wave, striving to survive until the end.",
  //   image: IMG3,
  //   tools: [{ name: "Unreal Engine ", icon: <SiUnrealengine /> }],
  //   links: [
  //     {
  //       github: "https://github.com/SandeepJoshi111/Wave-Assault",
  //       demo: "",
  //     },
  //   ],
  // },
  {
    title: "Health Care Nepal",
    description:
      "Health Care Nepal is a platform dedicated to mental health, assisting individuals in finding the therapist they need and offering real-time chat functionality for communication.",
    image: IMG1,
    tools: [
      { name: "React", icon: <FaReact /> },
      { name: "Firebase", icon: <IoLogoFirebase /> },
    ],
    links: [
      {
        github: "https://github.com/SandeepJoshi111/project-app",
        demo: "https://healthcarenepal.vercel.app/",
      },
    ],
  },
];
