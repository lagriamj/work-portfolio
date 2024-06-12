import React from "react";
import flutter from "../assets/flutter.png";
import { motion, useInView } from "framer-motion";

const Tools = () => {
  const frontendTools = [
    {
      name: "JavaScript",
      logo: "https://img.icons8.com/color/48/000000/javascript.png",
    },
    {
      name: "TypeScript",
      logo: "https://img.icons8.com/color/48/000000/typescript.png",
    },
    {
      name: "ReactJs",
      logo: "https://img.icons8.com/color/48/000000/react-native.png",
    },
    {
      name: "Flutter",
      logo: flutter,
    },
    {
      name: "Redux Toolkit",
      logo: "https://arthuranteater.com/static/a-f18023dce4a1ce45b2f977f9b7598404-160fa.png",
    },
    {
      name: "Framer Motion",
      logo: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
    },
    {
      name: "Tailwind",
      logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Tailwind_CSS_Logo.svg_GkNDLAs.png",
    },

    { name: "Git", logo: "https://img.icons8.com/color/48/000000/git.png" },
  ];

  const backendTools = [
    {
      name: "PHP",
      logo: "https://img.icons8.com/officel/80/000000/php-logo.png",
    },
    {
      name: "Python",
      logo: "https://img.icons8.com/color/48/000000/python.png",
    },
    {
      name: "Laravel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    },
    {
      name: "Django",
      logo: "https://img.icons8.com/color/48/000000/django.png",
    },
    {
      name: "MySQL",
      logo: "https://img.icons8.com/color/48/000000/mysql-logo.png",
    },
    {
      name: "PostgreSQL",
      logo: "https://img.icons8.com/color/48/000000/postgreesql.png",
    },
    {
      name: "Firebase",
      logo: "https://img.icons8.com/color/48/000000/firebase.png",
    },
    {
      name: "Docker",
      logo: "https://img.icons8.com/color/48/000000/docker.png",
    },
  ];

  const frontEnd = "Front-end technologies I prefer using".split(" ");

  const gridLogoVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const logoVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
        ease: "easeInOut",
      },
    },
  };

  const gridLogoVariants2 = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const logoVariants2 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
        ease: "easeInOut",
      },
    },
  };

  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.5 });
  const ref2 = React.useRef(null);
  const inView2 = useInView(ref2, { threshold: 0.5 });

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center border-b-[1px] border-b-gray-600 gap-10 pb-20 ">
      <div className="flex lg:gap-4 flex-wrap justify-center lg:px-0 px-4 mt-20">
        {frontEnd.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i / 10,
            }}
            key={i}
            className="lg:text-5xl text-2xl lg:text-start text-center font-medium lg:mt-20 lg:px-0 px-1"
          >
            {el + " "}
          </motion.span>
        ))}
      </div>

      <div className="w-[80%] h-auto flex flex-col items-center justify-center lg:text-start text-center">
        <h1 className="text-gray-300 text-lg my-6">
          Front-end technologies I prefer using
        </h1>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-20 gap-x-20 text-gray-300 text-lg mt-4"
          variants={logoVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          ref={ref}
        >
          {frontendTools.map((tool) => (
            <motion.div
              key={tool.name}
              className="flex flex-col items-center gap-2"
              variants={gridLogoVariants}
            >
              <img src={tool.logo} alt={tool.name} className="h-16 w-16" />
              <span>{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="w-[80%] h-auto flex flex-col items-center justify-center mt-16 ">
        <h1 className="text-gray-300 text-lg my-6 lg:text-start text-center">
          Backend technologies I prefer using
        </h1>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-24 gap-x-28 text-gray-300 text-lg mt-4"
          variants={logoVariants2}
          initial="hidden"
          animate={inView2 ? "show" : "hidden"}
          ref={ref2}
        >
          {backendTools.map((tool) => (
            <motion.div
              variants={gridLogoVariants2}
              key={tool.name}
              className="flex flex-col items-center gap-2"
            >
              <img src={tool.logo} alt={tool.name} className="h-16 w-16" />
              <span>{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Tools;
