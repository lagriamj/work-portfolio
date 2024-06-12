import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer flex flex-col md:flex-row items-center p-4 bg-neutral text-neutral-content">
      <aside className="flex flex-col md:flex-row items-center md:gap-4 gap-2  md:mb-0">
        <div className="flex items-center">
          <MdEmail className="h-5 w-5 ml-0 md:ml-10" />
          <span className="ml-2">markjohn.lagria8@gmail.com</span>
        </div>
        <div className="flex items-center">
          <BsTelephoneFill className="h-5 w-5 ml-0 md:ml-6" />
          <span className="ml-2">(63)+ 995-905-0267</span>
        </div>
      </aside>
      <nav className="flex gap-4 items-center justify-center md:justify-end w-full md:w-auto lg:pb-0 pb-2 lg:ml-auto">
        <a href="https://linkedin.com/in/lagriamj" target="_blank">
          <FaLinkedin className="w-6 h-6 cursor-pointer" />
        </a>
        <a href="https://github.com/lagriamj" target="_blank">
          <FaGithub className="w-5 h-5 cursor-pointer" />
        </a>
        <a href="https://www.facebook.com/lagriamj18/" target="_blank">
          <FaFacebook className="w-5 h-5 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/lagriamj/" target="_blank">
          <FaInstagram className="w-5 h-5 cursor-pointer" />
        </a>
        <a href="https://x.com/lagriamj" target="_blank">
          <FaXTwitter className="w-5 h-5 lg:mr-6 cursor-pointer" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
