import { FaPython, FaReact, FaWordpress } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiJupyter,
  SiKeras,
  SiOpencv,
  SiTensorflow,
  SiChakraui,
  SiTailwindcss,
} from "react-icons/si";
import IMG1 from "../assest/glimmerr.png";
import IMG3 from "../assest/hcn.png";
// import IMG2 from "../assest/bakespace mockup.png";
import IMG2 from "../assest/asl.png";
import IMG4 from "../assest/gharkarma.png";
import VID from "../assest/Sign Language Final Vid.mp4";

export const portfolios = [
  {
    title: "Glimmerr",
    description:
      "An interactive social media platform designed like, comment and follow each individual and post about glamorous content.",
    introduction:
      "Glimmerr is an innovative social media platform designed to celebrate and share glamorous content. This interactive platform connects users who are passionate about fashion, beauty, lifestyle, and all things glamorous. With Glimmerr, users can create stunning posts, engage with like-minded individuals, and follow the latest trends in the world of glamour.",
    image: IMG1,
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
    video: "",
    features: [
      {
        featureTitle: "Personal Profiles",
        featureDesc:
          " Each user has a customizable profile featuring a profile picture, bio, interests, and a gallery of their posts.",
      },
      {
        featureTitle: "Follow and Followers",
        featureDesc:
          " Users can follow other profiles to see their updates and gain followers who will see their content in their feeds.",
      },
      {
        featureTitle: "Glamorous Content Posting",
        featureDesc:
          "Users can share photos focusing on fashion, beauty, lifestyle, and other glamorous content.",
      },
      {
        featureTitle: "Likes and Comments",
        featureDesc:
          "Users can like and engage in discussions by commenting on posts",
      },
      {
        featureTitle: "Activity Feed",
        featureDesc:
          "A personalized feed showing updates from followed users and suggested content.",
      },
    ],
  },
  {
    title: "Sign Language Detection",
    description:
      "An interactive platform designed to communicate with diffrently abled people using American Sign Language. Additionally, the platform offers the ability to perform basic mathematical calculations.",
    introduction:
      "ASL Connect is an innovative interactive platform designed to facilitate communication with differently-abled individuals using American Sign Language (ASL). The platform leverages advanced AI technology to detect and interpret ASL in real-time, providing seamless communication for users. In addition to its core communication features, ASL Connect offers the ability to perform basic mathematical calculations, making it a versatile tool for both everyday interactions and educational purposes.",
    image: IMG2,
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
    video: VID,
    features: [
      {
        featureTitle: "Real-Time ASL Interpretation",
        featureDesc:
          "Uses AI-driven video analysis to interpret ASL signs in real-time, converting them to text for seamless communication",
      },
      {
        featureTitle: "Interactive Math Tools",
        featureDesc:
          " Allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.",
      },
      {
        featureTitle: "Accessible Design",
        featureDesc:
          "Ensures that the platform is easy to navigate and use, with large buttons, high contrast, and intuitive layouts.",
      },
    ],
  },

  {
    title: "Health Care Nepal",
    description:
      "Health Care Nepal is a platform dedicated to mental health, assisting individuals in finding the therapist they need and offering real-time chat functionality for communication.",
    introduction:
      "Health Care Nepal is a groundbreaking platform dedicated to providing mental health support and assistance to individuals in Nepal. With a focus on addressing the growing mental health challenges in the country, this platform serves as a vital resource for finding qualified therapists and accessing real-time chat functionality for communication.",
    image: IMG3,
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
    video: "",
    features: [
      {
        featureTitle: "Appointment Scheduling",
        featureDesc:
          "Users can book appointments directly through the platform, with options for in-person or virtual sessions.",
      },
      {
        featureTitle: "Instant Messaging",
        featureDesc:
          "Real-time chat system for immediate communication between users and therapists",
      },
      {
        featureTitle: "Intuitive Navigation",
        featureDesc:
          "Simple and clean design for easy access to all features and information.",
      },
      {
        featureTitle: "Responsive Design",
        featureDesc:
          "Optimized for use on desktops, tablets, and mobile devices, ensuring accessibility from anywhere.",
      },
      {
        featureTitle: "Ambulance",
        featureDesc:
          "Users can easily search and filter ambulances based on locations provided with phonenumbers",
      },
    ],
  },
  {
    title: "Ghar Karma",
    description:
      "GharKarma is a WordPress website I developed as a freelancer. It serves as a platform for various home services, connecting service providers with customers seeking assistance for their household needs.",
    introduction:
      "At GharKarma, we are dedicated to transforming your vision of luxury living into reality. Our platform offers a comprehensive suite of services encompassing luxury property design, Vastu consultation, and interior design. We specialize in creating spaces that seamlessly blend opulence with functionality, while adhering to the time-honored principles of Vastu Shastra for harmonious living.",
    image: IMG4,
    tools: [{ name: "WordPress", icon: <FaWordpress /> }],
    links: [
      {
        github: "",
        demo: "https://gharkarma.com/",
      },
    ],
    video: "",
    features: [
      {
        featureTitle: "Luxury Property Design",
        featureDesc:
          "Access a curated selection of design templates specifically tailored for luxury properties, including lavish residences.",
      },
      {
        featureTitle: "Vastu Consultation",
        featureDesc:
          "Users can access Vastu tips and recommendations by hovering over relevant elements or sections within the application.",
      },
      {
        featureTitle: "Interior Design",
        featureDesc:
          "Transform your living spaces with personalized style and functionality through curated inspiration, expert advice, and innovative tools for visualizing and realizing your dream home aesthetic.",
      },
    ],
  },
];

// {
//   title: "BakeSpace",
//   description:
//     " BackSpace is an online retail platform specializing in bakery items, offering features such as adding items to a cart and demo payment processing through integrated online payment systems.",
//   image: IMG2,
//   tools: [
//     { name: "Laravel", icon: <FaLaravel /> },
//     { name: "PHP", icon: <FaPhp /> },
//   ],
//   links: [
//     {
//       github: "https://github.com/SandeepJoshi111/BakeSpace",
//       demo: "",
//     },
//   ],
// },
