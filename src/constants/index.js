import { meta, shopify, starbucks, tesla } from "../assets/images";
import bd from "../assets/images/bd.png";
import am2 from "../assets/images/am2.png";
import mm from "../assets/images/mm.png";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";
import figma from "../assets/icons/figma.svg";
import sql from "../assets/icons/sql.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import php from "../assets/icons/php.svg";
import laravel from "../assets/icons/laravel.svg";
import ci from "../assets/icons/ci.svg";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Database",
  },
  {
    imageUrl: bootstrap,
    name: "bootstrap",
    type: "Animation",
  },
  {
    imageUrl: php,
    name: "php",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: laravel,
    name: "Laravel",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: ci,
    name: "CI",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Content Creator",
    company_name: "AboutMalang.com",
    icon: am2,
    iconBg: "#5551FF",
    date: "Jun 2022 - Now",
    points: [
      "Meet Expecation Award (586 articles during 3 months of training).",
      "Able and willing to produce 10 articles per day.",
      "Make an article worth reading without plagiarism.",
      "Using SEO Concept to make the article on page 1.",
    ],
  },
  {
    title: "Internship",
    company_name: "Indonesia Multimedia",
    icon: mm,
    iconBg: "#FFB534",
    date: "Jan 2022 - Jun 2022",
    points: [
      "Learn everything related to social media and the world of online industry.",
      "Developing skills in making posts that are worth sharing on social media.",
      "Learning about wordpress and website development to UI/UX Design.",
      "Creating some websites with PHP programming language.",
    ],
  },
  {
    title: "Visual Creative Department Staff",
    company_name: "CV Birudeun Creative",
    icon: bd,
    iconBg: "#C1F2B0",
    date: "Nov 2021 - Mei 2022",
    points: [
      "Create designs for client's Instagram posts.",
      "Adjust performance with KPIs that must be achieved.",
      "Responsible for the correctness of the post and the information included.",
      "Posting uploads on Instagram with copywriting techniques as an attraction.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Chat AI",
    description:
      "Using openai api to create an AI chat that can simplify learning problems, both in school and everyday life.",
    link: "https://github.com/Fabyan08/Sevima-AutoLearn",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Tripjoy, FE Trip Website",
    description:
      "Created a frontend website for Tripjoy, a travel agency. The website is fully responsive and mobile-friendly, U can always get in touch with it on my github.",
    link: "https://github.com/Fabyan08/tripjoy",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "2nd Portfolio Website",
    description:
      "Designed and built with Figma and React JS with Tailwind CSS to make it look modern and responsive. Also U can check it on my github!",
    link: "https://github.com/Fabyan08/fabyan-v2",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Movie Web",
    description:
      "Build a website using TMDB API using React JS and apply the design according to Figma that has been made and apply clean code.",
    link: "https://github.com/Fabyan08/MovieWeb",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Koding Bareng",
    description:
      "Developed a community called 'Kodinhg Bareng'. Here you can find people who are interested in coding and learn together with me!",
    link: "https://github.com/Fabyan08/kodingbareng",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Freelance Project",
    description:
      "Build front end website from freelance clinent to build a car dealer website that can use for any further update from him.",
    link: "https://github.com/Fabyan08/mobilgo",
  },
];
