import React from "react";
import logo from "../assets/user.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Home = () => {
  return (
    <div className=" my-20  text-center md:text-start gap-2  flex justify-between flex-col-reverse md:flex-row items-center mx-auto">
      <div className="content flex gap-2 flex-col">
        <h1 className="text-[30px] md:text-[40px] xl:text-[50px] font-semibold">Full Stack (MERN) Developer</h1>
        <p className="text-xl">
          Hi, I'm Yahya Momin. A passionate FullStack Developer
          <br /> based in Gujarat, India. 📍
        </p>
        <div className="links mt-2 text-3xl flex gap-5 items-center justify-center md:justify-start">
          <a href="https://github.com/yahyaMomin" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.linkedin.com/in/yahya-momin-53794225a" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="logo rounded-full w-[100%] flex justify-center items-center max-w-[350px] h-[350px] overflow-hidden ">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Home;
