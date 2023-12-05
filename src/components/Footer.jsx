import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="title text-white gap-3 flex-col-reverse md:flex-row items-center bg-[#2d2e32] flex justify-between py-10 md:px-10">
      <div className="copyRight text-[17px] md:text-xl font-semibold ">
        <h1>Copyright © 2023. All rights are reserved</h1>
      </div>
      <div className="links flex gap-3 text-3xl">
        <a href="https://www.linkedin.com/in/yahya-momin-53794225a">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yahyamomin">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
