/* eslint-disable react/no-children-prop */
import { Code } from "@chakra-ui/react";
//import HoverCard from "../components/HoverCard";
import work1 from "../assets/works/work1.png";
import work2 from "../assets/works/work2.png";
import work3 from "../assets/works/work3.png";
import work4 from "../assets/works/work4.png";
//import work5 from "../assets/works/work5.jpg";
import work6 from "../assets/works/work6.png";
import work7 from "../assets/works/work7.png";
import work8 from "../assets/works/work8.png";
import work9 from "../assets/works/work9.png";
import { motion } from "framer-motion";

const Works = () => {
  const worksData = [
    {
      image: work1,
      title: "E-Request System CITC",
      desc: "A computer management system for the City Information Technology Center of the Local Government of Davao",
      url: "https://github.com/lagriamj/eRequest-Capstone",
      technologies: ["React", "Laravel", "Tailwind CSS", "MySQL"],
      video:
        "https://drive.google.com/file/d/1zSmtOOBEy4CzDEjI8-8W73Mk62neq-n2/view?usp=sharing",
    },
    {
      image: work7,
      title: "iVisit Camiguin - Backend",
      desc: "A ticketing system for the Camiguin Island, it comes with E-Ticketing, Merchandise, Accomodations, and Transportations",
      url: "https://github.com/lagriamj/camiguin-backend",
      site: "https://pos.poolreno.com/",
      technologies: ["VueJs", "Laravel", "PostgreSQL"],
    },
    {
      image: work9,
      title: "Conversate",
      desc: "A Forum System similar to Reddit and it is still in development",
      url: "https://github.com/lagriamj/Conversate",
      technologies: ["ReactJs", "Redux", "Laravel", "Tailwind", "MySQL"],
    },
    // {
    //   image: work3,
    //   title: "Solchat - UI",
    //   desc: "A copy ui chat application that uses the Solana Blockchain for its backend",
    //   url: "https://github.com/lagriamj/solchat",
    //   technologies: ["React", "Tailwind Css"],
    // },
    {
      image: work4,
      title: "DictioNorlax",
      desc: "A dictionary application that uses the Oxford Dictionary API",
      url: "https://github.com/lagriamj/DictioNorlax",
      technologies: ["Laravel"],
    },
    {
      image: work6,
      title: "Sales and Inventory System",
      desc: "A Sales and Inventory System for a local business in Davao City",
      url: "",
      technologies: ["PHP", "JavaScript", "MySQL"],
    },
    {
      image: work2,
      title: "AniMark",
      desc: "A simple anime search application that uses the Jikan API",
      url: "https://github.com/lagriamj/aniMark",
      technologies: ["React", "Tailwind Css", "Jikan API"],
    },
    {
      image: work8,
      title: "askMark",
      desc: "A simple chatbot application that uses the Gemini API",
      url: "https://github.com/lagriamj/chat-bot",
      technologies: ["React", "Tailwind Css", "Gemini API"],
    },
  ];

  return (
    <div className="w-full h-auto  flex flex-col items-center pb-10">
      <motion.h1
        initial={{ opacity: 0, y: "40px", visibility: false }}
        whileInView={{ opacity: 2, y: 0, visibility: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="lg:mb-10 text-5xl font-medium lg: mt-20"
      >
        My Works
      </motion.h1>
      <div className="flex flex-col ">
        {worksData.map((work, index) =>
          index % 2 === 0 ? (
            <motion.div
              initial={{ opacity: 0, x: "-100px" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              key={work.title}
              className="w-full flex flex-col lg:flex-row lg:gap-24 text-gray-200"
            >
              <div className="lg:w-1/2 flex items-center lg:justify-end justify-center py-6">
                <div className="relative lg:w-[65%] w-[90%] group">
                  <img src={work.image} alt={work.title} className="w-full" />
                  <div className="absolute inset-0  bg-black bg-opacity-50 flex flex-col gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black py-2 px-4 rounded"
                    >
                      Source Code
                    </a>
                    {work.video && (
                      <a
                        href={work.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black py-2 px-4 rounded cursor-pointer"
                      >
                        Watch Video
                      </a>
                    )}
                    {work.site && (
                      <a
                        href={work.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black py-2 px-4 rounded cursor-pointer"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full flex flex-col lg:gap-2 gap-4 lg:items-start items-center justify-around lg:py-14 pt-4 pb-12">
                <h1 className="text-2xl font-medium border-b-[1px] pb-2">
                  {work.title}
                </h1>
                <p className="w-[70%] lg:text-start text-center">{work.desc}</p>
                <div className="flex gap-2">
                  {work.technologies.map((tech) => (
                    <Code key={tech}>{tech}</Code>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: "100px" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              key={work.title}
              className="w-full flex lg:flex-row flex-col lg:gap-24 text-gray-200 bg-[#28292d]"
            >
              <div className="lg:w-1/2 lg:hidden flex items-center lg:justify-start justify-center py-6">
                <div className="relative lg:w-[65%] w-[90%] group">
                  <img src={work.image} alt={work.title} className="w-full" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black py-2 px-4 rounded"
                    >
                      Source Code
                    </a>
                    {work.video && (
                      <a
                        href={work.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black py-2 px-4 rounded cursor-pointer"
                      >
                        Watch Video
                      </a>
                    )}
                    {work.site && (
                      <a
                        href={work.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black py-2 px-4 rounded cursor-pointer"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full flex flex-col gap-2 lg:items-end items-center justify-around pt-4 pb-12">
                <h1 className="text-2xl font-medium">{work.title}</h1>
                <p className="w-[70%] lg:text-end text-center">{work.desc}</p>
                <div className="flex gap-2">
                  {work.technologies.map((tech) => (
                    <Code key={tech}>{tech}</Code>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2  hidden lg:flex items-center lg:justify-start justify-center py-6 ">
                <div className="relative lg:w-[65%] w-[90%] group">
                  <img src={work.image} alt={work.title} className="w-full" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black py-2 px-4 rounded"
                    >
                      Source Code
                    </a>
                    {work.video && (
                      <a
                        href={work.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black py-2 px-4 rounded cursor-pointer"
                      >
                        Watch Video
                      </a>
                    )}
                    {work.site && (
                      <a
                        href={work.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black py-2 px-4 rounded cursor-pointer"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Works;
