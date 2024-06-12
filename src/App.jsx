import "./App.css";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Service from "./sections/Service";
import Tools from "./sections/Tools";
import Works from "./sections/Works";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="drawer overflow-hidden font-sans">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-[#232323] text-white">
        {/* Navbar */}
        <div className="w-full navbar bg-[#232323] shadow-lg text-white fixed top-0 z-50">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">lagriamj.portfolio</div>
          <div className="flex-none hidden lg:block flex items-center mr-auto">
            <div className="flex items-center justify-center">
              <ul className="menu menu-horizontal flex justify-center">
                {/* Navbar menu content here */}
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#service">Service</a>
                </li>
                <li>
                  <a href="#tools">Tools</a>
                </li>
                <li>
                  <a href="#works">Works</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <motion.a
              href="#contact"
              className="py-2 px-3 bg-transparent border-2 border-white rounded-lg text-sm text-white ml-4 mr-10 cursor-pointer relative overflow-hidden"
              whileHover="hover"
            >
              <motion.div
                className="absolute top-0 left-0 h-full bg-red-500 z-0"
                initial={{ width: 0 }}
                variants={{
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <span className="relative z-10">Let&apos;s Talk</span>
            </motion.a>
          </div>
        </div>
        {/* Page content here */}
        <div className="mt-16 h-auto" id="home">
          <Home />
        </div>
        <div className="h-auto" id="service">
          <Service />
        </div>
        <div className="h-auto" id="tools">
          <Tools />
        </div>
        <div className="h-auto" id="works">
          <Works />
        </div>
        <div className="h-auto" id="contact">
          <Contact />
        </div>
        <div className="h-auto" id="footer">
          <Footer />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-main text-white">
          {/* Sidebar content here */}
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#tools">Tools</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
