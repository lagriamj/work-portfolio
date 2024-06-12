/* eslint-disable react/no-children-prop */
import { Code } from "@chakra-ui/react";
import React from "react";
import cert1 from "../assets/certs/cert1.jpg";
import cert2 from "../assets/certs/cert2.jpg";
import cert3 from "../assets/certs/cert3.jpg";
import cert4 from "../assets/certs/cert4.jpg";
import cert5 from "../assets/certs/cert5.jpg";
import { useInView, motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7, // Adjust duration as needed
      staggerChildren: 0.2, // Adjust stagger delay between cards
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, transform: "translateY(20px)" }, // Add an initial transform
  show: { opacity: 1, transform: "translateY(0px)" }, // Animate transform on show
};

const Certificates = () => {
  const ref = React.useRef(null);
  const ref2 = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.5 });
  const inView2 = useInView(ref2, { threshold: 0.5 });
  return (
    <div className="w-full h-auto bg-[#4c4e55] flex flex-col items-center justify-center">
      <Code
        className="my-10"
        style={{ fontSize: "2rem" }}
        children="Certificates"
      />
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4  place-items-center p-6"
        ref={ref}
      >
        <motion.img
          variants={cardItemVariants}
          src={cert4}
          alt="certificate 1"
        />
        <motion.img
          variants={cardItemVariants}
          src={cert5}
          alt="certificate 2"
        />
        <motion.img
          variants={cardItemVariants}
          src={cert3}
          alt="certificate 3"
          className=""
        />
      </motion.div>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={inView2 ? "show" : "hidden"}
        className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4  place-items-center p-6"
        ref={ref2}
      >
        <motion.img
          variants={cardItemVariants}
          src={cert1}
          alt="certificate 1"
        />
        <motion.img
          variants={cardItemVariants}
          src={cert2}
          alt="certificate 2"
        />
      </motion.div>
    </div>
  );
};

export default Certificates;
