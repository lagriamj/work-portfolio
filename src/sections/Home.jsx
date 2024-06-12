/* eslint-disable react/no-children-prop */
import { FaDownload } from "react-icons/fa";
import me from "../assets/me1.webp";
import { motion, useInView } from "framer-motion";
import resume from "../../public/Resume_Lagria-main.pdf";
import { useRef } from "react";

const Home = () => {
  const ref = useRef(null);
  const imgRef = useRef(null);

  // Use the inView hook with the created refs
  const inView = useInView(ref, { threshold: 0.5 });
  const imgInView = useInView(imgRef, { threshold: 0.5 });

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center md:flex-row overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        animate={inView ? { x: 0, opacity: 1 } : { x: "-100px", opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-full md:w-1/2 h-full flex items-center justify-center text-justify flex-col gap-4"
        ref={ref}
      >
        <h1 className="lg:text-6xl text-5xl font-medium">Hello, There!</h1>

        <p className="text-base text-gray-300 w-[80%] lg:w-[70%]">
          I am Mark John Lagria from Davao City, Philippines. I am a graduating
          IT student from the University of Mindanao and i am an aspiring
          Software Developer. I can do Full-stack Development, but my main is
          Back-end Development.
        </p>
        <motion.a
          href={resume}
          download={resume}
          className="py-2 px-3 bg-transparent border-2 border-white  rounded-lg text-sm text-white ml-4 mr-10 cursor-pointer relative overflow-hidden"
          whileHover="hover"
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-red-500 z-0 "
            initial={{ width: 0 }}
            variants={{
              hover: { width: "100%" },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <span className="relative z-10 flex items-center justify-center gap-2">
            Download CV <FaDownload className="relative z-10" />
          </span>
        </motion.a>
      </motion.div>
      <div className="hidden md:flex w-full md:w-1/2 h-full items-center justify-center flex-col">
        <motion.div
          initial={{ opacity: 0, x: "100px" }}
          animate={
            imgInView ? { x: 0, opacity: 1 } : { x: "100px", opacity: 0 }
          }
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-[80%] md:w-[60%] h-[50%] md:h-[60%] flex items-center justify-center bg-[#313131] rounded-lg  relative"
          ref={imgRef}
        >
          <img
            src={me}
            alt="me"
            className="w-full h-full object-cover absolute bottom-10 right-10 rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
