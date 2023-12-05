import React from "react";
import image from "../assets/4884785.jpg";

const About = () => {
  return (
    <div className=" mb-20 flex flex-col xl:flex-row gap-5 mx-auto ">
      <img className=" md:w-[410px] mx-auto h-[280px] w-[340px]  md:h-[350px] rounded-xl" src={image} alt="" />
      <div className="aboutMe  text-center md:text-start">
        <h1 className="text-blue-400 font-semibold mb-3">ABOUT ME</h1>
        <h2 className="font-bold   text-xl mb-2">A dedicated FullStack Developer based in Gujarat, India 📍</h2>
        <p className={` leading-7  `}>
          As a Junior FullStack Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React ,
          tailwind Css , Bootstrap , nodeJs , ExpressJs and MongoDB . I excel in designing and maintaining responsive
          websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am
          also a team player who thrives in collaborating with cross-functional teams to produce outstanding web
          applications.
        </p>
      </div>
    </div>
  );
};

export default About;
