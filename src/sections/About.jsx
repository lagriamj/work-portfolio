/* eslint-disable react/no-children-prop */
import React from "react";
import me1 from "../assets/me1.webp";
import { motion, useInView } from "framer-motion";
import fblogo from "../assets/fblogo.png";
import xlogo from "../assets/xlogo.png";
import iglogo from "../assets/iglogo.png";
import linkedinlogo from "../assets/linkedinlogo.png";
import githublogo from "../assets/githublogo.png";
import { Code } from "@chakra-ui/react";

const About = () => {
  const ref = React.useRef(null);
  const textRef = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.5 });
  const txtInView = useInView(textRef, { threshold: 0.5 });

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center md:flex-row bg-[#28292d]">
      <div className="hidden md:flex w-1/2 h-full items-center justify-center">
        <motion.div
          initial={{ x: "-80px", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-80px", opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="h-[60%] w-[60%] border-2 border-white rounded-xl relative"
          ref={ref}
        >
          <motion.img
            whileHover={{
              top: 0,
              left: 0,
              transition: { duration: 0.5 },
            }}
            src={me1}
            alt="Mark John Lagria"
            className="w-full h-full object-cover absolute top-3 left-3 rounded-xl"
          />
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={
            txtInView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0 }
          }
          transition={{ duration: 0.8 }}
          className="w-[80%] flex flex-col items-center justify-center"
          ref={textRef}
        >
          <Code
            className="mb-8"
            style={{ fontSize: "2.0rem", fontWeight: "bold" }}
            children="About Me"
          />
          <p className="text-lg text-justify w-full md:w-[70%]">
            Hi, I&apos;m{" "}
            <span className="text-red-500 text-xl font-semibold">
              Mark John Lagria
            </span>
            , an aspiring{" "}
            <span className="text-red-500 text-xl font-semibold">
              software developer
            </span>{" "}
            who is passionate about creating innovative solutions and delivering
            high-quality web and mobile applications. I do both front-end and
            back-end development. I live in Edullantes Compound, Camasura Phase
            2, SGR Village, Catalunan Grande Davao City. My hobbies are playing
            computer games, watching anime, live-action TV series, and coding.
          </p>
          <div className="w-full md:w-[70%] mt-8 md:mt-20 flex justify-center">
            <ul className="flex gap-4 items-center">
              <li>
                <a
                  href="https://www.facebook.com/lagriamj18/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fblogo} alt="Facebook Logo" className="h-7 w-7" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/lagriamj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={xlogo} alt="X Logo" className="h-7 w-10" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/lagriamj/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={iglogo} alt="Instagram Logo" className="h-8 w-8" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lagriamj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedinlogo}
                    alt="LinkedIn Logo"
                    className="h-8 w-8"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/lagriamj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={githublogo}
                    alt="GitHub Logo"
                    className="h-10 w-10"
                  />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
