import { BiLaptop } from "react-icons/bi";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="w-full lg:h-screen h-auto flex flex-col items-center justify-center font-sans border-b-[1px] border-b-gray-600 lg:pb-0 pb-10">
      <div className="lg:h-[20%] lg:w-[80%] lg:mb-0 mb-10 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: "-80px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="lg:text-5xl text-4xl lg:mt-20 "
        >
          Services I offer
        </motion.h1>
      </div>
      <div className="h-[80%] w-[80%] flex lg:flex-row flex-col items-center justify-center lg:gap-12 gap-6 ">
        <motion.div
          initial={{ opacity: 0, x: "-80px" }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="lg:w-[40%] w-[90%] lg:h-[70%] h-auto flex flex-col gap-10 items-center justify-center "
        >
          <span className="bg-[#0092FF] rounded-[100%] px-4 py-5 text-xs font-medium spacing tracking-wider">
            HTTP
          </span>
          <h1 className="text-gray-300 text-center lg:text-start text-2xl">
            Back-end Development
          </h1>
          <p className="w-full text-center text-gray-300">
            Providing backend development with a focus on creating robust and
            scalable RESTful APIs. Leveraging proven frameworks, ensuring
            efficient and high-quality code that powers your web applications.
            Expertise includes seamless integration of your web app with
            corporate systems, delivering reliable and well-structured APIs to
            meet your business needs.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "80px" }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="lg:w-[40%] w-[90%] lg:h-[70%] h-auto flex flex-col gap-10 items-center justify-center "
        >
          <span className="bg-[#0092FF] rounded-[100%] px-5 py-4 text-xs font-medium spacing tracking-wider lg:mt-0 mt-10">
            <BiLaptop className="w-6 h-6" />
          </span>
          <h1 className="text-gray-300 text-center lg:text-start text-2xl">
            Front-end Development
          </h1>
          <p className="w-full text-center text-gray-300">
            Delivering frontend development with an emphasis on creating dynamic
            and responsive user interfaces. Utilizing modern frameworks and best
            practices to ensure high-performance and visually appealing web
            applications. Expertise in creating intuitive and engaging user
            experiences that seamlessly integrate with backend systems.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
